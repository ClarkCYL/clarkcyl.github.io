"use client";

import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/data/portfolioData";
import { MdArrowUpward, MdLocationPin, MdSchedule } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [phTime, setPhTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setPhTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <FaGithub className="text-lg" />;
      case "linkedin":
        return <FaLinkedin className="text-lg text-emerald-400" />;
      case "email":
        return <MdEmail className="text-lg text-teal-400" />;
      case "x":
        return <FaXTwitter className="text-lg text-white" />;
      default:
        return <FaGithub className="text-lg" />;
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-10 sm:pt-12 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-t border-white/10 overflow-hidden"
    >
      <div id="footer" className="sr-only" />
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Fluid Big Display Heading */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Clark &bull; Portfolio
            </span>
            <span className="text-xs font-mono text-emerald-400">
              Web &bull; Mobile &bull; AI
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white/90 leading-none select-none hover:text-white transition-colors">
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
              SOMETHING GREAT.
            </span>
          </h2>
        </div>

        {/* Middle Row: Info, Manila Clock, Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10 items-start">
          {/* Bio Summary */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Clark &mdash; Full-Stack Web, Mobile &amp; AI Engineer
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering web, mobile, and AI solutions from the Philippines. Focused on clean architecture,
              responsive design, and reliable software delivery.
            </p>
          </div>

          {/* Live Manila Clock Widget */}
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
              <MdLocationPin className="text-emerald-400 text-sm" />
              <span>Location</span>
            </div>
            <div className="text-sm font-semibold text-white">
              Manila, Philippines
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-emerald-300">
              <MdSchedule className="text-sm" />
              <span>{phTime || "Loading Manila Time..."}</span>
              <span className="text-[10px] text-slate-500 font-sans">GMT+8</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Connect
            </div>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c101a] border border-white/10 hover:border-emerald-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all active:scale-95"
                >
                  {renderSocialIcon(link.iconName)}
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Clark. Built with Next.js, Tailwind &amp; TypeScript.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c101a] hover:bg-[#121824] text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
          >
            <span>Back to Top</span>
            <MdArrowUpward className="text-sm text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
