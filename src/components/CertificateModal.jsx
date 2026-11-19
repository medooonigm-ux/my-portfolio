import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0d1527] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#080c14]/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                Verified Credential Viewer
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {cert.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Real Certificate Image or Clean Placeholder */}
          <div className="relative rounded-xl border border-slate-700 bg-slate-950/80 min-h-[260px] flex items-center justify-center overflow-hidden">
            {cert.image ? (
              <img
                src={cert.image}
                alt={`${cert.name} Certificate`}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            ) : cert.isPendingCertificate ? (
              /* NTI Pending Certificate State */
              <div className="p-8 text-center max-w-md flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
                  <Award className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Training Completed
                </div>
                <h4 className="font-mono text-base font-semibold text-white">
                  Official NTI Certificate In Issuance
                </h4>
                <p className="text-xs text-slate-300 mt-2 font-mono leading-relaxed">
                  Ahmed has successfully completed the intensive practical training program in Penetration Testing at NTI. The credential image will be uploaded once officially issued.
                </p>
              </div>
            ) : (
              /* Clean, Honest Placeholder - NOT fake certificate */
              <div className="p-8 text-center max-w-md flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className="font-mono text-base font-semibold text-white">
                  Real Certificate Asset Slot
                </h4>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  {cert.hasCertificate
                    ? `Ahmed will provide the authentic certificate image file for: "${cert.name}". Placeholder ready for drop-in.`
                    : "Continuous practical coursework (no single external certificate claimed)."}
                </p>
                {cert.imagePlaceholder && (
                  <div className="mt-4 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                    Expected asset: src/assets/certificates/{cert.imagePlaceholder}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Certificate Credential Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 font-mono block text-xs">Issuing Organization</span>
              <span className="text-white font-medium text-sm mt-0.5 block">{cert.organization}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 font-mono block text-xs">Track / Duration</span>
              <span className="text-cyan-300 font-medium text-sm mt-0.5 block">{cert.track} {cert.duration ? `(${cert.duration})` : ''}</span>
            </div>
          </div>

          {/* Topics Studied */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Curriculum Topics Studied:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cert.topics.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {cert.note && (
            <p className="text-xs text-slate-400 italic">
              {cert.note}
            </p>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#080c14]/90 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
