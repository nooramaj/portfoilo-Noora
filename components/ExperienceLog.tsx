import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceLog: React.FC = () => {
  return (
    <section id="experience" className="px-6 md:px-[10%] py-24 bg-white/60 dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden relative scroll-mt-32 transition-colors duration-500 border-y border-black/5 dark:border-white/5">
      <div className="absolute top-0 right-0 p-12 opacity-5 dark:opacity-5 font-mono text-9xl font-black select-none uppercase text-black dark:text-white">Execution</div>
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="font-mono text-[#740A03] dark:text-[#740A03] font-bold text-sm tracking-[0.3em] uppercase block mb-12">Practical History</span>
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 group">
              <div className="md:col-span-4 border-l-2 border-[#740A03] dark:border-[#740A03] pl-6 transition-all group-hover:pl-8">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">{exp.role}</h4>
                <p className="font-mono text-[10px] uppercase text-[#740A03] dark:text-[#740A03] font-bold tracking-widest">Protocol_{idx + 1}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl font-light text-gray-500 dark:text-gray-400 leading-relaxed mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {exp.description}
                </p>
                <div className="bg-black/5 dark:bg-white/5 p-6 border border-black/10 dark:border-white/10 font-mono text-xs text-gray-600 dark:text-gray-400">
                  <span className="text-[#740A03] dark:text-[#740A03] mr-2">{">>>"}</span> {exp.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLog;
