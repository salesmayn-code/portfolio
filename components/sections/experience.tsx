import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-border/60 border-y">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading
          title="Experience"
          subtitle="Hands-on web engineering, DevOps, and delivery experience."
        />
        <div className="border-border space-y-10 border-l pl-7">
          {experience.map((item, index) => (
            <AnimatedWrapper key={item.id} delay={index * 0.1} className="relative">
              <span className="bg-primary absolute top-1.5 -left-[34px] size-3 rounded-full" />
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {item.company}
                {item.location ? ` · ${item.location}` : ""} · {item.startDate} –{" "}
                {item.endDate}
              </p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 leading-7">
                {item.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
