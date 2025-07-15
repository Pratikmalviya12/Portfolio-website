// src/data/types.ts
// Type definitions for portfolio data

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    profileImage?: string;
    resume?: string;
  };
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    clientSatisfaction: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    username: string;
    iconType: string;
  }>;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  icon: string;
  description?: string;
}

export interface SkillsData {
  skills: Skill[];
  categories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  year: number;
  status: string;
  demoUrl?: string | null;
  githubUrl?: string;
  images?: string[];
  features?: string[];
  challenges?: string[];
}

export interface ProjectsData {
  projects: Project[];
  categories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  location: string;
  locationType: string;
  description: string;
  technologies: string[];
  achievements: string[];
  companyUrl?: string;
  companyLogo?: string;
  responsibilities?: string[];
  employmentType: string;
}

export interface ExperienceData {
  experiences: Experience[];
  totalExperience: string;
  skills: string[];
  certifications?: Array<{
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string | null;
    credentialId: string;
  }>;
}
