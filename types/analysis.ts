export interface SolicitationOverview {
  number: string;
  type: string;
  issued_by: string;
  buyer_name: string;
  buyer_email: string;
  buyer_phone: string;
  issue_date: string;
  due_date: string;
  due_time: string;
  due_timezone: string;
  rating: string;
  naics: string;
  set_aside: string;
  is_small_business_setaside: boolean;
}

export interface ShouldYouBid {
  recommendation: "YES" | "NO" | "MAYBE";
  reasoning: string;
  red_flags: string[];
  green_flags: string[];
}

export interface SectionData {
  found: boolean;
  raw_summary: string;
  key_values: Record<string, unknown>;
  teaching: string;
  alternatives_present: string;
  action_items: string[];
}

export interface ProcurementHistoryItem {
  cage: string;
  contract_number: string;
  quantity: number;
  unit_price: number;
  award_date: string;
  surplus: boolean;
  total_award: number;
}

export interface PriceAnalysis {
  lowest_price: number;
  highest_price: number;
  average_price: number;
  most_recent_price: number;
  most_recent_date: string;
  price_trend: "RISING" | "FALLING" | "STABLE";
  competitive_suggestion: number;
  pricing_notes: string;
}

export interface ComplianceItem {
  item: string;
  required: boolean;
  explanation: string;
}

export interface GoNoGoItem {
  question: string;
  answer: string;
  importance: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface BeginnerSummary {
  what_they_need: string;
  total_effort: "LOW" | "MEDIUM" | "HIGH";
  recommended_next_steps: string[];
  estimated_packaging_cost_per_unit: number;
  key_risk: string;
}

export interface Analysis {
  solicitation_overview: SolicitationOverview;
  what_is_this: string;
  should_you_bid: ShouldYouBid;
  sections: {
    A: SectionData;
    B: SectionData;
    C: SectionData;
    D: SectionData;
    E: SectionData;
    F: SectionData;
    G: SectionData;
    H: SectionData;
    I: SectionData;
    J: SectionData;
  };
  procurement_history: ProcurementHistoryItem[];
  price_analysis: PriceAnalysis;
  compliance_checklist: ComplianceItem[];
  go_no_go_checklist: GoNoGoItem[];
  beginner_summary: BeginnerSummary;
}