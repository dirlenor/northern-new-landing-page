import React, { useState } from 'react';
import { Send, Loader2, Compass } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';
import { TripRequest, PlannerState } from '../types';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-8 text-white/40 leading-relaxed font-light text-base">
      {lines.map((line, index) => {
        if (line.startsWith('###')) {
          return <h3 key={index} className="text-2xl font-light italic text-white mt-16 mb-6 border-b border-white/5 pb-4 tracking-tight">{line.replace('###', '').trim()}</h3>;
        }
        if (line.startsWith('**')) {
             return <p key={index} className="font-semibold text-white tracking-widest uppercase text-xs">{line.replace(/\*\*/g, '')}</p>
        }
        if (line.trim().startsWith('-')) {
          return (
            <div key={index} className="flex gap-6 items-start">
              <span className="w-1 h-1 rounded-full bg-[#bfdce0] mt-2.5 flex-shrink-0"></span>
              <p>{line.replace('-', '').trim()}</p>
            </div>
          );
        }
        if (line.trim() === '') return <div key={index} className="h-4" />;
        return <p key={index} className="leading-relaxed">{line}</p>;
      })}
    </div>
  );
};

const TripPlanner: React.FC = () => {
  const [formData, setFormData] = useState<TripRequest>({
    destination: '',
    duration: '',
    budget: 'Moderate',
    interests: [],
  });
  const [state, setState] = useState<PlannerState>({
    isLoading: false,
    result: null,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ isLoading: true, result: null, error: null });
    try {
      const result = await generateItinerary(formData);
      setState({ isLoading: false, result, error: null });
    } catch (err: any) {
      setState({ isLoading: false, result: null, error: err.message });
    }
  };

  return (
    <section id="planner" className="py-40 bg-[#05080a] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-32">
          <div className="flex justify-center mb-10">
            <div className="w-px h-20 bg-[#bfdce0]/30"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight italic text-white mb-10 tracking-tighter">The Sanctuary Planner</h2>
          <p className="text-white/30 text-lg font-light italic max-w-lg mx-auto leading-relaxed">
            Begin the sequence of your retreat. Every detail curated by artificial intelligence to ensure total immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Form Side */}
          <div className="bg-white/[0.02] backdrop-blur-3xl rounded-xl p-12 border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-16">
              <div className="space-y-6">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfdce0]">Target Destination</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Kyoto, Japan"
                  className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light italic text-white outline-none focus:border-[#bfdce0] transition-all placeholder:text-white/5"
                  value={formData.destination}
                  onChange={e => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfdce0]">Temporal Frame</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 7 Autumnal Days"
                  className="w-full bg-transparent border-b border-white/10 py-6 text-2xl font-light italic text-white outline-none focus:border-[#bfdce0] transition-all placeholder:text-white/5"
                  value={formData.duration}
                  onChange={e => setFormData({...formData, duration: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                disabled={state.isLoading}
                className="w-full py-8 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] rounded-sm hover:bg-[#bfdce0] transition-all disabled:opacity-20 flex items-center justify-center gap-4"
              >
                {state.isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Initiate Synthesis"}
              </button>
            </form>
          </div>

          {/* Canvas Side */}
          <div className="bg-transparent min-h-[600px] flex flex-col">
            {!state.result && !state.isLoading && (
              <div className="flex-1 flex flex-col items-center justify-center text-white/5 border border-white/5 rounded-xl border-dashed">
                <Compass className="w-16 h-16 mb-8 opacity-10" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">Awaiting Input Sequence</span>
              </div>
            )}

            {state.isLoading && (
              <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                <div className="w-24 h-24 border border-white/5 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 border border-[#bfdce0]/50 rounded-full animate-ping"></div>
                </div>
                <h4 className="text-xl font-light italic text-white/20 tracking-widest">Orchestrating...</h4>
              </div>
            )}

            {state.result && (
              <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 overflow-y-auto max-h-[80vh] pr-6 custom-scrollbar">
                <MarkdownRenderer content={state.result} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;