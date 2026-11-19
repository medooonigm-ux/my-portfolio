import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Terminal, CheckCircle2, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials } = portfolioData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the visitor's email client with a pre-filled message addressed to your inbox
    const mailSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const mailBody = encodeURIComponent(
      `From: ${formData.name}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${socials.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Have an internship, project, or opportunity in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Direct Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="cyber-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Available Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Connect directly through my professional and technical profiles:
              </p>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${socials.email}`}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {socials.email}
                    </div>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-green-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">
                      {socials.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Professional Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      Ahmed Nigm on LinkedIn
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Code Repositories</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      @medooonigm-ux
                    </div>
                  </div>
                </a>

                {/* TryHackMe */}
                <a
                  href={socials.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-red-500/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 group-hover:scale-105 transition-transform">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Hands-on Security Labs</div>
                    <div className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors">
                      AhmedNigm on TryHackMe
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 cyber-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop a note regarding front-end projects, collaboration, or student opportunities.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="font-mono text-base font-semibold text-white">
                  Email Client Opened
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Your email app should have opened with the message pre-filled — just hit send. You can also reach me directly at {socials.email} or via WhatsApp.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-cyan-400 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Front-End Project / Internship"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm font-mono transition-all shadow-cyan-glow hover:shadow-cyan-glow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
