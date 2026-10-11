import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070A0D] py-10 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-[#B8F228]">
              HY
            </div>
            <div>
              <span className="font-bold text-white text-sm">{PERSONAL_INFO.name}</span>
              <span className="text-slate-500 text-xs ml-2">PPC & Affiliate Marketing</span>
            </div>
          </div>

          <div className="flex items-center gap-5 font-semibold text-slate-300">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B8F228] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B8F228] transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#B8F228] transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>© 2026 {PERSONAL_INFO.name}. All rights reserved.</div>
          <div>Karachi, Pakistan · Performance Marketing</div>
        </div>
      </div>
    </footer>
  );
};
