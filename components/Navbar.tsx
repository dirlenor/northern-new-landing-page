import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-10 transition-all duration-700">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center mix-blend-exclusion">
        <div className="text-3xl font-light italic tracking-tighter text-white">
          Aether.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[0.7rem] font-bold tracking-[0.3em] uppercase text-white/60">
          <a href="#about" className="hover:text-white transition-colors">Story</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#destinations" className="hover:text-white transition-colors">Collections</a>
          <a href="#planner" className="hover:text-white transition-colors">Journal</a>
          <button className="opacity-40 hover:opacity-100 transition-opacity">
            Account
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#05080a] z-[-1] flex flex-col items-center justify-center gap-10 text-white animate-in fade-in duration-500">
           <a href="#about" className="text-4xl font-light italic" onClick={() => setIsMobileMenuOpen(false)}>Story</a>
           <a href="#services" className="text-4xl font-light italic" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
           <a href="#destinations" className="text-4xl font-light italic" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
           <a href="#planner" className="text-4xl font-light italic" onClick={() => setIsMobileMenuOpen(false)}>Journal</a>
           <button className="mt-10 uppercase tracking-[0.4em] text-[10px] font-bold border border-white/20 px-8 py-4 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>Close Menu</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;