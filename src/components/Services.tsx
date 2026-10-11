import React from 'react';
import { Target, Layers, Database, ArrowRight, TrendingUp } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const services = [
    {
      id: 'google-search',
      title: 'Google Search Campaigns',
      icon: Target,
      description:
        'End-to-end Google Search campaign management for affiliate brands. Keyword research, match type architecture, bid management (tCPA, Max Clicks), and daily budget pacing across 70+ campaigns.',
      tag: '70+ Search Campaigns',
    },
    {
      id: 'affiliate-marketing',
      title: 'Affiliate Marketing & Awin',
      icon: Layers,
      description:
        'Publisher monetization across leading affiliate networks like Awin. Aligning high-intent search traffic with top-converting coupon and brand landing pages to generate up to $15K in monthly commissions.',
      tag: 'Up to $15K Commissions',
    },
    {
      id: 'data-excel',
      title: 'Data Management & Excel',
      icon: Database,
      description:
        'Rigorous Excel reporting and data management. Analyzing Clicks, Impressions, CTR, CPC, Cost, Conversions, and ROI with pivot tables, formulas, and verified publisher transaction auditing.',
      tag: 'Advanced Excel',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#0B0F14] border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-2">
              <span className="w-5 h-0.5 bg-[#B8F228] inline-block" />
              <span>Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Delivering Value Through Core Performance Capabilities
            </h2>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#B8F228] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>View All Campaigns</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Dark Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-[#121820] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-[#B8F228]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Icon Box with Lime Accent */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-[#B8F228] text-[#B8F228] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#B8F228] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#B8F228] bg-black/40 px-2.5 py-1 rounded-md border border-[#B8F228]/20">
                    {srv.tag}
                  </span>
                  
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Contact</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8F228]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
