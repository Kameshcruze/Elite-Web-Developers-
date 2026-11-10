import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../content';

interface NavbarProps {
  onOpenContact: () => void;
  currentRoute?: 'home' | 'works';
  onNavigate?: (targetRoute: 'home' | 'works', anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  currentRoute = 'home',
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent, link: (typeof NAV_LINKS)[0]) => {
    if (link.isRoute || link.href.startsWith('#/works')) {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('works');
      }
      closeMobileMenu();
      return;
    }

    // Anchor link (e.g. #services, #process, #contact)
    if (currentRoute === 'works') {
      e.preventDefault();
      const anchor = link.href.replace('#', '');
      if (onNavigate) {
        onNavigate('home', anchor);
      } else {
        window.location.hash = `#/${anchor}`;
      }
      closeMobileMenu();
      return;
    }

    closeMobileMenu();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (currentRoute === 'works') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#/';
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b border-[rgba(245,243,239,0.14)] ${
          scrolled
            ? 'bg-[#08090B]/85 backdrop-blur-[14px] py-4 px-5 sm:px-12 lg:px-[96px]'
            : 'bg-[#08090B] py-4 lg:py-[28px] px-5 sm:px-12 lg:px-[96px]'
        } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} duration-600 transition-all`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            {/* Desktop logo */}
            <div className="hidden sm:block">
              <Logo isMobile={false} href="#/" onClick={handleLogoClick} />
            </div>
            {/* Mobile logo */}
            <div className="sm:hidden">
              <Logo isMobile={true} href="#/" onClick={handleLogoClick} />
            </div>
          </div>

          {/* Center: Nav links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-[44px]" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isWorksLink = link.label === 'Works' || link.isRoute;
              const isActive = isWorksLink && currentRoute === 'works';

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`group relative text-[15px] font-normal transition-colors py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#FFC900] font-medium'
                      : 'text-[#F5F3EF] hover:text-[#FFC900]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline: Permanent when active on works page, otherwise hover slide */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FFC900] origin-left transition-transform duration-250 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Primary Button (Desktop) */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-[10px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] px-[26px] py-[14px] rounded-full transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(255,201,0,0.25)] active:scale-[0.97] cursor-pointer"
            >
              <span>Get started</span>
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-[5px]">→</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex flex-col items-end justify-center gap-[5px] p-2 focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // Morph to X
                <div className="relative w-[26px] h-[20px] flex items-center justify-center">
                  <span className="absolute w-[26px] h-[3px] bg-[#FFC900] rounded-full rotate-45 transition-transform duration-300" />
                  <span className="absolute w-[26px] h-[3px] bg-[#FFC900] rounded-full -rotate-45 transition-transform duration-300" />
                </div>
              ) : (
                // 3 horizontal bars: 26px wide, 3px thick, rounded; 3rd is 18px and yellow
                <>
                  <span className="w-[26px] h-[3px] bg-[#F5F3EF] rounded-full transition-all duration-300" />
                  <span className="w-[26px] h-[3px] bg-[#F5F3EF] rounded-full transition-all duration-300" />
                  <span className="w-[18px] h-[3px] bg-[#FFC900] rounded-full transition-all duration-300" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#08090B] flex flex-col justify-between px-6 py-24 sm:hidden transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 pt-4">
          {NAV_LINKS.map((link, idx) => {
            const isWorksLink = link.label === 'Works' || link.isRoute;
            const isActive = isWorksLink && currentRoute === 'works';

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 60}ms` : '0ms',
                }}
                className={`text-[36px] font-semibold tracking-[-1px] transition-all duration-300 ${
                  isActive
                    ? 'text-[#FFC900]'
                    : 'text-[#F5F3EF] hover:text-[#FFC900]'
                } ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {link.label}
                {isActive && <span className="text-[#FFC900] ml-2">●</span>}
              </a>
            );
          })}
        </div>

        <div className="pt-8 border-t border-[rgba(245,243,239,0.14)]">
          <button
            onClick={() => {
              closeMobileMenu();
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-[10px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] px-[20px] py-[13px] rounded-full transition-transform active:scale-[0.97] cursor-pointer"
          >
            <span>Get started</span>
            <span>→</span>
          </button>
          <p className="text-[12px] text-[rgba(245,243,239,0.5)] text-center mt-4">
            Bangalore, India · Karur, Tamil Nadu · Elite Web Developers
          </p>
        </div>
      </div>
    </>
  );
};
