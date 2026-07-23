import Image from "next/image";
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
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,20rem)_1fr]">
            <div className="relative mx-auto w-full max-w-xs">
              <div className="from-primary/30 to-primary/5 absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br blur-xl" />
              <div className="border-primary/25 shadow-primary/15 relative aspect-[4/5] overflow-hidden rounded-3xl border-2 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Muhammad Saleh Janjua"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 320px, 80vw"
                  priority
                />
              </div>
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
