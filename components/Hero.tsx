
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 px-6">
      {/* Immersive Parallax Background */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-700/5 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div 
          className="mb-12 transform transition-transform duration-1000 ease-out"
          style={{ transform: `scale(${Math.max(0.6, 1 - scrollY * 0.0008)}) translateY(${scrollY * -0.15}px)` }}
        >
          <Logo size="xl" className="mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 border border-purple-500/20 rounded-full bg-purple-500/5 text-purple-400 text-[10px] font-bold tracking-[0.3em] uppercase reveal active">
            Digital Strategic Excellence
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-10 reveal active delay-100">
            Built for the <br />
            <span className="text-gradient">Hyper-Scalable.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-2xl mb-16 leading-relaxed font-medium reveal active delay-200">
            Elite marketing architecture powered by cutting-edge intelligence. We don't just follow trends; we define the future of digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal active delay-300">
            <a href="#work" className="bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl">
              Explore Our Work
            </a>
            <a href="#contact" className="glass px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-12 flex flex-col items-center gap-2 text-gray-500 transition-opacity duration-500 ${scrollY > 100 ? 'opacity-0' : 'opacity-100 animate-pulse'}`}>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover More</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
