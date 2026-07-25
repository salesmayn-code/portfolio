import { Award, ExternalLink } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";
import { certificates } from "@/data/certificates";

export function Certificates() {
  const hasSingleCertificate = certificates.length === 1;

  return (
    <section id="certificates" className="border-border/60 border-y">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title="Certificates"
          subtitle="Professional learning that supports my engineering practice."
        />
        <div
          className={cn(
            "grid gap-5",
            hasSingleCertificate ? "mx-auto max-w-xl grid-cols-1" : "md:grid-cols-2",
          )}
        >
          {certificates.map((certificate, index) => (
            <AnimatedWrapper
              key={certificate.id}
              delay={index * 0.1}
              className="border-border bg-card/70 rounded-xl border p-6"
            >
              <Award className="text-primary size-6" />
              <h3 className="mt-4 text-lg font-semibold">{certificate.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {certificate.issuer} · {certificate.date}
              </p>
              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  View credential <ExternalLink className="size-4" />
                </a>
              ) : null}
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
