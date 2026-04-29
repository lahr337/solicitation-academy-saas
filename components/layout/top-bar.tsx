"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  CURRICULUM,
  calculateOverallProgress,
  getModuleById,
} from "@/lib/curriculum";
import type {
  Database,
} from "@/types/database.types";
import { UserMenu } from "./user-menu";

type Profile =
  Database["public"]["Tables"]["profiles"]["Row"];
type Progress =
  Database["public"]["Tables"]["module_progress"]["Row"];

interface TopBarProps {
  profile: Profile | null;
  progress: Progress[];
}

export function TopBar({
  profile,
  progress,
}: TopBarProps) {
  const pathname = usePathname();
  const overall =
    calculateOverallProgress(progress);

  // Build breadcrumb from pathname
  let crumb: JSX.Element | null = null;

  if (pathname === "/dashboard") {
    crumb = (
      <>
        <span className="text-primary">
          Level 101
        </span>
        <span className="text-ink-muted">›</span>
        <span className="text-ink-soft">
          Foundation
        </span>
        <span className="text-ink-muted">›</span>
        <span className="text-ink">Dashboard</span>
      </>
    );
  } else if (
    pathname.startsWith("/lesson/")
  ) {
    const moduleId = pathname.split("/")[2];
    const result = getModuleById(moduleId);
    if (result) {
      crumb = (
        <>
          <span className="text-primary">
            Level {result.level.id}
          </span>
          <span className="text-ink-muted">
            ›
          </span>
          <span className="text-ink-soft">
            {result.level.name}
          </span>
          <span className="text-ink-muted">
            ›
          </span>
          <span className="text-ink">
            {result.module.name}
          </span>
        </>
      );
    }
  } else if (pathname === "/upload") {
    crumb = (
      <>
        <span className="text-ink-soft">
          Live Analysis
        </span>
        <span className="text-ink-muted">›</span>
        <span className="text-ink">Upload</span>
      </>
    );
  } else if (pathname === "/settings") {
    crumb = (
      <>
        <span className="text-ink-soft">
          Account
        </span>
        <span className="text-ink-muted">›</span>
        <span className="text-ink">Settings</span>
      </>
    );
  }

  return (
    <header
      className="h-14 bg-surface border-b
                 border-line flex items-center
                 px-space-6 gap-space-5
                 sticky top-0 z-10"
    >
      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2
                   body-s min-w-0 flex-1"
      >
        {crumb}
      </div>

      {/* Overall progress */}
      <div
        className="flex items-center gap-3
                   flex-shrink-0"
      >
        <span className="body-s text-ink-muted">
          Overall
        </span>
        <span
          className="body-s text-ink font-medium
                     tabular-nums"
        >
          {overall.percent}%
        </span>
      </div>

      {/* Level pills */}
      <div
        className="flex items-center gap-1
                   flex-shrink-0"
      >
        {CURRICULUM.map((level) => {
          const lvlProgress =
            progress.filter(
              (p) =>
                p.module_id.startsWith(
                  level.id + "_"
                ) &&
                p.status === "complete"
            ).length;
          const hasProgress = lvlProgress > 0;

          return (
            <span
              key={level.id}
              className={`
                meta px-space-2 py-1 border
                transition-colors
                ${
                  hasProgress
                    ? `bg-${level.colorToken}
                       border-${level.colorToken}
                       text-white`
                    : `border-line text-ink-muted`
                }
              `}
            >
              {level.id}
            </span>
          );
        })}
      </div>

      {/* User menu */}
      <UserMenu profile={profile} />
    </header>
  );
}