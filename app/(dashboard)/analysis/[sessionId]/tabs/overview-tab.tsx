"use client";

import type { Analysis } from "@/lib/analysis-engine";

interface OverviewTabProps {
  analysis: Analysis;
}

export function OverviewTab({
  analysis,
}: OverviewTabProps) {
  const overview =
    analysis.solicitation_overview || {};
  const shouldBid =
    analysis.should_you_bid || {};
  const whatIsThis =
    analysis.what_is_this || "";

  return (
    <div className="space-y-space-10">
      {/* What is this */}
      <section>
        <p className="meta text-ink-muted mb-space-3">
          WHAT IS THIS SOLICITATION
        </p>
        <p className="body-l text-ink">
          {whatIsThis}
        </p>
      </section>

      {/* Overview grid */}
      <section>
        <h2 className="display-m text-ink mb-space-5 not-italic">
          Solicitation overview
        </h2>
        <div className="grid grid-cols-2 gap-space-4">
          <OverviewField
            label="Solicitation Number"
            value={overview.number}
          />
          <OverviewField
            label="Type"
            value={overview.type}
          />
          <OverviewField
            label="Issued By"
            value={overview.issued_by}
          />
          <OverviewField
            label="NAICS Code"
            value={overview.naics}
          />
          <OverviewField
            label="Issue Date"
            value={overview.issue_date}
          />
          <OverviewField
            label="Due Date"
            value={
              overview.due_date +
              (overview.due_time
                ? ` ${overview.due_time}`
                : "") +
              (overview.due_timezone
                ? ` ${overview.due_timezone}`
                : "")
            }
          />
          <OverviewField
            label="Set-Aside"
            value={overview.set_aside}
          />
          <OverviewField
            label="Rating"
            value={overview.rating}
          />
          <OverviewField
            label="Buyer"
            value={overview.buyer_name}
          />
          <OverviewField
            label="Buyer Email"
            value={overview.buyer_email}
          />
        </div>
      </section>

      {/* Should you bid */}
      <section>
        <h2 className="display-m text-ink mb-space-5 not-italic">
          Should you bid?
        </h2>
        <div
          className={`
            p-space-6 border-l-2
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
              display-m not-italic mb-space-3
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
          <p className="body-l text-ink-soft mb-space-4">
            {shouldBid.reasoning}
          </p>

          {shouldBid.green_flags &&
            shouldBid.green_flags.length >
              0 && (
              <div className="mb-space-4">
                <p className="meta text-sage mb-space-2">
                  GREEN FLAGS
                </p>
                <ul className="space-y-1">
                  {shouldBid.green_flags.map(
                    (
                      flag: string,
                      i: number
                    ) => (
                      <li
                        key={i}
                        className="body-m text-ink-soft"
                      >
                        ✓ {flag}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

          {shouldBid.red_flags &&
            shouldBid.red_flags.length > 0 && (
              <div>
                <p className="meta text-rust mb-space-2">
                  RED FLAGS
                </p>
                <ul className="space-y-1">
                  {shouldBid.red_flags.map(
                    (
                      flag: string,
                      i: number
                    ) => (
                      <li
                        key={i}
                        className="body-m text-ink-soft"
                      >
                        ⚠ {flag}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
        </div>
      </section>
    </div>
  );
}

function OverviewField({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div>
      <p className="meta text-ink-muted mb-1">
        {label}
      </p>
      <p className="body-m text-ink">
        {value || "—"}
      </p>
    </div>
  );
}