import Image from "next/image";
import { Code2, GitBranch, ShieldCheck } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";

const capabilities = [
  {
    icon: Code2,
    code: "01 / BUILD",
    title: "Full-stack product engineering",
    description:
      "Next.js interfaces backed by Node.js, Python, and .NET services, with PostgreSQL data models.",
  },
  {
    icon: GitBranch,
    code: "02 / SHIP",
    title: "Delivery automation",
    description:
      "Jenkins and GitHub Actions pipelines covering tests, migrations, builds, and deployment checks.",
  },
  {
    icon: ShieldCheck,
    code: "03 / VERIFY",
    title: "Reliability and verification",
    description:
      "Automated tests, RBAC, audit trails, and production-minded data workflows.",
  },
];

export function About() {
  return (
    <section id="about" className="border-border bg-background/70 border-y">
      <div className="section-frame">
        <SectionHeading
          eyebrow="profile.init"
          title="Engineering the product and the path to production."
          subtitle="I build full-stack systems across TypeScript, Python, and C#, and verify them with automated tests and CI."
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
                I am a full-stack developer. I build web applications and the delivery
                workflows around them, working across Next.js and TypeScript, Node.js,
                Python/FastAPI, and C#/.NET.
              </p>
              <p>
                Recent work includes OpsDesk (SLA automation, RBAC, optimistic locking,
                transactional outbox, audit trails), Libaas Kiraya (a Medusa v2 rental
                marketplace with date-aware availability), HRMS Pakistan at Netlogg.ai
                (employee, attendance, leave, and payroll workflows), and LinkPulse (.NET
                10 / Blazor link analytics).
              </p>
            </div>

            <div className="border-border mt-8 border-t pt-5">
              <p className="text-primary font-mono text-[10px] tracking-[0.08em] uppercase">
                education
              </p>
              <p className="mt-2 text-sm">
                BS Computer Software Engineering, PAF-IAST, 2022-2026
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
