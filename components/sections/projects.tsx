import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/projects";
import { getLatestRepositories } from "@/lib/github";
import { cn } from "@/lib/utils";

const projectGallery: Partial<Record<string, string[]>> = {
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

export async function Projects() {
  const latestRepositories = await getLatestRepositories("salesmayn-code");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Projects"
        subtitle="Selected work across application development, automation, and security."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const galleryImages = projectGallery[project.id] ?? [];

          return (
            <AnimatedWrapper
              key={project.id}
              delay={index * 0.08}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
            >
              <article
                className={cn(
                  "border-border bg-card/70 group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl",
                  project.featured && "border-primary/35 shadow-primary/10 shadow-lg",
                )}
              >
                <div className="bg-muted relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="from-background/90 absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent" />
                  {project.featured ? (
                    <span className="bg-background/85 border-border absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur">
                      <Star className="text-primary size-3" aria-hidden="true" />
                      Featured
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-7">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((technology) => (
                      <li
                        key={technology}
                        className="bg-muted rounded-full px-2.5 py-1 text-xs"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  {galleryImages.length > 0 ? (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {galleryImages.map((galleryImage, galleryIndex) => (
                        <div
                          key={galleryImage}
                          className="border-border bg-muted relative aspect-[4/3] overflow-hidden rounded-md border"
                        >
                          <Image
                            src={galleryImage}
                            alt={`${project.title} preview ${galleryIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-6 flex gap-4 text-sm font-medium">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          <FaGithub className="size-4" aria-hidden="true" /> Code
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          <ExternalLink className="size-4" /> Live
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            </AnimatedWrapper>
          );
        })}
      </div>
      {latestRepositories.length > 0 ? (
        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight">Latest on GitHub</h3>
          <p className="text-muted-foreground mt-2">
            Recently updated public repositories from my GitHub profile.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestRepositories.map((repository) => (
              <a
                key={repository.id}
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="border-border hover:bg-muted rounded-xl border p-5 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-medium">{repository.name}</h4>
                  <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-6">
                  {repository.description ?? "Public repository on GitHub."}
                </p>
                <p className="text-muted-foreground mt-4 text-xs">
                  {repository.language ?? "Code"} · {repository.stargazers_count} stars
                </p>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
