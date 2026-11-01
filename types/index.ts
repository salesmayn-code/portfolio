export type SkillCategory =
  "Frontend" | "Backend" | "DevOps" | "DevSecOps" | "Data" | "Tools" | "AI";

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}
export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  projectUrl?: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  flagship?: boolean;
  homepage?: boolean;
  private?: boolean;
  detailsUrl?: string;
  status?: "In progress";
  highlights?: string[];
  deploymentNote?: string;
}
