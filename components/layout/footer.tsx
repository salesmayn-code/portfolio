import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-border bg-card border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="flex items-center gap-3">
          <div className="border-border relative size-8 shrink-0 overflow-hidden rounded-lg border">
            <Image
              src={siteConfig.icon}
              alt={siteConfig.name}
              width={32}
              height={32}
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
              build.status // passed
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Engineered with intent.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FooterLink href={siteConfig.links.github} label="GitHub">
            <FaGithub className="size-4" />
          </FooterLink>
          <FooterLink href={siteConfig.links.linkedin} label="LinkedIn">
            <FaLinkedin className="size-4" />
          </FooterLink>
          <FooterLink href={siteConfig.links.email} label="Email">
            <Mail className="size-4" />
          </FooterLink>
          <a
            href="#top"
            aria-label="Back to top"
            className="border-border hover:border-primary hover:text-primary ml-2 grid size-9 place-items-center border transition-colors"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="text-muted-foreground hover:text-primary grid size-9 place-items-center transition-colors"
    >
      {children}
    </a>
  );
}
