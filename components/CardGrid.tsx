"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Card {
  title: string;
  description: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: 2 | 3;
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
      {cards.map((card, index) => {
        const ref = useScrollReveal();
        return (
          <div
            key={index}
            ref={ref}
            className="reveal group relative bg-white border-2 border-primary-100 rounded-2xl p-8 shadow-soft hover:shadow-medium hover:border-primary-300 hover:-translate-y-2 transition-all duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A683BD]/25 to-[#2A3F8B]/25 rounded-bl-full opacity-50"></div>
            <h3 className="relative text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary-700 transition-colors">
              {card.title}
            </h3>
            <p className="relative text-navy-600 leading-relaxed">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
