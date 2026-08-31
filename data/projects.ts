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
      "Interactive browser-based pixel art tool with adjustable grids, layers, palette controls, and real-time drawing.",
    image: "/projects/pixel-art-canvas.jpg",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/salesmayn-code/Pixel-art-canvas",
    liveUrl: "https://pixel-art-canvas-gamma.vercel.app/",
  },
  {
    id: "agile-capacity-tracker",
    title: "Agile Capacity Tracker",
    description:
      "Team capacity and sprint dashboard that uses GitHub activity to visualize workload, completion, and velocity.",
    image: "/projects/agile-capacity-tracker.jpg",
    techStack: ["React", "GitHub API", "JavaScript"],
    githubUrl: "https://github.com/salesmayn-code/Agile-Capacity-Tracker",
    liveUrl: "https://scad-agile-capacitytracker.vercel.app/",
  },
  {
    id: "linkpulse",
    title: "LinkPulse",
    description:
      "URL shortener and analytics dashboard currently in development, focused on making link performance easier to understand.",
    techStack: ["URL Shortening", "Analytics", "Dashboard"],
    githubUrl: "https://github.com/salesmayn-code/LinkPulse",
    status: "In progress",
  },
];
