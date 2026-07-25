"use client";

import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { Mail, MessageSquareText, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { contactSchema, type ContactFormValues } from "@/utils/validators";

type Status = "idle" | "sending" | "sent" | "error";

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

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        title="Get in touch"
        subtitle="Have a project, role, or opportunity in mind? I would be glad to hear from you."
      />
      <AnimatedWrapper>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-border bg-card/70 space-y-5 rounded-xl border p-6 sm:p-7"
          noValidate
        >
          <p className="text-muted-foreground text-sm">
            Tell me about your goals and timeline. I usually respond within 24 hours.
          </p>
          <Field label="Name" error={errors.name?.message} icon={UserRound}>
            <input
              {...register("name")}
              autoComplete="name"
              placeholder="Your name"
              className="border-border bg-background focus:border-primary/70 focus:ring-primary/20 w-full rounded-lg border px-11 py-3 transition-colors outline-none focus:ring-2"
            />
          </Field>
          <Field label="Email" error={errors.email?.message} icon={Mail}>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="border-border bg-background focus:border-primary/70 focus:ring-primary/20 w-full rounded-lg border px-11 py-3 transition-colors outline-none focus:ring-2"
            />
          </Field>
          <Field label="Message" error={errors.message?.message} icon={MessageSquareText}>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Share a short brief, role details, or project context."
              className="border-border bg-background focus:border-primary/70 focus:ring-primary/20 w-full resize-y rounded-lg border px-11 py-3 transition-colors outline-none focus:ring-2"
            />
          </Field>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-primary-foreground rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" ? (
            <p className="text-sm text-green-600 dark:text-green-400">
              Message sent. I will get back to you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-destructive text-sm">
              Message delivery is not configured yet. Please email me directly instead.
            </p>
          ) : null}
        </form>
      </AnimatedWrapper>
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
      <span className="text-sm font-medium">{label}</span>
      <div className="relative">
        <Icon className="text-muted-foreground pointer-events-none absolute top-3.5 left-3 size-4" />
        {children}
      </div>
      {error ? <span className="text-destructive block text-sm">{error}</span> : null}
    </label>
  );
}
