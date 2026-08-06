import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="px-6 md:px-[10%] pt-24 pb-20 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-20 bg-[#740A03] dark:bg-[#740A03]" />
          <span className="font-mono text-[#740A03] dark:text-[#740A03] font-bold text-xs uppercase tracking-[0.3em]">
            Engineering Protocol V3.0
          </span>
        </div>
        
        <h1 className="text-[12vw] md:text-[8rem] font-black leading-[0.85] uppercase tracking-tighter mb-12 text-black dark:text-white transition-colors duration-500">
          Beyond The<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#740A03] dark:from-[#740A03] to-black dark:to-white">Script.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl transition-colors duration-500 mb-10">
              Bridging the gap between <span className="text-black dark:text-white font-bold transition-colors duration-500">structural system architecture and high-performance digital interfaces</span> & robust system architectures through precision logic and creative problem-solving.
            </p>
           
            <motion.button 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('Resume_Noora.pdf', '_blank')}
              className="group flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-black text-xs uppercase tracking-[0.2em] shadow-[8px_8px_0px_#740A03] hover:shadow-none transition-all">
              <FileText size={16} className="text-[#740A03]" />
               Resume
              <Download size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
            </motion.button>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4">
            {[
              { label: 'Status', value: 'Active / Available', color: 'text-green-600 dark:text-green-400' },
              { label: 'Location', value: 'Amman, Jordan', color: 'text-black dark:text-white' },
              { label: 'Specialization', value: 'Software Arch & UI', color: 'text-black dark:text-white' }
            ].map((spec, i) => (
              <div key={i} className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2 text-[10px] font-mono uppercase opacity-50 hover:opacity-100 transition-all duration-500">
                <span>{spec.label}</span>
                <span className={spec.color}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
