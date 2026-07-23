import type { Project } from "@/types";
export const projects: Project[] = [
  {
    id: "mimaar-ci-cd-pipeline",
    title: "Mimaar Associates CI/CD Pipeline",
    description:
      "End-to-end Jenkins delivery pipeline for a Next.js and TypeScript platform, automating quality gates, Prisma migrations, and zero-downtime deployment.",
    image: "/projects/mimaar-ci-cd-pipeline.svg",
    techStack: ["Jenkins", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "PM2"],
    featured: true,
  },
  {
    id: "cryptojacking-detection-tool",
    title: "Cryptojacking Detection Tool",
    description:
      "Final-year project that uses CPU and memory behavior to detect unauthorized crypto-mining, with Python monitoring, REST APIs, alerts, and a React dashboard.",
    image: "/projects/cryptojacking-detection-tool.svg",
    techStack: ["Python", "FastAPI", "React", "SQLite", "Machine Learning"],
    featured: true,
  },
  {
    id: "pixel-art-canvas",
    title: "Pixel Art Canvas",
    description:
      "Interactive browser-based pixel art tool with adjustable grids, layers, palette controls, and real-time drawing.",
    image: "/projects/pixel-art-canvas.jpg",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3"],
  },
  {
    id: "agile-capacity-tracker",
    title: "Agile Capacity Tracker",
    description:
      "Team capacity and sprint dashboard that uses GitHub activity to visualize workload, completion, and velocity.",
    image: "/projects/agile-capacity-tracker.jpg",
    techStack: ["React", "GitHub API", "JavaScript"],
  },
];
