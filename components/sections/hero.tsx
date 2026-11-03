import { ArrowDownToLine, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";

const metrics = [
  { value: "03", label: "internships" },
  { value: "08", label: "projects" },
  { value: "01", label: "CI/CD pipeline" },
];

const selectedSystems = [
  {
    name: "OpsDesk",
    href: "#opsdesk",
    summary: "IT service management with SLA automation, RBAC, and audit trails.",
  },
  {
    name: "Libaas Kiraya",
    href: "#libaas-kiraya",
    summary: "Rental marketplace with availability, checkout, deposits, and disputes.",
  },
  {
    name: "HRMS Pakistan",
    href: "#hrms",
    summary: "HR platform covering records, attendance, leave, payroll, and reporting.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-frame grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:py-20">
        <div>
          <AnimatedWrapper delay={0.08}>
            <p className="text-primary font-mono text-xs tracking-[0.12em] uppercase">
              Muhammad Saleh Janjua // Full-Stack Developer
              <span className="text-muted-foreground mt-2 block">
                Next.js · Node.js · PostgreSQL · TypeScript · C#
              </span>
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.16}>
            <h1 className="mt-6 max-w-3xl font-mono text-[clamp(2.7rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.065em] text-balance">
              Full-stack developer building reliable web applications.
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.24}>
            <p className="text-muted-foreground mt-7 max-w-xl text-lg leading-8">
              I build full-stack applications with Next.js, Node.js, PostgreSQL, and
              TypeScript, with additional C#/.NET work in LinkPulse. Recent projects
              include OpsDesk, Libaas Kiraya, and HRMS Pakistan.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href="#projects"
                className="scan-button bg-primary text-primary-foreground inline-flex min-h-11 items-center gap-2 px-5 font-mono text-xs font-semibold tracking-[0.06em] uppercase"
              >
                View selected work <ArrowRight className="size-4" />
              </a>
              <a
                href="/projects"
                className="border-border hover:border-primary hover:text-primary inline-flex min-h-11 items-center gap-2 border px-4 font-mono text-xs tracking-[0.04em] uppercase transition-colors"
              >
                All projects <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/resume/resume.pdf"
                download
                className="border-border hover:border-primary hover:text-primary inline-flex min-h-11 items-center gap-2 border px-4 font-mono text-xs tracking-[0.04em] uppercase transition-colors"
              >
                <ArrowDownToLine className="size-4" /> Resume
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.04em] uppercase transition-colors"
              >
                <Mail className="size-4" /> Email
              </a>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper delay={0.28}>
          <div className="system-panel overflow-hidden">
            <div className="border-border flex items-center justify-between border-b px-5 py-4 font-mono text-[10px] tracking-[0.1em] uppercase">
              <span className="text-primary">selected.systems</span>
              <span className="text-muted-foreground">[0{selectedSystems.length}]</span>
            </div>
            <ul className="divide-border divide-y">
              {selectedSystems.map((system) => (
                <li key={system.name}>
                  <a
                    href={system.href}
                    className="group hover:bg-muted/50 block px-5 py-5 transition-colors"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-mono text-sm font-semibold">
                        {system.name}
                      </span>
                      <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-colors" />
                    </span>
                    <span className="text-muted-foreground mt-2 block text-sm leading-6">
                      {system.summary}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-border border-t px-5 py-4">
              <a
                href="/projects"
                className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
              >
                View full archive <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.4} className="border-border border-y lg:col-span-2">
          <dl className="divide-border grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-baseline gap-3 px-4 py-4 first:pl-0"
              >
                <dt className="text-muted-foreground order-2 font-mono text-[10px] tracking-[0.08em] uppercase">
                  {metric.label}
                </dt>
                <dd className="font-mono text-lg font-semibold text-[var(--signal-pass)]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
