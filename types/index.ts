export type SkillCategory =
  "Frontend" | "Backend" | "DevOps" | "DevSecOps" | "Data" | "Tools";

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
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}
