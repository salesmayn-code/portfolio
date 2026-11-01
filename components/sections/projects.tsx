import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Laptop } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCard, ProjectLinks, TechStack } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const selected = projects.filter((project) => project.homepage);
  const flagship = selected.find((project) => project.flagship) ?? selected[0];
  const supporting = selected.filter((project) => project.id !== flagship?.id);

  return (
    <section id="projects">
      <div className="section-frame">
        <SectionHeading
          eyebrow="deployments.list"
          title="Selected systems, not sample projects."
          subtitle="The three builds I want to lead with. The full archive lives on the projects page."
        />

        {flagship ? <FlagshipProject project={flagship} /> : null}

        <div className="bg-border mt-px grid gap-px md:grid-cols-2">
          {supporting.map((project, index) => (
            <AnimatedWrapper
              key={project.id}
              delay={index * 0.06}
              className="bg-card h-full"
            >
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="border-border mt-12 flex flex-col justify-between gap-5 border-t pt-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
              archive.open
            </p>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">
              The archive includes the delivery pipeline, security tooling, frontend
              experiments, and work still in progress.
            </p>
          </div>
          <Link
            href="/projects"
            className="scan-button bg-primary text-primary-foreground inline-flex min-h-11 w-fit items-center gap-2 px-5 font-mono text-xs font-semibold tracking-[0.06em] uppercase"
          >
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  return (
    <AnimatedWrapper>
      <article
        id={project.id}
        className="project-card border-primary/50 bg-card scroll-mt-24 overflow-hidden border"
      >
        {project.image ? (
          <div className="bg-muted border-border relative aspect-[16/8] overflow-hidden border-b">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1100px, 100vw"
              priority
            />
            <span className="bg-background/90 absolute top-4 right-4 flex items-center gap-2 border border-[var(--signal-pass)]/45 px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-[var(--signal-pass)] uppercase backdrop-blur">
              <span className="size-1.5 bg-[var(--signal-pass)]" /> flagship /{" "}
              {project.status ? "in progress" : "shipped"}
            </span>
          </div>
        ) : null}

        <div className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
                deployment_01
              </p>
              <h3 className="mt-4 font-mono text-2xl font-semibold tracking-[-0.04em]">
                <span className="project-prompt mr-2" aria-hidden="true">
                  &gt;
                </span>
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-4 leading-7">
                {project.description}
              </p>
              <TechStack items={project.techStack} />
            </div>

            <div className="flex flex-col">
              {project.highlights ? (
                <ul className="border-border border-t">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-border text-muted-foreground flex gap-3 border-b py-3 text-sm leading-6"
                    >
                      <span
                        className="font-mono text-[var(--signal-pass)]"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}

              {project.deploymentNote ? (
                <p className="text-muted-foreground mt-5 flex gap-3 text-sm leading-6">
                  <Laptop
                    className="text-primary mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  {project.deploymentNote}
                </p>
              ) : null}

              <ProjectLinks project={project} className="mt-auto pt-7" />
            </div>
          </div>
        </div>
      </article>
    </AnimatedWrapper>
  );
}
