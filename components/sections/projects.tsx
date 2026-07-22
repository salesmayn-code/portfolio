import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Projects"
        subtitle="Selected work across application development, automation, and security."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={index * 0.08}>
            <article className="border-border group h-full overflow-hidden rounded-xl border">
              <div className="bg-muted relative aspect-[16/8] overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
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
                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
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
        ))}
      </div>
    </section>
  );
}
