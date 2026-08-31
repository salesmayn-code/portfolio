export function SectionHeading({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-primary font-mono text-xs font-medium tracking-[0.12em] uppercase">
        <span aria-hidden="true">{">"}</span> {eyebrow ?? title}
      </p>
      <h2 className="mt-4 font-mono text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
