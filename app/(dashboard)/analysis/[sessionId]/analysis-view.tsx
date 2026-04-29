"use client";

import { useState } from "react";
import type { Analysis } from "@/lib/analysis-engine";
import { OverviewTab } from "./tabs/overview-tab";
import { SectionTab } from "./tabs/section-tab";
import { HistoryTab } from "./tabs/history-tab";
import { ChecklistTab } from "./tabs/checklist-tab";
import { GoNoGoTab } from "./tabs/gonogo-tab";
import { AnalysisTutor } from "./analysis-tutor";

type TabId =
  | "overview"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "history"
  | "checklist"
  | "gonogo";

interface AnalysisViewProps {
  sessionId: string;
  filename: string;
  analysis: Analysis;
}

const TABS: {
  id: TabId;
  label: string;
  fullLabel: string;
}[] = [
  {
    id: "overview",
    label: "Overview",
    fullLabel: "Overview",
  },
  {
    id: "A",
    label: "A · Cover",
    fullLabel: "A — Cover Page",
  },
  {
    id: "B",
    label: "B · Items",
    fullLabel: "B — Items & Price",
  },
  {
    id: "C",
    label: "C · Specs",
    fullLabel: "C — Specifications",
  },
  {
    id: "D",
    label: "D · Packaging",
    fullLabel: "D — Packaging",
  },
  {
    id: "E",
    label: "E · Inspection",
    fullLabel: "E — Inspection",
  },
  {
    id: "F",
    label: "F · Delivery",
    fullLabel: "F — Delivery",
  },
  {
    id: "G",
    label: "G · Admin",
    fullLabel: "G — Administration",
  },
  {
    id: "H",
    label: "H · Special",
    fullLabel: "H — Special Reqs",
  },
  {
    id: "I",
    label: "I · Clauses",
    fullLabel: "I — Clauses",
  },
  {
    id: "J",
    label: "J · Attachments",
    fullLabel: "J — Attachments",
  },
  {
    id: "history",
    label: "History",
    fullLabel: "Price History",
  },
  {
    id: "checklist",
    label: "Checklist",
    fullLabel: "Compliance",
  },
  {
    id: "gonogo",
    label: "Go/No-Go",
    fullLabel: "Go/No-Go Decision",
  },
];

export function AnalysisView({
  sessionId,
  filename,
  analysis,
}: AnalysisViewProps) {
  const [activeTab, setActiveTab] =
    useState<TabId>("overview");

  const overview =
    analysis.solicitation_overview || {};
  const solNumber =
    overview.number || filename;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="border-b border-line
                   bg-surface px-space-10
                   pt-space-6 pb-space-4"
      >
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-primary" />
          <span className="meta text-primary">
            LIVE ANALYSIS
          </span>
        </div>

        <div className="flex items-start justify-between gap-space-8 mb-space-4">
          <div>
            <h1 className="display-l text-ink mb-space-2">
              {solNumber}
            </h1>
            <div className="flex items-center gap-space-3 body-s text-ink-muted">
              <span>{filename}</span>
              {overview.type && (
                <>
                  <span>·</span>
                  <span>{overview.type}</span>
                </>
              )}
              {overview.issued_by && (
                <>
                  <span>·</span>
                  <span>
                    {overview.issued_by}
                  </span>
                </>
              )}
            </div>
          </div>

          {overview.due_date && (
            <div
              className="text-right
                         flex-shrink-0"
            >
              <p className="meta text-ink-muted">
                DUE DATE
              </p>
              <p className="display-s text-ink not-italic">
                {overview.due_date}
              </p>
            </div>
          )}
        </div>

        {/* Tab navigation */}
        <div
          className="flex gap-1 overflow-x-auto
                     -mb-[1px]"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`
                px-space-4 py-space-3 body-s
                whitespace-nowrap
                border-b-2 transition-colors
                ${
                  activeTab === tab.id
                    ? "border-primary text-primary font-medium"
                    : "border-transparent text-ink-soft hover:text-ink"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content + Tutor */}
      <div
        className="flex-1 grid
                   grid-cols-[1fr_360px]"
      >
        <div className="overflow-y-auto border-r border-line">
          <div className="p-space-10 max-w-4xl">
            {activeTab === "overview" && (
              <OverviewTab
                analysis={analysis}
              />
            )}
            {[
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
            ].includes(activeTab) && (
              <SectionTab
                sectionId={
                  activeTab as
                    | "A"
                    | "B"
                    | "C"
                    | "D"
                    | "E"
                    | "F"
                    | "G"
                    | "H"
                    | "I"
                    | "J"
                }
                analysis={analysis}
              />
            )}
            {activeTab === "history" && (
              <HistoryTab
                analysis={analysis}
              />
            )}
            {activeTab === "checklist" && (
              <ChecklistTab
                analysis={analysis}
              />
            )}
            {activeTab === "gonogo" && (
              <GoNoGoTab
                analysis={analysis}
              />
            )}
          </div>
        </div>

        <AnalysisTutor
          sessionId={sessionId}
          solicitationNumber={solNumber}
          currentTab={activeTab}
          analysis={analysis}
        />
      </div>
    </div>
  );
}