"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const { error: signUpError } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div
        className="bg-primary-soft border-l-2
                   border-primary p-6"
      >
        <p className="display-s text-ink mb-2">
          Check your email.
        </p>
        <p className="body-m text-ink-soft">
          We sent a verification link to{" "}
          <strong>{email}</strong>. Click it to
          activate your account.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-space-4"
    >
      <div>
        <label
          htmlFor="name"
          className="meta text-ink-soft block mb-2"
        >
          FULL NAME
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          placeholder="Jane Smith"
          className="w-full px-3 py-3 bg-card
                     border border-line body-m
                     text-ink focus:outline-none
                     focus:border-primary
                     transition-colors"
        />
      </div>

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
          minLength={8}
          placeholder="At least 8 characters"
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
        {loading
          ? "Creating account..."
          : "Start 4-day free trial"}
      </button>

      <p className="body-s text-ink-muted text-center">
        By creating an account you agree to our Terms
        of Service and Privacy Policy.
      </p>
    </form>
  );
}