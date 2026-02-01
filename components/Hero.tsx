import React, { useState, useEffect } from 'react';
import { CloudRain, Wind, ThermometerSun } from 'lucide-react';

const sliderImages = [
  "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop"
];

const Hero: React.FC<{ onStartPlanning: () => void }> = ({ onStartPlanning }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState<{ id: number, top: string, left: string, size: string, duration: string, delay: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      duration: `${Math.random() * 3 + 1}s`,
      delay: `${Math.random() * 5}s`
    }));
    setStars(newStars);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-black">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=2071&auto=format&fit=crop" 
          alt="Ethereal Landscape" 
          className="w-full h-full object-cover animate-breathe filter brightness-[0.4] contrast-[1.1] scale-110"
        />
        <div className="absolute inset-0 mist-overlay"></div>
        
        {/* Twinkling Stars Field */}
        <div className="absolute inset-0 z-10">
          {stars.map((star) => (
            <div 
              key={star.id}
              className="star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                '--duration': star.duration,
                '--delay': star.delay
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl px-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <span className="text-[10px] uppercase tracking-[0.8em] text-[#bfdce0] mb-10 block font-bold opacity-60">
          Ethereal Expeditions
        </span>
        <h1 className="text-6xl md:text-9xl font-extralight text-white leading-[0.85] mb-12 tracking-tighter">
          Sanctuary <br />
          <span className="italic font-light">in the Mist</span>
        </h1>
        <p className="text-[10px] md:text-xs text-white/30 max-w-[320px] mx-auto font-light tracking-[0.4em] leading-relaxed uppercase mb-16">
          Moments of profound solitude at the edges of the earth.
        </p>
        
        <button 
          onClick={onStartPlanning}
          className="px-14 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-full text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-white/10 hover:border-[#bfdce0]/30 transition-all duration-700 shadow-2xl"
        >
          Begin Discovery
        </button>
      </div>

      {/* Hero Footer Modules (Symmetrical Corner Display) */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-30 pointer-events-none">
        
        {/* Bottom Left: Rectangular Slider */}
        <div className="w-80 h-48 relative overflow-hidden rounded-sm border border-white/5 pointer-events-auto group shadow-2xl animate-in fade-in slide-in-from-left-10 duration-1000">
           {sliderImages.map((img, idx) => (
             <img 
              key={idx}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              alt={`Slide ${idx}`}
             />
           ))}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
           <div className="absolute bottom-6 left-6 z-20">
              <span className="text-[8px] uppercase tracking-[0.5em] text-[#bfdce0] block mb-1 font-bold">Featured Collection</span>
              <span className="text-xs text-white tracking-[0.2em] font-light uppercase">The Arashiyama Silence</span>
           </div>
           {/* Progress line */}
           <div className="absolute bottom-0 left-0 h-0.5 bg-white/10 w-full z-20">
              <div 
                className="h-full bg-[#bfdce0] transition-all duration-[5000ms] ease-linear"
                style={{ width: '100%' }}
                key={currentSlide}
              ></div>
           </div>
        </div>

        {/* Bottom Right: Weather/Atmospheric Data (Height matches Slider) */}
        <div className="w-80 h-48 flex flex-col justify-between p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-sm pointer-events-auto text-right animate-in fade-in slide-in-from-right-10 duration-1000">
          <div className="flex justify-between items-start">
             <div className="text-left">
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 block font-bold mb-1">Local Time</span>
                <span className="text-[10px] text-white/60 tracking-widest font-light">02:14 AM</span>
             </div>
             <div className="text-right">
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 block font-bold mb-1">Current Data</span>
                <span className="text-[10px] text-white/60 tracking-widest font-light uppercase">Kyoto, JP</span>
             </div>
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-white">
              <div className="text-4xl font-extralight tracking-tighter leading-none">12°</div>
              <div className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">Celsius</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-start text-left">
               <CloudRain className="w-4 h-4 text-[#bfdce0] mb-1" />
               <span className="text-[9px] uppercase tracking-[0.2em] text-white font-light">Misty Glow</span>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-white/5">
             <div className="text-left">
                <span className="text-[7px] uppercase tracking-[0.3em] text-white/20 block font-bold">Visibility</span>
                <span className="text-[9px] text-white/40 tracking-widest uppercase">0.8 KM</span>
             </div>
             <div className="text-right">
                <span className="text-[7px] uppercase tracking-[0.3em] text-white/20 block font-bold">Wind</span>
                <span className="text-[9px] text-white/40 tracking-widest uppercase">4.2 KM/H</span>
             </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10">
         <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;