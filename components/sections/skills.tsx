import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "DevSecOps",
  "Data",
  "Tools",
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and practices I use to build and deliver software."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <AnimatedWrapper
            key={category}
            delay={index * 0.06}
            className="border-border rounded-xl border p-5"
          >
            <h3 className="font-medium">{category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
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
