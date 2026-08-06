import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface CardProps {
  project: Project;
  index?: number;
}

const Card: React.FC<CardProps> = ({ project, index = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      className={`
        relative group overflow-hidden
        bg-white dark:bg-black/40 border-l-4 p-8 
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isExpanded 
          ? 'border-[#740A03] dark:border-[#740A03] shadow-[20px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[20px_20px_0px_rgba(255,255,255,0.02)] md:col-span-2' 
          : 'border-black dark:border-white/20 hover:border-[#740A03] dark:hover:border-[#740A03] hover:-translate-y-1 hover:shadow-[15px_15px_0px_rgba(0,0,0,0.02)] dark:hover:shadow-[15px_15px_0px_rgba(255,255,255,0.01)]'}
        flex flex-col h-full cursor-pointer
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r transition-colors ${isExpanded ? 'border-[#740A03] dark:border-[#740A03]' : 'border-gray-200 dark:border-white/10 group-hover:border-[#740A03] dark:group-hover:border-[#740A03]'}`} />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ opacity: isExpanded ? 1 : [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-2 h-2 ${isExpanded ? 'bg-[#740A03] dark:bg-[#740A03]' : 'bg-black dark:bg-white/40 group-hover:bg-[#740A03] dark:group-hover:bg-[#740A03]'}`}
          />
          <h3 className="text-lg font-black uppercase tracking-[0.1em] text-black dark:text-white transition-colors duration-500">{project.title}</h3>
        </div>
        <div className="text-gray-400 group-hover:text-[#740A03] dark:group-hover:text-[#740A03]">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      <motion.div layout className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow font-light transition-colors duration-500">
        {project.description}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5">
              <p className="text-black dark:text-white font-medium text-sm mb-4 uppercase tracking-widest transition-colors duration-500">Architectural Depth</p>
              <p className="text-gray-500 dark:text-gray-400 text-[13px] mb-6 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-black dark:text-white font-medium text-[10px] uppercase tracking-[0.2em] opacity-40 transition-colors duration-500">System Features</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFeatures?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#740A03] dark:bg-[#740A03] mt-1.5 shrink-0" />
                      <span className="text-[12px] text-gray-600 dark:text-gray-400 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank');
                }}
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-[#740A03] dark:hover:bg-[#740A03] dark:hover:text-white transition-colors"
              >
                Access_Deployment <ExternalLink size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] font-mono border border-black/5 dark:border-white/5 px-1 bg-gray-50 dark:bg-white/5 dark:text-gray-400 transition-colors duration-500">{tag}</span>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase text-gray-400">Ref: {project.title.slice(0,3).toUpperCase()}_LOG</span>
      </motion.div>
    </motion.div>
  );
};

export default Card;
