export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <div className="bg-primary/70 mt-4 h-1 w-14 rounded-full" />
      {subtitle ? (
        <p className="text-muted-foreground mt-4 text-base leading-7">{subtitle}</p>
      ) : null}
    </div>
  );
}
