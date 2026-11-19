import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  const milestones = [
    {
      year: "Year 1 (Completed)",
      title: "Foundational Computing",
      desc: "Structured programming, mathematics, digital logic, and introduction to computer science."
    },
    {
      year: "Year 2 (Completed)",
      title: "Core Systems & Algorithms",
      desc: "Data structures, object-oriented programming, operating systems, and computer networks."
    },
    {
      year: "Year 3 (Current - In Progress)",
      title: "Cybersecurity Specialization",
      desc: "Network security, information assurance, web application testing, and specialized security coursework."
    },
    {
      year: "Expected 2028",
      title: "Bachelor's Graduation",
      desc: "Culmination of degree requirements and graduation capstone project in Cybersecurity."
    }
  ];

  return (
    <section id="education" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>05 // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Formal university degree studies at Zagazig University.
          </p>
        </div>

        {/* Main University Card */}
        <div className="cyber-card p-6 sm:p-10 rounded-3xl border-cyan-500/30 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-cyan-glow">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  CURRENT ENROLLMENT • THIRD YEAR
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {education.institution}
                </h3>
                <p className="text-slate-300 font-medium text-base sm:text-lg mt-1">
                  {education.faculty}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Specialization: <strong className="text-cyan-300">{education.specialization}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Expected Graduation: <strong className="text-slate-200">{education.graduationYear}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Progression Timeline */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" /> Degree Progression
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((item, index) => {
                const isCurrent = index === 2;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                      isCurrent
                        ? 'bg-cyan-950/20 border-cyan-500/50 shadow-cyan-glow'
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          isCurrent ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                      <h5 className="text-sm font-semibold text-slate-200 mb-1.5">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
