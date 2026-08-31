import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { StatusTerminal } from "@/components/common/status-terminal";

const metrics = [
  { value: "02", label: "internships" },
  { value: "04", label: "shipped projects" },
  { value: "01", label: "flagship pipeline" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-frame grid min-h-[calc(100vh-4rem)] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div>
          <AnimatedWrapper delay={0.08}>
            <p className="text-primary font-mono text-xs tracking-[0.12em] uppercase">
              Muhammad Saleh Janjua // Software Engineer
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.16}>
            <h1 className="mt-6 max-w-3xl font-mono text-[clamp(2.7rem,7vw,5.2rem)] leading-[1.02] font-semibold tracking-[-0.065em] text-balance">
              Software that ships like a pipeline.
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.24}>
            <p className="text-muted-foreground mt-7 max-w-xl text-lg leading-8">
              I engineer secure full-stack products and the delivery systems that move
              them from commit to production—staged, verified, and observable.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href="#projects"
                className="scan-button bg-primary text-primary-foreground inline-flex min-h-11 items-center gap-2 px-5 font-mono text-xs font-semibold tracking-[0.06em] uppercase"
              >
                View deployments <ArrowRight className="size-4" />
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
                <Mail className="size-4" /> Contact
              </a>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper delay={0.28}>
          <StatusTerminal />
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
