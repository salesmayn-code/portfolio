import { Check } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-border bg-background/70 border-y">
      <div className="section-frame">
        <SectionHeading
          eyebrow="history.log"
          title="Experience measured in systems improved"
          subtitle="Hands-on engineering work across product delivery, platform reliability, and frontend performance."
        />

        <div className="border-border border-t">
          {experience.map((item, index) => (
            <AnimatedWrapper key={item.id} delay={index * 0.08}>
              <article className="border-border grid gap-6 border-b py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                <div>
                  <p className="text-primary font-mono text-xs font-medium">
                    RUN_{String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-muted-foreground mt-2 font-mono text-[10px] leading-5 tracking-[0.06em] uppercase">
                    {item.startDate}
                    <br />→ {item.endDate}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-mono text-xl font-semibold tracking-[-0.03em]">
                        {item.role}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                    </div>
                    <span className="flex w-fit items-center gap-2 border border-[var(--signal-pass)]/40 px-2 py-1 font-mono text-[9px] tracking-[0.08em] text-[var(--signal-pass)] uppercase">
                      <Check className="size-3" /> completed
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 md:grid-cols-2">
                    {item.description.map((description) => (
                      <li key={description} className="text-muted-foreground flex gap-3">
                        <span className="text-primary font-mono" aria-hidden="true">
                          &gt;
                        </span>
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
