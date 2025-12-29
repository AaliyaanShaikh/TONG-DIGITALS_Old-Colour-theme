
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Scale Your <br /> <span className="text-purple-500">Empire.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-md">
              Tong Digital is ready to architect your next phase of growth. Reach out to our partners today.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8">Executive Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-purple-500 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <textarea placeholder="Project Overview" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-purple-500 transition-colors h-24 resize-none"></textarea>
              <button className="flex items-center gap-2 text-white font-bold bg-purple-600 px-8 py-4 rounded-full hover:bg-purple-700 transition-all shadow-lg purple-glow">
                Submit Inquiry <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-gray-500 text-sm">
          <p>© 2024 Tong Digital. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Strategic Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
