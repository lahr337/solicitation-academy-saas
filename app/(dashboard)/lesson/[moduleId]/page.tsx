import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getModuleById,
} from "@/lib/curriculum";
import { getLessonContent } from "@/lib/lessons";
import { LessonView } from "./lesson-view";

interface LessonPageProps {
  params: Promise<{ moduleId: string }>;
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { moduleId } = await params;

  const moduleInfo = getModuleById(moduleId);
  if (!moduleInfo) {
    redirect("/dashboard");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check user has access to this module
  const { data: progress } = await supabase
    .from("module_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("module_id", moduleId)
    .single();

  if (!progress || progress.status === "locked") {
    redirect("/dashboard");
  }

  // Mark as in_progress if it was available
  if (progress.status === "available") {
    await supabase
      .from("module_progress")
      .update({
        status: "in_progress",
        started_at: new Date().toISOString(),
      })
      .eq("user_id", user.id)
      .eq("module_id", moduleId);

    await supabase
      .from("profiles")
      .update({
        current_module: moduleId,
        current_level: moduleInfo.level.id,
      })
      .eq("id", user.id);
  }

  const content = getLessonContent(moduleId);
  const isComplete =
    progress.status === "complete";

  return (
    <LessonView
      moduleId={moduleId}
      moduleName={moduleInfo.module.name}
      levelId={moduleInfo.level.id}
      levelName={moduleInfo.level.name}
      levelColor={moduleInfo.level.colorToken}
      moduleIndex={
        moduleInfo.level.modules.findIndex(
          (m) => m.id === moduleId
        ) + 1
      }
      totalInLevel={
        moduleInfo.level.modules.length
      }
      content={content}
      isComplete={isComplete}
    />
  );
}