import React, { useEffect, useState } from 'react';
import { HERO_CONTENT, FEATURED_WORKS, ProjectItem } from '../content';

interface HeroProps {
  onOpenIntroVideo: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntroVideo, onSelectProject }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Hero browser carousel uses the 3 featured works
  const carouselProjects = FEATURED_WORKS;

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (window.innerWidth >= 768 && window.matchMedia('(pointer: fine)').matches) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4s Carousel loop with pause on hover
  useEffect(() => {
    if (carouselProjects.length <= 1 || isCarouselHovered) return;

    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselProjects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselProjects.length, isCarouselHovered]);

  const activeSlideProject = carouselProjects[carouselIndex] || carouselProjects[0];
  const activeDomain = activeSlideProject?.url
    ? activeSlideProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'buntindia.com';

  // Parallax offsets
  const circleParallax = scrollY * 0.15;
  const mockParallax = scrollY * 0.08;

  // Split desktop H1 into 4 lines
  const h1Lines = [
    { text: 'Websites that', id: 'l1' },
    { text: 'work as', id: 'l2' },
    { text: 'hard as', id: 'l3' },
    { text: 'you do', id: 'l4', hasPeriod: true },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-[90px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto">
      {/* 2-column grid with strict min-w-0 on both sides to prevent overlap at laptop widths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, copy, and CTAs */}
        <div className="min-w-0 text-center lg:text-left z-10">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-3 transition-all duration-800 delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
            }`}
          >
            <span className="text-[10.5px] lg:text-[13px] font-normal uppercase tracking-[3px] lg:tracking-[4px] text-[rgba(245,243,239,0.68)]">
              {HERO_CONTENT.eyebrow}
            </span>
            <span
              className="w-[28px] h-[5px] lg:w-[44px] lg:h-[6px] rounded-[3px] bg-[#FFC900] inline-block"
              aria-hidden="true"
            />
          </div>

          {/* H1 Headline */}
          <h1 className="mt-[18px] lg:mt-[26px]">
            {/* Desktop view: 4 masked lines */}
            <span className="hidden lg:block text-[72px] xl:text-[96px] 2xl:text-[104px] font-semibold leading-[1.0] tracking-[-3px] xl:tracking-[-4px] text-[#F5F3EF]">
              {h1Lines.map((line, idx) => (
                <span key={line.id} className="block overflow-hidden">
                  <span
                    className={`block transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isLoaded ? 'translate-y-0' : 'translate-y-full'
                    }`}
                    style={{ transitionDelay: `${200 + idx * 100}ms` }}
                  >
                    {line.text}
                    {line.hasPeriod && <span className="text-[#FFC900]">.</span>}
                  </span>
                </span>
              ))}
            </span>

            {/* Mobile / Tablet view */}
            <span className="block lg:hidden text-[44px] sm:text-[64px] font-semibold leading-[1.02] tracking-[-1.8px] text-[#F5F3EF]">
              Websites that work as hard as you do<span className="text-[#FFC900]">.</span>
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className={`max-w-[520px] mx-auto lg:mx-0 my-5 lg:my-0 lg:mt-[28px] lg:mb-[36px] text-[14.5px] lg:text-[17px] xl:text-[19px] font-normal text-[rgba(245,243,239,0.68)] leading-[1.7] transition-all duration-800 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
            }`}
          >
            {HERO_CONTENT.paragraph}
          </p>

          {/* Buttons: Primary + Ghost with crisp inline SVG triangle */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 transition-all duration-800 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
            }`}
          >
            {/* Primary button */}
            <a
              href="#work"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-[10px] bg-[#FFC900] text-[#08090B] font-medium text-[13px] lg:text-[15px] px-[20px] py-[11px] lg:px-[26px] lg:py-[14px] rounded-full transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(255,201,0,0.25)] active:scale-[0.97]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
            </a>

            {/* Ghost button with inline SVG play icon in #F5F3EF */}
            <button
              onClick={onOpenIntroVideo}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-[10px] bg-transparent text-[#F5F3EF] font-medium text-[13px] lg:text-[15px] px-[20px] py-[11px] lg:px-[26px] lg:py-[14px] rounded-full border border-[rgba(245,243,239,0.4)] transition-all duration-200 ease-out hover:bg-[#F5F3EF] hover:text-[#08090B] hover:border-white active:scale-[0.97]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#F5F3EF"
                className="transition-colors group-hover:fill-[#08090B] flex-shrink-0"
                aria-hidden="true"
              >
                <polygon points="6 3 20 12 6 21" />
              </svg>
              <span>Watch intro</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual Container (strict min-w-0, scaled with clamp, stays inside column) */}
        <div className="min-w-0 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0 z-0">
          <div
            className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[540px] aspect-square"
          >
            {/* Solid yellow circle positioned safely in upper-right */}
            <div
              className={`absolute right-0 top-0 w-[80%] h-[80%] rounded-full bg-[#FFC900] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-60 opacity-0'
              }`}
              style={{
                transform: `translate3d(0, ${circleParallax}px, 0)`,
              }}
            >
              <div className="relative w-full h-full rounded-full animate-circle-breathe overflow-visible flex items-end justify-center">
                {/* Developer Cutout: bottom-aligned and slightly overlapping the top edge of the circle (85% of circle) */}
                <div
                  className={`absolute bottom-0 z-10 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'
                  }`}
                  style={{
                    width: '88%',
                    height: '118%',
                    bottom: 0,
                    transitionDelay: '400ms',
                  }}
                >
                  <img
                    src="/hero-circle.png"
                    alt="Elite Web Developers craftsman"
                    className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] animate-browser-float"
                  />
                </div>
              </div>
            </div>

            {/* Browser-window mock with live screenshot carousel (bottom-aligned, within container) */}
            <div
              onClick={() => onSelectProject(activeSlideProject)}
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
              className={`group/browser absolute left-0 bottom-0 w-[92%] h-[60%] bg-[#08090B] border border-[rgba(255,255,255,0.14)] rounded-[14px] lg:rounded-[18px] p-2.5 sm:p-3.5 shadow-2xl transition-all duration-900 delay-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer hover:border-[#FFC900]/70 z-20 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[60px]'
              }`}
              style={{
                transform: `translate3d(0, ${mockParallax}px, 0)`,
              }}
            >
              <div className="w-full h-full flex flex-col justify-between animate-browser-float rounded-[10px] overflow-hidden">
                {/* Browser top row: dots + domain pill */}
                <div className="flex items-center justify-between pb-2 mb-1 border-b border-[rgba(245,243,239,0.1)]">
                  {/* Three window dots */}
                  <div className="flex items-center gap-[6px]">
                    <span className="w-[8px] h-[8px] rounded-full bg-[#FFC900]" />
                    <span className="w-[8px] h-[8px] rounded-full bg-[#F5F3EF]/35" />
                    <span className="w-[8px] h-[8px] rounded-full bg-[#F5F3EF]/35" />
                  </div>

                  {/* Domain pill updating per slide */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1B1C21] text-[10.5px] lg:text-[11.5px] font-mono text-[#FFC900]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                    <span>{activeDomain}</span>
                  </div>

                  {/* Click affordance indicator */}
                  <span className="text-[10px] text-[rgba(245,243,239,0.5)] group-hover/browser:text-[#FFC900] transition-colors">
                    Click to view ↗
                  </span>
                </div>

                {/* Screenshot Carousel Screen with 600ms Crossfade */}
                <div className="relative flex-1 rounded-[8px] overflow-hidden bg-[#14151A]">
                  {carouselProjects.map((project, idx) => (
                    <div
                      key={project.slug}
                      className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
                        idx === carouselIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={`/projects/${project.slug}.png`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (project.url && !target.src.includes('thum.io')) {
                            target.src = `https://image.thum.io/get/width/1400/${project.url}`;
                          }
                        }}
                        alt={`${project.title} live screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[12px] font-semibold text-[#F5F3EF] drop-shadow-md">
                          {project.title} <span className="text-[#FFC900]">· {project.category}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Three floating pill chips */}
            {/* Chip 1: WooCommerce */}
            <div
              className={`absolute top-2 right-[-8px] sm:right-0 z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-80 opacity-0'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="animate-chip-1 bg-[#F5F3EF] text-[#08090B] font-medium text-[11px] lg:text-[13px] px-[14px] py-[7px] lg:px-[18px] lg:py-[9px] rounded-full shadow-lg">
                WooCommerce
              </div>
            </div>

            {/* Chip 2: Full-stack */}
            <div
              className={`absolute bottom-[-10px] left-[-8px] sm:left-[-12px] z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-80 opacity-0'
              }`}
              style={{ transitionDelay: '1050ms' }}
            >
              <div className="animate-chip-2 bg-[#08090B] border border-[#FFC900] text-[#FFC900] font-medium text-[11px] lg:text-[13px] px-[14px] py-[7px] lg:px-[18px] lg:py-[9px] rounded-full shadow-lg">
                Full-stack
              </div>
            </div>

            {/* Chip 3: Custom dashboards */}
            <div
              className={`absolute bottom-[10px] right-[-10px] sm:right-[-6px] z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-80 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="animate-chip-3 bg-[#08090B] border border-white text-white font-medium text-[11px] lg:text-[13px] px-[14px] py-[7px] lg:px-[18px] lg:py-[9px] rounded-full shadow-lg">
                Custom dashboards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
