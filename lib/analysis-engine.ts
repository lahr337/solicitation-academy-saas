import Anthropic from "@anthropic-ai/sdk";
import type { Analysis } from "@/types/analysis";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const ANALYSIS_SCHEMA = {
  solicitation_overview: {
    number: "",
    type: "RFQ",
    issued_by: "",
    buyer_name: "",
    buyer_email: "",
    buyer_phone: "",
    issue_date: "",
    due_date: "",
    due_time: "",
    due_timezone: "",
    rating: "",
    naics: "",
    set_aside: "",
    is_small_business_setaside: false,
  },
  what_is_this: "",
  should_you_bid: {
    recommendation: "MAYBE",
    reasoning: "",
    red_flags: [],
    green_flags: [],
  },
  sections: {
    A: {
      found: false,
      raw_summary: "",
      key_values: {},
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    B: {
      found: false,
      raw_summary: "",
      key_values: {
        nsn: "",
        part_number: "",
        cage_code: "",
        description: "",
        quantity: 0,
        unit_of_issue: "EA",
        delivery_days: 0,
        fob_point: "DESTINATION",
        inspection_point: "DESTINATION",
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    C: {
      found: false,
      raw_summary: "",
      key_values: {
        spec_references: [],
        approved_sources: [],
        qpl_required: false,
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    D: {
      found: false,
      raw_summary: "",
      key_values: {
        preservation_material_code: "",
        preservation_material_desc: "",
        cushioning_material_code: "",
        cushioning_material_desc: "",
        cushioning_thickness_code: "",
        unit_container_code: "",
        unit_container_desc: "",
        unit_container_level: "",
        intermediate_container_code: "",
        intermediate_container_level: "",
        intermediate_container_qty: 0,
        pack_code: "",
        pack_code_desc: "",
        marking_code: "",
        marking_code_desc: "",
        special_requirements_code: "",
        method_of_preservation: "",
        method_of_preservation_desc: "",
        qup: 1,
        raw_code_block: "",
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    E: {
      found: false,
      raw_summary: "",
      key_values: {
        inspection_point: "DESTINATION",
        acceptance_point: "DESTINATION",
        first_article_required: false,
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    F: {
      found: false,
      raw_summary: "",
      key_values: {
        fob_point: "DESTINATION",
        delivery_days: 0,
        ship_to_address: "",
        vsm_required: false,
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    G: {
      found: false,
      raw_summary: "",
      key_values: {
        wawf_required: true,
        pay_office_dodaac: "",
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    H: {
      found: false,
      raw_summary: "",
      key_values: {
        hazmat_required: false,
        special_requirements: [],
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    I: {
      found: false,
      raw_summary: "",
      key_values: {
        taa_applies: false,
        berry_amendment: false,
        key_clauses: [],
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
    J: {
      found: false,
      raw_summary: "",
      key_values: {
        attachments: [],
        drawings_referenced: false,
      },
      teaching: "",
      alternatives_present: "",
      action_items: [],
    },
  },
  procurement_history: [],
  price_analysis: {
    lowest_price: 0,
    highest_price: 0,
    average_price: 0,
    most_recent_price: 0,
    most_recent_date: "",
    price_trend: "STABLE",
    competitive_suggestion: 0,
    pricing_notes: "",
  },
  compliance_checklist: [],
  go_no_go_checklist: [],
  beginner_summary: {
    what_they_need: "",
    total_effort: "MEDIUM",
    recommended_next_steps: [],
    estimated_packaging_cost_per_unit: 0,
    key_risk: "",
  },
};

export async function analyzeSolicitation(
  pdfText: string
): Promise<Analysis> {
  // Truncate input to leave room for output
  const truncatedText = pdfText.slice(0, 30000);

  const prompt = buildPrompt(truncatedText);

  console.log(
    `[AI] Sending ${truncatedText.length} chars to Claude`
  );

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 16000,
    system:
      "You are an expert DLA DIBBS contracting " +
      "analyst. Return ONLY valid JSON. " +
      "No markdown. No code blocks. No explanation. " +
      "Start response with { and end with }. " +
      "Keep text fields CONCISE - aim for 1-2 " +
      "sentences per field. Fill every field " +
      "but do not over-elaborate. The response " +
      "must be complete JSON that fits in 16000 tokens.",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const rawText =
    response.content[0].type === "text"
      ? response.content[0].text
      : "";

  console.log(
    `[AI] Received ${rawText.length} chars from Claude`
  );
  console.log(
    `[AI] Stop reason: ${response.stop_reason}`
  );
  console.log(
    `[AI] Tokens: input=${response.usage.input_tokens}, output=${response.usage.output_tokens}`
  );

  if (response.stop_reason === "max_tokens") {
    console.warn(
      "[AI] Response hit max_tokens - may be truncated"
    );
  }

  const parsed = parseAnalysisResponse(rawText);
  return normalizeAnalysis(parsed);
}

function buildPrompt(pdfText: string): string {
  const schemaStr = JSON.stringify(
    ANALYSIS_SCHEMA,
    null,
    2
  );

  return `Analyze this DLA DIBBS solicitation PDF. Return ONLY a JSON object.

CRITICAL CONSTRAINTS:
1. Start with { and end with } - nothing else
2. NO markdown, NO code blocks, NO explanation
3. Keep ALL text fields CONCISE: 1-2 sentences each
4. Keep action_items to max 2 items each
5. Keep arrays to essential items only
6. Total response must fit under 16000 tokens
7. If a field has no data, use empty string "" or empty array []

FORMATTING RULES:
- Numbers must be JSON numbers (no quotes)
- Booleans must be true or false (no quotes)
- fob_point: exactly "ORIGIN" or "DESTINATION"
- recommendation: exactly "YES", "NO", or "MAYBE"
- price_trend: "RISING", "FALLING", or "STABLE"
- Dates: YYYY-MM-DD format

SOLICITATION TEXT:
${pdfText}

Fill this schema concisely. Every text field should be 1-2 sentences max:

${schemaStr}

REMEMBER: Concise responses. Complete JSON only. No extra text.`;
}
function parseAnalysisResponse(
  raw: string
): unknown {
  if (!raw) {
    throw new Error(
      "AI returned empty response"
    );
  }

  const trimmed = raw.trim();

  // Strategy 1: Direct parse
  try {
    return JSON.parse(trimmed);
  } catch {}

  // Strategy 2: Find outermost JSON
  const start = trimmed.indexOf("{");
  if (start >= 0) {
    let depth = 0;
    let end = -1;
    for (
      let i = start;
      i < trimmed.length;
      i++
    ) {
      if (trimmed[i] === "{") depth++;
      else if (trimmed[i] === "}") {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    if (end > start) {
      try {
        return JSON.parse(
          trimmed.slice(start, end)
        );
      } catch {}
    }
  }

  // Strategy 3: Strip markdown
  const match = trimmed.match(
    /```(?:json)?\s*(\{[\s\S]*?\})\s*```/
  );
  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch {}
  }

  // Strategy 4: Recover from truncation
  // Add missing closing braces/brackets
  if (start >= 0) {
    let partial = trimmed.slice(start);

    // Count open vs close braces/brackets
    const openBraces = (
      partial.match(/\{/g) || []
    ).length;
    const closeBraces = (
      partial.match(/\}/g) || []
    ).length;
    const openBrackets = (
      partial.match(/\[/g) || []
    ).length;
    const closeBrackets = (
      partial.match(/\]/g) || []
    ).length;

    // Remove trailing incomplete string
    // Find last complete field
    const lastComma = partial.lastIndexOf(",");
    const lastQuote = partial.lastIndexOf('"');

    // If we're mid-string, truncate to last
    // complete field
    if (lastQuote > lastComma) {
      partial = partial.slice(0, lastComma);
    }

    // Remove trailing comma
    partial = partial.replace(/,\s*$/, "");

    // Close missing brackets
    const missingBrackets =
      openBrackets - closeBrackets;
    for (let i = 0; i < missingBrackets; i++) {
      partial += "]";
    }

    // Close missing braces
    const missingBraces =
      openBraces - closeBraces;
    for (let i = 0; i < missingBraces; i++) {
      partial += "}";
    }

    try {
      const recovered = JSON.parse(partial);
      console.log(
        "[AI] Recovered truncated JSON"
      );
      return recovered;
    } catch (err) {
      console.error(
        "[AI] Recovery failed:",
        err
      );
    }
  }

  throw new Error(
    `Could not parse AI response as JSON. ` +
      `Response length: ${trimmed.length}, ` +
      `First 300 chars: ${trimmed.slice(
        0,
        300
      )}... ` +
      `Last 300 chars: ...${trimmed.slice(
        -300
      )}`
  );
}

function normalizeAnalysis(
  data: unknown
): Analysis {
  const obj = (data as Record<string, unknown>) || {};

  // Deep merge with schema to ensure all fields exist
  return deepMerge(
    ANALYSIS_SCHEMA,
    obj
  ) as unknown as Analysis;
}

function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override: Record<string, unknown>
): T {
  const result = { ...base } as Record<
    string,
    unknown
  >;

  for (const key in override) {
    const overrideVal = override[key];
    const baseVal = result[key];

    if (
      overrideVal &&
      typeof overrideVal === "object" &&
      !Array.isArray(overrideVal) &&
      baseVal &&
      typeof baseVal === "object" &&
      !Array.isArray(baseVal)
    ) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>
      );
    } else {
      result[key] = overrideVal;
    }
  }

  return result as T;
}