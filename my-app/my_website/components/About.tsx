import React from "react";
import { ABOUT_HIGHLIGHTS } from "@/data/portfolioData";
import {
  MdDesignServices,
  MdLocationPin,
  MdDevices,
  MdPalette,
  MdAutoAwesome,
} from "react-icons/md";

export default function About() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Engineering Focus":
        return <MdDesignServices className="text-xl text-emerald-400" />;
      case "Location & Collaboration":
        return <MdLocationPin className="text-xl text-teal-400" />;
      case "Multi-Platform Scope":
        return <MdDevices className="text-xl text-indigo-400" />;
      case "Design Integrity":
        return <MdPalette className="text-xl text-emerald-300" />;
      default:
        return <MdAutoAwesome className="text-xl text-emerald-400" />;
    }
  };

  // Extract the 3 core principles (location is featured in the left panel)
  const principles = ABOUT_HIGHLIGHTS.filter((item) => item.id !== "origins");
  const origins = ABOUT_HIGHLIGHTS.find((item) => item.id === "origins");

  return (
    <section id="about" className="py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Column: Story & Collaboration Beacon */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-emerald-500/30 transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-black/30 group">
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-emerald-500/20 text-[11px] font-semibold uppercase tracking-wider text-emerald-400 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400/50" />
                <span>About &amp; Approach</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Focused on building dependable, well-crafted software.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  I am a software engineer based in the Philippines. I build fast web apps, fluid mobile applications,
                  and practical AI solutions—prioritizing clean code, accessibility, and great user experience.
                </p>
              </div>
            </div>

            {/* Manila & Collaboration Beacon */}
            <div className="pt-5 mt-6 border-t border-white/10 space-y-3 relative z-10">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MdLocationPin className="text-teal-400 text-sm" />
                  <span className="font-medium">Manila, Philippines</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Remote Ready</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="space-y-0.5">
                  <div className="text-lg font-bold text-white font-mono">
                    {origins?.stats?.[0]?.value || "GMT+8"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {origins?.stats?.[0]?.label || "Local Timezone"}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {origins?.stats?.[1]?.value || "100%"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {origins?.stats?.[1]?.label || "Remote Collaboration"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Stacked Principle Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {principles.map((item, idx) => (
              <div
                key={item.id}
                className="group relative p-5 rounded-2xl bg-[#0c101a] hover:bg-[#101624] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-md shadow-black/30 flex items-start gap-4 overflow-hidden"
              >
                {/* Ambient Card Glow */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/15 transition-all pointer-events-none" />

                {/* Icon Column */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-emerald-500/30 transition-colors shadow-inner">
                  {getCategoryIcon(item.category)}
                </div>

                {/* Text Content */}
                <div className="space-y-1 flex-1 min-w-0 relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 shrink-0">
                      0{idx + 1} &bull; {item.category}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-emerald-400">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
