import React from 'react';
import { GraduationCap, Languages, Building, Layers, DollarSign } from 'lucide-react';
import { WORK_EXPERIENCE_DATA, EDUCATION_DATA, LANGUAGES_DATA } from '../data/portfolioData';

export const CareerEducation: React.FC = () => {
  const perksLogics = WORK_EXPERIENCE_DATA.find((e) => e.id === 'perkslogics');

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#0B0F14] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-2">
            <span className="w-5 h-0.5 bg-[#B8F228] inline-block" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Experience & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Experience: PerksLogics (7 cols) */}
          <div className="lg:col-span-7">
            {perksLogics && (
              <div className="bg-[#121820] rounded-2xl p-6 sm:p-7 border border-[#B8F228]/40 shadow-xl relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B8F228]">
                      Featured Role
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {perksLogics.role}
                    </h3>
                    <div className="text-xs font-semibold text-slate-300 flex items-center gap-2 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-[#B8F228]" />
                      <span>{perksLogics.company}</span>
                      <span className="text-slate-500">·</span>
                      <span className="text-slate-400 font-normal">{perksLogics.location}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-black/50 border border-slate-700 text-[#B8F228] text-xs font-mono font-semibold">
                    {perksLogics.duration}
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="p-3 bg-black/40 rounded-xl border border-slate-800/80 mb-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#B8F228]" />
                    <span className="text-slate-300">
                      Generated <strong className="text-white">up to $15K in monthly affiliate commissions</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#B8F228]" />
                    <span className="text-slate-300">
                      Managed <strong className="text-white">70+ search campaigns</strong>
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {perksLogics.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B8F228] mt-0.5">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Education & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="bg-[#121820] rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="pb-2.5 border-b border-slate-800/80 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{edu.degree}</span>
                      <span className="text-[#B8F228] font-mono text-[11px]">{edu.duration}</span>
                    </div>
                    <div className="text-xs text-slate-400">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Continuous Learning */}
            <div className="bg-[#121820] rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-3">
                <Languages className="w-4 h-4" />
                <span>Languages & Growth</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                {LANGUAGES_DATA.map((lang, idx) => (
                  <div key={idx} className="flex-1 bg-black/40 p-2.5 rounded-lg border border-slate-800 text-center">
                    <div className="text-xs font-bold text-white">{lang.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Currently expanding expertise through continuous learning in AI tools and advanced PPC strategies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
