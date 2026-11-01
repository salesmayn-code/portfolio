import { Suspense } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, GitCommitHorizontal, Laptop } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/projects";
import { getLatestRepositories, type GitHubRepository } from "@/lib/github";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const projectGallery: Partial<Record<string, string[]>> = {
  "libaas-kiraya": [
    "/projects/libaas-kiraya-home.jpg",
    "/projects/libaas-kiraya-search.jpg",
    "/projects/libaas-kiraya-listing.jpg",
  ],
  "cryptojacking-detection-tool": [
    "/projects/cryptojacking-detection-tool-1.png",
    "/projects/cryptojacking-detection-tool-2.png",
    "/projects/cryptojacking-detection-tool-3.png",
  ],
  "pixel-art-canvas": ["/projects/pixel-art-canvas-signup.jpg"],
  "agile-capacity-tracker": [
    "/projects/agile-capacity-tracker-home.jpg",
    "/projects/agile-capacity-tracker-capacity-management.jpg",
    "/projects/agile-capacity-tracker-spring-planning.jpg",
  ],
};

export function Projects() {
  const flagship = projects.find((project) => project.flagship);
  const supportingProjects = projects.filter((project) => !project.flagship);

  return (
    <section id="projects">
      <div className="section-frame">
        <SectionHeading
          eyebrow="deployments.list"
          title="Selected systems, not sample projects."
          subtitle="Each project is presented by the problem solved, the engineering decisions made, and how it ships."
        />

        {flagship ? <FlagshipProject project={flagship} /> : null}

        <div className="bg-border mt-px grid gap-px md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <AnimatedWrapper
              key={project.id}
              delay={index * 0.06}
              className="bg-card h-full"
            >
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="mt-20">
          <div className="border-border flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
                github.sync
              </p>
              <h3 className="mt-3 font-mono text-xl font-semibold tracking-[-0.03em]">
                Latest repository activity
              </h3>
            </div>
            <a
              href="https://github.com/salesmayn-code"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
            >
              view profile <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <Suspense fallback={<RepositorySkeleton />}>
            <LatestRepositories />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  return (
    <AnimatedWrapper>
      <article className="project-card border-primary/50 bg-card grid overflow-hidden border lg:grid-cols-[1.08fr_0.92fr]">
        {project.image ? (
          <div className="bg-muted border-border relative min-h-72 overflow-hidden border-b lg:min-h-[32rem] lg:border-r lg:border-b-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority
            />
            <div className="from-background/90 absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent" />
            <span className="bg-background/90 absolute top-4 left-4 flex items-center gap-2 border border-[var(--signal-pass)]/45 px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-[var(--signal-pass)] uppercase backdrop-blur">
              <span className="size-1.5 bg-[var(--signal-pass)]" /> flagship / shipped
            </span>
          </div>
        ) : null}

        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
            deployment_01
          </p>
          <h3 className="mt-4 font-mono text-2xl font-semibold tracking-[-0.04em]">
            <span className="project-prompt mr-2" aria-hidden="true">
              &gt;
            </span>
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-4 leading-7">{project.description}</p>

          <TechStack items={project.techStack} />

          {project.highlights ? (
            <ul className="border-border mt-7 border-t">
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
      </article>
    </AnimatedWrapper>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const galleryImages = projectGallery[project.id] ?? [];

  return (
    <article className="project-card bg-card flex h-full flex-col border border-transparent">
      {project.image ? (
        <div className="bg-muted border-border relative aspect-[16/8] overflow-hidden border-b">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <ProjectStatus project={project} />
        </div>
      ) : (
        <div className="border-border flex aspect-[16/8] flex-col justify-center border-b bg-[#080a0d] p-6 font-mono text-xs dark:bg-[#080a0d]">
          <p className="text-[#4c9eff]">$ status --current</p>
          <p className="mt-2 text-[#f5a623]">&gt; building in public</p>
          <span className="terminal-cursor mt-3" aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-muted-foreground font-mono text-[9px] tracking-[0.08em] uppercase">
          project/{project.id}
        </p>
        <h3 className="mt-3 font-mono text-lg font-semibold tracking-[-0.03em]">
          <span className="project-prompt mr-2" aria-hidden="true">
            &gt;
          </span>
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-3 text-sm leading-6">
          {project.description}
        </p>
        <TechStack items={project.techStack} />

        {galleryImages.length > 0 ? (
          <div className="bg-border mt-6 grid grid-cols-3 gap-px">
            {galleryImages.map((image, imageIndex) => (
              <div key={image} className="bg-muted relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} interface preview ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        ) : null}

        <ProjectLinks project={project} className="mt-auto pt-6" />
      </div>
    </article>
  );
}

function ProjectStatus({ project }: { project: Project }) {
  const inProgress = Boolean(project.status);

  return (
    <span
      className={cn(
        "bg-background/90 absolute top-3 right-3 flex items-center gap-2 border px-2 py-1 font-mono text-[9px] tracking-[0.06em] uppercase backdrop-blur",
        inProgress
          ? "border-[var(--signal-warn)]/45 text-[var(--signal-warn)]"
          : "border-[var(--signal-pass)]/45 text-[var(--signal-pass)]",
      )}
    >
      <span
        className={cn(
          "size-1.5",
          inProgress ? "bg-[var(--signal-warn)]" : "bg-[var(--signal-pass)]",
        )}
      />
      {inProgress ? "in progress" : "shipped"}
    </span>
  );
}

function TechStack({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {items.map((technology) => (
        <li
          key={technology}
          className="border-border text-muted-foreground border px-2 py-1 font-mono text-[9px] tracking-[0.04em] uppercase"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.githubUrl && !project.liveUrl) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap gap-5 font-mono text-[10px] tracking-[0.06em] uppercase",
        className,
      )}
    >
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary inline-flex items-center gap-2 transition-colors"
        >
          <FaGithub className="size-4" aria-hidden="true" /> source
        </a>
      ) : null}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary inline-flex items-center gap-2 transition-colors"
        >
          <ExternalLink className="size-4" /> live system
        </a>
      ) : null}
    </div>
  );
}

async function LatestRepositories() {
  const repositories = await getLatestRepositories("salesmayn-code");

  if (repositories.length === 0) {
    return (
      <p className="text-muted-foreground border-border border-b py-6 font-mono text-xs">
        [offline] GitHub activity is temporarily unavailable.
      </p>
    );
  }

  return (
    <div className="bg-border grid gap-px md:grid-cols-2 lg:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}

function RepositoryCard({ repository }: { repository: GitHubRepository }) {
  return (
    <a
      href={repository.html_url}
      target="_blank"
      rel="noreferrer"
      className="bg-card hover:bg-muted group flex min-h-52 flex-col p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <FaGithub className="text-muted-foreground size-4" aria-hidden="true" />
        <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
      </div>
      <h4 className="mt-5 font-mono text-sm font-semibold break-words">
        {repository.name}
      </h4>
      <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-6">
        {repository.description ?? "Public repository on GitHub."}
      </p>
      <div className="text-muted-foreground mt-auto flex items-center justify-between gap-3 pt-5 font-mono text-[9px] tracking-[0.06em] uppercase">
        <span>{repository.language ?? "Code"}</span>
        <span className="flex items-center gap-1.5">
          <GitCommitHorizontal className="size-3.5" />{" "}
          {relativeUpdate(repository.updated_at)}
        </span>
      </div>
    </a>
  );
}

function RepositorySkeleton() {
  return (
    <div
      className="bg-border grid gap-px md:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading GitHub activity"
    >
      {[0, 1, 2].map((item) => (
        <div key={item} className="repo-skeleton h-52" />
      ))}
    </div>
  );
}

function relativeUpdate(value: string) {
  const days = Math.max(
    0,
    Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000),
  );
  if (days === 0) return "today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}
