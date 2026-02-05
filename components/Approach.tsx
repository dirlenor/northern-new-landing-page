"use client";

import Section from "./Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Approach() {
  const pillars = [
    {
      title: "Sustainability",
      description: "Responsible tourism that respects communities and nature",
      icon: "🌿",
    },
    {
      title: "Quality",
      description: "International service standards with local insight",
      icon: "⭐",
    },
    {
      title: "Progress",
      description: "Continuous improvement through technology and innovation",
      icon: "🚀",
    },
  ];

  const quoteRef = useScrollReveal();

  return (
    <Section
      id="approach"
      title="Our Approach"
      subtitle="How We Work"
    >
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {pillars.map((pillar, index) => {
          const ref = useScrollReveal();
          return (
            <div
              key={index}
              ref={ref}
              className="reveal group relative bg-gradient-to-br from-white to-[#A683BD]/10 border-2 border-primary-100 rounded-2xl p-10 text-center hover:shadow-medium hover:border-primary-300 hover:-translate-y-2 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-3xl font-display font-bold text-navy-900 mb-4 group-hover:text-primary-700 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">{pillar.description}</p>
            </div>
          );
        })}
      </div>
      <div
        ref={quoteRef}
        className="reveal max-w-4xl mx-auto relative"
      >
        <div className="absolute top-0 left-0 text-8xl text-primary-200 font-display leading-none">
          "
        </div>
        <div className="relative bg-gradient-to-br from-[#A683BD] to-[#2A3F8B] text-white rounded-2xl p-10 md:p-12 shadow-hard">
          <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-center">
            We believe tourism should grow together with the people behind it — not at their expense.
          </p>
        </div>
      </div>
    </Section>
  );
}
