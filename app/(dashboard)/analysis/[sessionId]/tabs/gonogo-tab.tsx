"use client";

import type { Analysis } from "@/lib/analysis-engine";

interface GoNoGoTabProps {
  analysis: Analysis;
}

export function GoNoGoTab({
  analysis,
}: GoNoGoTabProps) {
  const shouldBid =
    analysis.should_you_bid || {};
  const checklist =
    analysis.go_no_go_checklist || [];
  const summary =
    analysis.beginner_summary || {};

  return (
    <div className="space-y-space-8">
      <div>
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-primary" />
          <span className="meta text-primary">
            GO / NO-GO DECISION
          </span>
        </div>
        <h2 className="display-l text-ink">
          Should you bid on this?
        </h2>
      </div>

      {/* Big recommendation */}
      <div
        className={`
          p-space-8 border-l-2
          ${
            shouldBid.recommendation === "YES"
              ? "bg-sage-soft border-sage"
              : shouldBid.recommendation === "NO"
              ? "bg-rust-soft border-rust"
              : "bg-primary-soft border-primary"
          }
        `}
      >
        <p
          className={`
            display-xl not-italic mb-space-4
            ${
              shouldBid.recommendation === "YES"
                ? "text-sage"
                : shouldBid.recommendation === "NO"
                ? "text-rust"
                : "text-primary"
            }
          `}
        >
          {shouldBid.recommendation || "MAYBE"}
        </p>
        <p className="body-l text-ink-soft">
          {shouldBid.reasoning}
        </p>
      </div>

      {/* Decision checklist */}
      {checklist.length > 0 && (
        <section>
          <h3 className="display-m text-ink not-italic mb-space-5">
            Decision checklist
          </h3>
          <div className="space-y-space-4">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-line p-space-5"
              >
                <div className="flex items-start gap-space-3 mb-space-2">
                  <span
                    className={`
                      meta px-space-2 py-1
                      ${
                        item.importance ===
                        "CRITICAL"
                          ? "bg-rust text-white"
                          : item.importance ===
                            "HIGH"
                          ? "bg-primary text-white"
                          : "bg-line text-ink-soft"
                      }
                    `}
                  >
                    {item.importance}
                  </span>
                  <p className="body-l text-ink flex-1">
                    {item.question}
                  </p>
                </div>
                <p className="body-m text-ink-soft pl-[80px]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Beginner summary */}
      {summary.what_they_need && (
        <section>
          <h3 className="display-m text-ink not-italic mb-space-5">
            What you'll need
          </h3>
          <div className="bg-card border border-line p-space-6 space-y-space-4">
            <p className="body-l text-ink-soft">
              {summary.what_they_need}
            </p>

            {summary.key_risk && (
              <div>
                <p className="meta text-rust mb-space-2">
                  KEY RISK
                </p>
                <p className="body-m text-ink-soft">
                  {summary.key_risk}
                </p>
              </div>
            )}

            {summary.recommended_next_steps &&
              summary.recommended_next_steps
                .length > 0 && (
                <div>
                  <p className="meta text-primary mb-space-2">
                    NEXT STEPS
                  </p>
                  <ul className="space-y-1">
                    {summary.recommended_next_steps.map(
                      (
                        step: string,
                        i: number
                      ) => (
                        <li
                          key={i}
                          className="body-m text-ink-soft"
                        >
                          {i + 1}. {step}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        </section>
      )}
    </div>
  );
}