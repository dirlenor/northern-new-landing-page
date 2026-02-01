import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Services from './components/Services';
import Destinations from './components/Destinations';
import TripPlanner from './components/TripPlanner';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToPlanner = () => {
    const plannerSection = document.getElementById('planner');
    if (plannerSection) {
      plannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <Hero onStartPlanning={scrollToPlanner} />
      <AboutUs />
      <Vision />
      <Services />
      <Destinations />
      <TripPlanner />
      <Features />
      <Footer />
    </div>
  );
};

export default App;