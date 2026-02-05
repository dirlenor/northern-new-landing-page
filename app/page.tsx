'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const destinations = [
    { name: 'Chiang Rai', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop', description: 'Explore the Golden Triangle and White Temple' },
    { name: 'Chiang Mai', image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop', description: 'Cultural heart of Northern Thailand' },
    { name: 'Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop', description: 'Vibrant capital city with temples and markets' },
    { name: 'Pattaya', image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1200&auto=format&fit=crop', description: 'Beach resort city on the Eastern Gulf coast' },
    { name: 'Chonburi', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop', description: 'Gateway to eastern coastal attractions' },
    { name: 'Samui', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop', description: 'Tropical island paradise with pristine beaches' },
    { name: 'Krabi', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop', description: 'Stunning limestone cliffs and clear waters' },
    { name: 'Phang Nga', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop', description: 'Famous for James Bond Island and sea caves' },
    { name: 'Phuket', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1200&auto=format&fit=crop', description: 'Thailand\'s largest island and beach destination' },
  ];

  const [selectedDestination, setSelectedDestination] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const marqueeLogos = useMemo(
    () => Array.from({ length: 9 }, (_, index) => ({
      key: `klook-${index}`,
      src: '/logo/klook.png',
      alt: 'Klook logo',
    })),
    []
  );
  const rotations = useMemo(
    () => destinations.map(() => Math.random() * 20 - 10),
    [destinations.length]
  );

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const isActive = index === selectedDestination;
      const stackOffsetX = index * 2;
      const stackOffsetY = index * 2;

      if (isActive) {
        gsap.fromTo(
          card,
          { x: 60, opacity: 0.6 },
          {
            x: -12,
            y: -12,
            scale: 1.03,
            rotation: 0,
            opacity: 1,
            zIndex: destinations.length + 2,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: 'auto',
          }
        );
      } else {
        gsap.to(card, {
          x: stackOffsetX,
          y: stackOffsetY,
          scale: 0.98,
          rotation: rotations[index],
          opacity: 0.9,
          zIndex: index,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });
  }, [destinations.length, rotations, selectedDestination]);

  return (
    <main className="min-h-screen relative">
      {/* Animated Wave Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 w-full h-64 opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A683BD" stopOpacity="1" />
              <stop offset="100%" stopColor="#2A3F8B" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </path>
        </svg>
        <svg className="absolute top-1/4 w-full h-64 opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A683BD" stopOpacity="1" />
              <stop offset="100%" stopColor="#2A3F8B" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient2)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
            M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
            M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,320C192,320,96,320,48,320L0,320Z"/>
          </path>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white border-b border-black/10">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image
                src="/logo/northern-logo.png"
                alt="Northern All Star logo"
                width={88}
                height={88}
                className="h-[72px] w-[72px] md:h-[88px] md:w-[88px] rounded-lg object-contain"
                priority
              />
            </div>
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8">
              <a className="text-sm font-semibold text-black hover:text-gray-700 transition-colors cursor-pointer" onClick={() => handleNavClick('about')}>About</a>
              <a className="text-sm font-semibold text-black hover:text-gray-700 transition-colors cursor-pointer" onClick={() => handleNavClick('what-we-do')}>What We Do</a>
              <a className="text-sm font-semibold text-black hover:text-gray-700 transition-colors cursor-pointer" onClick={() => handleNavClick('destinations')}>Destinations</a>
              <a className="text-sm font-semibold text-black hover:text-gray-700 transition-colors cursor-pointer" onClick={() => handleNavClick('neptune')}>Neptune</a>
              <a className="text-sm font-semibold text-black hover:text-gray-700 transition-colors cursor-pointer" onClick={() => handleNavClick('contact')}>Contact</a>
            </nav>
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] hover:from-[#A683BD] hover:to-[#2A3F8B] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-[#A683BD]/30">
                Partner With Us
              </button>
            </div>
            <button
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-black"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
        <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-md border-t border-black/10`}>
          <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col gap-3">
              <button className="text-left text-base font-semibold text-black hover:text-gray-700 transition-colors" onClick={() => handleNavClick('about')}>About</button>
              <button className="text-left text-base font-semibold text-black hover:text-gray-700 transition-colors" onClick={() => handleNavClick('what-we-do')}>What We Do</button>
              <button className="text-left text-base font-semibold text-black hover:text-gray-700 transition-colors" onClick={() => handleNavClick('destinations')}>Destinations</button>
              <button className="text-left text-base font-semibold text-black hover:text-gray-700 transition-colors" onClick={() => handleNavClick('neptune')}>Neptune</button>
              <button className="text-left text-base font-semibold text-black hover:text-gray-700 transition-colors" onClick={() => handleNavClick('contact')}>Contact</button>
              <button className="mt-2 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] hover:from-[#A683BD] hover:to-[#2A3F8B] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors w-full shadow-lg shadow-[#A683BD]/30">
                Partner With Us
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat slow-zoom-out" style={{backgroundImage: "url('/images/bg1.jpg')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-0 sm:mt-20">
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
                Elevating Thai <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] brightness-125">Travel Experiences</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
                The premier corporate travel group connecting the world to the hidden gems of Northern and Southern Thailand.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-400 brightness-125 bg-white/10 p-1 rounded-full text-base">check_circle</span>
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide drop-shadow-sm">Deep Local Expertise</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-400 brightness-125 bg-white/10 p-1 rounded-full text-base">check_circle</span>
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide drop-shadow-sm">Premium Owned Fleet</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-400 brightness-125 bg-white/10 p-1 rounded-full text-base">check_circle</span>
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide drop-shadow-sm">Curated Private Journeys</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full">
              <button className="bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] hover:from-[#A683BD] hover:to-[#2A3F8B] text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-[#A683BD]/30 w-full sm:w-auto">
                Explore Tours
              </button>
              <button className="bg-transparent border-2 border-white text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all hover:scale-105 hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest"></span>
            <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-light py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-2 block">About Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-text-main mb-6">
                Northern All Star is a <span className="text-primary-600">Thailand-based travel</span> and experiences group dedicated to elevating Thai tourism to international standards.
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-neutral-text-sub leading-relaxed">
                  We believe great journeys are built on authenticity, thoughtful design, and strong local partnerships. Our goal is to modernize Thailand&apos;s tourism industry while preserving the unique character of each destination.
                </p>
                <p className="text-lg text-neutral-text-sub leading-relaxed">
                  By combining local expertise with global perspectives, we help transform traditional tourism into meaningful, high-quality experiences for travelers from around the world.
                </p>
              </div>
            </div>

            {/* Right - Cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-8 rounded-xl border border-neutral-border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-text-main mb-2">Authenticity</h3>
                    <p className="text-neutral-text-sub">Real experiences rooted in local culture and tradition</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-neutral-border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span className="material-symbols-outlined text-3xl">architecture</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-text-main mb-2">Thoughtful Design</h3>
                    <p className="text-neutral-text-sub">Carefully crafted journeys that prioritize quality</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-neutral-border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span className="material-symbols-outlined text-3xl">handshake</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-text-main mb-2">Local Partnerships</h3>
                    <p className="text-neutral-text-sub">Strong collaborations with communities and operators</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="bg-white py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-neutral-text-main mb-4">What We Do</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] rounded-full"></div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg md:text-xl text-neutral-text-sub">
                We work closely with local operators and communities to develop curated tours, activities, and experiences that meet international standards in service, safety, and quality.
              </p>
              <div>
                <p className="text-lg text-neutral-text-main font-semibold mb-3">Our network spans Thailand&apos;s key destinations, including:</p>
                <p className="text-lg text-neutral-text-sub">
                  Chiang Rai · Chiang Mai · Bangkok · Pattaya · Chonburi · Samui · Krabi · Phang Nga · Phuket
                </p>
              </div>
              <p className="text-lg text-neutral-text-sub">
                Beyond creating products, we support local tourism businesses by connecting them with global travelers, sharing know-how, and growing sustainably together.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="group border border-neutral-border rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all cursor-default">
              <div className="h-48 bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
                <img alt="Tourists walking on a beach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABb2G_dZhBTcvtWffNAsi3ZR2WI7um8ejaCUKaxk89zWmhI8Ctjw8qt0sjlJFLsFjo4dw5JdA5v_Icz3qS69X7dkB1xJyEww0NdhFz5IC5bS7gZhHzjwppUIcnr0pb-jTbe84YHiRR-4s_s8wBgCjJwY-B8VPv1gGRM5UJ3Vx7XuGJ3MBcZnL8OB-M2kxfNsEvcX3JBIf8eQO_SgEND3fh_QD3GOjT2P53FcT6jefthmpC1vvCitQQU89XUhvhcVSabN-4RRkMaS8"/>
              </div>
              <h3 className="text-lg font-bold text-neutral-text-main mb-2">Curated Tours</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">Develop tours and activities that meet international standards in service, safety, and quality</p>
            </div>
            <div className="group border border-neutral-border rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all cursor-default">
              <div className="h-48 bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
                <img alt="Life jacket and safety equipment on a boat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnUdRXrGKQSZjeU1vYA53wwUVSjqJBcy-naeckU38MtgBKeDciQjDRNINd45ZplGSVHAc56l0FJBCGwwxOi1Ukrc6-A4ERC6GVA7QVqPFofKnP3SjLr8VACJaw8zKGhfBhbVpAWVRkaa7OIGDgWKQAOHa2nuSeFq2oOQCpS28G3fGVQ2CAU8ORBP35gBEh4guJR2UqwCLuvgLpM7LX-r_etVdTF3aBHsmS-Hh-xbt9rKCA97ktSx3MJdUnpwSquqSKHStRO9GILM0"/>
              </div>
              <h3 className="text-lg font-bold text-neutral-text-main mb-2">Safety &amp; Service</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">Ensure every experience meets high standards of professionalism and care</p>
            </div>
            <div className="group border border-neutral-border rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all cursor-default">
              <div className="h-48 bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
                <img alt="Local community members interacting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1r_DVTxUbJPgfMJmEL5_ds1ta7F7woIbaOCdnrz4M-TKXAsmi4Xzy2Sbuv9S1ORxC7KMW_DLapHSPA_QaJrz-L1re_giI6R83i3fYlR_SBqAO-vJD0FOnuLWvAlkILmWxVBj_Ofoj2H7KtgPSQa9TB47OPXF46pEyyCaqv7nUrn0AhsToBCU4SOzY7rnZknnvcKZh_dav3_l5HiazQl12TTkDc_9Zn14xUokZyyEt8uzOP4ujXmbKyDDzLkdjtlhOQChtLRb8AdU"/>
              </div>
              <h3 className="text-lg font-bold text-neutral-text-main mb-2">Community Collaboration</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">Support local tourism businesses by connecting them with global travelers</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">We don&apos;t just sell tours. We build opportunities, platforms, and long-term partnerships.</h3>
          </div>
        </div>
      </section>

      {/* Destinations Section with Slider */}
      <section id="destinations" className="bg-background-light py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10 border-t-0">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-neutral-text-main mb-6">
                <span className="text-primary">Our</span> Destinations
              </h2>
              <p className="text-neutral-text-sub mb-8">From the misty mountains of the North to the crystal waters of the South, we cover the most sought-after locations.</p>
              <div className="flex flex-wrap gap-2">
                {destinations.map((dest, index) => (
                  <button
                    key={dest.name}
                    onClick={() => setSelectedDestination(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDestination === index
                        ? 'bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] text-white border-primary-600'
                        : 'bg-white border border-neutral-border text-neutral-text-main hover:border-primary-500 hover:text-primary-600'
                    }`}
                  >
                    {dest.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white rounded-2xl border border-neutral-border p-2 shadow-sm aspect-video relative overflow-visible">
                <div className="relative w-full h-full rounded-xl">
                  {destinations.map((dest, index) => (
                    <div
                      key={dest.name}
                      ref={(el) => {
                        if (el) cardRefs.current[index] = el;
                      }}
                      className={`absolute inset-0 rounded-xl overflow-hidden border-2 border-white/40 bg-white ${
                        selectedDestination === index ? 'shadow-2xl' : 'shadow-lg'
                      }`}
                    >
                      <img
                        alt={dest.name}
                        className="w-full h-full object-cover"
                        src={dest.image}
                      />
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 rounded-b-xl">
                        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">{dest.name}</h3>
                        <p className="text-gray-200 text-base sm:text-lg">{dest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-text-main mb-12 text-center">
            <span className="text-primary-600">Our</span> Approach
          </h2>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h3 className="text-2xl font-bold text-neutral-text-main mb-6">
              Sustainability. <span className="text-primary-600">Quality</span>. Progress.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border-l-4 border-primary-600 bg-background-light">
              <h3 className="text-lg font-bold mb-3">Responsible Tourism</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">Tourism that respects communities and nature</p>
            </div>
            <div className="p-6 border-l-4 border-neutral-300 bg-background-light">
              <h3 className="text-lg font-bold mb-3">International Standards</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">International service standards with local insight</p>
            </div>
            <div className="p-6 border-l-4 border-neutral-300 bg-background-light">
              <h3 className="text-lg font-bold mb-3">Continuous Improvement</h3>
              <p className="text-sm 2xl:text-base text-neutral-text-sub">Progress through technology and innovation</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto border border-neutral-200 rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative">
            <span className="material-symbols-outlined absolute top-6 left-8 text-primary-400/20 text-6xl">format_quote</span>
            <p className="text-xl italic text-neutral-text-main relative z-10 pt-4 leading-relaxed">We believe tourism should grow together with the people behind it — not at their expense.</p>
          </div>
        </div>
      </section>

      {/* Neptune Brand Section */}
      <section id="neptune" className="bg-white text-neutral-900 py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-neutral-text-main mb-12 text-center">
            <span className="text-primary-600">Our</span> Brand
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6">Neptune Boat &amp; Leisure</h2>
              <p className="text-lg text-neutral-600 mb-4">A premium marine experience brand based in Krabi</p>
              <p className="text-xl text-neutral-700 mb-8 font-light">Neptune was created to redefine sea travel — turning every trip into a memorable experience.</p>
              <button className="bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] hover:from-[#A683BD] hover:to-[#2A3F8B] text-white px-8 py-3 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-[#A683BD]/30">Visit Neptune Website</button>
            </div>

            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-neutral-200 aspect-[4/3] shadow-sm">
              <img alt="Luxury boat on water" className="w-full h-full object-cover" src="/images/n1.jpg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm">
              <h4 className="text-2xl font-bold mb-3">Private Longtail Boat Service</h4>
              <p className="text-neutral-600">
                Tailor-made private journeys designed for travelers seeking authenticity, comfort, and exclusivity while exploring Krabi&apos;s breathtaking coastline.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm">
              <h4 className="text-2xl font-bold mb-3">Speedboat Join-in Trips</h4>
              <p className="text-neutral-600">
                Well-curated group adventures that maintain high service standards, safety, and seamless operations — delivering exceptional moments for every guest.
              </p>
            </div>

            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-neutral-200 h-56 md:h-64 shadow-sm">
              <img
                alt="Luxury boat interior seating"
                className="w-full h-full object-cover"
                src="/images/n2.jpg"
              />
            </div>

            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-neutral-200 h-56 md:h-64 shadow-sm">
              <img
                alt="Luxury boat interior lounge"
                className="w-full h-full object-cover"
                src="/images/n3.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background-light py-20 md:py-28 lg:py-32 2xl:py-28 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-text-main leading-tight mb-8">
            Our Vision
          </h2>
          <p className="text-2xl text-neutral-text-sub mb-8 leading-relaxed">
            To become a leading Thai travel group that connects local experiences with global travelers — and helps shape the future of tourism in Southeast Asia.
          </p>
          <div className="space-y-2 text-lg text-neutral-text-main font-medium">
            <p>Building better journeys.</p>
            <p>Growing together.</p>
            <p>Moving Thailand forward.</p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A683BD] to-[#2A3F8B] mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Logo Marquee Section */}
      <section className="bg-white py-16 md:py-20 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-center text-sm font-semibold text-neutral-text-sub uppercase tracking-widest">Trusted by</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee will-change-transform">
            <div className="flex min-w-max items-center gap-8 lg:gap-10 px-6">
              {marqueeLogos.map((logo) => (
                <div key={`${logo.key}-a`} className="w-24 sm:w-28 md:w-32 lg:w-40 shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 sm:h-11 md:h-12 lg:h-14 w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex min-w-max items-center gap-8 lg:gap-10 px-6">
              {marqueeLogos.map((logo) => (
                <div key={`${logo.key}-b`} className="w-24 sm:w-28 md:w-32 lg:w-40 shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 sm:h-11 md:h-12 lg:h-14 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-800 relative z-10">
        <div className="max-w-[1280px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-16">
            <div className="space-y-4 lg:pr-6">
              <img
                src="/logo/logo-white.png"
                alt="Northern All Star logo"
                className="h-24 w-auto"
              />
              <h3 className="text-lg font-bold tracking-wider">NORTHERN ALL STAR</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting the world to Thailand&apos;s wonders through premium service and local authenticity.
              </p>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-primary-600 transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="text-gray-400 hover:text-primary-600 transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                <a className="text-gray-400 hover:text-primary-600 transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-500 mb-6 tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">About Us</a></li>
                <li><a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Careers</a></li>
                <li><a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Press</a></li>
                <li><a className="text-gray-300 hover:text-white transition-colors text-sm" href="#">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-500 mb-6 tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-sm mt-0.5">location_on</span>
                  <span>198/3 Moo.5 Saithai,<br/>Muang Krabi, Krabi, Thailand 81000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>+66 631028788</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                  <span>info@northernallstar.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm md:flex-1 md:text-left">© 2026 Northern All Star Co., Ltd. All rights reserved.</p>
            <p className="text-gray-500 text-sm md:flex-1 md:text-center">Design by 6CAT</p>
            <div className="flex gap-6 md:flex-1 md:justify-end">
              <a className="text-gray-500 hover:text-white text-sm" href="#">Privacy Policy</a>
              <a className="text-gray-500 hover:text-white text-sm" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
