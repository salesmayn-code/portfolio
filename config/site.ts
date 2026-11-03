export const siteConfig = {
  name: "Muhammad Saleh Janjua",
  title: "Muhammad Saleh Janjua | Full-Stack Developer",
  description:
    "Full-stack developer building web applications with Next.js, Node.js, PostgreSQL, TypeScript, and C#. Projects include OpsDesk, Libaas Kiraya, HRMS Pakistan, and LinkPulse.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-salesmayn.vercel.app",
  ogImage: "/opengraph-image",
  icon: "/images/portfolio-icon.svg",
  links: {
    github: "https://github.com/salesmayn-code",
    linkedin: "https://www.linkedin.com/in/muhammadsalehjanjua",
    email: "mailto:MuhammadSalehJanjua@gmail.com",
  },
  contactEmail: "MuhammadSalehJanjua@gmail.com",
  nav: [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
