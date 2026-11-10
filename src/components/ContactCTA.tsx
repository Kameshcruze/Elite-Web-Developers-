import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO } from '../content';

interface ContactCTAProps {
  onOpenContactModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenContactModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={blockRef}
      className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px] mb-[40px] lg:mb-[90px]"
    >
      <div
        className={`bg-[#FFC900] text-[#08090B] rounded-[28px] lg:rounded-[40px] p-[40px_24px] sm:p-[60px_40px] lg:p-[90px_80px] shadow-2xl transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.96]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[32px] lg:gap-[50px] items-center">
          {/* Left Column: Eyebrow + H2 */}
          <div>
            <div className="text-[10.5px] lg:text-[13px] font-normal uppercase tracking-[3px] lg:tracking-[4px] text-[#08090B]/80 mb-2.5">
              {CONTACT_INFO.eyebrow}
            </div>
            <h2 className="text-[38px] sm:text-[54px] lg:text-[72px] font-semibold leading-[1.0] tracking-[-1px] lg:tracking-[-2px] text-[#08090B]">
              Have a project in mind<span className="text-[#08090B]">?</span>
            </h2>
          </div>

          {/* Right Column: Contact Details & Dark Button */}
          <div className="flex flex-col justify-between">
            <div className="text-[13.5px] lg:text-[17px] leading-[2.2] text-[#08090B] mb-6">
              <div>
                <span className="font-medium mr-2">{CONTACT_INFO.phoneLabel}:</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <span className="font-medium mr-2">{CONTACT_INFO.emailLabel}:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:underline focus:outline-none"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <span className="font-medium mr-2">{CONTACT_INFO.locationLabel}:</span>
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>

            {/* Dark button: background #08090B, text #F5F3EF, hover turns white with dark text */}
            <div>
              <button
                onClick={onOpenContactModal}
                className="group inline-flex items-center gap-[10px] bg-[#08090B] text-[#F5F3EF] font-medium text-[13px] lg:text-[15px] px-[20px] py-[11px] lg:px-[26px] lg:py-[14px] rounded-full transition-all duration-250 ease-out hover:bg-white hover:text-[#08090B] hover:-translate-y-[3px] shadow-lg active:scale-[0.97]"
              >
                <span>Start a project</span>
                <span className="transition-transform duration-250 group-hover:translate-x-[5px]">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
