import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Edit3, Save, X, Building, DollarSign, Layers } from 'lucide-react';
import { WORK_EXPERIENCE_DATA } from '../data/portfolioData';
import { WorkExperienceItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<WorkExperienceItem[]>(WORK_EXPERIENCE_DATA);
  const [isEditingActiveMedia, setIsEditingActiveMedia] = useState(false);
  const [activeMediaDetails, setActiveMediaDetails] = useState({
    duration: 'Experience Record',
    notes: 'PPC and affiliate marketing role contributing to search campaign setup, publisher operational requirements, and keyword monitoring.',
  });

  const mainExp = experiences.find((e) => e.id === 'perkslogics');
  const activeMedia = experiences.find((e) => e.id === 'active-media');
  const secondaryExps = experiences.filter((e) => e.id === 'youngs-food' || e.id === 'canvas-cooperative');

  const handleSaveActiveMedia = () => {
    setExperiences((prev) =>
      prev.map((item) =>
        item.id === 'active-media'
          ? {
              ...item,
              duration: activeMediaDetails.duration,
              responsibilities: [
                activeMediaDetails.notes,
                'Publisher affiliate coordination and search campaign support.',
              ],
            }
          : item
      )
    );
    setIsEditingActiveMedia(false);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            03. Career Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Hands-on performance marketing roles managing search campaigns, publisher monetization, and data records.
          </p>
        </div>

        {/* PRIMARY EXPERIENCE: PerksLogics */}
        {mainExp && (
          <div className="mb-10 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-blue-500/30 dark:border-blue-500/40 shadow-xs relative overflow-hidden">
            
            {/* Top Bar inside Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Featured Main Role
                  </span>
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Affiliate & PPC</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {mainExp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{mainExp.company}</span>
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal">{mainExp.location}</span>
                </div>
              </div>

              <div className="flex sm:flex-col items-start sm:items-end gap-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{mainExp.duration}</span>
                </div>
              </div>
            </div>

            {/* Carefully worded highlight banner */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Affiliate Commission Benchmark</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Up to $15K in monthly affiliate commissions
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Campaign Scale</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    70+ Google Search campaigns managed
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Responsibilities List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Core Responsibilities & Operations
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {mainExp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* OTHER PPC / AFFILIATE EXPERIENCE: Active Media (Customizable Placeholder) */}
        {activeMedia && (
          <div className="mb-10 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                  PPC / Affiliate Marketing Experience
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{activeMedia.company}</span>
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">({activeMedia.location})</span>
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Duration: {activeMedia.duration} (Editable Record)
                </div>
              </div>

              <button
                onClick={() => setIsEditingActiveMedia(!isEditingActiveMedia)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditingActiveMedia ? 'Cancel' : 'Update Record'}</span>
              </button>
            </div>

            {isEditingActiveMedia ? (
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl space-y-3 border border-slate-200 dark:border-slate-700">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Dates / Duration
                  </label>
                  <input
                    type="text"
                    value={activeMediaDetails.duration}
                    onChange={(e) =>
                      setActiveMediaDetails({ ...activeMediaDetails, duration: e.target.value })
                    }
                    placeholder="e.g. 2022 - 2023 or Ongoing"
                    className="w-full text-xs px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Responsibilities Note
                  </label>
                  <textarea
                    rows={3}
                    value={activeMediaDetails.notes}
                    onChange={(e) =>
                      setActiveMediaDetails({ ...activeMediaDetails, notes: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setIsEditingActiveMedia(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveActiveMedia}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Record</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
                {activeMedia.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">·</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ADDITIONAL RESUME EXPERIENCE: Secondary Tier */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Additional Marketing Support & Distribution Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryExps.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {exp.company}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {exp.role}
                </p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400">·</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
