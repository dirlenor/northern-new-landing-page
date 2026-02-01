import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover filter brightness-[0.3]"
          alt="Vision background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080a] via-transparent to-[#05080a]"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-3xl space-y-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#bfdce0]">Our Ethos</span>
        <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight tracking-tighter">
          To harmonize the <span className="italic">intelligence</span> of the future with the <span className="italic">silence</span> of the earth.
        </h2>
        <p className="text-white/40 text-sm md:text-base font-light tracking-widest leading-loose uppercase">
          Preservation • Immersion • Solitude
        </p>
      </div>
    </section>
  );
};

export default Vision;