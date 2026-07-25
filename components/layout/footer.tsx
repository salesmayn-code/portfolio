import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-border/60 border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <FaGithub className="size-5" aria-hidden="true" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin className="size-5" aria-hidden="true" />
          </a>
          <a
            href={siteConfig.links.email}
            aria-label="Email Muhammad Saleh Janjua"
            className="hover:text-primary transition-colors"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
