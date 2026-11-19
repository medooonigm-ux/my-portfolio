import React from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Shield, Code2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, socials } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow -top-32 left-1/4 bg-cyan-500/20" />
      <div className="ambient-glow top-1/2 -right-32 bg-blue-600/15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Cybersecurity & Academic Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-surface/90 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                {personal.statusBadge} • {personal.university}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-slate-400">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                {personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-cyan">
                {personal.title}
              </h2>
            </div>

            {/* Description - Honest, Student Developing Skills */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Third-year Cybersecurity student at <span className="text-white font-medium">Zagazig University</span> with practical experience in modern Front-End web development and hands-on cybersecurity labs. Focused on building clean, user-friendly digital experiences while continuously developing practical security fundamentals.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm sm:text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-cyan-glow hover:shadow-cyan-glow-lg group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-surface/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">
                Profiles:
              </span>
              
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={socials.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-red-500/40 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              >
                <Terminal className="w-4 h-4 text-red-400" />
                <span>TryHackMe</span>
              </a>
            </div>

          </div>

          {/* Right Hero Visual / Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Tech Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-teal-500/30 blur-lg opacity-70 animate-pulse"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-[#0d1527] border border-cyan-500/30 overflow-hidden shadow-2xl p-6">
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-slate-400">nigm@terminal:~</span>
                  </div>
                  <span className="text-cyan-400/80 font-semibold">[SEC_INIT]</span>
                </div>

                {/* Profile Portrait Area */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center group">
                  {personal.photo ? (
                    <img
                      src={personal.photo}
                      alt={personal.name}
                      className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* High-tech Silhouette Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 to-[#0b1220]">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-cyan-500/40 flex items-center justify-center mb-4 bg-cyan-950/30 relative">
                        <Shield className="w-10 h-10 text-cyan-400 opacity-90" />
                        <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-cyber-card border border-cyan-500/50">
                          <Code2 className="w-3.5 h-3.5 text-cyan-300" />
                        </div>
                      </div>
                      
                      <div className="font-mono text-sm font-semibold text-slate-200">
                        {personal.fullName}
                      </div>
                      <div className="font-mono text-xs text-cyan-400 mt-1">
                        Cybersecurity • Front-End
                      </div>
                      <div className="mt-3 text-[11px] font-mono text-slate-500 border border-slate-800/80 px-2.5 py-1 rounded bg-slate-950/60">
                        photo.jpg ready for upload
                      </div>
                    </div>
                  )}

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-400/60"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-400/60"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-400/60"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-400/60"></div>
                </div>

                {/* Sub-card Quick Stats (Genuine info only) */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-slate-500">Degree Focus</div>
                    <div className="text-slate-200 font-medium">Cybersecurity</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-slate-500">Expected Grad</div>
                    <div className="text-cyan-300 font-medium">{personal.expectedGraduation}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
