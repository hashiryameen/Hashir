import React from 'react';
import { RealGoogleAdsScreenshot } from './RealCampaignScreenshots';
import { CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  onOpenLightbox: (title: string, content: React.ReactNode) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenLightbox }) => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0A0E13] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-2">
            <span className="w-5 h-0.5 bg-[#B8F228] inline-block" />
            <span>Campaign Evidence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Real Campaign Results & Case Study
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
            Direct visual proof from active Google Ads search campaigns at PerksLogics.
          </p>
        </div>

        {/* Focused Google Ads Case Study Card */}
        <div className="bg-[#121820] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <span className="text-[#B8F228] font-bold">Platform: Google Ads</span>
                <span>·</span>
                <span>Google Search</span>
                <span>·</span>
                <span>PerksLogics</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Affiliate PPC Campaign — Google Search
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>10 / 10 Campaigns Grew Clicks</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real Screenshot (7 cols) */}
            <div className="lg:col-span-7">
              <RealGoogleAdsScreenshot
                onEnlarge={() =>
                  onOpenLightbox(
                    'Google Ads Search Campaign Overview',
                    <RealGoogleAdsScreenshot />
                  )
                }
              />
              <p className="text-[11px] text-slate-400 mt-2.5 flex items-center justify-between">
                <span>Actual dashboard screenshot (Feb 17 – Oct 8, 2026)</span>
                <span className="text-[#B8F228] font-mono">hashirperkslogic@gmail.com</span>
              </p>
            </div>

            {/* Right: Key Verified Metrics & Actions (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-[#161D26] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Clicks</div>
                  <div className="text-xl font-bold text-blue-400 font-mono mt-0.5">10.7K</div>
                </div>
                <div className="bg-[#161D26] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Impressions</div>
                  <div className="text-xl font-bold text-rose-400 font-mono mt-0.5">115K</div>
                </div>
                <div className="bg-[#161D26] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Avg. CPC</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">Rs 429</div>
                </div>
                <div className="bg-[#161D26] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Total Cost</div>
                  <div className="text-xl font-bold text-amber-400 font-mono mt-0.5">Rs 4.6M</div>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-2 pt-2">
                <div className="font-semibold text-white text-xs uppercase tracking-wider text-slate-400">
                  Key Execution Highlights:
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8F228] mt-0.5">▸</span>
                    <span>Keyword & brand research to identify high-ROI search queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8F228] mt-0.5">▸</span>
                    <span>Bid strategy and budget pacing across 10 search campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8F228] mt-0.5">▸</span>
                    <span>Ad performance monitoring and quality score optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8F228] mt-0.5">▸</span>
                    <span>Generated up to $15K in monthly affiliate commissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
