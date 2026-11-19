import React from 'react';
import { ArrowUp, Github, Linkedin, Terminal, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#05080f] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
              <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span>{personal.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {personal.title}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Zagazig University • Faculty of Computers and Information (Expected 2028)
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socials.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TryHackMe"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>© {new Date().getFullYear()} Ahmed Nigm. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
