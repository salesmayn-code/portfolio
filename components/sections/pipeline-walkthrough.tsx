"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { AnimatedWrapper } from "@/components/common/animated-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

const stages = [
  {
    name: "Lint",
    tool: "Jenkins",
    command: "pnpm lint",
    detail:
      "Checks the codebase for consistent, maintainable code before delivery continues.",
  },
  {
    name: "Test",
    tool: "Jenkins",
    command: "pnpm test",
    detail: "Runs the project test suite as a quality gate before a release is built.",
  },
  {
    name: "Migrate",
    tool: "Prisma",
    command: "prisma migrate deploy",
    detail: "Applies database schema changes as part of the controlled release flow.",
  },
  {
    name: "Build",
    tool: "Next.js",
    command: "pnpm build",
    detail: "Creates the production build after every quality gate has passed.",
  },
  {
    name: "Deploy",
    tool: "Nginx + PM2",
    command: "pm2 reload ecosystem",
    detail: "Deploys to Ubuntu; Nginx serves the app while PM2 manages the process.",
  },
];

export function PipelineWalkthrough() {
  const [activeStage, setActiveStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const progress = (activeStage / (stages.length - 1)) * 100;
  const currentStage = stages[activeStage];

  return (
    <section id="pipeline" className="border-border border-b">
      <div className="section-frame">
        <SectionHeading
          eyebrow="pipeline.run"
          title="A real delivery pipeline, made visible."
          subtitle="Select a stage to inspect the quality gates behind the Mimaar Associates deployment workflow."
        />

        <AnimatedWrapper className="system-panel overflow-hidden">
          <div className="border-border bg-muted/50 flex flex-wrap items-center justify-between gap-3 border-b px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Play className="text-primary size-4 fill-current" aria-hidden="true" />
              <span>jenkins/mimaar-release</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.08em] uppercase">
              <span className="text-muted-foreground">trigger: scm_poll</span>
              <span className="flex items-center gap-2 text-[var(--signal-run)]">
                <span className="pipeline-pulse size-1.5 bg-[var(--signal-run)]" />{" "}
                running
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="relative">
              <div className="bg-border absolute top-5 right-[10%] left-[10%] hidden h-px sm:block" />
              <motion.div
                className="bg-primary absolute top-5 left-[10%] hidden h-px sm:block"
                initial={false}
                animate={{ width: `${progress * 0.8}%` }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.42,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
              <motion.span
                aria-hidden="true"
                className="bg-primary absolute top-[17px] z-20 hidden size-[7px] sm:block"
                initial={false}
                animate={{ left: `calc(10% + ${progress * 0.8}% - 3px)` }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.42,
                  ease: [0.2, 0, 0, 1],
                }}
              />

              <ol className="relative z-10 grid gap-3 sm:grid-cols-5 sm:gap-2">
                {stages.map((stage, index) => {
                  const state =
                    index < activeStage
                      ? "passed"
                      : index === activeStage
                        ? "running"
                        : "queued";

                  return (
                    <li key={stage.name}>
                      <button
                        type="button"
                        onClick={() => setActiveStage(index)}
                        aria-pressed={activeStage === index}
                        className={cn(
                          "group border-border bg-card hover:border-primary w-full border p-3 text-left transition-colors sm:border-transparent sm:bg-transparent sm:p-0 sm:text-center",
                          activeStage === index && "border-primary sm:border-transparent",
                        )}
                      >
                        <span
                          className={cn(
                            "border-border bg-card mx-auto hidden size-10 place-items-center border sm:grid",
                            state === "running" && "pipeline-pulse border-primary",
                            state === "passed" && "border-[var(--signal-pass)]",
                          )}
                        >
                          {state === "passed" ? (
                            <svg
                              viewBox="0 0 18 18"
                              className="size-4"
                              aria-hidden="true"
                            >
                              <motion.path
                                d="M3 9.5 7 13l8-9"
                                fill="none"
                                stroke="var(--signal-pass)"
                                strokeWidth="2"
                                strokeLinecap="square"
                                initial={shouldReduceMotion ? false : { pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                              />
                            </svg>
                          ) : (
                            <span
                              className={cn(
                                "size-2",
                                state === "running" ? "bg-primary" : "bg-border",
                              )}
                            />
                          )}
                        </span>
                        <span className="flex items-center justify-between sm:mt-4 sm:block">
                          <span className="font-mono text-xs font-semibold">
                            {stage.name}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-[9px] tracking-[0.06em] uppercase sm:mt-1 sm:block",
                              state === "passed" && "text-[var(--signal-pass)]",
                              state === "running" && "text-primary",
                              state === "queued" && "text-muted-foreground",
                            )}
                          >
                            {state}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="border-border bg-background mt-8 grid gap-px border md:grid-cols-[1fr_0.72fr]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentStage.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: -8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                  className="bg-card p-5 sm:p-6"
                >
                  <p className="text-primary font-mono text-[10px] tracking-[0.08em] uppercase">
                    {`stage_${String(activeStage + 1).padStart(2, "0")} // active`}
                  </p>
                  <h3 className="mt-3 font-mono text-xl font-semibold">
                    {currentStage.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">
                    {currentStage.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="bg-[#080a0d] p-5 font-mono text-xs leading-6 text-[#8b92a0] sm:p-6 dark:bg-[#080a0d]">
                <p className="text-[#4c9eff]">$ {currentStage.command}</p>
                <p className="mt-2">tool: {currentStage.tool}</p>
                <p>exit_code: {activeStage === stages.length - 1 ? "0" : "pending"}</p>
                <p className="text-[#3dd68c]">✓ gate configured</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveStage(0)}
              className="text-muted-foreground hover:text-primary mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
            >
              <RotateCcw className="size-3.5" /> reset pipeline
            </button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
