"use client";

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
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <a href="#top" className="font-semibold tracking-tight">
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                className={cn(
                  "hover:text-foreground text-sm transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle colour theme"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="hover:bg-muted rounded-md p-2 transition-colors md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-transparent px-6 transition-all md:hidden",
          open ? "border-border/60 max-h-96 py-3" : "max-h-0",
        )}
      >
        {siteConfig.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground py-2 text-sm transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
