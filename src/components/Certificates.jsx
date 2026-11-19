import React, { useState } from 'react';
import { Award, Clock, CheckCircle2, Eye, Building2, ShieldCheck, Hourglass, ZoomIn, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const { certifications } = portfolioData;

  return (
    <section id="certificates" className="relative py-20 border-t border-slate-800/80 bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>06 // TRAINING & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Training & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Verified credentials, government initiatives, and hands-on technical programs.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cyber-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-slate-800 hover:border-cyan-500/50 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <Building2 className="w-3 h-3" /> {cert.organization}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  {cert.hasCertificate ? (
                    <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Verified Credential
                    </span>
                  ) : cert.isPendingCertificate ? (
                    <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 animate-pulse">
                      <Hourglass className="w-3 h-3" /> Completed • Pending Cert
                    </span>
                  ) : (
                    <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      Curriculum
                    </span>
                  )}
                </div>

                {/* Certificate Thumbnail Preview if Available */}
                {cert.image && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative mb-5 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/10] cursor-pointer group/thumb"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-300 opacity-90 group-hover/thumb:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
                      <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 bg-slate-950/80 px-2 py-1 rounded border border-cyan-500/30">
                        <ZoomIn className="w-3 h-3" /> Click to enlarge
                      </span>
                      {cert.grade && (
                        <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/30">
                          {cert.grade}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Track and Details */}
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-slate-200 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    Track: <strong className="text-cyan-300">{cert.track}</strong>
                  </span>
                  {cert.duration && (
                    <span className="text-slate-400 flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      <Clock className="w-3 h-3 text-cyan-400" /> {cert.duration}
                    </span>
                  )}
                  {cert.date && (
                    <span className="text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {cert.date}
                    </span>
                  )}
                </div>

                {/* Topics Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-slate-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {cert.hasCertificate
                    ? "Official Certificate Attached"
                    : cert.isPendingCertificate
                    ? "Training Completed"
                    : "Coursework Overview"}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono font-medium transition-all group-hover:border-cyan-500/60"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{cert.hasCertificate ? "View Certificate" : "View Details"}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
}
