"use client";

import Section from "./Section";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Destinations() {
  const destinations = [
    "Chiang Rai",
    "Chiang Mai",
    "Bangkok",
    "Pattaya",
    "Chonburi",
    "Samui",
    "Krabi",
    "Phang Nga",
    "Phuket",
  ];

  const ref = useScrollReveal();

  return (
    <Section
      id="destinations"
      title="Destinations We Cover"
      subtitle="Where We Operate"
      className="bg-gradient-to-b from-[#A683BD]/10 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal flex flex-wrap justify-center gap-3 mb-16">
          {destinations.map((destination, index) => (
            <span
              key={destination}
              className="px-6 py-3 bg-white border-2 border-primary-200 hover:border-primary-500 rounded-full text-navy-800 font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {destination}
            </span>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-hard group">
          <Image
            src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop"
            alt="Map of Thailand destinations"
            width={1200}
            height={600}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent flex items-end">
            <div className="p-8 text-white">
              <p className="text-xl font-semibold">Exploring Thailand's Most Beautiful Destinations</p>
              <p className="text-primary-200 mt-2">From mountains to beaches, we cover it all</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
