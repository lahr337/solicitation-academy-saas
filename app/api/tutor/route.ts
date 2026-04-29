import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getLessonContent } from "@/lib/lessons";
import { getModuleById } from "@/lib/curriculum";

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
      moduleId,
      conversationHistory = [],
    } = body;

    if (!question || !moduleId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const moduleInfo = getModuleById(moduleId);
    if (!moduleInfo) {
      return NextResponse.json(
        { error: "Invalid module" },
        { status: 400 }
      );
    }

    // Strip HTML from lesson content for AI context
    const lessonContent = getLessonContent(
      moduleId
    )
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 4000);

    const systemPrompt = `You are the Academy Tutor,
an expert tutor on DLA DIBBS contracting
for physical supplies. You teach in a warm,
practical, editorial style — no jargon,
concrete examples, dollar amounts when
possible.

STUDENT CONTEXT:
Current lesson: ${moduleInfo.module.name}
Level: ${moduleInfo.level.id} ${moduleInfo.level.name}

LESSON CONTENT:
${lessonContent}

GUIDELINES:
- Reference the lesson content when relevant
- Keep answers under 200 words unless asked for more
- Use examples with real numbers
- When the student asks "dollar impact" or "common
  mistakes", speak from real contractor experience
- Never reference general AI knowledge — you are
  the Academy Tutor for this specific curriculum
- Format responses in readable paragraphs, not
  walls of text
- If the question is outside DLA DIBBS contracting
  scope, politely redirect back to the lesson`;

    const messages: Anthropic.MessageParam[] = [
      ...conversationHistory,
      {
        role: "user" as const,
        content: question,
      },
    ];

    const response =
      await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      });

    const answerText =
      response.content[0].type === "text"
        ? response.content[0].text
        : "";

    // Save conversation to database
    await supabase
      .from("ai_conversations")
      .insert({
        user_id: user.id,
        context_type: "lesson",
        context_id: moduleId,
        question,
        response: answerText,
        tokens_input: response.usage.input_tokens,
        tokens_output:
          response.usage.output_tokens,
        model: "claude-sonnet-4-5",
      });

    // Track usage
    const costCents = Math.ceil(
      (response.usage.input_tokens * 0.003 +
        response.usage.output_tokens * 0.015) *
        100
    );

    await supabase
      .from("usage_tracking")
      .insert({
        user_id: user.id,
        event_type: "tutor_question",
        tokens_input: response.usage.input_tokens,
        tokens_output:
          response.usage.output_tokens,
        cost_cents: costCents,
        metadata: { module_id: moduleId },
      });

    return NextResponse.json({
      answer: answerText,
      tokens: {
        input: response.usage.input_tokens,
        output: response.usage.output_tokens,
      },
    });
  } catch (error) {
    console.error("Tutor API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process question",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}