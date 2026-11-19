import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { NAV_LINKS } from '../content';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const location = useLocation();
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

  // Close drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile/tablet menu is open
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

  const isPathActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b border-[rgba(245,243,239,0.14)] ${
          scrolled
            ? 'bg-[#08090B]/85 backdrop-blur-[14px] py-4 px-5 sm:px-12 lg:px-[96px]'
            : 'bg-[#08090B] py-4 lg:py-[28px] px-5 sm:px-12 lg:px-[96px]'
        } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Logo isMobile={false} to="/" onClick={closeMobileMenu} />
            </div>
            <div className="sm:hidden">
              <Logo isMobile={true} to="/" onClick={closeMobileMenu} />
            </div>
          </div>

          {/* Center: Nav links (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-[44px]" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = isPathActive(link.href);

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`group relative text-[15px] font-normal transition-colors py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#FFC900] font-medium'
                      : 'text-[#F5F3EF] hover:text-[#FFC900]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FFC900] origin-left transition-transform duration-250 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Primary CTA + Mobile/Tablet Hamburger (fixed for 640px-1023px tablet width) */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-[10px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] px-[26px] py-[14px] rounded-full transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(255,201,0,0.25)] active:scale-[0.97] cursor-pointer"
              >
                <span>Get started</span>
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-[5px]">→</span>
              </button>
            </div>

            {/* Mobile & Tablet Hamburger Button (visible below lg / 1024px) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex flex-col items-end justify-center gap-[5px] p-2 focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <div className="relative w-[26px] h-[20px] flex items-center justify-center">
                    <span className="absolute w-[26px] h-[3px] bg-[#FFC900] rounded-full rotate-45 transition-transform duration-300" />
                    <span className="absolute w-[26px] h-[3px] bg-[#FFC900] rounded-full -rotate-45 transition-transform duration-300" />
                  </div>
                ) : (
                  <>
                    <span className="w-[26px] h-[3px] bg-[#F5F3EF] rounded-full transition-all duration-300" />
                    <span className="w-[26px] h-[3px] bg-[#F5F3EF] rounded-full transition-all duration-300" />
                    <span className="w-[18px] h-[3px] bg-[#FFC900] rounded-full transition-all duration-300" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile & Tablet Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#08090B] flex flex-col justify-between px-6 sm:px-12 py-24 lg:hidden transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col gap-5 sm:gap-6 pt-6" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, idx) => {
            const isActive = isPathActive(link.href);

            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 60}ms` : '0ms',
                }}
                className={`text-[32px] sm:text-[40px] font-semibold tracking-[-1px] transition-all duration-300 ${
                  isActive
                    ? 'text-[#FFC900]'
                    : 'text-[#F5F3EF] hover:text-[#FFC900]'
                } ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {link.label}
                {isActive && <span className="text-[#FFC900] ml-2">●</span>}
              </Link>
            );
          })}
          <Link
            to="/faq"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            style={{
              transitionDelay: mobileMenuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms',
            }}
            className={`text-[22px] sm:text-[26px] font-medium tracking-[-0.5px] transition-all duration-300 ${
              isPathActive('/faq')
                ? 'text-[#FFC900]'
                : 'text-[rgba(245,243,239,0.7)] hover:text-[#FFC900]'
            } ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FAQ
          </Link>
        </nav>

        <div className="pt-8 border-t border-[rgba(245,243,239,0.14)]">
          <button
            onClick={() => {
              closeMobileMenu();
              onOpenContact();
            }}
            tabIndex={mobileMenuOpen ? 0 : -1}
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
