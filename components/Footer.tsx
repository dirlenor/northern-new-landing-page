import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080a] border-t border-white/5 py-32">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-20">
          <div>
            <h4 className="text-4xl font-serif italic text-white mb-10">Aether.</h4>
            <p className="text-white/20 text-sm max-w-xs leading-relaxed uppercase tracking-widest font-medium">
              Sanctuary and solitude across the globe's most ethereal landscapes.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] font-bold text-white/40">
            <a href="#" className="hover:text-white transition-colors">Journal</a>
            <a href="#" className="hover:text-white transition-colors">Private Hire</a>
            <a href="#" className="hover:text-white transition-colors">Membership</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-white/20 text-[10px] uppercase tracking-widest mb-4">Newsletter</div>
            <div className="flex border-b border-white/10 w-full md:w-80">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none py-4 text-[10px] tracking-widest outline-none w-full text-white"
              />
              <button className="text-white px-4">→</button>
            </div>
          </div>
        </div>
        <div className="mt-40 flex justify-between items-center text-[10px] text-white/10 tracking-[0.4em] uppercase font-bold">
           <span>&copy; {new Date().getFullYear()} AETHER SANCTUARY</span>
           <div className="flex gap-10">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;