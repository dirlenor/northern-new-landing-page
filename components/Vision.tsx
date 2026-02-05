"use client";

import Section from "./Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Vision() {
  const ref = useScrollReveal();

  return (
    <Section
      id="vision"
      title="Our Vision"
      subtitle="Looking Forward"
      className="bg-gradient-to-br from-navy-900 via-navy-800 to-[#2A3F8B] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A683BD] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A3F8B] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>

      <div ref={ref} className="reveal max-w-4xl mx-auto text-center relative z-10">
        <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-relaxed mb-12 text-primary-100">
          To become a leading Thai travel group that connects local experiences with global travelers — and helps shape the future of tourism in Southeast Asia.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { text: "Building better journeys.", icon: "🌏" },
            { text: "Growing together.", icon: "🤝" },
            { text: "Moving Thailand forward.", icon: "🚀" },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-lg font-semibold text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
