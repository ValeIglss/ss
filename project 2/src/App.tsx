import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import TrackingFeatures from './components/TrackingFeatures';
import Contact from './components/Contact';
import Sitemap from './components/Sitemap';
import MobileSection from './components/MobileSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setActiveSection(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen">
      <Navbar onSectionChange={handleSectionChange} activeSection={activeSection} />
      <Hero onSectionChange={handleSectionChange} />
      
      {/* Mobile version */}
      {isMobile && (
        <MobileSection activeSection={activeSection} />
      )}

      {/* Desktop version */}
      {!isMobile && (
        <>
          <div id="services">
            <Services />
          </div>
          <div id="process">
            <Process />
          </div>
          <div id="tracking">
            <TrackingFeatures />
          </div>
        </>
      )}
      
      <div id="contact">
        <Contact />
      </div>
      <Sitemap />
    </div>
  );
}