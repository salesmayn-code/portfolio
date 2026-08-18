"use client";

import { useState } from "react";
import { CheckCircle2, Play } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

const stages = [
  {
    name: "Lint",
    tool: "Jenkins",
    detail:
      "Checks the codebase for consistent, maintainable code before delivery continues.",
  },
  {
    name: "Test",
    tool: "Jenkins",
    detail: "Runs the project test suite as a quality gate before a release is built.",
  },
  {
    name: "Prisma migration",
    tool: "Prisma",
    detail: "Applies database schema changes as part of the controlled release flow.",
  },
  {
    name: "Build",
    tool: "Next.js",
    detail: "Creates the production build after the quality gates have passed.",
  },
  {
    name: "Deploy",
    tool: "Nginx + PM2",
    detail:
      "Deploys to a local Ubuntu VM; Nginx serves the app and PM2 manages the process.",
  },
];

export function PipelineWalkthrough() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="pipeline" className="border-border/60 bg-muted/30 border-y">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title="A real delivery pipeline, made visible"
          subtitle="An interactive walkthrough of the Jenkins pipeline from my Mimaar Associates flagship project."
        />
        <AnimatedWrapper className="border-border bg-card rounded-xl border p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium">
            <Play className="text-primary size-4 fill-current" aria-hidden="true" />
            SCM polling starts the release workflow
          </div>
          <ol className="grid gap-3 sm:grid-cols-5">
            {stages.map((stage, index) => (
              <li key={stage.name}>
                <button
                  type="button"
                  onClick={() => setActiveStage(index)}
                  aria-pressed={activeStage === index}
                  className={cn(
                    "border-border hover:border-primary/60 w-full rounded-lg border p-4 text-left transition-colors",
                    activeStage === index && "border-primary bg-primary/10",
                  )}
                >
                  <span className="text-primary text-xs font-semibold">0{index + 1}</span>
                  <span className="mt-2 block text-sm font-semibold">{stage.name}</span>
                  <span className="text-muted-foreground mt-1 block text-xs">
                    {stage.tool}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="border-primary/25 bg-primary/5 mt-6 rounded-lg border p-5">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="text-primary size-5" aria-hidden="true" />
              {stages[activeStage].name}
            </div>
            <p className="text-muted-foreground mt-2 leading-7">
              {stages[activeStage].detail}
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
