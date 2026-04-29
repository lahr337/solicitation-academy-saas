import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

    const body = await request.json();
    const {
      question,
      sessionId,
      currentTab,
    } = body;

    const { data: session } = await supabase
      .from("live_sessions")
      .select("*")
      .eq("id", sessionId)
      .eq("user_id", user.id)
      .single();

    if (!session) {
      return NextResponse.json(
        { error: "Session not found" },
        { status: 404 }
      );
    }

    const analysisContext = JSON.stringify(
      session.analysis_json,
      null,
      2
    ).slice(0, 8000);

    const systemPrompt = `You are the Analysis Tutor
for a specific DLA DIBBS solicitation that has
been analyzed. The student is looking at the
"${currentTab}" tab of the analysis.

ANALYSIS DATA:
${analysisContext}

GUIDELINES:
- Reference specific values from the analysis
- Keep answers under 200 words
- Be practical and actionable
- Use dollar amounts when relevant
- Don't repeat what's already visible on screen
- Give contractor-level advice`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer =
      response.content[0].type === "text"
        ? response.content[0].text
        : "";

    await supabase
      .from("ai_conversations")
      .insert({
        user_id: user.id,
        context_type: "live_session",
        context_id: sessionId,
        question,
        response: answer,
        tokens_input:
          response.usage.input_tokens,
        tokens_output:
          response.usage.output_tokens,
        model: "claude-sonnet-4-5",
      });

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Analysis tutor error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}