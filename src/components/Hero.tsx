import React from 'react';
import { RealHashirPhoto } from './RealHashirPhoto';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#FAFAF8] relative overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Dark Kicker Tag matching Reference 1: ● NAME / TITLE */}
            <div className="mb-6 flex items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#121619] shadow-xs tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                <span>HASHIR YAMEEN</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-300 font-mono text-[11px]">PPC SPECIALIST & AFFILIATE MARKETER</span>
              </div>
            </div>

            {/* Headline with bold styling and green accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6 text-balance">
              Scaling <span className="text-[#65A30D] underline decoration-lime-400 decoration-wavy decoration-2">Performance</span> That Drives Affiliate Growth.
            </h1>

            {/* Bio line matching reference structure */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Hi, I'm <strong className="text-slate-900 font-bold">{PERSONAL_INFO.name}</strong>. I manage Google Search campaigns across affiliate brands and execute data-driven bidding and keyword strategies to turn search queries into scalable conversions.
            </p>

            {/* Action Buttons matching Reference 1 */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-black hover:bg-slate-800 transition-all shadow-md cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#A3E635]" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-xs"
              >
                <span>View My Work</span>
              </a>
            </div>

            {/* Bottom trust checklist matching Reference 1 */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D]" />
                <span>70+ Search Campaigns Managed</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D]" />
                <span>Up to $15K Monthly Commissions</span>
              </span>
            </div>

          </div>

          {/* Right: Real Photo with 4 Floating Dark Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RealHashirPhoto variant="hero" />
          </div>

        </div>
      </div>

    </section>
  );
};
