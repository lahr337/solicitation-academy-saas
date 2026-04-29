import Link from "next/link";
import { LoginForm } from "./login-form";

export default function LoginPage() {
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
            Read any federal solicitation{" "}
            <em className="text-primary font-serif">
              with confidence.
            </em>
          </h1>

          <p className="body-l text-ink-soft max-w-md mb-8">
            A guided path from your first SF 1449 to
            full solicitation analysis. An always-on AI
            tutor walks with you.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ●
                </span>
              </div>
              <span className="body-s text-ink-soft">
                Four progressive levels — Foundation
                to Mastery
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ↑
                </span>
              </div>
              <span className="body-s text-ink-soft">
                Live PDF teardowns of your own RFPs
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full bg-primary-soft
                           flex items-center justify-center
                           flex-shrink-0"
              >
                <span className="text-primary text-xs">
                  ✦
                </span>
              </div>
              <span className="body-s text-ink-soft">
                Academy Tutor available on every screen
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
              SIGN IN
            </span>
          </div>

          <h2 className="display-m text-ink mb-2">
            Welcome back.
          </h2>
          <p className="body-m text-ink-soft mb-8">
            Pick up where you left off.
          </p>

          <LoginForm />

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-line" />
            <span className="meta text-ink-muted">
              OR
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>

          <button
            type="button"
            className="w-full border border-line py-3
                       body-m text-ink hover:border-primary
                       transition-colors flex items-center
                       justify-center gap-2"
          >
            <span>👤</span>
            Continue with Google
          </button>

          <p className="body-s text-ink-muted text-center mt-6">
            New here?{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}