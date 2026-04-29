import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  CURRICULUM,
  calculateLevelProgress,
  calculateOverallProgress,
  getModuleById,
} from "@/lib/curriculum";
import { ProgressRing } from "@/components/progress-ring";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

    const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user!.id)
    .single();

  const { data: progressData } = await supabase
    .from("module_progress")
    .select("*")
    .eq("user_id", user!.id);

  const progress = progressData || [];
  const overall =
    calculateOverallProgress(progress);

  // Find current module
  const currentModuleId =
    profile?.current_module || "101_1";
  const currentModule = getModuleById(
    currentModuleId
  );

  // Find "Up Next" — prefer in_progress,
  // then available, then first non-complete
  const inProgress = progress.find(
    (p) => p.status === "in_progress"
  );
  const available = progress
    .filter(
      (p) => p.status === "available"
    )
    .sort((a, b) =>
      a.module_id.localeCompare(b.module_id)
    )[0];
  const firstIncomplete = progress
    .filter(
      (p) => p.status !== "complete"
    )
    .sort((a, b) =>
      a.module_id.localeCompare(b.module_id)
    )[0];

  const nextModule =
    inProgress ||
    available ||
    firstIncomplete;

  const nextModuleInfo = nextModule
    ? getModuleById(nextModule.module_id)
    : null;

  const allComplete =
    progress.length > 0 &&
    progress.every(
      (p) => p.status === "complete"
    );

  return (
    <div className="px-space-14 py-space-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <div
          className="grid grid-cols-[1.3fr_1fr]
                     gap-space-10 mb-space-10"
        >
          {/* Left — Hero */}
          <div>
            <div className="flex items-center gap-2 mb-space-4">
              <div
                className="w-5 h-px bg-primary"
              />
              <span className="meta text-primary">
                THE GOVCON WAY · v2.0
              </span>
            </div>

            <h1 className="display-xl text-ink mb-space-5">
              Read any federal solicitation{" "}
              <em
                className="text-primary
                           font-serif"
              >
                with confidence.
              </em>
            </h1>

            <p
              className="body-l text-ink-soft
                         max-w-xl mb-space-8"
            >
              A guided path from your first SF
              1449 to full solicitation analysis.
              Four levels, an always-on AI tutor,
              and live PDF teardowns of your own
              opportunities.
            </p>

            <div className="flex gap-space-3">
              {nextModuleInfo && (
                <Link
                  href={`/lesson/${nextModuleInfo.module.id}`}
                  className="bg-primary text-white
                             px-space-6 py-space-3
                             body-m font-medium
                             inline-flex items-center
                             gap-space-2
                             hover:opacity-90
                             transition-opacity"
                >
                  <span>▶</span>
                  Continue learning
                </Link>
              )}
              {overall.percent > 0 &&
                profile?.subscription_status !==
                  "trial" && (
                  <Link
                    href="/upload"
                    className="border border-line
                               px-space-6 py-space-3
                               body-m text-ink
                               inline-flex items-center
                               gap-space-2
                               hover:border-primary
                               transition-colors"
                  >
                    <span>↑</span>
                    Upload a solicitation
                  </Link>
                )}
            </div>
          </div>

          {/* Right — Progress card */}
          <div
            className="bg-card border border-line
                       p-space-6"
          >
            <div className="flex items-start gap-space-4 mb-space-4">
              <ProgressRing
                percent={overall.percent}
                size={48}
                strokeWidth={3}
              />
              <div>
                <p className="meta text-ink-muted">
                  YOUR PROGRESS
                </p>
                <p className="display-m text-ink mt-1">
                  {overall.percent}% complete
                </p>
                <p
                  className="body-s text-ink-muted
                             mt-1"
                >
                  {overall.completed} of{" "}
                  {overall.total} modules
                </p>
              </div>
            </div>

            <div
              className="border-t border-line
                         my-space-5"
            />

            {nextModuleInfo ? (
              <>
                <p className="meta text-ink-muted mb-space-2">
                  UP NEXT · LEVEL{" "}
                  {nextModuleInfo.level.id} ·{" "}
                  MODULE{" "}
                  {nextModuleInfo.level.modules.findIndex(
                    (m) =>
                      m.id ===
                      nextModuleInfo.module.id
                  ) + 1}
                </p>
                <p className="display-s text-ink mb-space-3 not-italic">
                  {nextModuleInfo.module.name}
                </p>
                <p
                  className="body-s text-ink-muted
                             mb-space-5"
                >
                  {nextModuleInfo.level.modules
                    .length}{" "}
                  lessons in this level
                </p>
                <Link
                  href={`/lesson/${nextModuleInfo.module.id}`}
                  className="w-full bg-primary
                             text-white py-space-3
                             body-m font-medium
                             flex items-center
                             justify-center
                             gap-space-2
                             hover:opacity-90
                             transition-opacity"
                >
                  Resume module
                  <span>›</span>
                </Link>
              </>
            ) : allComplete ? (
              <p className="body-m text-ink-soft">
                🎉 All modules complete!
              </p>
            ) : (
              <p className="body-m text-ink-soft">
                Ready to start your journey.
              </p>
            )}
          </div>
        </div>

        {/* Path section */}
        <div className="border-t border-line pt-space-10">
          <h2 className="display-m text-ink mb-space-2 not-italic">
            The path
          </h2>
          <p className="body-m text-ink-soft mb-space-8">
            Four levels. Each unlocks the next.
            Live PDF analysis activates after
            Level 101.
          </p>

          <div className="grid grid-cols-4 gap-space-4">
            {CURRICULUM.map((level) => {
              const lp = calculateLevelProgress(
                level.id,
                progress
              );
              return (
                <div
                  key={level.id}
                  className="bg-card border
                             border-line
                             p-space-6
                             flex flex-col
                             gap-space-4"
                >
                  <div
                    className="flex items-start
                               justify-between"
                  >
                    <div
                      className={`numeric
                                  text-${level.colorToken}`}
                    >
                      {level.id}
                    </div>
                    <ProgressRing
                      percent={lp.percent}
                      size={40}
                      strokeWidth={2}
                      color={level.colorToken}
                    />
                  </div>

                  <div>
                    <p className="meta text-ink-soft">
                      {level.name.toUpperCase()}
                    </p>
                    <p
                      className="display-s text-ink
                                 mt-1 not-italic"
                    >
                      {level.tagline}
                    </p>
                  </div>

                  <div
                    className="border-t border-line
                               pt-space-3 flex
                               justify-between
                               items-center"
                  >
                    <span
                      className="body-s
                                 text-ink-muted"
                    >
                      {level.modules.length}{" "}
                      modules
                    </span>
                    <span
                      className={`body-s tabular-nums
                                  text-${level.colorToken}
                                  font-medium`}
                    >
                      {lp.percent}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}