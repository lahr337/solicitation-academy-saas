"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  initialTheme = "light",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(
    initialTheme
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "theme"
    ) as Theme | null;
    if (saved && saved !== theme) {
      setTheme(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }
  return ctx;
}