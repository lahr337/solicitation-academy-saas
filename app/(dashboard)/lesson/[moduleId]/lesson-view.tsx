"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import {
  ALL_MODULES,
  getModuleById,
} from "@/lib/curriculum";
import { TutorPanel } from "./tutor-panel";
import { LessonContent } from "./lesson-content";

interface LessonViewProps {
  moduleId: string;
  moduleName: string;
  levelId: string;
  levelName: string;
  levelColor:
    | "primary"
    | "sage"
    | "navy"
    | "rust";
  moduleIndex: number;
  totalInLevel: number;
  content: string;
  isComplete: boolean;
}

export function LessonView({
  moduleId,
  moduleName,
  levelId,
  levelName,
  levelColor,
  moduleIndex,
  totalInLevel,
  content,
  isComplete: initialComplete,
}: LessonViewProps) {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState(
    initialComplete
  );
  const [marking, setMarking] = useState(false);

  // Get previous and next modules
  const currentIndex = ALL_MODULES.indexOf(
    moduleId
  );
  const prevModuleId =
    currentIndex > 0
      ? ALL_MODULES[currentIndex - 1]
      : null;
  const nextModuleId =
    currentIndex < ALL_MODULES.length - 1
      ? ALL_MODULES[currentIndex + 1]
      : null;

  const prevModuleInfo = prevModuleId
    ? getModuleById(prevModuleId)
    : null;
  const nextModuleInfo = nextModuleId
    ? getModuleById(nextModuleId)
    : null;

  const handleMarkComplete = async () => {
    if (marking) return;
    setMarking(true);

    const supabase = createClient();

    if (!isComplete) {
      // Mark complete
      await supabase
        .from("module_progress")
        .update({
          status: "complete",
          completed_at:
            new Date().toISOString(),
        })
        .eq("module_id", moduleId);

      // Unlock next module
      if (nextModuleId) {
        await supabase
          .from("module_progress")
          .update({
            status: "available",
          })
          .eq("module_id", nextModuleId)
          .eq("status", "locked");
      }

      setIsComplete(true);
    } else {
      // Undo completion
      await supabase
        .from("module_progress")
        .update({
          status: "in_progress",
          completed_at: null,
        })
        .eq("module_id", moduleId);

      setIsComplete(false);
    }

    router.refresh();
    setMarking(false);
  };

  return (
    <div
      className="grid grid-cols-[1fr_360px]
                 min-h-[calc(100vh-56px)]"
    >
      {/* Article column */}
      <article
        className="overflow-y-auto
                   border-r border-line"
      >
        <div
          className="px-space-16 py-space-12
                     max-w-[768px] mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-space-6">
            <div
              className="w-5 h-px bg-primary"
            />
            <span className="meta text-primary">
              LEVEL {levelId} · MODULE{" "}
              {moduleIndex} OF{" "}
              {totalInLevel}
            </span>
          </div>

          <LessonContent html={content} />

          {/* Footer navigation */}
          <div
            className="border-t border-line
                       mt-space-16 pt-space-8"
          >
            <div
              className="flex items-center
                         justify-between
                         gap-space-4 mb-space-6"
            >
              <button
                onClick={handleMarkComplete}
                disabled={marking}
                className={`
                  px-space-6 py-space-3
                  body-m font-medium
                  transition-all
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  ${
                    isComplete
                      ? `bg-sage text-white
                         hover:bg-sage/90`
                      : `bg-primary text-white
                         hover:opacity-90`
                  }
                `}
              >
                {marking
                  ? "..."
                  : isComplete
                  ? "✓ Completed — click to undo"
                  : "Mark complete"}
              </button>

              {isComplete && nextModuleInfo && (
                <Link
                  href={`/lesson/${nextModuleInfo.module.id}`}
                  className="border border-line
                             px-space-6 py-space-3
                             body-m text-ink
                             hover:border-primary
                             transition-colors
                             flex items-center
                             gap-space-2"
                >
                  Next lesson
                  <span>→</span>
                </Link>
              )}
            </div>

            <div
              className="flex items-center
                         justify-between
                         body-s text-ink-muted"
            >
              {prevModuleInfo ? (
                <Link
                  href={`/lesson/${prevModuleInfo.module.id}`}
                  className="hover:text-primary
                             transition-colors
                             flex items-center gap-2"
                >
                  <span>←</span>
                  <span className="truncate max-w-xs">
                    {prevModuleInfo.module.name}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextModuleInfo && !isComplete && (
                <span
                  className="text-ink-muted
                             flex items-center gap-2"
                >
                  Complete this lesson to unlock
                  <span>→</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Tutor rail */}
      <TutorPanel
        moduleId={moduleId}
        moduleName={moduleName}
        levelName={levelName}
      />
    </div>
  );
}