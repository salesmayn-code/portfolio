import Image from "next/image";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export const projectGallery: Partial<Record<string, string[]>> = {
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
  "agile-capacity-tracker": [
    "/projects/agile-capacity-tracker-home.jpg",
    "/projects/agile-capacity-tracker-capacity-management.jpg",
    "/projects/agile-capacity-tracker-spring-planning.jpg",
  ],
  linkpulse: [
    "/projects/linkpulse-dashboard.jpg",
    "/projects/linkpulse-analytics.jpg",
    "/projects/linkpulse-landing.jpg",
  ],
};
export function ProjectCard({ project }: { project: Project }) {
  const galleryImages = projectGallery[project.id] ?? [];
  const galleryColumns =
    galleryImages.length === 1
      ? "grid-cols-1"
      : galleryImages.length === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <article
      id={project.id}
      className="project-card bg-card flex h-full scroll-mt-24 flex-col border border-transparent"
    >
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
        <div className="border-border relative flex aspect-[16/8] flex-col justify-center border-b bg-[#080a0d] p-6 font-mono text-xs dark:bg-[#080a0d]">
          <p className="text-[#4c9eff]">$ status --current</p>
          <p className="mt-2 text-[#f5a623]">&gt; building in public</p>
          <span className="terminal-cursor mt-3" aria-hidden="true" />
          <ProjectStatus project={project} />
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
          <div className={cn("bg-border mt-6 grid gap-px", galleryColumns)}>
            {galleryImages.map((image, imageIndex) => (
              <div key={image} className="bg-muted relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} interface preview ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        ) : project.highlights ? (
          <ul className="border-border mt-6 border-t">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-border text-muted-foreground flex gap-2 border-b py-2.5 text-sm leading-5"
              >
                <span className="font-mono text-[var(--signal-pass)]" aria-hidden="true">
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <ProjectLinks project={project} className="mt-auto pt-6" />
      </div>
    </article>
  );
}

export function ProjectStatus({ project }: { project: Project }) {
  const inProgress = Boolean(project.status);

  return (
    <span
      className={cn(
        "bg-background/90 absolute top-3 flex items-center gap-2 border px-2 py-1 font-mono text-[9px] tracking-[0.06em] uppercase backdrop-blur",
        project.private ? "left-3" : "right-3",
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

export function TechStack({ items }: { items: string[] }) {
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

export function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (!project.githubUrl && !project.liveUrl && !project.detailsUrl && !project.private) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-5 font-mono text-[10px] tracking-[0.06em] uppercase",
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
      {project.detailsUrl ? (
        <a
          href={project.detailsUrl}
          target={project.detailsUrl.startsWith("http") ? "_blank" : undefined}
          rel={project.detailsUrl.startsWith("http") ? "noreferrer" : undefined}
          className="hover:text-primary inline-flex items-center gap-2 transition-colors"
        >
          <ArrowUpRight className="size-4" /> case study
        </a>
      ) : null}
      {project.private ? (
        <span className="text-muted-foreground inline-flex items-center gap-2">
          <Lock className="size-4" aria-hidden="true" /> private build
        </span>
      ) : null}
    </div>
  );
}
