import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";

export function About() {
  return (
    <section id="about" className="border-border/60 border-y">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title="About me"
          subtitle="Engineering applications from interface to infrastructure."
        />
        <AnimatedWrapper>
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div
              className="bg-muted text-muted-foreground flex size-48 shrink-0 items-center justify-center rounded-2xl text-5xl font-semibold tracking-tight"
              aria-label="Muhammad Saleh Janjua initials"
            >
              MSJ
            </div>
            <div className="text-muted-foreground max-w-3xl space-y-4 leading-8">
              <p>
                I am a software engineer focused on building thoughtful web experiences,
                automation, and secure delivery workflows. My work spans React and Next.js
                interfaces, Node.js and Python services, and CI/CD systems with Jenkins,
                Docker, and GitHub Actions.
              </p>
              <p>
                I enjoy solving problems end to end: translating a product need into a
                reliable system, shaping the developer workflow around it, and making sure
                it stays maintainable in production.
              </p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
