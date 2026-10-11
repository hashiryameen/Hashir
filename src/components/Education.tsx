import React from 'react';
import { EDUCATION_DATA, LANGUAGES_DATA } from '../data/portfolioData';
import { GraduationCap, Languages, BookCheck, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            07. Academic & Language Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Academic & Training History</span>
            </h3>

            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages & Certification Learning Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Languages Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Languages</span>
              </h3>

              <div className="space-y-3">
                {LANGUAGES_DATA.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {lang.name}
                    </span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Continuous Learning Statement */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Certifications & Continuous Learning</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently expanding my expertise through continuous learning in AI, PPC and digital marketing.
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>Hands-on campaign execution with active ongoing self-study</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
