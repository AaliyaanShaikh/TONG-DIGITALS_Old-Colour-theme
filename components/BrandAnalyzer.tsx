
import React, { useState } from 'react';
import { analyzeBrand } from '../services/geminiService';
import { BrandAnalysis } from '../types';
import { BrainCircuit, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

const BrandAnalyzer: React.FC = () => {
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BrandAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !industry) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeBrand(description, industry);
      setResult(data);
    } catch (err) {
      setError("We encountered an issue analyzing your brand. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-analyzer" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-950/20 to-black p-1 rounded-3xl border border-purple-500/20 shadow-2xl">
          <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-[inherit]">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <BrainCircuit className="w-10 h-10 text-purple-500" />
                <h2 className="text-3xl md:text-4xl font-bold">Tong AI Strategist</h2>
              </div>
              <p className="text-gray-400 text-lg mb-10">
                Instantly receive elite-level direction. Describe your project and our proprietary AI will generate a market-dominating strategy for you.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-purple-400 mb-2">Industry</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Fintech, Luxury Fashion, SaaS" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-purple-400 mb-2">Business Description</label>
                    <textarea 
                      placeholder="Define your vision and unique value proposition..." 
                      className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all purple-glow"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating Insights...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Execute AI Analysis
                      </>
                    )}
                  </button>
                </form>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                  {!result && !loading && !error && (
                    <div className="text-center text-gray-500">
                      <p>Awaiting parameters for strategic generation.</p>
                    </div>
                  )}

                  {loading && (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-4 bg-white/10 rounded w-3/4"></div>
                      <div className="h-4 bg-white/10 rounded w-full"></div>
                      <div className="h-4 bg-white/10 rounded w-5/6"></div>
                      <div className="h-4 bg-white/10 rounded w-1/2 mt-8"></div>
                    </div>
                  )}

                  {error && (
                    <div className="text-red-400 text-center">{error}</div>
                  )}

                  {result && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <div className="mb-6">
                        <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-2">Strategic Vision</h4>
                        <p className="text-gray-200 leading-relaxed italic">"{result.strategy}"</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-4">Tactical Moves</h4>
                        <ul className="space-y-3">
                          {result.recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-2">Ideal Demographic</h4>
                        <p className="text-sm text-gray-400">{result.targetAudience}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAnalyzer;
