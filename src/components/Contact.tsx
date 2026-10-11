import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `PPC & Marketing Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Hashir,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#0A0E13] border-t border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Short & Clean Header */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#B8F228] bg-[#B8F228]/10 border border-[#B8F228]/30 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F228]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect &amp; Work Together
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Reach out directly for Google Ads campaigns, affiliate marketing, or performance marketing roles.
          </p>
        </div>

        {/* 3 Quick-Tap Contact Action Cards (Ideal for Mobile & Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          
          {/* Card 1: WhatsApp & Direct Phone */}
          <div className="bg-[#121820] rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-[#B8F228]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-slate-800 text-[#B8F228] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#B8F228]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                WhatsApp &amp; Phone
              </div>
              <div className="text-sm font-bold text-white mt-0.5 break-all">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`https://wa.me/${cleanPhone}?text=Hi%20Hashir,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 text-center rounded-xl bg-[#B8F228] hover:bg-[#C8FA3C] text-slate-950 text-xs font-bold transition-colors cursor-pointer"
              >
                WhatsApp Chat
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="py-2 px-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 text-xs font-medium transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Card 2: Direct Email */}
          <div className="bg-[#121820] rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-[#B8F228]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-slate-800 text-[#B8F228] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#B8F228]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Direct Email
              </div>
              <div className="text-sm font-bold text-white mt-0.5 break-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full block py-2 px-3 text-center rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn & Location */}
          <div className="bg-[#121820] rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-[#B8F228]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-slate-800 text-[#B8F228] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#B8F228] bg-black/60 px-2 py-0.5 rounded-md border border-[#B8F228]/30">
                  Open for Work
                </span>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Location &amp; Profile
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8F228]" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 text-xs font-medium transition-colors"
                title="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Short & Clean Quick Message Form (Single-Container Layout) */}
        <div className="bg-[#121820] rounded-2xl p-5 sm:p-7 border border-slate-800 max-w-2xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800/80">
            <MessageSquare className="w-4 h-4 text-[#B8F228]" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Send a Quick Note
            </h3>
          </div>

          {submitted ? (
            <div className="p-5 rounded-xl bg-black/60 border border-[#B8F228]/40 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#B8F228]/20 text-[#B8F228] flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white">Email Client Triggered</div>
              <p className="text-xs text-slate-400">
                Your message is ready to send to {PERSONAL_INFO.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#B8F228] hover:underline mt-2 font-semibold cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ali Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-hidden focus:border-[#B8F228] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Your Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-hidden focus:border-[#B8F228] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about your Google Ads campaign, affiliate project, or job opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-hidden focus:border-[#B8F228] transition-colors"
                />
              </div>

              <div className="pt-1 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Replies typically within 24 hours
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-[#B8F228] hover:bg-[#C8FA3C] transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
