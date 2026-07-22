import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-24"
    >
      <div className="max-w-3xl space-y-6">
        <p className="text-primary text-sm font-medium tracking-widest uppercase">
          Full-Stack Development · DevOps · DevSecOps
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg leading-8">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
