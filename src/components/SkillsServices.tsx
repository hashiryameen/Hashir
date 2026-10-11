import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

interface SkillsServicesProps {
  onOpenContact: () => void;
}

export const SkillsServices: React.FC<SkillsServicesProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ppc' | 'affiliate'>('all');
  const [showProficiencyBreakdown, setShowProficiencyBreakdown] = useState(false);

  const disciplines = [
    {
      id: 'ppc',
      disciplineNumber: 'DISCIPLINE 01',
      title: 'Google Ads Search & PPC Architecture',
      categoryBadge: 'Search & PPC',
      icon: Search,
      description:
        'High-intent keyword research, match type architecture, bid management (tCPA, Max Clicks), and daily budget pacing across 70+ search campaigns to maximize conversion efficiency.',
      whatIDeliver: [
        '70+ Search Campaigns Managed',
        'Quality Score & Ad Copy Testing',
        'High-Intent Keyword Segmentation',
        'Conversion Tracking Audits',
      ],
      skills: [
        { name: 'Google Ads', level: 'Advanced', pct: 95 },
        { name: 'PPC Management', level: 'Advanced', pct: 92 },
        { name: 'Keyword Research', level: 'Advanced', pct: 90 },
        { name: 'Conversion Tracking', level: 'Intermediate', pct: 75 },
        { name: 'Google Tag Manager', level: 'Beginner', pct: 50 },
        { name: 'Meta Ads', level: 'Beginner', pct: 45 },
      ],
      actionLabel: 'Discuss Search Campaign',
    },
    {
      id: 'affiliate',
      disciplineNumber: 'DISCIPLINE 02',
      title: 'Affiliate Marketing & Performance Growth',
      categoryBadge: 'Awin & Analytics',
      icon: TrendingUp,
      description:
        'Publisher monetization across leading performance networks like Awin. Connecting search intent directly with top-converting coupon landing pages to generate up to $15K in monthly commissions.',
      whatIDeliver: [
        'Up to $15K Monthly Commissions',
        'Awin Publisher Link Tracking',
        'Transaction & ROI Reconciliation',
        'Advanced Excel Reporting & Ledgers',
      ],
      skills: [
        { name: 'Affiliate Marketing', level: 'Advanced', pct: 92 },
        { name: 'Awin Network', level: 'Advanced', pct: 90 },
        { name: 'Microsoft Excel', level: 'Advanced', pct: 95 },
        { name: 'Data Entry', level: 'Advanced', pct: 95 },
        { name: 'ChatGPT & AI Tools', level: 'Intermediate', pct: 80 },
        { name: 'Canva', level: 'Intermediate', pct: 70 },
      ],
      actionLabel: 'Discuss Affiliate Strategy',
    },
  ];

  const visibleDisciplines = disciplines.filter(
    (d) => activeTab === 'all' || d.id === activeTab
  );

  return (
    <section id="skills-services" className="py-20 sm:py-28 bg-[#FAFAF8] text-slate-900 relative border-y border-slate-200/80 scroll-mt-20">
      {/* Invisible anchor points for navigation */}
      <span id="services" className="-top-24 relative block" />
      <span id="skills" className="-top-24 relative block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Tabs matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D7C0F] mb-2">
              <span className="w-5 h-0.5 bg-[#4D7C0F] inline-block" />
              <span>CORE DISCIPLINES &amp; COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Skills &amp; Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Combining Google Search PPC architecture with commercial affiliate marketing and Excel data management to build profitable, scalable digital campaigns.
            </p>
          </div>

          {/* Filter Pills matching Reference */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-full shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveTab('ppc')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ppc'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              PPC &amp; SEARCH
            </button>
            <button
              onClick={() => setActiveTab('affiliate')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'affiliate'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              AFFILIATE &amp; DATA
            </button>
          </div>
        </div>

        {/* Merged White Cards Grid matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {visibleDisciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Discipline Tag & Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-[#4D7C0F] tracking-wider">
                      {item.disciplineNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {item.categoryBadge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black text-[#A3E635] flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* WHAT I DELIVER Box matching Reference */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                      <ShieldCheck className="w-4 h-4 text-[#4D7C0F]" />
                      <span>WHAT I DELIVER</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700">
                      {item.whatIDeliver.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4D7C0F] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SKILLS / TECHNOLOGIES Badges matching Reference */}
                  <div className="mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      CORE TECHNOLOGIES &amp; COMPETENCIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((s, sIdx) => (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4D7C0F]" />
                          <span>{s.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">({s.level})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link matching Reference */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#4D7C0F] transition-colors cursor-pointer group"
                  >
                    <span>{item.actionLabel}</span>
                    <div className="w-6 h-6 rounded-full bg-[#A3E635] flex items-center justify-center text-slate-950 group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Detailed Proficiency Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Detailed Proficiency Breakdown
                </h4>
                <p className="text-xs text-slate-500">
                  Granular proficiency meters across all 12 validated tools &amp; competencies
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowProficiencyBreakdown(!showProficiencyBreakdown)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{showProficiencyBreakdown ? 'Hide Breakdown' : 'View Full Breakdown'}</span>
              {showProficiencyBreakdown ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {showProficiencyBreakdown && (
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-in fade-in duration-200">
              {SKILLS_DATA.map((skill) => {
                const isAdvanced = skill.level === 'Advanced';
                const isIntermediate = skill.level === 'Intermediate';

                return (
                  <div
                    key={skill.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          isAdvanced
                            ? 'text-[#4D7C0F]'
                            : isIntermediate
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isAdvanced
                            ? 'bg-[#4D7C0F]'
                            : isIntermediate
                            ? 'bg-blue-600'
                            : 'bg-slate-400'
                        }`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
