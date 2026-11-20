import React from 'react';
import { ExternalLink, Eye, Shield, Layout, Sparkles, Terminal, Users, Github } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const isFeaturedLarge = project.featured && (project.id === 'astra-telemetry' || project.id === 'movie-app');
  const isCyber = project.category === 'cybersecurity';

  return (
    <div
      className={`cyber-card rounded-2xl flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
        isFeaturedLarge
          ? 'border-cyan-500/60 bg-gradient-to-b from-cyan-950/20 via-[#0d1527] to-[#0d1527] shadow-cyan-glow md:col-span-2 lg:col-span-2'
          : 'hover:border-cyan-500/40'
      }`}
    >
      {/* Top Banner Tag */}
      {project.highlightBadge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide bg-slate-950/80 border border-cyan-500/40 text-cyan-300 backdrop-blur-md shadow-lg">
            {(isFeaturedLarge || project.featured) && <Sparkles className="w-3 h-3 text-cyan-400" />}
            {project.isTeamProject && <Users className="w-3 h-3 text-cyan-400" />}
            {project.isLabShowcase && <Terminal className="w-3 h-3 text-cyan-400" />}
            {project.highlightBadge}
          </span>
        </div>
      )}

      {/* Project Image Preview if available */}
      {project.image && (
        <div className={`relative w-full overflow-hidden bg-slate-900 border-b border-slate-800/80 ${
          isFeaturedLarge ? 'h-48 sm:h-56' : 'h-40'
        }`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-black/40 pointer-events-none" />
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        
        {/* Category & Icon */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-cyber-surface border border-slate-800 text-cyan-400">
            {isCyber ? <Shield className="w-4 h-4" /> : <Layout className="w-4 h-4" />}
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            {isCyber ? 'Cybersecurity' : 'Front-End'}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors ${
          isFeaturedLarge ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

      </div>

      {/* Card Action Bar */}
      <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors py-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code on GitHub"
              title="GitHub Source"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs font-mono font-medium transition-all"
            >
              <span>{project.isLabShowcase ? 'View Profile' : 'Live Demo'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500 px-2 py-1">
              Internal / Team Project
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
