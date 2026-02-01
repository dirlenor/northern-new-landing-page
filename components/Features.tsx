import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-60 bg-[#05080a] relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop" 
                  className="w-full h-[800px] object-cover filter brightness-75 transition-transform duration-[2000ms] group-hover:scale-105" 
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                  alt="Texture" 
                />
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-white mb-16 italic">
              "We travel not to escape life, but for life not to escape us."
            </h2>
            <div className="max-w-md space-y-10">
              <p className="text-white/40 text-lg leading-relaxed font-light">
                In a world of noise, we curate silence. Our boutique selection of properties focuses on immersion, wellness, and a deep connection to the natural world.
              </p>
              <div className="pt-10 border-t border-white/5">
                <a href="#" className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-white border-b border-white pb-2 hover:text-[#bfdce0] hover:border-[#bfdce0] transition-all">
                  Read Our Philosophy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;