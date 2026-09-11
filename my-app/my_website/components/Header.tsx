"use client";

import React, { useState, useEffect } from "react";
import { NAV_ROUTES, SOCIAL_LINKS } from "@/data/portfolioData";
import { MdMenu, MdClose, MdNorthEast } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection("contact");
        return;
      }

      const sections = NAV_ROUTES.map((route) => route.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const githubLink = SOCIAL_LINKS.find((s) => s.platform.toLowerCase().includes("github"))?.url || "https://github.com/clarkcyl";
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform.toLowerCase().includes("linkedin"))?.url || "https://linkedin.com";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/40"
        : "bg-[#07090e]/60 backdrop-blur-md border-b border-white/[0.04]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#overview"
            onClick={(e) => scrollToSection(e, "#overview")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-sm tracking-wider shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Clark<span className="text-emerald-400">.dev</span>
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400/50" />
            <span>Web &bull; Mobile &bull; AI</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
          {NAV_ROUTES.map((route) => {
            const isActive = activeSection === route.id;
            return (
              <a
                key={route.id}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.href)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${isActive
                  ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 font-semibold shadow-sm shadow-emerald-500/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400/80 animate-pulse" />
                )}
                <span>{route.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Socials, Status & CTA */}
        <div className="flex items-center gap-3">
          {/* Quick Social Icons */}
          <div className="hidden lg:flex items-center gap-2 border-r border-white/10 pr-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin className="text-sm" />
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95"
          >
            <span>Get in Touch</span>
            <MdNorthEast className="text-sm" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <MdClose className="text-lg" /> : <MdMenu className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#07090e]/95 backdrop-blur-2xl px-6 py-5 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300"
              >
                <FaGithub className="text-xs" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300"
              >
                <FaLinkedin className="text-xs" />
              </a>
            </div>
          </div>

          <div className="space-y-1">
            {NAV_ROUTES.map((route) => {
              const isActive = activeSection === route.id;
              return (
                <a
                  key={route.id}
                  href={route.href}
                  onClick={(e) => scrollToSection(e, route.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-slate-200 hover:bg-white/5"
                    }`}
                >
                  <span>{route.label}</span>
                  <span className="text-xs text-slate-500 font-mono">#{route.id}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              <span>Get in Touch</span>
              <MdNorthEast />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
