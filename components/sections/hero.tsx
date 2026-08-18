import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20"
    >
      <AnimatedWrapper className="max-w-3xl">
        <div className="flex flex-wrap gap-2" aria-label="Professional focus areas">
          <span className="border-primary/35 bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
            Full-Stack Development
          </span>
          <span className="border-primary/35 bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
            DevOps / CI-CD
          </span>
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Muhammad Saleh Janjua
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
          I build secure, scalable applications and the reliable delivery pipelines that
          bring them to production.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
          >
            View projects <ArrowRight className="size-4" />
          </a>
          <a
            href="/resume/resume.pdf"
            download
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowDownToLine className="size-4" /> Download resume
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            Contact me <Mail className="size-4" />
          </a>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
