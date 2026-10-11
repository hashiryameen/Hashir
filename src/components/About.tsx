import React from 'react';
import { RealHashirPhoto } from './RealHashirPhoto';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-10 sm:py-16 bg-[#080C10] border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Natural Header Lockup with Compact Integrated Photo */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 pb-6 border-b border-slate-800/80">
          {/* Compact Transparent Photo */}
          <RealHashirPhoto variant="about" />

          {/* Title and Intro */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-1.5">
              <span className="w-4 h-0.5 bg-[#B8F228] inline-block" />
              <span>About Me</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              The Story Behind <span className="text-[#B8F228]">{PERSONAL_INFO.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              PPC Specialist · Google Ads Expert · Affiliate Marketer
            </p>
          </div>
        </div>

        {/* Story Content & Stat Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a PPC Specialist and Affiliate Marketing professional with hands-on experience managing Google Search campaigns for affiliate businesses. I work with leading affiliate networks such as Awin and other performance marketing platforms, focusing on keyword research, brand research, campaign optimization, bidding, tracking, and performance analysis.
              </p>
              <p>
                At PerksLogics, I have managed <strong className="text-white font-semibold">70+ search campaigns</strong> across affiliate brands and generated <strong className="text-white font-semibold">up to $15K in monthly affiliate commissions</strong>. Alongside PPC and affiliate marketing, I have strong experience in Excel and data management.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                {PERSONAL_INFO.careerGoal}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-[#B8F228] hover:bg-[#C8FA3C] transition-all shadow-md cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Review Verified Campaigns ↓
              </a>
            </div>
          </div>

          {/* Right: 3 Prominent Stat Callouts (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-[#121820] rounded-xl p-4 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400 font-mono">Managed Campaigns</div>
                <div className="text-xs text-slate-300 mt-0.5">Google Search Architecture</div>
              </div>
              <div className="text-2xl font-black text-[#B8F228] font-mono tabular-nums">
                70+
              </div>
            </div>

            <div className="bg-[#121820] rounded-xl p-4 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400 font-mono">Affiliate Commission Peak</div>
                <div className="text-xs text-slate-300 mt-0.5">Monthly Publisher Volume</div>
              </div>
              <div className="text-2xl font-black text-white font-mono tabular-nums">
                $15K
              </div>
            </div>

            <div className="bg-[#121820] rounded-xl p-4 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400 font-mono">Managed Reach</div>
                <div className="text-xs text-slate-300 mt-0.5">High-Intent Impressions</div>
              </div>
              <div className="text-2xl font-black text-[#B8F228] font-mono tabular-nums">
                115K+
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
