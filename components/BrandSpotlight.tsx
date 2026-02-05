"use client";

import Section from "./Section";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BrandSpotlight() {
  const ref = useScrollReveal();

  return (
    <Section
      id="brand"
      title="Our Brand"
      subtitle="Neptune Boat & Leisure"
      className="bg-gradient-to-b from-white to-[#A683BD]/10"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div ref={ref} className="reveal order-2 lg:order-1">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-bold mb-6">
            Premium Marine Experiences
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Neptune Boat & Leisure
          </h3>
          <p className="text-xl text-primary-700 font-semibold mb-6">
            A premium marine experience brand based in Krabi
          </p>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            Neptune was created to redefine sea travel — turning every trip into a memorable experience.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Discover Neptune Services
          </a>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-hard group">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
              alt="Neptune longtail boat on crystal clear waters in Krabi"
              width={800}
              height={800}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#A683BD]/40 to-[#2A3F8B]/40 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>
    </Section>
  );
}
