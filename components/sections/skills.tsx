import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { skills } from "@/data/skills";

const tracks = [
  {
    id: "app-stack",
    index: "01",
    title: "Application stack",
    description: "Interfaces, APIs, and services for complete product flows.",
    categories: ["Frontend", "Backend"],
  },
  {
    id: "platform-stack",
    index: "02",
    title: "Platform stack",
    description: "Data, automation, and the runtime path to production.",
    categories: ["Data", "DevOps"],
  },
  {
    id: "engineering-stack",
    index: "03",
    title: "Engineering stack",
    description: "Security, AI-assisted workflow, and the tools around the codebase.",
    categories: ["DevSecOps", "AI", "Tools"],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="section-frame">
        <SectionHeading
          eyebrow="capabilities.list"
          title="A stack built around shipping reliably."
          subtitle="Tools are grouped by the job they perform in the system, not by logo walls or trend lists."
        />

        <div className="bg-border grid gap-px lg:grid-cols-3">
          {tracks.map((track, index) => (
            <AnimatedWrapper
              key={track.id}
              delay={index * 0.08}
              className="bg-card min-w-0 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
                    stack_{track.index}
                  </p>
                  <h3 className="mt-3 font-mono text-xl font-semibold tracking-[-0.03em]">
                    {track.title}
                  </h3>
                </div>
                <span className="text-muted-foreground font-mono text-xs">
                  [
                  {
                    skills.filter((skill) => track.categories.includes(skill.category))
                      .length
                  }
                  ]
                </span>
              </div>
              <p className="text-muted-foreground mt-3 max-w-md text-sm leading-6">
                {track.description}
              </p>

              <ul className="bg-border mt-7 grid grid-cols-1 gap-px">
                {skills
                  .filter((skill) => track.categories.includes(skill.category))
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="bg-card hover:bg-muted flex items-center justify-between px-3 py-2.5 font-mono text-xs transition-colors"
                    >
                      <span>
                        <span className="text-primary mr-2" aria-hidden="true">
                          +
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-[9px] tracking-[0.06em] uppercase">
                        {skill.category}
                      </span>
                    </li>
                  ))}
              </ul>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
