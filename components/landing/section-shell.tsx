import type { ReactNode } from "react";

/** Same horizontal bounds as hero, pricing, FAQ, etc. */
export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`.trim()}>{children}</div>
  );
}
