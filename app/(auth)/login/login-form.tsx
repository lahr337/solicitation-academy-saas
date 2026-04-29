"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();

    const { error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-space-4"
    >
      <div>
        <label
          htmlFor="email"
          className="meta text-ink-soft block mb-2"
        >
          WORK EMAIL
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          placeholder="jane@yourcompany.com"
          className="w-full px-3 py-3 bg-card
                     border border-line body-m
                     text-ink focus:outline-none
                     focus:border-primary
                     transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="meta text-ink-soft block mb-2"
        >
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
          placeholder="••••••••••"
          className="w-full px-3 py-3 bg-card
                     border border-line body-m
                     text-ink focus:outline-none
                     focus:border-primary
                     transition-colors"
        />
      </div>

      {error && (
        <div
          className="bg-rust-soft border-l-2 border-rust
                     p-3 text-ink-soft body-s"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3
                   body-m font-medium hover:opacity-90
                   transition-opacity
                   disabled:opacity-50
                   disabled:cursor-not-allowed"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <div className="text-right">
        <Link
          href="/reset-password"
          className="body-s text-ink-muted
                     hover:text-primary
                     transition-colors"
        >
          Forgot password?
        </Link>
      </div>
    </form>
  );
}