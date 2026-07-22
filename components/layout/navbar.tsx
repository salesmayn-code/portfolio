import { siteConfig } from "@/config/site";
export function Navbar() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#top" className="font-semibold tracking-tight">
          {siteConfig.name}
        </a>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
