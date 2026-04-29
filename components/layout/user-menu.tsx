"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type {
  Database,
} from "@/types/database.types";

type Profile =
  Database["public"]["Tables"]["profiles"]["Row"];

interface UserMenuProps {
  profile: Profile | null;
}

export function UserMenu({
  profile,
}: UserMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener(
      "mousedown",
      handler
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const initial = profile?.full_name
    ? profile.full_name.charAt(0).toUpperCase()
    : profile?.email?.charAt(0).toUpperCase() ||
      "?";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-[34px] h-[34px]
                   rounded-full bg-primary-soft
                   flex items-center justify-center
                   body-s text-primary font-medium
                   hover:bg-primary hover:text-white
                   transition-colors"
        aria-label="User menu"
      >
        {initial}
      </button>

      {open && (
        <div
          className="absolute right-0 top-full
                     mt-1 w-64 bg-card border
                     border-line shadow-sm
                     py-space-2"
        >
          <div className="px-space-4 py-space-2">
            <p
              className="body-m text-ink
                         font-medium truncate"
            >
              {profile?.full_name ||
                profile?.email}
            </p>
            <p
              className="body-s text-ink-muted
                         truncate"
            >
              {profile?.email}
            </p>
          </div>

          <div className="border-t border-line my-space-1" />

          {profile?.subscription_status ===
            "trial" && (
            <div className="px-space-4 py-space-2">
              <div
                className="bg-primary-soft
                           p-space-3
                           border-l-2
                           border-primary"
              >
                <p className="meta text-primary">
                  TRIAL ACTIVE
                </p>
                <p
                  className="body-s text-ink-soft
                             mt-1"
                >
                  {profile.trial_ends_at
                    ? formatDaysLeft(
                        profile.trial_ends_at
                      )
                    : "4 days remaining"}
                </p>
              </div>
            </div>
          )}

          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="block px-space-4 py-space-2
                       body-s text-ink-soft
                       hover:bg-bg
                       transition-colors"
          >
            Settings
          </Link>

          {profile?.is_admin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="block px-space-4 py-space-2
                         body-s text-ink-soft
                         hover:bg-bg
                         transition-colors"
            >
              Admin dashboard
            </Link>
          )}

          <div className="border-t border-line my-space-1" />

          <button
            onClick={handleLogout}
            className="w-full text-left
                       px-space-4 py-space-2
                       body-s text-ink-soft
                       hover:bg-bg
                       transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

function formatDaysLeft(
  isoDate: string
): string {
  const now = Date.now();
  const trial = new Date(isoDate).getTime();
  const diff = trial - now;

  if (diff <= 0) return "Trial expired";

  const days = Math.ceil(
    diff / (1000 * 60 * 60 * 24)
  );
  return `${days} day${days === 1 ? "" : "s"} remaining`;
}