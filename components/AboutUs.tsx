import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-[#05080a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#bfdce0]">Our Heritage</span>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none text-white">
              The Art of <br />
              <span className="italic">Disappearance.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed font-light max-w-lg">
              Founded at the intersection of quiet luxury and neural computing, Aether was born from a simple desire: to rediscover silence in an increasingly loud world. We don't just book trips; we architect moments of profound solitude.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
              <div>
                <div className="text-white text-3xl font-light mb-2">12+</div>
                <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Years of Curation</div>
              </div>
              <div>
                <div className="text-white text-3xl font-light mb-2">400+</div>
                <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Private Sanctuaries</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-white/5 rounded-2xl group-hover:inset-0 transition-all duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1506477331477-33d6d8b3dc85?q=80&w=2068&auto=format&fit=crop" 
              className="w-full h-[600px] object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="About Aether"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;