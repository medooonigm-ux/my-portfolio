import React, { useState } from 'react';
import { LayoutGrid, Shield, Code, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>03 // PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects & <span className="text-gradient-cyan">Creations</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Practical Front-End web applications and hands-on Cybersecurity collaborative labs.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-cyber-surface border border-slate-800 max-w-md w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeFilter === 'frontend'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Front-End ({projects.filter(p => p.category === 'frontend').length})
            </button>
            <button
              onClick={() => setActiveFilter('cybersecurity')}
              className={`flex-1 min-w-[110px] py-2 px-3 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeFilter === 'cybersecurity'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cybersecurity ({projects.filter(p => p.category === 'cybersecurity').length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Project Modal Lightbox */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
