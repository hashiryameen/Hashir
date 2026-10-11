import React from 'react';
import { TrendingUp, CheckCircle, BarChart3, DollarSign, Calendar, Layers } from 'lucide-react';

interface GoogleAdsReplicaProps {
  onOpenZoom?: () => void;
}

export const GoogleAdsDashboardView: React.FC<GoogleAdsReplicaProps> = ({ onOpenZoom }) => {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-800 font-sans shadow-md select-none">
      {/* Google Ads Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
            Google Ads Overview
          </span>
          <span className="text-slate-500">|</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
            All campaigns (10 active)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Feb 17 – Oct 8, 2026</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">hashirperkslogic@gmail.com</span>
        </div>
      </div>

      {/* AI / Optimization Insight Note matching real screenshot */}
      <div className="p-3 bg-slate-800/60 rounded-lg text-xs text-slate-300 mb-5 border border-slate-700/50 leading-relaxed">
        <strong className="text-blue-400">Campaign Performance Note:</strong> Of the 10 campaigns, 10 had an increase in clicks and 0 had a decrease. 2 top contributing campaigns drove 410 of the clicks increase. Keyword targeting optimized for 8 campaigns, bids adjusted for 9 campaigns.
      </div>

      {/* Metric Cards Grid matching real screenshot */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        
        {/* Clicks */}
        <div className="bg-blue-600/90 rounded-lg p-3.5 text-white shadow-xs">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-100">Clicks</div>
          <div className="text-2xl font-extrabold mt-1 tracking-tight font-mono tabular-nums">10.7K</div>
          <div className="text-[11px] text-blue-100/90 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Search intent traffic</span>
          </div>
        </div>

        {/* Impressions */}
        <div className="bg-rose-600/90 rounded-lg p-3.5 text-white shadow-xs">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-100">Impressions</div>
          <div className="text-2xl font-extrabold mt-1 tracking-tight font-mono tabular-nums">115K</div>
          <div className="text-[11px] text-rose-100/90 mt-1">High-relevance ad reach</div>
        </div>

        {/* Avg. CPC */}
        <div className="bg-slate-800 rounded-lg p-3.5 text-white border border-slate-700 shadow-xs">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Avg. CPC</div>
          <div className="text-2xl font-extrabold mt-1 tracking-tight font-mono tabular-nums">Rs 429</div>
          <div className="text-[11px] text-slate-400 mt-1">Disciplined bid control</div>
        </div>

        {/* Cost */}
        <div className="bg-amber-600/90 rounded-lg p-3.5 text-white shadow-xs">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-100">Cost</div>
          <div className="text-2xl font-extrabold mt-1 tracking-tight font-mono tabular-nums">Rs 4.6M</div>
          <div className="text-[11px] text-amber-100/90 mt-1">Allocated across 10 campaigns</div>
        </div>

      </div>

      {/* Campaign Trend Curve SVG matching the waveform in the screenshot */}
      <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Performance Trend (Feb 16 – Oct 5, 2026)</span>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1 text-blue-400"><span className="w-2 h-0.5 bg-blue-400 inline-block" /> Clicks</span>
            <span className="flex items-center gap-1 text-rose-400"><span className="w-2 h-0.5 bg-rose-400 inline-block" /> Impressions</span>
            <span className="flex items-center gap-1 text-amber-400"><span className="w-2 h-0.5 bg-amber-400 inline-block" /> Cost</span>
          </div>
        </div>
        <div className="h-28 w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 100" preserveAspectRatio="none">
            {/* Gridlines */}
            <line x1="0" y1="25" x2="600" y2="25" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="600" y2="50" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
            <line x1="0" y1="75" x2="600" y2="75" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
            
            {/* Impressions Line (Rose) */}
            <path
              d="M 0 95 Q 120 95 150 90 T 210 20 T 260 40 T 320 25 T 390 60 T 450 75 T 510 40 T 560 50 L 600 80"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="2.5"
            />
            
            {/* Clicks Line (Blue) */}
            <path
              d="M 0 97 Q 120 97 150 92 T 210 35 T 260 52 T 320 30 T 390 68 T 450 82 T 510 48 T 560 58 L 600 88"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
            />

            {/* Cost Line (Amber) */}
            <path
              d="M 0 98 Q 120 98 150 94 T 210 30 T 260 45 T 320 38 T 390 65 T 450 78 T 510 52 T 560 62 L 600 90"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const AffiliateDashboardView: React.FC<{ onOpenZoom?: () => void }> = () => {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-800 font-sans shadow-md select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            Affiliate Publisher Earnings & Performance
          </span>
          <span className="text-slate-500">|</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
            Awin & Partner Networks
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Monthly Settlement Cycle
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Side: Earnings Overview */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Earnings Overview
          </div>

          {/* Pending Card */}
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Pending Approval</div>
              <div className="text-xs text-slate-500">Waiting for Advertiser Approval</div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold font-mono text-blue-400 tabular-nums">USD 4,182.47</div>
            </div>
          </div>

          {/* Approved Card */}
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-emerald-400 font-medium">Approved Commissions</div>
              <div className="text-xs text-slate-500">Waiting for Advertiser to Pay</div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold font-mono text-emerald-400 tabular-nums">USD 6,009.77</div>
            </div>
          </div>

          {/* Declined Card */}
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-rose-400">Declined</div>
              <div className="text-xs text-slate-500">Non-qualifying referrals</div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold font-mono text-rose-400 tabular-nums">USD 1,953.34</div>
            </div>
          </div>

          {/* Paid Card */}
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-300 font-medium">Paid Disbursements</div>
              <div className="text-xs text-slate-500">Disbursed to bank</div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold font-mono text-white tabular-nums">USD 5,480.41</div>
            </div>
          </div>
        </div>

        {/* Right Side: Performance Overview & Waveform */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Performance Overview (Monthly)
          </div>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total Commissions</div>
              <div className="text-lg font-bold font-mono text-white mt-0.5 tabular-nums">17.6K</div>
            </div>
            <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Transactions</div>
              <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5 tabular-nums">1.1K</div>
            </div>
            <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total Sales</div>
              <div className="text-lg font-bold font-mono text-blue-400 mt-0.5 tabular-nums">304.6K</div>
            </div>
          </div>

          {/* Commission Activity Graph */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Daily Commission Peaks (Day 1 – 31)</span>
              <span className="text-[11px] text-emerald-400 font-mono">Commission Volume Active</span>
            </div>
            <div className="h-28 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
                <line x1="0" y1="25" x2="500" y2="25" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="500" y2="50" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                
                {/* Previous Period line */}
                <path
                  d="M 0 92 Q 80 92 110 55 T 160 85 T 210 40 T 260 70 T 310 50 T 370 10 T 430 80 L 500 88"
                  fill="none"
                  stroke="#64748b"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />

                {/* Current Period Activity Curve */}
                <path
                  d="M 0 95 L 40 95 Q 60 70 80 82 T 130 88 T 190 92 T 260 92 T 330 92 T 420 95 L 500 95"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>Day 1</span>
              <span>Day 10</span>
              <span>Day 20</span>
              <span>Day 31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
