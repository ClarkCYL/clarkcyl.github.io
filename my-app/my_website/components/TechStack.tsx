import { TECH_SKILLS } from "@/data/portfolioData";
import {
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiSqlite,
  SiSupabase,
  SiPython,
  SiFlask,
} from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { MdLayers, MdVerified, MdAutoAwesome } from "react-icons/md";

export default function TechStack() {
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "SiNextdotjs":
        return <SiNextdotjs className="text-2xl text-white" />;
      case "SiReact":
        return <SiReact className="text-2xl text-[#61dafb]" />;
      case "SiFlutter":
        return <SiFlutter className="text-2xl text-[#54c5f8]" />;
      case "SiPython":
        return <SiPython className="text-2xl text-emerald-400" />;
      case "MdAutoAwesome":
        return <MdAutoAwesome className="text-2xl text-emerald-400" />;
      case "FaJava":
        return <FaJava className="text-2xl text-white" />;
      case "SiTypescript":
        return <SiTypescript className="text-2xl text-[#3178c6]" />;
      case "SiSqlite":
        return <SiSqlite className="text-2xl text-sky-400" />;
      case "BiLogoFirebase":
      case "SiFirebase":
        return <BiLogoFirebase className="text-2xl text-[#f58220]" />;
      case "SiSupabase":
        return <SiSupabase className="text-2xl text-[#3ecf8e]" />;
      case "SiTailwindcss":
        return <SiTailwindcss className="text-2xl text-[#38bdf8]" />;
      case "SiFlask":
        return <SiFlask className="text-2xl text-white" />;
      default:
        return <MdLayers className="text-2xl text-slate-300" />;
    }
  };

  return (
    <section id="stack" className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101522] border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400/50"></span>
              <span>Tools &amp; Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              A modern toolkit for web, mobile, and AI.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-normal max-w-xl">
              Selected for speed, type safety, and clean engineering. Here are the core platforms
              and frameworks I work with daily.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#0c101a] px-4 py-2 rounded-2xl border border-white/10 w-fit">
            <MdVerified className="text-emerald-400 text-base" />
            <span>Type-Safe • Production Ready</span>
          </div>
        </div>

        {/* 3 Core Architectural Pillars: Web, Mobile, AI/Python */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pillar 1: Web (Next.js & React) */}
          <div className="relative p-7 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#101522] to-[#0a0d14] border border-white/15 hover:border-white/25 transition-all shadow-xl shadow-black/50 overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-black/50 border border-white/10 p-3 flex items-center justify-center">
                  <SiNextdotjs className="text-3xl text-white" />
                </div>
                <span className="text-xs font-mono font-semibold bg-white/10 text-slate-200 px-3 py-1 rounded-full border border-white/15">
                  Web Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Next.js &amp; React
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Server Components • Streaming SSR • Edge
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Building fast, SEO-friendly full-stack web applications using React Server Components,
                type-safe Server Actions, and modern responsive layouts.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap gap-1.5 relative z-10">
              {["App Router", "SSR", "Turbopack", "Vite", "TypeScript", "Javascript", "Tailwind"].map((tag, i) => (
                < span
                  key={i}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Mobile (Flutter & Dart) */}
          <div className="relative p-7 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#0c1622] to-[#090e17] border border-cyan-500/25 hover:border-cyan-500/40 transition-all shadow-xl shadow-black/50 overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-black/50 border border-cyan-500/20 p-3 flex items-center justify-center">
                  <SiFlutter className="text-3xl text-[#54c5f8]" />
                </div>
                <span className="text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                  Mobile Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Flutter &amp; Dart
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Android • Native Performance
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Developing responsive cross-platform native mobile apps with fluid animations,
                offline SQLite persistence, and consistent UI across all mobile devices.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap gap-1.5 relative z-10">
              {["Android", "MVVM Pattern", "Dart OOP", "Dependency Injection", "Custom UI"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 3: Python & AI/ML */}
          <div className="relative p-7 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#0a1816] to-[#070e0f] border border-emerald-500/30 hover:border-emerald-500/50 transition-all shadow-xl shadow-black/50 overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-black/50 border border-emerald-500/30 p-3 flex items-center justify-center">
                  <SiPython className="text-3xl text-emerald-400" />
                </div>
                <span className="text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/35">
                  AI &amp; Backend Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Python &amp; AI / ML
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  Automation • LLM Workflows • Data Processing
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Integrating modern machine learning models, LLMs, and intelligent data pipelines
                with Python and custom automation.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap gap-1.5 relative z-10">
              {["Python", "LLM APIs", "Tensorflow", "PyTorch", "Data Processing", "Automation"].map((tag, i) => (
                < span
                  key={i}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Technologies Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Supporting Technologies &amp; Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_SKILLS.filter(
              (s) =>
                s.name !== "Next.js 15" &&
                s.name !== "Flutter" &&
                s.name !== "Python"
            ).map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-[28px] bg-[#0c101a] hover:bg-[#101624] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
