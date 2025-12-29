
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`container mx-auto transition-all duration-700 ${scrolled ? 'max-w-5xl' : 'max-w-full'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass rounded-full px-8 py-2 shadow-2xl border-white/10' : ''}`}>
          <a href="#" className="flex items-center gap-3 group">
            <Logo size={scrolled ? "sm" : "md"} isMinimal={scrolled} className="transition-all duration-500" />
            <div className="flex flex-col leading-none">
              <span className="text-white text-sm tracking-[0.2em] font-black uppercase">Tong</span>
              <span className="text-purple-500 text-[10px] tracking-[0.4em] font-light uppercase">Digital</span>
            </div>
          </a>
          
          <div className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
            <a href="#services" className="hover:text-purple-400 transition-colors cursor-pointer">Services</a>
            <a href="#work" className="hover:text-purple-400 transition-colors cursor-pointer">Work</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors cursor-pointer">Contact</a>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all text-[10px] uppercase tracking-widest font-black shadow-lg shadow-purple-900/20 active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
