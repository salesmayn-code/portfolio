export const siteConfig = {
  name: "Muhammad Saleh Janjua",
  title: "Muhammad Saleh Janjua — AI-Augmented Software Engineer",
  description:
    "AI-augmented software engineer building full-stack systems across TypeScript, Python, C#, and Java, with project work in IT service management, rental marketplaces, HRMS, and .NET analytics, plus tested CI/CD delivery.",
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
    { label: "Pipeline", href: "/#pipeline" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
