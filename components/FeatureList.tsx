"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {features.map((feature, index) => {
        const ref = useScrollReveal();
        return (
          <div
            key={index}
            ref={ref}
            className="reveal text-center group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A683BD]/40 to-[#2A3F8B]/40 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative w-20 h-20 bg-gradient-to-br from-[#A683BD] to-[#2A3F8B] rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-primary-700 transition-colors">
              {feature.title}
            </h3>
            <p className="text-navy-600 leading-relaxed">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
