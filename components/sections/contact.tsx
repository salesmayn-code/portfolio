"use client";

import { useState } from "react";
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register("name")}
              autoComplete="name"
              className="border-border bg-background focus:ring-ring w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
            />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              className="border-border bg-background focus:ring-ring w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
            />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={6}
              className="border-border bg-background focus:ring-ring w-full resize-y rounded-md border px-4 py-3 outline-none focus:ring-2"
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
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="text-destructive block text-sm">{error}</span> : null}
    </label>
  );
}
