
import React, { useEffect } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-40 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl reveal">
            <div className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Our Capabilities —</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">We provide the <br /><span className="text-gradient">Tactical Edge.</span></h2>
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium">From identity design to high-frequency performance marketing, we architect every facet of your digital presence.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group p-12 bg-black hover:bg-[#080808] transition-all duration-700 relative overflow-hidden reveal`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="mb-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 relative z-10">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-6 relative z-10 tracking-tight group-hover:text-purple-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10 text-lg group-hover:text-gray-300 transition-colors">{service.description}</p>
              
              <div className="mt-12 relative z-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
                  System Deep Dive <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
