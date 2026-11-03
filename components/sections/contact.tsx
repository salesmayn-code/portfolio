"use client";

import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { ArrowUpRight, Mail, MessageSquareText, Send, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/config/site";
import { contactSchema, type ContactFormValues } from "@/utils/validators";

type Status = "idle" | "sending" | "sent" | "fallback";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: "onBlur" });

  const onSubmit = async (values: ContactFormValues) => {
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (field === "name" || field === "email" || field === "message") {
          setError(field, { message: issue.message });
        }
      }
      return;
    }

    const openEmailFallback = (data: ContactFormValues) => {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      setStatus("fallback");
    };

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok) {
        openEmailFallback(parsed.data);
        return;
      }
      reset();
      setStatus("sent");
    } catch {
      openEmailFallback(parsed.data);
    }
  };

  return (
    <section id="contact">
      <div className="section-frame">
        <SectionHeading
          eyebrow="connection.open"
          title="Start the next deployment."
          subtitle="Have a role, project, or engineering problem in mind? Send the context and I’ll take it from there."
        />

        <AnimatedWrapper>
          <div className="bg-border grid gap-px lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="bg-card flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
                  direct_channel
                </p>
                <h3 className="mt-4 font-mono text-xl font-semibold">Prefer email?</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  Use the direct channel below if you prefer email.
                </p>
              </div>
              <a
                href={siteConfig.links.email}
                className="border-border hover:border-primary hover:text-primary mt-8 flex items-center justify-between border px-4 py-3 font-mono text-xs transition-colors"
              >
                {siteConfig.contactEmail}
                <ArrowUpRight className="size-4" />
              </a>
            </aside>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card space-y-5 p-6 sm:p-8"
              noValidate
            >
              <div className="border-border flex items-center justify-between border-b pb-4 font-mono text-[10px] tracking-[0.08em] uppercase">
                <span>message.compose</span>
                <span className="text-muted-foreground">direct message</span>
              </div>
              <Field label="Name" error={errors.name?.message} icon={UserRound}>
                <input
                  {...register("name")}
                  autoComplete="name"
                  placeholder="Your name"
                  className="border-border bg-background focus:border-primary w-full border px-11 py-3 text-sm transition-colors outline-none"
                />
              </Field>
              <Field label="Email" error={errors.email?.message} icon={Mail}>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="border-border bg-background focus:border-primary w-full border px-11 py-3 text-sm transition-colors outline-none"
                />
              </Field>
              <Field
                label="Message"
                error={errors.message?.message}
                icon={MessageSquareText}
              >
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Share the role, project context, or problem to solve."
                  className="border-border bg-background focus:border-primary w-full resize-y border px-11 py-3 text-sm transition-colors outline-none"
                />
              </Field>
              <button
                type="submit"
                disabled={status === "sending"}
                className="scan-button bg-primary text-primary-foreground inline-flex min-h-11 items-center gap-2 px-5 font-mono text-xs font-semibold tracking-[0.06em] uppercase disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Transmitting…" : "Send message"}
                <Send className="size-4" />
              </button>
              <div aria-live="polite">
                {status === "sent" ? (
                  <p className="font-mono text-xs text-[var(--signal-pass)]">
                    [passed] Message delivered. I will get back to you soon.
                  </p>
                ) : null}
                {status === "fallback" ? (
                  <p className="font-mono text-xs text-[var(--signal-warn)]">
                    [email] Your email app was opened with the message. If it did not
                    open, use the direct email link.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  icon: Icon,
  children,
}: {
  label: string;
  error?: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="font-mono text-[10px] tracking-[0.08em] uppercase">{label}</span>
      <div className="relative">
        <Icon className="text-muted-foreground pointer-events-none absolute top-3.5 left-3 size-4" />
        {children}
      </div>
      {error ? (
        <span className="block font-mono text-[10px] text-[var(--signal-fail)]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
