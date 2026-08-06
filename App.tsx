import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Phone, 
  ArrowUpRight,
  Mail,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';
import Card from './components/Card';
import Hero from './components/Hero';
import ExperienceLog from './components/ExperienceLog';
import { PROJECTS, SKILLS } from './constants';
import { useActiveSection } from './hooks/useActiveSection';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const activeSection = useActiveSection(['about', 'work', 'skills', 'experience']);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setIsLoaded(true);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const skillItemVariants: Variants = {
    initial: { scale: 1, opacity: 0.5, x: 0 },
    hover: (i: number) => ({
      scale: 1.05,
      opacity: 1,
      x: 8,
      transition: { 
        duration: 0.3, 
        delay: i * 0.05,
        ease: "easeOut" 
      }
    })
  };

  return (
    <div className={`min-h-screen selection:bg-[#740A03] selection:text-white transition-colors duration-500 text-black dark:text-white ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#740A03] dark:bg-[#740A03] origin-left z-[3000]" style={{ scaleX }} />
      <div className="scanline" />

      <nav className="fixed top-0 w-full bg-[#FBFCF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 z-[2000] px-6 md:px-[10%] py-4 flex justify-between items-center transition-colors duration-500">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-start cursor-pointer group" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white transition-colors duration-500">
              NORAH
            </span>
            <span className="font-script text-[#740A03] text-sm md:text-base -mt-1 ml-4 whitespace-nowrap opacity-90 transition-transform group-hover:translate-x-1 duration-300">
              Beyond the Script.
            </span>
          </div>
        </motion.div>

        <div className="hidden md:flex gap-8 text-[0.65rem] font-black uppercase tracking-[0.2em] items-center">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)}
              className={`transition-all hover:tracking-[0.3em] py-1 border-b-2 ${activeSection === item.id ? 'text-[#740A03] dark:text-[#740A03] border-[#740A03] dark:border-[#740A03]' : 'text-black/50 dark:text-white/40 border-transparent hover:text-black dark:hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 hover:bg-[#740A03] dark:hover:bg-[#740A03] dark:hover:text-white transition-all shadow-[6px_6px_0px_rgba(116,10,3,0.2)] hover:shadow-none translate-y-0 active:translate-y-1 active:shadow-none"
          >
            Connect
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#FBFCF8] dark:bg-[#0a0a0a] z-[2500] flex flex-col justify-center items-center gap-8 p-10 md:hidden transition-colors duration-500"
          >
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScroll(e, item.id)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-[#740A03] dark:hover:text-[#740A03]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-4xl font-black uppercase tracking-tighter hover:text-[#740A03] dark:hover:text-[#740A03]"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Hero />

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center pb-20 opacity-20"
        >
          <ChevronDown size={32} />
        </motion.div>

        <section id="about" className="px-6 md:px-[10%] py-24 bg-white/40 dark:bg-black/20 backdrop-blur-sm border-y border-black/5 dark:border-white/5 scroll-mt-32 transition-colors duration-500">
           <div className="max-w-4xl mx-auto text-center">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="font-mono text-[#740A03] dark:text-[#740A03] uppercase text-xs tracking-[0.5em]"
             >
               Self_Protocol
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-6 mb-10"
             >
               Defining the <span className="text-[#740A03] dark:text-[#740A03]">Architectural</span> layer of user experience.
             </motion.h2>
             <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
               I specialize in translating abstract system logic into high-fidelity codebases. Currently finalizing my Software Engineering degree, I bridge the gap between architectural UML design and dynamic frontend implementation.
             </p>
           </div>
        </section>

        <section id="work" className="px-6 md:px-[10%] py-24 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm border-y border-black/5 dark:border-white/5 relative scroll-mt-32 transition-colors duration-500">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">Archives.</h2>
              <p className="font-mono text-[10px] opacity-40 mt-4 uppercase tracking-[0.2em]">Engineering blue-prints & deployment logs</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://github.com/nooramaj', '_blank')}
              className="flex items-center gap-3 font-black text-xs uppercase tracking-widest border-2 border-black dark:border-white px-8 py-4 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
            >
              Repository <Github size={18} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <Card 
                key={idx} 
                index={idx}
                project={project}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="px-6 md:px-[10%] py-24 overflow-hidden scroll-mt-32 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <span className="font-mono text-[#740A03] dark:text-[#740A03] font-bold text-sm tracking-[0.3em] uppercase block mb-12 text-center">Capability_Matrix</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {SKILLS.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="relative p-8 border-2 border-transparent bg-white/80 dark:bg-black/40 backdrop-blur-sm group hover:border-[#740A03] dark:hover:border-[#740A03] transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] font-mono group-hover:bg-[#740A03] dark:group-hover:bg-[#740A03] group-hover:text-white transition-colors">
                    M{idx + 1}
                  </div>
                  <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-[#740A03] dark:group-hover:text-[#740A03] transition-colors">{skill.category}</h4>
                  <ul className="space-y-4">
                    {skill.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        custom={i}
                        variants={skillItemVariants}
                        className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-light transition-colors"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-[#740A03] dark:bg-[#740A03] opacity-30" 
                        />
                        <span className="group-hover:text-black dark:group-hover:text-white font-medium">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ExperienceLog />
      </main>

      <footer id="contact" className="bg-[#0a0a0a] text-white px-6 md:px-[10%] pt-40 pb-16 relative overflow-hidden scroll-mt-32">
        <motion.div 
          style={{ opacity: 0.05 }}
          animate={{ x: [-100, 100] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-0 left-0 text-[25vw] font-black pointer-events-none select-none leading-none -mb-24 -ml-10"
        >
          NORAH
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-14 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-light uppercase tracking-tighter mb-12 leading-none"
          >
            Architecting the <br /> 
            <span className="text-[#740A03] italic font-script lowercase tracking-normal text-5xl md:text-8xl transition-transform hover:translate-x-4 inline-block duration-500 cursor-default">
              Abstract
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start w-full text-left">
            <div>
              <p className="font-mono text-[10px] uppercase opacity-40 mb-6 tracking-[0.4em]">Primary Endpoint</p>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="mailto:nooramaj@icloud.com" 
                className="group flex items-center gap-4 inline-flex"
              >
                <div className="p-5 bg-white/5 rounded-full group-hover:bg-[#740A03] transition-colors shrink-0">
                  <Mail size={32} />
                </div>
                <p className="text-xl md:text-3xl font-light underline break-all">nooramaj@icloud.com</p>
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 gap-12 border-l border-white/10 pl-12">
              <div className="space-y-8">
                <h5 className="font-mono text-[10px] uppercase opacity-40 tracking-[0.4em]">COMMS</h5>
                <a href="tel:+962782562109" className="flex items-center gap-3 hover:text-[#740A03] transition-all text-xs font-black tracking-widest uppercase">
                  <Phone size={14} /> JORDAN_GSM
                </a>
                <a href="https://wa.me/971557850770" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#740A03] transition-all text-xs font-black tracking-widest uppercase">
                  <MessageCircle size={14} /> WHATSAPP
                </a>
              </div>
              <div className="space-y-8">
                <h5 className="font-mono text-[10px] uppercase opacity-40 tracking-[0.4em]">NODES</h5>
                <a href="https://github.com/nooramaj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#740A03] transition-all text-xs font-black tracking-widest uppercase">
                  <Github size={14} /> GITHUB_REPO
                </a>
                <a href="https://www.linkedin.com/in/noora-almajaideh-9492ab216/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#740A03] transition-all text-xs font-black tracking-widest uppercase">
                  <Linkedin size={14} /> LINKEDIN_CORE
                </a>
              </div>
            </div>
          </div>

          <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] font-mono tracking-[0.5em] uppercase gap-4 w-full">
            <p>© 2026 NOORA ALMAJAIDEH // SYSTEM ARCHITECT</p>
            <p>V4.0_REACTIVE_CORE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
