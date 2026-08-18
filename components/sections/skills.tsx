import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { skills } from "@/data/skills";
const tracks = [
  {
    title: "Full-Stack Development",
    description:
      "Frontend, backend, data, and the tools used to build complete products.",
    categories: ["Frontend", "Backend", "Data", "Tools"],
  },
  {
    title: "DevOps & DevSecOps",
    description:
      "Automation, deployment, and security practices for dependable delivery.",
    categories: ["DevOps", "DevSecOps"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and practices I use to build and deliver software."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {tracks.map((track, index) => (
          <AnimatedWrapper
            key={track.title}
            delay={index * 0.06}
            className="border-border bg-card/60 rounded-xl border p-6"
          >
            <h3 className="text-lg font-semibold">{track.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              {track.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills
                .filter((skill) => track.categories.includes(skill.category))
                .map((skill) => (
                  <li
                    key={skill.name}
                    className="bg-muted rounded-md px-3 py-1.5 text-sm"
                  >
                    {skill.name}
                  </li>
                ))}
            </ul>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
