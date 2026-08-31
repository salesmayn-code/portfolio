"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = siteConfig.nav.map((item) => item.href.slice(1));

export function SectionRail() {
  const activeSection = useActiveSection(sectionIds);
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Section progress"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="bg-border absolute top-2 bottom-2 left-[5px] w-px" />
      <ol className="relative space-y-4">
        {siteConfig.nav.map((item, index) => {
          const id = item.href.slice(1);
          const isActive = activeSection === id;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center gap-3 py-1"
              >
                <span
                  className={cn(
                    "border-border bg-background relative z-10 size-[11px] border transition-colors",
                    isActive && "border-primary bg-primary",
                  )}
                >
                  {isActive && !shouldReduceMotion ? (
                    <motion.span
                      layoutId="rail-active"
                      className="bg-primary/35 absolute -inset-1.5"
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    />
                  ) : null}
                </span>
                <span
                  className={cn(
                    "text-muted-foreground -translate-x-1 font-mono text-[10px] tracking-[0.1em] uppercase opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
                    isActive && "text-primary translate-x-0 opacity-100",
                  )}
                >
                  {String(index + 1).padStart(2, "0")} {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
