import React from 'react';
import { GraduationCap, Code2, ShieldAlert, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: GraduationCap,
      title: "Cybersecurity Major",
      desc: "Third-year student at Zagazig University (Faculty of Computers & Information).",
    },
    {
      icon: Code2,
      title: "Front-End Development",
      desc: "Building practical web interfaces with React, JavaScript, HTML5, CSS3, and modern tools.",
    },
    {
      icon: ShieldAlert,
      title: "Hands-on Security",
      desc: "Practicing networking, reconnaissance, and web penetration concepts via TryHackMe labs.",
    },
    {
      icon: BookOpen,
      title: "Verified Training",
      desc: "Trained through DEPI (React), Creativa (UI/UX 75h), and NTI Summer Training (128h).",
    },
  ];

  return (
    <section id="about" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>01 // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Front-End developer and Cybersecurity student focused on steady skill growth and practical execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative / Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="cyber-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                My Story & Direction
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="text-white">Ahmed Mohamed Abdelsalam Nigm</strong>, a third-year undergraduate student specializing in <span className="text-cyan-300">Cybersecurity</span> at <span className="text-white">Zagazig University's Faculty of Computers and Information</span> (Expected Graduation: 2028).
                </p>
                <p>
                  My passion spans two complementary domains: crafting clean, responsive <span className="text-cyan-300 font-medium">Front-End user interfaces</span> and understanding the fundamental mechanisms of <span className="text-blue-300 font-medium">Cybersecurity and Networking</span>.
                </p>
                <p>
                  Rather than relying on theory alone, I develop my abilities through concrete execution: developing web applications like my React Movie App, building client websites, participating in team security projects, and consistently solving cybersecurity challenges in hands-on labs like TryHackMe.
                </p>
              </div>

              {/* Verified Principles */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Practical, project-driven learning</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Clean, responsive, maintainable code</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Hands-on lab experimentation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Transparent & honest development</span>
                </div>
              </div>

            </div>
          </div>

          {/* Cards / Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="cyber-card p-5 rounded-xl flex items-start gap-4 group hover:border-cyan-500/40"
                >
                  <div className="p-3 rounded-lg bg-cyber-surface border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
