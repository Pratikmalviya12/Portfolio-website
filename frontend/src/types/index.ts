// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'ai' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  createdAt: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'frameworks';
  proficiency: number; // 0-100
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  technologies: string[];
  achievements: string[];
  companyLogo?: string;
  companyUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface AnimationVariants {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    filter?: string;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    filter?: string;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      type?: string;
      stiffness?: number;
      damping?: number;
    };
  };
  hover?: {
    scale?: number;
    y?: number;
    boxShadow?: string;
    transition?: {
      duration?: number;
    };
  };
}

export interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
}
