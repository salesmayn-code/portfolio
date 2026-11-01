"use client";

import type { CSSProperties } from "react";
import { TerminalSquare } from "lucide-react";

const entries = [
  { command: "$ whoami", output: "> full-stack / devops engineer" },
  { command: "$ status --current", output: "> OpsDesk [shipped]" },
  { command: "$ last-role", output: "> Netlogg.ai [HRMS]" },
  { command: "$ uptime", output: "> 3 internships · 8 builds" },
];

function typeStyle(text: string, delay: number): CSSProperties {
  return {
    "--type-width": `${text.length}ch`,
    "--type-steps": text.length,
    "--type-delay": `${delay}ms`,
    "--type-duration": `${Math.max(360, text.length * 24)}ms`,
  } as CSSProperties;
}

export function StatusTerminal() {
  return (
    <div
      className="system-panel relative overflow-hidden"
      aria-label="Current engineering status"
    >
      <div className="border-border bg-muted/55 flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase">
          <TerminalSquare className="text-primary size-4" aria-hidden="true" />
          deploy-console
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase">
          <span className="size-1.5 bg-[var(--signal-pass)]" aria-hidden="true" />
          <span className="text-[var(--signal-pass)]">operational</span>
        </div>
      </div>

      <div className="space-y-5 p-5 font-mono text-[12px] leading-6 sm:p-6 sm:text-[13px]">
        {entries.map((entry, index) => {
          const commandDelay = 280 + index * 560;
          const outputDelay = commandDelay + 240;

          return (
            <div key={entry.command} className="min-w-0">
              <span
                className="terminal-type text-primary"
                style={typeStyle(entry.command, commandDelay)}
              >
                {entry.command}
              </span>
              <span
                className="terminal-type text-muted-foreground"
                style={typeStyle(entry.output, outputDelay)}
              >
                {entry.output}
              </span>
            </div>
          );
        })}
        <span className="terminal-cursor" aria-hidden="true" />
      </div>

      <div className="border-border text-muted-foreground flex items-center justify-between border-t px-4 py-3 font-mono text-[10px] tracking-[0.08em] uppercase">
        <span>env: production</span>
        <span>branch: main</span>
      </div>
    </div>
  );
}
