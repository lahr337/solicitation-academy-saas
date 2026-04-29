"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center gap-2
                 px-space-3 py-space-2
                 body-s text-ink-soft
                 hover:bg-bg transition-colors"
    >
      <span>{isDark ? "☀" : "☾"}</span>
      {isDark
        ? "Light theme"
        : "Dark theme"}
    </button>
  );
}