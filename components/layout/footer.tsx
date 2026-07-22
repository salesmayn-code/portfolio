import { siteConfig } from "@/config/site";
export function Footer() {
  return (
    <footer className="border-border/60 border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.links.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}
