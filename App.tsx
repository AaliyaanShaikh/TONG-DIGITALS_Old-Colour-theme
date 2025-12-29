
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Advanced smooth scroll handler
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    // Apple-style Intersection Observer for scroll reveals
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    const refreshReveals = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    refreshReveals();

    return () => {
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-purple-600/30 overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div className="relative z-10 bg-black">
           <Services />
           <Portfolio />
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
