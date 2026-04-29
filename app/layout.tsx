import type { Metadata } from "next";
import {
  Newsreader,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solicitation Academy",
  description:
    "Read any federal solicitation with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}