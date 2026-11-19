import React from 'react';
import { Shield, Terminal, Users, ExternalLink, Network, Search, Server, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Cybersecurity() {
  const { cybersecurityOverview, socials } = portfolioData;
  const { teamProject, tryhackme } = cybersecurityOverview;

  return (
    <section id="cybersecurity" className="relative py-20 border-t border-slate-800/80 bg-[#080c14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono mb-3">
            <span>04 // SECURITY & LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Cybersecurity <span className="text-gradient-cyan">Practice</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Hands-on lab environments, reconnaissance concepts, and collaborative security exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Team Penetration Testing Card */}
          <div className="lg:col-span-7 cyber-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-blue-500/30">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Collaborative Academic Project
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {teamProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Conducted as a collaborative team project focusing on the systematic phases of security testing: network mapping, service reconnaissance, and controlled testing concepts within simulated educational targets.
              </p>

              {/* Core Execution Points */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <Network className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Network Reconnaissance & Host Discovery</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Utilized Nmap to perform host discovery, port scanning techniques, and service version enumeration.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <Server className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Vulnerability Assessment Concepts</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Explored controlled penetration testing workflows and auxiliary modules utilizing Metasploit.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <Search className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Team Collaboration & Documentation</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Worked closely with teammates to assess system behaviors and record structured technical observations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Used Badge Strip */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 mb-2.5">Key Tools & Concepts:</div>
              <div className="flex flex-wrap gap-2">
                {teamProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* TryHackMe Profile & Hands-on Labs Card */}
          <div className="lg:col-span-5 cyber-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-slate-800 hover:border-red-500/40">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                      Hands-on Practice Platform
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      TryHackMe Labs
                    </h3>
                  </div>
                </div>
              </div>

              {/* Terminal-like status box */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-2 mb-6">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-900">
                  <span>tryhackme_telemetry.log</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ACTIVE
                  </span>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400">$</span> user: <span className="text-white font-bold">{tryhackme.username}</span>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400">$</span> specialization: <span className="text-white">Cybersecurity</span>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400">$</span> domains: <span className="text-slate-300">Linux, Networking, Web Pentesting</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {tryhackme.summary}
              </p>
            </div>

            {/* Direct TryHackMe CTA */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                href={tryhackme.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/40 text-red-300 hover:text-white font-mono text-sm font-semibold transition-all group shadow-sm"
              >
                <span>View TryHackMe Profile</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
