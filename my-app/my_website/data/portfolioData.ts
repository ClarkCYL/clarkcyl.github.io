import { NavRoute, TechSkill, ProjectItem, BentoHighlight, SocialLinkItem } from "@/types/portfolio";

export const NAV_ROUTES: NavRoute[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "about", label: "About", href: "#about" },
  { id: "stack", label: "Tech Stack", href: "#stack" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Clark",
  role: "Full-Stack Web, Mobile & AI Engineer",
  location: "Manila, Philippines",
  tagline: "Building fast web apps, fluid mobile experiences, and practical AI systems.",
  shortBio:
    "A software engineer based in the Philippines specializing in modern web platforms, cross-platform mobile apps, and applied AI. Focused on clean code, responsive design, and reliable architecture.",
  stats: [
    { label: "Web Platform", value: "Next.js & React" },
    { label: "Mobile Apps", value: "Flutter & Dart" },
    { label: "AI & ML", value: "Tensorflow & Python" },
    { label: "Databases", value: "SQLite & Firebase" },
  ],
};

export const TECH_SKILLS: TechSkill[] = [
  {
    name: "Next.js 15",
    category: "frontend",
    level: "Proficient",
    iconName: "SiNextdotjs",
    description: "App Router, React Server Components, streaming SSR, and edge deployment.",
    highlightColor: "#ffffff",
  },
  {
    name: "React 19",
    category: "frontend",
    level: "Proficient",
    iconName: "SiReact",
    description: "Modern hook architecture, concurrent features, and reactive state management.",
    highlightColor: "#2dd4bf",
  },
  {
    name: "Flutter",
    category: "mobile",
    level: "Proficient",
    iconName: "SiFlutter",
    description: "Android applications with fluid animations, custom UI, and offline caching.",
    highlightColor: "#54c5f8",
  },
  {
    name: "Python",
    category: "ai-ml",
    level: "Proficient",
    iconName: "SiPython",
    description: "Flask backends, asynchronous data processing, automation, and model integrations.",
    highlightColor: "#10b981",
  },
  {
    name: "AI & Machine Learning",
    category: "ai-ml",
    level: "Proficient",
    iconName: "MdAutoAwesome",
    description: "LLM integrations, Agentic AI,  prompt engineering, and machine learning models.",
    highlightColor: "#10b981",
  },
  {
    name: "Java",
    category: "backend",
    level: "Proficient",
    iconName: "FaJava",
    description: "Object-oriented programming, backend services, data structures, and algorithms.",
    highlightColor: "#ffffff",
  },
  {
    name: "TypeScript",
    category: "architecture",
    level: "Proficient",
    iconName: "SiTypescript",
    description: "Strict static typing, reusable generic interfaces, and clean domain modeling.",
    highlightColor: "#3178c6",
  },
  {
    name: "SQLite",
    category: "backend",
    level: "Proficient",
    iconName: "SiSqlite",
    description: "Embedded SQL database engine, offline-first persistence, and lightweight local storage.",
    highlightColor: "#003b57",
  },
  {
    name: "Firebase",
    category: "backend",
    level: "Proficient",
    iconName: "BiLogoFirebase",
    description: "Realtime NoSQL Firestore, Cloud Authentication, push notifications, and serverless infrastructure.",
    highlightColor: "#f58220",
  },
  {
    name: "Supabase",
    category: "backend",
    level: "Proficient",
    iconName: "SiSupabase",
    description: "Open-source backend platform with real-time subscriptions, SQL database, and storage.",
    highlightColor: "#3ecf8e",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    level: "Proficient",
    iconName: "SiTailwindcss",
    description: "Modern responsive styling, custom design tokens, and smooth micro-interactions.",
    highlightColor: "#2dd4bf",
  },
  {
    name: "Flask",
    category: "backend",
    level: "Proficient",
    iconName: "SiFlask",
    description: "Lightweight Python web framework for RESTful APIs, routing, and backend services.",
    highlightColor: "#ffffff",
  },
];

export const ABOUT_HIGHLIGHTS: BentoHighlight[] = [
  {
    id: "philosophy",
    category: "Engineering Focus",
    title: "Clean, Scalable Systems",
    subtitle: "Built for reliability and speed",
    description:
      "I prioritize clean, readable code and maintainable software architecture. Every component and API route is designed to solve real problems with minimal friction.",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "origins",
    category: "Location & Collaboration",
    title: "Based in the Philippines",
    subtitle: "Manila (GMT+8) • Remote Ready",
    description:
      "Experienced in remote collaboration, asynchronous communication, and modern engineering workflows across global time zones.",
    colSpan: "col-span-1",
    stats: [
      { value: "GMT+8", label: "Local Time" },
      { value: "100%", label: "Remote Ready" },
    ],
  },
  {
    id: "fullstack-mobile",
    category: "Multi-Platform Scope",
    title: "Web, Mobile & AI Solutions",
    subtitle: "One cohesive user journey",
    description:
      "Connecting fast Next.js web applications, responsive Flutter mobile apps, and Python AI backends into complete, unified products.",
    colSpan: "col-span-1",
  },
  {
    id: "m3-standards",
    category: "Design Integrity",
    title: "Thoughtful UI & UX Design",
    subtitle: "Intuitive, accessible, and fast",
    description:
      "Good software must look and feel great. I design accessible interfaces with clear visual hierarchies, smooth feedback, and consistent typography.",
    colSpan: "col-span-1 md:col-span-2",
  },
];


export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: "GitHub",
    handle: "clarkcyl",
    url: "https://github.com/clarkcyl",
    iconName: "github",
    colorClass: "hover:text-white hover:border-white/40",
  },
  {
    platform: "LinkedIn",
    handle: "clark-developer",
    url: "https://linkedin.com",
    iconName: "linkedin",
    colorClass: "hover:text-emerald-400 hover:border-emerald-400/40",
  },
  {
    platform: "Email",
    handle: "",
    url: "",
    iconName: "email",
    colorClass: "hover:text-teal-400 hover:border-teal-400/40",
  },
  {
    platform: "Twitter / X",
    handle: "@clark_dev",
    url: "https://x.com",
    iconName: "x",
    colorClass: "hover:text-white hover:border-white/40",
  },
];
