/* ---------- Personal Info ---------- */

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  heroText: string;
}

/* ---------- About ---------- */

export interface AboutMe {
  summary: string;
  description: string;
  highlights: string[];
}

/* ---------- Skills ---------- */

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Skills {
  frontend: SkillCategory;
  backend: SkillCategory;
  databases: SkillCategory;
  devops: SkillCategory;
  cloud: SkillCategory;
  apis: SkillCategory;
}

/* ---------- Experience ---------- */

export interface Achievement {
  metric: string;
  description: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  role: string;
  period: string;
  type: "current" | "past";
  responsibilities: string[];
  achievements: Achievement[];
}

/* ---------- Projects ---------- */

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
  category: string;
  featured: boolean;
}

/* ---------- Leadership ---------- */

export type IconKey =
  | "Users"
  | "Zap"
  | "GitBranch"
  | "Layout"
  | "Gauge"
  | "Target";

export interface LeadershipItem {
  icon: IconKey;
  title: string;
  description: string;
}

/* ---------- Education ---------- */

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
