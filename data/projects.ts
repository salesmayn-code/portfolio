import type { Project } from "@/types";
export const projects: Project[] = [
  {
    id: "mimaar-ci-cd-pipeline",
    title: "Mimaar Associates CI/CD Pipeline",
    description:
      "Personal flagship DevOps project: an end-to-end Jenkins delivery pipeline for a Next.js and TypeScript platform, from quality gates through local Ubuntu VM deployment.",
    image: "/projects/mimaar-ci-cd-pipeline.png",
    techStack: ["Jenkins", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "PM2"],
    featured: true,
    flagship: true,
    githubUrl: "https://github.com/salesmayn-code/MimaarAssociates",
    deploymentNote:
      "Deployed locally to an Ubuntu VM behind Nginx with PM2; Jenkins uses SCM polling.",
    highlights: [
      "Automates linting, testing, Prisma migrations, builds, and deployment.",
      "Uses Nginx and PM2 to serve and manage the local deployment.",
      "Keeps the complete delivery workflow reproducible from source control.",
    ],
  },
  {
    id: "opsdesk",
    title: "OpsDesk",
    description:
      "Full-stack IT service management platform with ticket lifecycles, SLA automation, role-based access, asset management, incident workflows, and audit trails.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    featured: true,
    githubUrl: "https://github.com/salesmayn-code/OpsDesk",
    liveUrl: "https://opsdesk-orpin.vercel.app",
  },
  {
    id: "libaas-kiraya",
    title: "Libaas Kiraya",
    description:
      "Multi-vendor occasion-wear rental marketplace with vendor onboarding, date-aware availability, rental checkout, deposits, inspections, disputes, and payouts.",
    image: "/projects/libaas-kiraya.jpg",
    techStack: ["Medusa v2", "Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/salesmayn-code/libaas-kiraya",
    status: "In progress",
  },
  {
    id: "cryptojacking-detection-tool",
    title: "Cryptojacking Detection Tool",
    description:
      "Final-year project that uses CPU and memory behavior to detect unauthorized crypto-mining, with Python monitoring, REST APIs, alerts, and a React dashboard.",
    image: "/projects/cryptojacking-detection-tool.png",
    techStack: ["Python", "FastAPI", "React", "SQLite", "Machine Learning"],
    featured: true,
    githubUrl: "https://github.com/salesmayn-code/Cryptojacking_Detection_Tool",
  },
  {
    id: "pixel-art-canvas",
    title: "Pixel Art Canvas",
    description:
      "Browser-based pixel art canvas with a responsive grid drawing interface and real-time editing.",
    image: "/projects/pixel-art-canvas.jpg",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/MuhammadSalehJanjua/Pixel-art-canvas",
  },
  {
    id: "agile-capacity-tracker",
    title: "Agile Capacity Tracker",
    description:
      "Full-stack sprint and team-capacity dashboard with a Java backend, Next.js interface, PostgreSQL, and GitHub issue synchronization.",
    image: "/projects/agile-capacity-tracker.jpg",
    techStack: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "GitHub API"],
    githubUrl: "https://github.com/salesmayn-code/AgileCapacityTracker",
    liveUrl: "https://scad-agile-capacitytracker.vercel.app/",
  },
  {
    id: "linkpulse",
    title: "LinkPulse",
    description:
      "URL shortener and analytics dashboard currently in development, focused on making link performance easier to understand.",
    techStack: [".NET 10", "ASP.NET Core", "Blazor", "SQL Server", "Clerk"],
    githubUrl: "https://github.com/salesmayn-code/LinkPulse",
    status: "In progress",
  },
];
