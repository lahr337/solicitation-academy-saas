import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { extractPdfText } from "@/lib/pdf-extract";
import {
  analyzeSolicitation,
} from "@/lib/analysis-engine";

export const maxDuration = 120; // 2 minutes

export async function POST(
  request: Request
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check user has access (completed 101_cap)
    const { data: capstone } = await supabase
      .from("module_progress")
      .select("status")
      .eq("user_id", user.id)
      .eq("module_id", "101_cap")
      .single();

    if (capstone?.status !== "complete") {
      return NextResponse.json(
        {
          error:
            "Complete the 101 Capstone to unlock uploads",
        },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        {
          error: "File must be a PDF",
        },
        { status: 400 }
      );
    }

    if (file.size > 40 * 1024 * 1024) {
      return NextResponse.json(
        {
          error: "File size exceeds 40MB limit",
        },
        { status: 400 }
      );
    }

    // Read file as buffer
    const arrayBuffer =
      await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const fileName = `${user.id}/${Date.now()}-${file.name}`;

    const { error: uploadError } =
      await supabase.storage
        .from("solicitations")
        .upload(fileName, buffer, {
          contentType: "application/pdf",
        });

    if (uploadError) {
      console.error(
        "Upload error:",
        uploadError
      );
      return NextResponse.json(
        {
          error: "Failed to upload file",
        },
        { status: 500 }
      );
    }

    // Create initial session record
    const { data: session, error: sessionError } =
      await supabase
        .from("live_sessions")
        .insert({
          user_id: user.id,
          filename: file.name,
          file_size_bytes: file.size,
          storage_path: fileName,
          analysis_status: "processing",
        })
        .select()
        .single();

    if (sessionError || !session) {
      console.error(
        "Session error:",
        sessionError
      );
      return NextResponse.json(
        {
          error: "Failed to create session",
        },
        { status: 500 }
      );
    }

    // Extract PDF text
    let pdfText: string;
    try {
      pdfText = await extractPdfText(buffer);

      if (!pdfText || pdfText.trim().length < 100) {
        throw new Error(
          "PDF contains no readable text"
        );
      }
    } catch (error) {
      await supabase
        .from("live_sessions")
        .update({
          analysis_status: "failed",
          error_message:
            error instanceof Error
              ? error.message
              : "PDF extraction failed",
        })
        .eq("id", session.id);

      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "PDF extraction failed",
          sessionId: session.id,
        },
        { status: 500 }
      );
    }

    // Save extracted text
    await supabase
      .from("live_sessions")
      .update({
        extracted_text: pdfText.slice(
          0,
          50000
        ),
      })
      .eq("id", session.id);

    // Run analysis
    let analysis;
    try {
      console.log(
        `[ANALYSIS] Starting for session ${session.id}, text length: ${pdfText.length}`
      );
      analysis = await analyzeSolicitation(
        pdfText
      );
      console.log(
        `[ANALYSIS] Completed for session ${session.id}`
      );
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? `${error.message}\n${error.stack}`
          : String(error);

      console.error(
        `[ANALYSIS] FAILED for session ${session.id}:`,
        errorMsg
      );

      await supabase
        .from("live_sessions")
        .update({
          analysis_status: "failed",
          error_message: errorMsg.slice(0, 500),
        })
        .eq("id", session.id);

      return NextResponse.json(
        {
          error:
            "AI analysis failed: " +
            (error instanceof Error
              ? error.message
              : "Unknown error"),
          sessionId: session.id,
        },
        { status: 500 }
      );
    }

    // Save analysis results
    const solNumber =
      analysis.solicitation_overview.number ||
      "Unknown";

    await supabase
      .from("live_sessions")
      .update({
        analysis_json: analysis,
        solicitation_number: solNumber,
        analysis_status: "complete",
        analyzed_at: new Date().toISOString(),
      })
      .eq("id", session.id);

    // Track usage
    await supabase
      .from("usage_tracking")
      .insert({
        user_id: user.id,
        event_type: "pdf_analysis",
        cost_cents: 25,
        metadata: {
          session_id: session.id,
          filename: file.name,
        },
      });

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      solicitationNumber: solNumber,
    });
  } catch (error) {
    console.error(
      "Upload API error:",
      error
    );
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Upload failed",
      },
      { status: 500 }
    );
  }
}