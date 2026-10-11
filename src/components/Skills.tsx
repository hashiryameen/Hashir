import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#080C10] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8F228] mb-2">
              <span className="w-5 h-0.5 bg-[#B8F228] inline-block" />
              <span>Skills & Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Core Technical Competencies
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B8F228]" />
              Advanced
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Intermediate
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              Beginner
            </span>
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS_DATA.map((skill) => {
            const isAdvanced = skill.level === 'Advanced';
            const isIntermediate = skill.level === 'Intermediate';

            return (
              <div
                key={skill.id}
                className="bg-[#121820] rounded-xl p-4 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isAdvanced
                        ? 'text-[#B8F228]'
                        : isIntermediate
                        ? 'text-blue-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden mt-1">
                  <div
                    className={`h-full rounded-full ${
                      isAdvanced
                        ? 'bg-[#B8F228]'
                        : isIntermediate
                        ? 'bg-blue-400'
                        : 'bg-slate-500'
                    }`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
