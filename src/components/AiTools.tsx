import React from 'react';
import { AI_TOOLS_DATA } from '../data/portfolioData';
import { Bot, Sparkles, BookOpen, Cpu, ArrowUpRight } from 'lucide-react';

export const AiTools: React.FC = () => {
  return (
    <section id="ai-tools" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            06. Evolving Tech Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            AI Tools & Productivity
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            An evolving skill domain. Continuously learning and experimenting with generative AI and productivity models to streamline keyword research, responsive search ad copy ideation, and campaign workflow automation.
          </p>
        </div>

        {/* Learning Commitment Callout */}
        <div className="mb-10 p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-3.5">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Continuous Learning Philosophy:</strong> I do not claim advanced or exclusive mastery in generative AI; rather, I integrate these tools practically into daily PPC workflows to speed up keyword clustering, ad variant generation, and Excel formula generation.
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_TOOLS_DATA.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold text-xs">
                      {tool.name.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {tool.name}
                    </h3>
                  </div>
                  
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Active Learning
                  </span>
                </div>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {tool.usageContext}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Application: Daily Workflows</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
