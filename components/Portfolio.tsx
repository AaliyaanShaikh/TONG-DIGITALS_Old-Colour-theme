
import React, { useEffect } from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-24 reveal">
          <div className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Case Archive —</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">Crafting the <br /><span className="text-gradient">Iconic.</span></h2>
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">Projects that redefined market standards and pushed creative boundaries.</p>
        </div>

        <div className="space-y-32">
          {PORTFOLIO.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 reveal`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-[40px] shadow-2xl transition-all duration-1000 group-hover:shadow-purple-900/20">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full aspect-video object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <span className="text-purple-500 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">{item.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight group-hover:text-purple-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">An immersive study in digital transformation, focusing on user-centric high-fidelity interactions.</p>
                <button className="inline-flex items-center gap-4 text-white font-bold group/btn">
                  <span className="border-b-2 border-purple-500 pb-1 group-hover/btn:pr-4 transition-all duration-300">Detailed Report</span>
                  <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-40 text-center reveal">
          <button className="bg-white/5 border border-white/10 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-600 transition-all duration-500 group">
            Explore All Creations <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
