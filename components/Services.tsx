"use client";

import Section from "./Section";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Services() {
  const services = [
    {
      title: "Private Longtail Boat Service",
      description:
        "Tailor-made private journeys designed for travelers seeking authenticity, comfort, and exclusivity while exploring Krabi's breathtaking coastline.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop",
      badge: "Premium",
    },
    {
      title: "Speedboat Join-in Trips",
      description:
        "Well-curated group adventures that maintain high service standards, safety, and seamless operations — delivering exceptional moments for every guest.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      badge: "Group Tours",
    },
  ];

  const quoteRef = useScrollReveal();

  return (
    <Section
      id="services"
      title="Neptune Experiences"
      subtitle="Our Services"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
        {services.map((service, index) => {
          const ref = useScrollReveal();
          return (
            <div
              key={index}
              ref={ref}
              className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-hard transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-primary-700">
                  {service.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div
        ref={quoteRef}
        className="reveal max-w-3xl mx-auto text-center bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-10 border-2 border-secondary-200"
      >
        <p className="text-2xl md:text-3xl font-display font-semibold text-navy-900">
          At Neptune, we don't simply operate tours. We craft experiences worth remembering.
        </p>
      </div>
    </Section>
  );
}
