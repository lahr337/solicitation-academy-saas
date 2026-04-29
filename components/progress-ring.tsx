interface ProgressRingProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?:
    | "primary"
    | "sage"
    | "navy"
    | "rust";
}

export function ProgressRing({
  percent,
  size = 48,
  strokeWidth = 3,
  color = "primary",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference -
    (percent / 100) * circumference;

  const colorMap = {
    primary: "var(--color-primary)",
    sage: "var(--color-sage)",
    navy: "var(--color-navy)",
    rust: "var(--color-rust)",
  };

  return (
    <svg
      width={size}
      height={size}
      className="flex-shrink-0"
      style={{
        transform: "rotate(-90deg)",
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="var(--color-line-soft)"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={colorMap[color]}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{
          transition:
            "stroke-dashoffset 400ms ease",
        }}
      />
    </svg>
  );
}