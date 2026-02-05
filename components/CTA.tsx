"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#A683BD]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="reveal relative bg-gradient-to-br from-[#A683BD] to-[#2A3F8B] rounded-3xl p-12 md:p-16 lg:p-20 text-center overflow-hidden shadow-hard"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-6">
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Let's Build the Future of Tourism Together
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join us in elevating Thai tourism to international standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@northernallstar.com"
                className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="inline-block px-10 py-4 bg-gradient-to-r from-[#A683BD]/85 to-[#2A3F8B]/85 text-white font-bold rounded-lg hover:from-[#A683BD] hover:to-[#2A3F8B] transition-all duration-300 hover:scale-105"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
