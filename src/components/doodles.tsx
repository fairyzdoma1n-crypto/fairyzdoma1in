// Hand-drawn-style 2D ink doodles. These are stand-ins drawn as wobbly SVG
// paths — they get replaced 1:1 by Arjita's real scanned doodles later, so
// every component keeps a plain (size, className) surface.

type DoodleProps = {
  size?: number;
  className?: string;
};

// Four-point diary sparkle: ✧
export function Sparkle({ size = 24, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M12 1 C13.2 7.1, 16.8 10.9, 23 12 C16.8 13.2, 13.1 16.9, 12 23 C10.9 16.9, 7.2 13.1, 1 12 C7.2 10.8, 10.8 7.2, 12 1 Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Radiating starburst, like the etched star in old ephemera: ✳
export function Starburst({ size = 40, className = "" }: DoodleProps) {
  const rays = [
    [20, 2, 20, 15],
    [20, 25, 20, 38],
    [2, 20, 15, 20],
    [25, 20, 38, 20],
    [7.5, 7.5, 15.5, 15.5],
    [24.5, 24.5, 32.5, 32.5],
    [32.5, 7.5, 24.5, 15.5],
    [15.5, 24.5, 7.5, 32.5],
  ];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={className}
    >
      {rays.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    </svg>
  );
}

// Wobbly underline squiggle for annotating headlines by hand.
export function Squiggle({ size = 120, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size / 8}
      viewBox="0 0 120 15"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M2 9 C12 3, 22 12, 32 8 C42 4, 52 12, 62 8 C72 4, 82 12, 92 8 C102 4, 112 10, 118 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Five-petal pressed flower, slightly asymmetric on purpose.
export function PressedFlower({ size = 44, className = "" }: DoodleProps) {
  const petals = [0, 68, 140, 215, 290];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      className={className}
    >
      {petals.map((deg, i) => (
        <ellipse
          key={i}
          cx="22"
          cy="12.5"
          rx={i % 2 === 0 ? 5.5 : 4.8}
          ry={i % 2 === 0 ? 9 : 9.8}
          transform={`rotate(${deg} 22 22)`}
          fill="currentColor"
          opacity="0.55"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      <circle cx="22" cy="22" r="3.4" fill="currentColor" />
    </svg>
  );
}

// Little hand-drawn bow, for tying sections together.
export function Bow({ size = 48, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 48 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M24 12 C18 4, 8 2, 5 8 C2 14, 12 18, 24 12 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M24 12 C30 4, 40 2, 43 8 C46 14, 36 18, 24 12 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="12" r="2.4" fill="currentColor" />
      <path
        d="M22 14 C19 19, 20 21, 18 23 M26 14 C29 19, 28 21, 30 23"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
