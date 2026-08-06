import React, { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="relative group hover:text-burgundy transition-colors duration-300"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-burgundy group-hover:w-full transition-all duration-300"></span>
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8 transition-all duration-500 ${isScrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
      <div className="w-full flex justify-between items-center">
        <a href="#" className="flex flex-col leading-none group">
          <div className="text-3xl font-black tracking-tighter text-[#1A1A1A] dark:text-[#EDEDED] uppercase group-hover:scale-105 transition-transform duration-300">
            NORAH
          </div>
          <div className="text-sm font-script text-burgundy -mt-1 ml-4 transform -rotate-1 group-hover:rotate-1 transition-all">
            Beyond the Script.
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
          <NavLink href="#dashboard">Dashboard</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Archive</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 ml-4 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg className="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-700 hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;