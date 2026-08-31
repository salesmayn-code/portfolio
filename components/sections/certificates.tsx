import { ExternalLink, ShieldCheck } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="border-border bg-background/70 border-y">
      <div className="section-frame">
        <SectionHeading
          eyebrow="credentials.verify"
          title="Continuous learning, verified."
          subtitle="Professional learning that reinforces the engineering work behind the portfolio."
        />
        <div className="bg-border grid gap-px md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <AnimatedWrapper
              key={certificate.id}
              delay={index * 0.08}
              className="bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <ShieldCheck
                  className="size-6 text-[var(--signal-pass)]"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground font-mono text-[10px] tracking-[0.08em] uppercase">
                  cert_{String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 max-w-md font-mono text-lg font-semibold tracking-[-0.02em]">
                {certificate.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {certificate.issuer} · {certificate.date}
              </p>
              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase hover:underline"
                >
                  verify credential <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <p className="text-muted-foreground mt-5 font-mono text-[10px] tracking-[0.06em] uppercase">
                  status: completed
                </p>
              )}
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
