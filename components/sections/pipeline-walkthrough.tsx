"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LoaderCircle, Play, RotateCcw } from "lucide-react";
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

type StageState = "passed" | "running" | "queued";

export function PipelineWalkthrough() {
  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasAutoRun, setHasAutoRun] = useState(false);
  const [runId, setRunId] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentStage = stages[activeStage];
  const pipelineComplete = activeStage === stages.length - 1 && !isRunning;
  const progress = pipelineComplete
    ? 100
    : Math.round((activeStage / stages.length) * 100);

  useEffect(() => {
    if (!isRunning) return;

    if (activeStage === stages.length - 1) {
      const completionTimer = window.setTimeout(() => setIsRunning(false), 900);
      return () => window.clearTimeout(completionTimer);
    }

    const stageTimer = window.setTimeout(
      () => setActiveStage((stage) => stage + 1),
      1450,
    );
    return () => window.clearTimeout(stageTimer);
  }, [activeStage, isRunning]);

  const runPipeline = () => {
    setActiveStage(0);
    setRunId((value) => value + 1);
    setIsRunning(true);
  };

  const startAutomaticRun = () => {
    if (hasAutoRun) return;
    setHasAutoRun(true);
    runPipeline();
  };

  const inspectStage = (index: number) => {
    setIsRunning(false);
    setActiveStage(index);
    setRunId((value) => value + 1);
  };

  const getStageState = (index: number): StageState => {
    if (pipelineComplete || index < activeStage) return "passed";
    if (index === activeStage) return "running";
    return "queued";
  };

  return (
    <section id="pipeline" className="border-border border-b">
      <div className="section-frame">
        <SectionHeading
          eyebrow="pipeline.run"
          title="A real delivery pipeline, made visible."
          subtitle="Watch the release execute automatically, replay it, or select a stage to inspect the quality gate behind it."
        />

        <AnimatedWrapper
          className="system-panel overflow-hidden"
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={startAutomaticRun}
        >
          <div className="border-border bg-muted/50 flex flex-wrap items-center justify-between gap-4 border-b px-5 py-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <Play className="text-primary size-4 fill-current" aria-hidden="true" />
                <span>jenkins/mimaar-release</span>
              </div>
              <p className="text-muted-foreground mt-1 font-mono text-[9px] tracking-[0.08em] uppercase">
                trigger: scm_poll // branch: main
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p
                className={cn(
                  "flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase",
                  pipelineComplete ? "text-[var(--signal-pass)]" : "text-primary",
                )}
                aria-live="polite"
              >
                {isRunning ? (
                  <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
                ) : (
                  <span className="size-1.5 bg-[var(--signal-pass)]" aria-hidden="true" />
                )}
                {isRunning
                  ? `running ${String(activeStage + 1).padStart(2, "0")}/05`
                  : pipelineComplete
                    ? "pipeline passed"
                    : "inspection paused"}
              </p>
              <button
                type="button"
                onClick={runPipeline}
                className="border-border hover:border-primary hover:text-primary inline-flex min-h-9 items-center gap-2 border px-3 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
              >
                <RotateCcw className="size-3.5" /> {isRunning ? "restart" : "replay"}
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <ol className="grid sm:grid-cols-5" aria-label="CI/CD pipeline stages">
              {stages.map((stage, index) => {
                const state = getStageState(index);

                return (
                  <li
                    key={stage.name}
                    className={cn(
                      "relative pb-8 sm:px-2 sm:pb-0",
                      index === stages.length - 1 && "pb-0",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => inspectStage(index)}
                      aria-pressed={activeStage === index}
                      aria-label={`${stage.name} stage: ${state}`}
                      className="group relative z-10 flex w-full items-center gap-4 text-left sm:flex-col sm:gap-3 sm:text-center"
                    >
                      <StageNode
                        index={index}
                        state={state}
                        reduceMotion={Boolean(shouldReduceMotion)}
                      />
                      <span
                        className={cn(
                          "border-border bg-background group-hover:border-primary flex min-w-0 flex-1 items-center justify-between border px-3 py-3 transition-colors sm:block sm:w-full sm:max-w-[9rem] sm:flex-none",
                          state === "running" && "border-primary bg-primary/5",
                          state === "passed" && "border-[var(--signal-pass)]/45",
                        )}
                      >
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

                    {index < stages.length - 1 ? (
                      <PipelineConnector
                        key={`${runId}-${index}`}
                        state={
                          pipelineComplete || index < activeStage
                            ? "passed"
                            : index === activeStage && isRunning
                              ? "running"
                              : "queued"
                        }
                        reduceMotion={Boolean(shouldReduceMotion)}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            <div className="border-border bg-background mt-10 grid gap-px border md:grid-cols-[1fr_0.72fr]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentStage.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: -8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                  className="bg-card p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-primary font-mono text-[10px] tracking-[0.08em] uppercase">
                      {`stage_${String(activeStage + 1).padStart(2, "0")} // ${getStageState(activeStage)}`}
                    </p>
                    <span className="text-muted-foreground font-mono text-[10px]">
                      {progress}%
                    </span>
                  </div>
                  <h3 className="mt-3 font-mono text-xl font-semibold">
                    {currentStage.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">
                    {currentStage.detail}
                  </p>
                  <div className="bg-border mt-5 h-px overflow-hidden">
                    <motion.div
                      className={cn(
                        "h-full origin-left",
                        pipelineComplete ? "bg-[var(--signal-pass)]" : "bg-primary",
                      )}
                      initial={false}
                      animate={{ scaleX: progress / 100 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.42,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="bg-[#080a0d] p-5 font-mono text-xs leading-6 text-[#8b92a0] sm:p-6 dark:bg-[#080a0d]">
                <p className="text-[#4c9eff]">$ {currentStage.command}</p>
                <p className="mt-2">executor: {currentStage.tool}</p>
                <p>stage: {String(activeStage + 1).padStart(2, "0")}/05</p>
                <p
                  className={cn(
                    getStageState(activeStage) === "passed"
                      ? "text-[#3dd68c]"
                      : "text-[#4c9eff]",
                  )}
                >
                  {getStageState(activeStage) === "passed"
                    ? "✓ gate passed · exit_code: 0"
                    : "● gate executing · exit_code: pending"}
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

function StageNode({
  index,
  state,
  reduceMotion,
}: {
  index: number;
  state: StageState;
  reduceMotion: boolean;
}) {
  return (
    <span
      className={cn(
        "border-border bg-card relative grid size-12 shrink-0 place-items-center rounded-full border-2 font-mono text-[10px] transition-colors",
        state === "running" && "border-primary bg-primary/10 text-primary",
        state === "passed" &&
          "border-[var(--signal-pass)] bg-[var(--signal-pass)]/10 text-[var(--signal-pass)]",
        state === "queued" && "text-muted-foreground",
      )}
    >
      {state === "running" && !reduceMotion ? (
        <motion.span
          className="border-primary absolute -inset-1 rounded-full border"
          initial={{ scale: 1, opacity: 0.55 }}
          animate={{ scale: 1.35, opacity: 0 }}
          transition={{ duration: 1.25, repeat: Infinity, ease: "easeOut" }}
          aria-hidden="true"
        />
      ) : null}

      {state === "passed" ? (
        <svg viewBox="0 0 18 18" className="size-5" aria-hidden="true">
          <motion.path
            d="M3 9.5 7 13l8-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          />
        </svg>
      ) : state === "running" ? (
        <LoaderCircle
          className={cn("size-5", !reduceMotion && "animate-spin")}
          aria-hidden="true"
        />
      ) : (
        String(index + 1).padStart(2, "0")
      )}
    </span>
  );
}

function PipelineConnector({
  state,
  reduceMotion,
}: {
  state: StageState;
  reduceMotion: boolean;
}) {
  return (
    <span
      className={cn(
        "bg-border absolute top-12 bottom-0 left-[23px] z-0 w-0.5 sm:top-6 sm:right-[calc(-50%+24px)] sm:bottom-auto sm:left-[calc(50%+24px)] sm:h-0.5 sm:w-auto",
        state === "passed" && "bg-[var(--signal-pass)]",
        state === "running" && "bg-primary/40",
      )}
      aria-hidden="true"
    >
      {state === "running" ? (
        <>
          <motion.span
            className="bg-primary absolute top-0 left-0 hidden h-full w-1/3 sm:block"
            initial={reduceMotion ? false : { left: "0%", opacity: 0.35 }}
            animate={reduceMotion ? undefined : { left: "67%", opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="bg-primary absolute top-0 left-1/2 block h-1/3 w-full -translate-x-1/2 shadow-[0_0_12px_var(--signal-run)] sm:hidden"
            initial={reduceMotion ? false : { top: "0%", opacity: 0.35 }}
            animate={reduceMotion ? undefined : { top: "67%", opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="bg-primary absolute top-1/2 hidden size-2 -translate-y-1/2 rounded-full shadow-[0_0_14px_var(--signal-run)] sm:block"
            initial={reduceMotion ? false : { left: "0%" }}
            animate={reduceMotion ? undefined : { left: "calc(100% - 0.5rem)" }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="bg-primary absolute left-1/2 size-2 -translate-x-1/2 rounded-full shadow-[0_0_14px_var(--signal-run)] sm:hidden"
            initial={reduceMotion ? false : { top: "0%" }}
            animate={reduceMotion ? undefined : { top: "calc(100% - 0.5rem)" }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </>
      ) : null}
    </span>
  );
}
