import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../content';

export const HowWeWork: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[#08090B] py-[52px] lg:py-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto"
    >
      {/* Heading Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-8 mb-[28px] lg:mb-[56px]">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-[#F5F3EF]">
          How we work<span className="text-[#FFC900]">.</span>
        </h2>
        <p className="max-w-[440px] text-[14.5px] lg:text-[17px] text-[rgba(245,243,239,0.68)] leading-[1.7] mt-2 lg:mt-0 lg:pb-1">
          A simple four-step process so you always know what happens next.
        </p>
      </div>

      {/* Desktop & Tablet: 4 columns (or 2 columns tablet) */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.number}
            style={{
              transitionDelay: `${idx * 120}ms`,
            }}
            className={`group relative border-t border-[rgba(245,243,239,0.14)] pt-[34px] pr-4 lg:pr-[28px] pb-[10px] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Big number: 64px, weight 600, yellow, tracking -2px */}
            <div className="text-[48px] lg:text-[64px] font-semibold leading-none tracking-[-2px] text-[#FFC900] group-hover:text-[#F5F3EF] transition-colors duration-300 select-none mb-3">
              {step.number}
            </div>

            {/* Title: 22px / 600, hover shifts translateX(6px) */}
            <h3 className="text-[19px] lg:text-[22px] font-semibold text-[#F5F3EF] leading-[1.3] tracking-[-0.5px] mb-2.5 transition-transform duration-300 group-hover:translate-x-[6px]">
              {step.title}
            </h3>

            {/* Description: 15px, muted, line-height 1.7 */}
            <p className="text-[14px] lg:text-[15px] text-[rgba(245,243,239,0.68)] leading-[1.7]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical list, flex gap:18px, padding 20px 0, top border, number left, text right */}
      <div className="sm:hidden flex flex-col">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="flex items-start gap-[18px] py-[20px] border-t border-[rgba(245,243,239,0.14)]"
          >
            {/* Number on left: 36px, 600, yellow */}
            <div className="text-[36px] font-semibold leading-none tracking-[-1px] text-[#FFC900] flex-shrink-0 select-none pt-0.5">
              {step.number}
            </div>

            {/* Text on right */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#F5F3EF] leading-[1.3] tracking-[-0.5px] mb-1">
                {step.title}
              </h3>
              <p className="text-[13px] text-[rgba(245,243,239,0.68)] leading-[1.7]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
