"use client";

import { useEffect, useRef } from "react";

interface LessonContentProps {
  html: string;
}

export function LessonContent({
  html,
}: LessonContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when content changes
    window.scrollTo(0, 0);
  }, [html]);

  return (
    <div
      ref={ref}
      className="lesson-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}