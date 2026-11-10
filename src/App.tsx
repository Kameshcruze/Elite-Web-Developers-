import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { Work } from './components/Work';
import { WhatWeBuild } from './components/WhatWeBuild';
import { HowWeWork } from './components/HowWeWork';
import { Toolkit } from './components/Toolkit';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { IntroVideoModal } from './components/IntroVideoModal';
import { WorksPage } from './components/WorksPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'works'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);

  // Parse and sync hash route (#/works or home)
  useEffect(() => {
    const handleHashRoute = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/works')) {
        setCurrentRoute('works');
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashRoute();
    window.addEventListener('hashchange', handleHashRoute);
    return () => window.removeEventListener('hashchange', handleHashRoute);
  }, []);

  // Scroll to top when changing major routes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleNavigate = (targetRoute: 'home' | 'works', anchor?: string) => {
    if (targetRoute === 'works') {
      window.location.hash = '#/works';
      setCurrentRoute('works');
    } else {
      if (anchor) {
        window.location.hash = `#${anchor}`;
        setCurrentRoute('home');
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '#/';
        setCurrentRoute('home');
      }
    }
  };

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] selection:bg-[#FFC900] selection:text-[#08090B] font-['Poppins',system-ui,sans-serif] antialiased overflow-x-hidden">
      {/* 3px scroll progress indicator */}
      <ScrollProgressBar />

      {/* Desktop trailing custom cursor */}
      <CustomCursor />

      {/* Sticky, adaptive Navbar with route awareness */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow with Page Transition */}
      <main key={currentRoute} className="animate-page-rise">
        {currentRoute === 'works' ? (
          /* Works Page (#/works) */
          <WorksPage
            onOpenContact={() => handleOpenContact()}
          />
        ) : (
          /* Home Page Flow */
          <>
            {/* Hero Section with Live Screenshot Carousel and Cutout */}
            <Hero
              onOpenIntroVideo={() => setIsIntroVideoOpen(true)}
            />

            {/* Infinite Capability Strip Marquee */}
            <CapabilityStrip />

            {/* Selected Work Section (Home shows 3 featured works) */}
            <Work
              onNavigateToWorks={() => handleNavigate('works')}
            />

            {/* What We Build (Full-bleed light section, id="services") */}
            <WhatWeBuild onSelectService={(service) => handleOpenContact(service)} />

            {/* How We Work (Process steps, id="process") */}
            <HowWeWork />

            {/* Our Toolkit (Tech stack chips, id="stack") */}
            <Toolkit />

            {/* Contact CTA Block (id="contact") */}
            <ContactCTA onOpenContactModal={() => handleOpenContact()} />

            {/* Footer */}
            <Footer />
          </>
        )}
      </main>

      {/* Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        preselectedService={selectedService}
      />

      {/* Intro Video / Studio Reel Modal */}
      <IntroVideoModal
        isOpen={isIntroVideoOpen}
        onClose={() => setIsIntroVideoOpen(false)}
        onOpenContact={() => handleOpenContact('Studio intro inquiry')}
      />
    </div>
  );
}
