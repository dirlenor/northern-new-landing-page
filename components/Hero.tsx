import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&h=1080&fit=crop"
        alt="Beautiful Thai coastline with traditional longtail boats"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
          Thailand's Premier Travel Group
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          Northern All Star
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-10 text-primary-100">
          Elevating Thai Tourism to International Standards
        </h2>

        <div className="mb-12 space-y-3 text-lg md:text-xl max-w-2xl mx-auto">
          <p>Building better journeys.</p>
          <p>Growing together.</p>
          <p>Moving Thailand forward.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white font-semibold rounded-lg shadow-lg shadow-[#A683BD]/30 hover:from-[#A683BD] hover:to-[#2A3F8B] transition-colors duration-300 text-center"
          >
            Explore Experiences
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white font-semibold rounded-lg shadow-lg shadow-[#A683BD]/30 transition-colors duration-300 text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
