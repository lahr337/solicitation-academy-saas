"use client";

import type { Analysis } from "@/lib/analysis-engine";

interface HistoryTabProps {
  analysis: Analysis;
}

export function HistoryTab({
  analysis,
}: HistoryTabProps) {
  const history =
    analysis.procurement_history || [];
  const priceAnalysis =
    analysis.price_analysis || {};

  return (
    <div className="space-y-space-8">
      <div>
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-primary" />
          <span className="meta text-primary">
            PROCUREMENT HISTORY
          </span>
        </div>
        <h2 className="display-l text-ink">
          Past awards and pricing
        </h2>
      </div>

      {/* Price Analysis */}
      <section>
        <h3 className="display-s text-ink not-italic mb-space-4">
          Price analysis
        </h3>
        <div className="grid grid-cols-3 gap-space-4 mb-space-6">
          <PriceStat
            label="Lowest"
            value={priceAnalysis.lowest_price}
          />
          <PriceStat
            label="Highest"
            value={priceAnalysis.highest_price}
          />
          <PriceStat
            label="Average"
            value={priceAnalysis.average_price}
          />
          <PriceStat
            label="Most Recent"
            value={priceAnalysis.most_recent_price}
          />
          <PriceStat
            label="Competitive"
            value={
              priceAnalysis.competitive_suggestion
            }
          />
          <PriceStat
            label="Trend"
            text={priceAnalysis.price_trend}
          />
        </div>
        {priceAnalysis.pricing_notes && (
          <div className="bg-primary-soft p-space-5 border-l-2 border-primary">
            <p className="body-l text-ink-soft">
              {priceAnalysis.pricing_notes}
            </p>
          </div>
        )}
      </section>

      {/* History table */}
      {history.length > 0 && (
        <section>
          <h3 className="display-s text-ink not-italic mb-space-4">
            Award history
          </h3>
          <div className="bg-card border border-line overflow-x-auto">
            <table className="w-full body-s">
              <thead>
                <tr className="bg-surface border-b border-line">
                  <th className="text-left p-space-3 meta text-ink-muted">
                    CAGE
                  </th>
                  <th className="text-left p-space-3 meta text-ink-muted">
                    Contract #
                  </th>
                  <th className="text-right p-space-3 meta text-ink-muted">
                    Qty
                  </th>
                  <th className="text-right p-space-3 meta text-ink-muted">
                    Unit Price
                  </th>
                  <th className="text-right p-space-3 meta text-ink-muted">
                    Total
                  </th>
                  <th className="text-left p-space-3 meta text-ink-muted">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-line-soft last:border-0"
                  >
                    <td className="p-space-3 font-mono text-ink">
                      {row.cage || "—"}
                    </td>
                    <td className="p-space-3 font-mono text-ink-soft">
                      {row.contract_number || "—"}
                    </td>
                    <td className="p-space-3 text-right text-ink">
                      {row.quantity?.toLocaleString() ||
                        "—"}
                    </td>
                    <td className="p-space-3 text-right text-ink">
                      {row.unit_price
                        ? `$${row.unit_price.toFixed(
                            2
                          )}`
                        : "—"}
                    </td>
                    <td className="p-space-3 text-right text-ink">
                      {row.total_award
                        ? `$${row.total_award.toLocaleString()}`
                        : "—"}
                    </td>
                    <td className="p-space-3 text-ink-soft">
                      {row.award_date || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

function PriceStat({
  label,
  value,
  text,
}: {
  label: string;
  value?: number;
  text?: string;
}) {
  return (
    <div className="bg-card border border-line p-space-4">
      <p className="meta text-ink-muted mb-space-2">
        {label}
      </p>
      <p className="display-m text-ink not-italic">
        {text
          ? text
          : value
          ? `$${value.toFixed(2)}`
          : "—"}
      </p>
    </div>
  );
}