import type { ReactNode } from "react";

export function ChromeText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden className="chrome-text-base">
        {children}
      </span>
      <span aria-hidden className="chrome-text-sheen absolute inset-0">
        {children}
      </span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
