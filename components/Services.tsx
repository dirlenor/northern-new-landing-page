import React from 'react';
import { Compass, Shield, Wind, Zap } from 'lucide-react';

const services = [
  {
    icon: <Wind className="w-5 h-5" />,
    title: "Sanctuary Curation",
    desc: "A hand-vetted portfolio of properties where the natural world takes center stage."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Neural Planning",
    desc: "Our proprietary AI models synthesize your biometric preferences into a seamless flow."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Elite Concierge",
    desc: "24/7 on-ground assistance designed to be invisible unless absolutely necessary."
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Heritage Discovery",
    desc: "Unlocking access to cultural rites and historical sites restricted to the general public."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-[#05080a]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#bfdce0] mb-6 block">Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-extralight text-white tracking-tighter leading-none">
              Services of <br />
              <span className="italic">Distinction.</span>
            </h2>
          </div>
          <p className="text-white/30 text-lg font-light max-w-sm">
            We operate at the fringe of travel, providing access to the inaccessible through technology and grace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 p-12 hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 mb-10 group-hover:border-[#bfdce0] group-hover:text-[#bfdce0] transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-white mb-6 uppercase tracking-widest">{service.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;