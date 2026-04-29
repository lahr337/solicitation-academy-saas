import Link from "next/link";
import { SignupForm } from "./signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left column — editorial */}
      <div className="bg-bg p-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div
              className="w-8 h-8 rounded-full border-2
                         border-primary flex items-center
                         justify-center"
            >
              <span className="text-primary text-sm">
                ★
              </span>
            </div>
            <span className="meta text-primary">
              SOLICITATION ACADEMY
            </span>
          </div>

          <h1 className="display-xl text-ink mb-6">
            Start your journey{" "}
            <em className="text-primary font-serif">
              with confidence.
            </em>
          </h1>

          <p className="body-l text-ink-soft max-w-md mb-8">
            Four days free. Full access to every
            lesson, every PDF analysis, and the
            Academy Tutor. No credit card required
            to start.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ✓
                </span>
              </div>
              <span className="body-s text-ink-soft">
                30 lessons · 4 progressive levels
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ✓
                </span>
              </div>
              <span className="body-s text-ink-soft">
                Unlimited AI-powered solicitation
                analysis
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ✓
                </span>
              </div>
              <span className="body-s text-ink-soft">
                Cancel anytime during trial
              </span>
            </li>
          </ul>
        </div>

        <p className="meta text-ink-muted">
          — THE GOVCON WAY
        </p>
      </div>

      {/* Right column — form */}
      <div className="bg-surface p-16 flex items-center border-l border-line">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-5 h-px bg-primary" />
            <span className="meta text-primary">
              CREATE ACCOUNT
            </span>
          </div>

          <h2 className="display-m text-ink mb-2">
            Get started.
          </h2>
          <p className="body-m text-ink-soft mb-8">
            Four days free. No credit card needed.
          </p>

          <SignupForm />

          <p className="body-s text-ink-muted text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}