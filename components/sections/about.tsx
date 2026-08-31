import Image from "next/image";
import { Code2, GitBranch, ShieldCheck } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";

const capabilities = [
  {
    icon: Code2,
    code: "01 / BUILD",
    title: "Product engineering",
    description:
      "Accessible React interfaces backed by dependable Node.js and Python services.",
  },
  {
    icon: GitBranch,
    code: "02 / SHIP",
    title: "Delivery automation",
    description:
      "Repeatable CI/CD workflows with quality gates from commit through deployment.",
  },
  {
    icon: ShieldCheck,
    code: "03 / SECURE",
    title: "Operational confidence",
    description:
      "Security-minded implementation, validation, and maintainable infrastructure.",
  },
];

export function About() {
  return (
    <section id="about" className="border-border bg-background/70 border-y">
      <div className="section-frame">
        <SectionHeading
          eyebrow="profile.init"
          title="Engineering the product and the path to production."
          subtitle="I work across the application boundary—where interface decisions, backend reliability, and delivery systems meet."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[20rem_1fr]">
          <AnimatedWrapper>
            <div className="system-panel relative p-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Muhammad Saleh Janjua"
                  fill
                  className="object-cover saturate-[0.82]"
                  sizes="(min-width: 1024px) 320px, 80vw"
                  priority
                />
                <div className="from-background/80 absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent" />
              </div>
              <div className="border-border mt-2 flex items-center justify-between border-t px-2 pt-3 pb-1 font-mono text-[10px] tracking-[0.08em] uppercase">
                <span className="text-muted-foreground">identity.profile</span>
                <span className="flex items-center gap-2 text-[var(--signal-pass)]">
                  <span className="size-1.5 bg-[var(--signal-pass)]" /> verified
                </span>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.08}>
            <div className="text-muted-foreground max-w-3xl space-y-5 text-lg leading-8">
              <p>
                I am a software engineer focused on thoughtful web experiences,
                automation, and secure delivery workflows. My work spans React and Next.js
                interfaces, Node.js and Python services, and CI/CD systems with Jenkins,
                Docker, and GitHub Actions.
              </p>
              <p>
                I enjoy solving problems end to end: translating a product need into a
                reliable system, shaping the developer workflow around it, and keeping the
                result maintainable in production.
              </p>
            </div>

            <div className="border-border mt-10 border-t">
              {capabilities.map(({ icon: Icon, code, title, description }) => (
                <div
                  key={code}
                  className="border-border grid gap-3 border-b py-5 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="text-primary flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase">
                    <Icon className="size-4" aria-hidden="true" /> {code}
                  </p>
                  <div>
                    <h3 className="font-mono text-sm font-semibold">{title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-6">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
