import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ContactModal } from './components/ContactModal';
import { IntroVideoModal } from './components/IntroVideoModal';
import { WorksPage } from './components/WorksPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { WorkCaseStudyPage } from './pages/WorkCaseStudyPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { CityLandingPage } from './pages/CityLandingPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);

  // Redirect legacy hash routes (e.g. #/works -> /works) to clean real paths
  useEffect(() => {
    const redirectLegacyHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/works')) {
        navigate('/works', { replace: true });
      } else if (hash === '#/' && window.location.pathname === '/') {
        window.history.replaceState(null, '', '/');
      }
    };

    redirectLegacyHash();
    window.addEventListener('hashchange', redirectLegacyHash);
    return () => window.removeEventListener('hashchange', redirectLegacyHash);
  }, [navigate]);

  // Scroll to top on route change, or smooth-scroll to in-page anchor if hash is present
  useEffect(() => {
    if (location.hash && !location.hash.startsWith('#/')) {
      const targetId = location.hash.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  // Send GA4 page_view on client-side SPA route changes (initial load is handled by gtag('config') in index.html)
  const isInitialRouteRef = useRef(true);
  useEffect(() => {
    if (isInitialRouteRef.current) {
      isInitialRouteRef.current = false;
      return;
    }

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: `${location.pathname}${location.search}`,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);

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

      {/* Sticky, adaptive Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Page Flow with Page Transition */}
      <main key={location.pathname} className="animate-page-rise">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenContact={handleOpenContact}
                onOpenIntroVideo={() => setIsIntroVideoOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/services/business-websites"
            element={
              <ServiceDetailPage
                slug="business-websites"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/services/online-stores"
            element={
              <ServiceDetailPage
                slug="online-stores"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/services/web-apps-and-dashboards"
            element={
              <ServiceDetailPage
                slug="web-apps-and-dashboards"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/services/care-and-support"
            element={
              <ServiceDetailPage
                slug="care-and-support"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/process"
            element={<ProcessPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/works"
            element={<WorksPage onOpenContact={() => handleOpenContact()} />}
          />
          <Route
            path="/works/bunt-india"
            element={
              <WorkCaseStudyPage
                slug="bunt-india"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/works/the-fat-cookie-chef"
            element={
              <WorkCaseStudyPage
                slug="the-fat-cookie-chef"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/works/virukshaa-events"
            element={
              <WorkCaseStudyPage
                slug="virukshaa-events"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/faq"
            element={<FaqPage onOpenContact={handleOpenContact} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/web-development-bangalore"
            element={
              <CityLandingPage
                city="bangalore"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/web-development-karur"
            element={
              <CityLandingPage
                city="karur"
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
        onOpenContact={() => handleOpenContact()}
      />
    </div>
  );
}
