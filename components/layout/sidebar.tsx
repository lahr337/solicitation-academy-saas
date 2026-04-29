"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CURRICULUM,
  calculateLevelProgress,
} from "@/lib/curriculum";
import type {
  Database,
} from "@/types/database.types";
import { ThemeToggle } from "./theme-toggle";

type Profile =
  Database["public"]["Tables"]["profiles"]["Row"];
type Progress =
  Database["public"]["Tables"]["module_progress"]["Row"];

interface SidebarProps {
  profile: Profile | null;
  progress: Progress[];
}

export function Sidebar({
  profile,
  progress,
}: SidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<
    Record<string, boolean>
  >({
    "101": true,
    "201": false,
    "301": false,
    "401": false,
  });

  const toggleLevel = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const canUpload =
    progress.find(
      (p) => p.module_id === "101_cap"
    )?.status === "complete";

  return (
    <aside
      className="w-[260px] flex-shrink-0 bg-surface
                 border-r border-line flex flex-col
                 sticky top-0 h-screen overflow-y-auto"
    >
      {/* Brand */}
      <div className="p-space-5 pb-space-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <div
            className="w-8 h-8 rounded-full border-2
                       border-primary flex items-center
                       justify-center flex-shrink-0"
          >
            <span className="text-primary text-sm">
              ★
            </span>
          </div>
          <div className="min-w-0">
            <p
              className="text-ink font-serif
                         text-[19px] leading-tight
                         font-medium"
            >
              Solicitation Academy
            </p>
            <p className="body-s text-ink-muted">
              A journey from beginner to expert
            </p>
          </div>
        </Link>
      </div>

      {/* Upload pill */}
      {canUpload && (
        <div className="px-space-5 py-space-2">
          <Link
            href="/upload"
            className="block bg-primary-soft rounded-md
                       p-space-3 hover:bg-primary
                       hover:text-white transition-colors
                       group"
          >
            <p
              className="meta text-primary
                         group-hover:text-white
                         flex items-center gap-2"
            >
              <span>↑</span>
              UPLOAD SOLICITATION
            </p>
            <p
              className="body-s text-ink-soft
                         group-hover:text-white/90
                         mt-1"
            >
              Analyze a PDF with AI
            </p>
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-space-2">
        {CURRICULUM.map((level) => {
          const levelProgress =
            calculateLevelProgress(
              level.id,
              progress
            );
          const isExpanded =
            expanded[level.id];

          return (
            <div
              key={level.id}
              className="border-t border-line-soft"
            >
              {/* Level header */}
              <button
                onClick={() =>
                  toggleLevel(level.id)
                }
                className="w-full flex items-center
                           justify-between
                           px-space-5 pt-space-4
                           pb-space-2 hover:bg-bg
                           transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`meta px-1.5 py-0.5
                                border
                                text-${level.colorToken}
                                border-${level.colorToken}`}
                  >
                    {level.id}
                  </span>
                  <span
                    className="meta text-ink-soft"
                  >
                    {level.name.toUpperCase()}
                  </span>
                </div>
                <span
                  className="body-s text-ink-muted
                             tabular-nums"
                >
                  {levelProgress.percent}%
                </span>
              </button>

              {/* Progress bar */}
              <div className="px-space-5 pb-space-2">
                <div
                  className="h-0.5 bg-line-soft
                             overflow-hidden"
                >
                  <div
                    className={`h-full bg-${level.colorToken}
                                transition-all duration-500`}
                    style={{
                      width: `${levelProgress.percent}%`,
                    }}
                  />
                </div>
              </div>

              {/* Modules */}
              {isExpanded && (
                <div className="pb-space-2">
                  {level.modules.map((module) => {
                    const mp = progress.find(
                      (p) =>
                        p.module_id ===
                        module.id
                    );
                    const status =
                      mp?.status || "locked";
                    const href = `/lesson/${module.id}`;
                    const isActive =
                      pathname === href;

                    const icon =
                      status === "complete"
                        ? "✓"
                        : status === "locked"
                        ? "🔒"
                        : "○";

                    const textColor =
                      status === "locked"
                        ? "text-ink-muted"
                        : status === "complete"
                        ? "text-ink-soft"
                        : "text-ink";

                    const activeClass = isActive
                      ? "bg-primary-soft font-medium"
                      : "hover:bg-bg";

                    return (
                      <Link
                        key={module.id}
                        href={
                          status === "locked"
                            ? "#"
                            : href
                        }
                        className={`
                          flex items-center gap-3
                          px-space-5 py-space-2
                          pl-[46px]
                          body-s ${textColor}
                          ${activeClass}
                          ${
                            status === "locked"
                              ? "cursor-not-allowed"
                              : ""
                          }
                          relative transition-colors
                        `}
                        onClick={(e) => {
                          if (status === "locked") {
                            e.preventDefault();
                          }
                        }}
                      >
                        {isActive && (
                          <span
                            className="absolute left-0
                                       top-0 bottom-0
                                       w-0.5
                                       bg-primary"
                          />
                        )}
                        <span
                          className="absolute
                                     left-[22px]
                                     text-xs
                                     w-3 text-center"
                        >
                          {icon}
                        </span>
                        <span
                          className={
                            module.isCapstone
                              ? "italic"
                              : ""
                          }
                        >
                          {module.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className="border-t border-line p-space-4
                   space-y-space-1"
      >
        <ThemeToggle />
        <Link
          href="/settings"
          className="w-full flex items-center gap-2
                     px-space-3 py-space-2
                     body-s text-ink-soft
                     hover:bg-bg transition-colors"
        >
          <span>⚙</span>
          Settings
        </Link>
      </div>
    </aside>
  );
}