export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A683BD] via-[#8B79B6] to-[#2A3F8B]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#A683BD] to-[#2A3F8B] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <span className="text-xl font-display font-bold">Northern All Star</span>
            </div>
            <p className="text-navy-300 leading-relaxed mb-6">
              Elevating Thai tourism to international standards through authenticity, quality, and sustainable growth.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-navy-800 hover:bg-gradient-to-br hover:from-[#A683BD] hover:to-[#2A3F8B] rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "What We Do", href: "#what-we-do" },
                { label: "Our Approach", href: "#approach" },
                { label: "Vision", href: "#vision" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Brands</h3>
            <ul className="space-y-3">
              <li>
                <a href="#brand" className="text-navy-300 hover:text-primary-400 transition-colors duration-300">
                  Neptune Boat & Leisure
                </a>
              </li>
              <li>
                <a href="#services" className="text-navy-300 hover:text-primary-400 transition-colors duration-300">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-400">Contact</h3>
            <ul className="space-y-3 text-navy-300">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a
                  href="mailto:contact@northernallstar.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  contact@northernallstar.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Thailand</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Destinations */}
        <div className="border-t border-navy-800 pt-8 mb-8">
          <h4 className="text-sm font-semibold text-primary-400 mb-4">OUR DESTINATIONS</h4>
          <div className="flex flex-wrap gap-3">
            {["Chiang Rai", "Chiang Mai", "Bangkok", "Pattaya", "Samui", "Krabi", "Phuket", "Phang Nga"].map((dest) => (
              <span key={dest} className="text-sm text-navy-400 hover:text-primary-400 transition-colors cursor-pointer">
                {dest}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} Northern All Star. All rights reserved.
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
