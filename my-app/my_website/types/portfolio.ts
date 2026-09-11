export interface NavRoute {
  id: string;
  label: string;
  href: string;
}

export interface TechSkill {
  name: string;
  category: "frontend" | "mobile" | "backend" | "ai-ml" | "architecture";
  level: string;
  iconName: string;
  description: string;
  highlightColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack Web" | "Cross-Platform Mobile" | "Design System" | "Cloud & Architecture";
  tags: string[];
  metrics: string;
  architectureHighlights: string[];
  visualTheme: {
    gradient: string;
    border: string;
    glow: string;
    chipBg: string;
    chipText: string;
  };
  demoUrl: string;
  githubUrl: string;
  year: string;
}

export interface BentoHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  colSpan?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface SocialLinkItem {
  platform: string;
  handle: string;
  url: string;
  iconName: "github" | "linkedin" | "email" | "x";
  colorClass: string;
}
