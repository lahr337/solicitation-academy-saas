"use client";

import type { Analysis } from "@/lib/analysis-engine";

interface SectionTabProps {
  sectionId:
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J";
  analysis: Analysis;
}

const SECTION_NAMES = {
  A: "Solicitation and Contract Form",
  B: "Supplies and Services",
  C: "Specifications",
  D: "Packaging and Marking",
  E: "Inspection and Acceptance",
  F: "Deliveries",
  G: "Contract Administration",
  H: "Special Requirements",
  I: "Contract Clauses",
  J: "Attachments",
};

export function SectionTab({
  sectionId,
  analysis,
}: SectionTabProps) {
  const section =
    analysis.sections?.[sectionId] || {};

  if (!section.found) {
    return (
      <div>
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-ink-muted" />
          <span className="meta text-ink-muted">
            SECTION {sectionId}
          </span>
        </div>
        <h2 className="display-l text-ink mb-space-4">
          {SECTION_NAMES[sectionId]}
        </h2>
        <div className="bg-line-soft p-space-6 border-l-2 border-ink-muted">
          <p className="body-m text-ink-soft">
            Not found in this solicitation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-space-8">
      <div>
        <div className="flex items-center gap-2 mb-space-3">
          <div className="w-5 h-px bg-primary" />
          <span className="meta text-primary">
            SECTION {sectionId}
          </span>
        </div>
        <h2 className="display-l text-ink">
          {SECTION_NAMES[sectionId]}
        </h2>
      </div>

      {section.raw_summary && (
        <section>
          <h3 className="display-s text-ink not-italic mb-space-3">
            What this section says
          </h3>
          <p className="body-l text-ink-soft">
            {section.raw_summary}
          </p>
        </section>
      )}

      {section.key_values &&
        Object.keys(section.key_values).length >
          0 && (
          <section>
            <h3 className="display-s text-ink not-italic mb-space-3">
              Key values extracted
            </h3>
            <div className="bg-card border border-line p-space-6 space-y-space-3">
              {Object.entries(
                section.key_values
              )
                .filter(
                  ([, v]) =>
                    v !== null &&
                    v !== undefined &&
                    v !== "" &&
                    v !== 0 &&
                    v !== false
                )
                .map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-[200px_1fr] gap-space-4"
                  >
                    <p className="meta text-ink-muted">
                      {key
                        .replace(/_/g, " ")
                        .toUpperCase()}
                    </p>
                    <p className="body-m text-ink">
                      {typeof value ===
                        "boolean"
                        ? value
                          ? "Yes"
                          : "No"
                        : Array.isArray(value)
                        ? value.join(", ")
                        : String(value)}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        )}

      {section.teaching && (
        <section>
          <h3 className="display-s text-ink not-italic mb-space-3">
            What this means for you
          </h3>
          <div className="bg-primary-soft p-space-6 border-l-2 border-primary">
            <p className="body-l text-ink-soft">
              {section.teaching}
            </p>
          </div>
        </section>
      )}

      {section.alternatives_present && (
        <section>
          <h3 className="display-s text-ink not-italic mb-space-3">
            What else could appear here
          </h3>
          <p className="body-l text-ink-soft">
            {section.alternatives_present}
          </p>
        </section>
      )}

      {section.action_items &&
        section.action_items.length > 0 && (
          <section>
            <h3 className="display-s text-ink not-italic mb-space-3">
              What to do
            </h3>
            <ul className="space-y-space-2">
              {section.action_items.map(
                (item: string, i: number) => (
                  <li
                    key={i}
                    className="body-l text-ink-soft flex gap-space-3"
                  >
                    <span className="text-primary flex-shrink-0">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </section>
        )}
    </div>
  );
}