import type { ReactNode } from "react";
export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-primary text-sm font-medium tracking-widest uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
    </div>
  );
}
