"use client";

import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = siteConfig.nav.map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="border-border bg-background/90 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <a href="#top" className="group flex items-center gap-3">
          <div className="border-border/80 group-hover:border-primary/80 relative size-8 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]">
            <Image
              src={siteConfig.icon}
              alt={siteConfig.name}
              width={32}
              height={32}
              className="size-full object-cover"
              priority
            />
          </div>
          <span className="hidden font-mono text-[11px] tracking-[0.08em] uppercase sm:block">
            <span className="text-muted-foreground">deploy/</span>
            portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:hidden">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                className={cn(
                  "nav-link font-mono text-[11px] tracking-[0.06em] uppercase transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground hidden items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase sm:flex">
            <span className="size-1.5 bg-[var(--signal-pass)]" aria-hidden="true" />
            available
          </span>
          <span className="bg-border mx-2 hidden h-4 w-px sm:block" />
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle colour theme"
            className="hover:bg-muted relative grid size-9 place-items-center transition-colors"
          >
            <span
              className={cn(
                "absolute transition-all duration-300",
                resolvedTheme === "dark"
                  ? "rotate-0 opacity-100"
                  : "-rotate-180 opacity-0",
              )}
            >
              <Sun className="size-4" />
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                resolvedTheme !== "dark"
                  ? "rotate-0 opacity-100"
                  : "rotate-180 opacity-0",
              )}
            >
              <Moon className="size-4" />
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="hover:bg-muted grid size-9 place-items-center transition-colors lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-transparent px-6 transition-all lg:hidden",
          open ? "border-border max-h-[30rem] py-3" : "max-h-0",
        )}
      >
        {siteConfig.nav.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-border text-muted-foreground hover:text-primary flex items-center gap-3 border-b py-3 font-mono text-xs tracking-[0.06em] uppercase transition-colors last:border-0"
          >
            <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </div>
      <span className="boot-progress" aria-hidden="true" />
    </header>
  );
}
