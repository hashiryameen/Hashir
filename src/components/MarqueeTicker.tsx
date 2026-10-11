import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'Google Ads Specialist',
    'PPC Campaigns',
    'Affiliate Marketing',
    'Keyword Research',
    'Awin Publisher',
    '70+ Search Campaigns',
    'Up to $15K Monthly Commissions',
    'Data Analytics & Excel',
    'Search Conversion Tracking',
  ];

  return (
    <div className="w-full bg-[#B8F228] text-slate-950 py-3.5 overflow-hidden font-extrabold text-xs sm:text-sm uppercase tracking-wider select-none shadow-md border-y border-black/10">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-black text-xs">▼</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
