import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { GitHubActivity } from "@/components/projects/github-activity";
import { ProjectCard } from "@/components/projects/project-card";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description:
    "The full project archive from Muhammad Saleh Janjua: full-stack products, delivery automation, security tooling, and in-progress work.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-frame pb-10">
        <p className="text-primary font-mono text-xs font-medium tracking-[0.12em] uppercase">
          <span aria-hidden="true">{">"}</span> deployments.index
        </p>
        <h1 className="mt-4 max-w-4xl font-mono text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
          The full project archive.
        </h1>
        <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7">
          Selected systems, experiments, and in-progress builds. The home page carries the
          three I want to lead with; this page keeps the rest of the work discoverable.
        </p>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
        >
          <ArrowLeft className="size-3.5" /> back to selected work
        </Link>
      </section>

      <section className="section-frame pt-0">
        <div className="bg-border grid gap-px md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedWrapper
              key={project.id}
              delay={index * 0.05}
              className="bg-card h-full"
            >
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      <section className="section-frame pt-0">
        <GitHubActivity />
      </section>
    </>
  );
}
