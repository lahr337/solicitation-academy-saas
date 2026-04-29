"use client";

import type { Analysis } from "@/lib/analysis-engine";

interface ChecklistTabProps {
  analysis: Analysis;
}

export function ChecklistTab({
  analysis,
}: ChecklistTabProps) {
  const checklist =
    analysis.compliance_checklist || [];

  return (
    <div className="space-y-space-8">
      <div>
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-primary" />
          <span className="meta text-primary">
            COMPLIANCE CHECKLIST
          </span>
        </div>
        <h2 className="display-l text-ink">
          Registrations and compliance
        </h2>
      </div>

      <div className="space-y-space-4">
        {checklist.map((item, i) => (
          <div
            key={i}
            className={`
              p-space-5 border-l-2
              ${
                item.required
                  ? "bg-primary-soft border-primary"
                  : "bg-card border-line"
              }
            `}
          >
            <div className="flex items-start gap-space-3">
              <div
                className={`
                  w-6 h-6 rounded-full flex-shrink-0
                  flex items-center justify-center
                  ${
                    item.required
                      ? "bg-primary text-white"
                      : "bg-line text-ink-muted"
                  }
                `}
              >
                {item.required ? "!" : "·"}
              </div>
              <div>
                <p className="display-s text-ink not-italic mb-space-1">
                  {item.item}
                </p>
                <p className="body-m text-ink-soft">
                  {item.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}