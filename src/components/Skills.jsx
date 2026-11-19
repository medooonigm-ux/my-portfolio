import React, { useState } from 'react';
import { Code, Shield, Terminal, Layout, Cpu, Check, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const { frontend, cybersecurity } = portfolioData.skills;

  return (
    <section id="skills" className="relative py-20 border-t border-slate-800/80 bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>02 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Categorized skills across Front-End development and hands-on Cybersecurity fundamentals.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-cyber-surface border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'frontend'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Front-End
            </button>
            <button
              onClick={() => setActiveTab('cybersecurity')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === 'cybersecurity'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cybersecurity
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Front-End Category Box */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="cyber-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Front-End Development</h3>
                    <p className="text-xs font-mono text-slate-400">UI / UX & Web Applications</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-300">
                  {frontend.length} Technologies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                {frontend.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-xl bg-slate-900/60 border transition-all duration-200 flex items-center justify-between ${
                      skill.highlight
                        ? 'border-cyan-500/40 hover:border-cyan-400/80 bg-cyan-950/20'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Special focus on React, component-based architectures, and responsive styling.</span>
              </div>
            </div>
          )}

          {/* Cybersecurity Category Box */}
          {(activeTab === 'all' || activeTab === 'cybersecurity') && (
            <div className="cyber-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Cybersecurity & Networking</h3>
                    <p className="text-xs font-mono text-slate-400">Tools, Protocols & Virtual Labs</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-blue-300">
                  {cybersecurity.length} Tools & Topics
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                {cybersecurity.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-xl bg-slate-900/60 border transition-all duration-200 flex items-center justify-between ${
                      skill.highlight
                        ? 'border-blue-500/40 hover:border-blue-400/80 bg-blue-950/20'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-blue-400' : 'bg-slate-600'}`} />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Hands-on practice on TryHackMe, Linux environments, and reconnaissance workflows.</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
