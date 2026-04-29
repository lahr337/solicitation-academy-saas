import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AnalysisView } from "./analysis-view";
import type { Analysis } from "@/lib/analysis-engine";

interface AnalysisPageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function AnalysisPage({
  params,
}: AnalysisPageProps) {
  const { sessionId } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: session, error } =
    await supabase
      .from("live_sessions")
      .select("*")
      .eq("id", sessionId)
      .eq("user_id", user.id)
      .single();

  if (error || !session) {
    redirect("/upload");
  }

  if (
    session.analysis_status !== "complete" ||
    !session.analysis_json
  ) {
    redirect("/upload");
  }

  const analysis =
    session.analysis_json as unknown as Analysis;

  return (
    <AnalysisView
      sessionId={sessionId}
      filename={session.filename}
      analysis={analysis}
    />
  );
}