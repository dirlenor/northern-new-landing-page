import React from 'react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    title: "Skógafoss Mist",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop",
    price: "$3,400",
    rating: 4.9
  },
  {
    id: 2,
    title: "Milford Sound",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1518182170546-0766aa6f6a56?q=80&w=2163&auto=format&fit=crop",
    price: "$4,200",
    rating: 4.9
  },
  {
    id: 3,
    title: "Atoll Silence",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    price: "$6,100",
    rating: 5.0
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-40 bg-[#05080a] relative z-10">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#bfdce0] mb-6 block">The Collections</span>
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tighter">Ethereal Escapes</h2>
          <p className="font-light italic text-white/30 text-xl tracking-tight">Silence, solitude, and the sublime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {destinations.map((dest, i) => (
            <div 
              key={dest.id} 
              className={`group relative h-[650px] overflow-hidden transition-all duration-1000 staggered-card rounded-sm`}
            >
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover filter grayscale-[0.4] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-12 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#bfdce0] mb-4 block">
                  {dest.location}
                </span>
                <h3 className="text-4xl font-extralight text-white mb-8 italic tracking-tighter">{dest.title}</h3>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">Expedition from {dest.price}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;