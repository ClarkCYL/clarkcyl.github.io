import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MdArrowForward, MdLayers, MdCheckCircle, MdAutoAwesome } from "react-icons/md";
import { SiNextdotjs, SiReact, SiFlutter, SiTypescript, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[80vh] flex items-center justify-center pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] -left-[10%] w-[450px] h-[450px] bg-purple-500/10 blur-[110px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 m3-dot-grid opacity-25" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Headline */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              .
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight leading-snug">
              Full-Stack Web, Mobile &amp; AI Engineer.
            </p>
          </div>

          {/* Simple Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            I build fast, responsive web applications, fluid mobile apps, and
            practical AI workflows. Focused on clean code, intuitive user experiences, and reliable architecture.
          </p>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-500 mr-1">
              Core Stack:
            </span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-amber-500/40 transition-colors">
              <FaJava className="text-sm text-[#ffffff]" />
              <span>Java</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-teal-400/40 transition-colors">
              <SiReact className="text-sm text-teal-300" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-emerald-400/40 transition-colors">
              <SiNextdotjs className="text-sm text-white" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-cyan-400/40 transition-colors">
              <SiFlutter className="text-sm text-[#54c5f8]" />
              <span>Flutter</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-emerald-400/40 transition-colors">
              <SiPython className="text-sm text-emerald-400" />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-slate-200 hover:border-[#3178c6]/40 transition-colors">
              <SiTypescript className="text-sm text-[#3178c6]" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-white/10 text-xs font-medium text-emerald-300 hover:border-emerald-400/40 transition-colors">
              <MdAutoAwesome className="text-base text-emerald-400" />
              <span>AI / ML</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#stack"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95"
            >
              <span>Explore Tech Stack</span>
              <MdArrowForward className="text-base" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#121824] hover:bg-[#1a2233] text-slate-200 hover:text-white border border-white/15 font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-white/10">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="text-xs uppercase font-mono text-slate-500 tracking-wider">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-slate-200">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3-Pillar Interactive Visual Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md rounded-[36px] p-6 bg-gradient-to-br from-[#101522] to-[#0a0d14] border border-white/15 shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden">
            {/* Ambient gradients inside card */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 rounded-full bg-purple-500/15 blur-2xl pointer-events-none" />

            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
                <MdLayers className="text-emerald-400" />
                <span>Architecture Pillars</span>
              </div>
            </div>

            {/* 3 Interactive Pillar Cards */}
            <div className="py-4 relative z-10 space-y-3">
              {/* Card 1: Web Architecture */}
              <div className="p-3.5 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-lg flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <SiNextdotjs className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">
                      Web Architecture
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Next.js &amp; React Server Components
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <MdCheckCircle className="text-xs" /> SSR / Edge
                </span>
              </div>

              {/* Card 2: Mobile Native */}
              <div className="p-3.5 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-lg flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <SiFlutter className="text-lg text-[#54c5f8]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">
                      Mobile Application
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Flutter &amp; Dart (Android)
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <MdCheckCircle className="text-xs" /> Native UI
                </span>
              </div>

              {/* Card 3: Python & AI/ML */}
              <div className="p-3.5 rounded-2xl bg-[#0b0f17]/90 border border-emerald-500/30 shadow-lg flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MdAutoAwesome className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">
                      AI &amp; Machine Learning
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Intelligent Workflows
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                  <MdCheckCircle className="text-xs" /> Applied AI
                </span>
              </div>
            </div>

            {/* Bottom Status Widget */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">Clean Architecture</span>
              </div>
              <span className="text-slate-500">Philippines (GMT+8)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
