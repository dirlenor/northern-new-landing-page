"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = ["about", "what-we-do", "destinations", "approach", "brand", "services", "vision", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Destinations", href: "#destinations" },
    { label: "Approach", href: "#approach" },
    { label: "Our Brand", href: "#brand" },
    { label: "Services", href: "#services" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-primary-200/50 shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/logo/northern-logo.png"
                alt="Northern All Star logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain"
                priority
              />
              <span className="text-xl font-bold text-navy-900">
                Northern All Star
              </span>
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "text-primary-700 bg-primary-50"
                      : "text-navy-600 hover:text-primary-600 hover:bg-primary-50/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
