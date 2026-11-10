import React from 'react';
import { CAPABILITIES } from '../content';

export const CapabilityStrip: React.FC = () => {
  // Duplicate capabilities for a seamless infinite loop
  const duplicatedItems = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <div className="relative w-full border-y border-[rgba(245,243,239,0.14)] bg-[#08090B] py-[16px] lg:py-[26px] overflow-hidden">
      {/* 60px Gradient fade mask on left and right edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[60px] z-10 bg-gradient-to-r from-[#08090B] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[60px] z-10 bg-gradient-to-l from-[#08090B] to-transparent"
        aria-hidden="true"
      />

      <div className="animate-marquee select-none flex items-center">
        {duplicatedItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="inline-flex items-center">
            <span className="text-[11px] lg:text-[15px] font-normal tracking-[1px] text-[rgba(245,243,239,0.68)] uppercase whitespace-nowrap px-4 lg:px-6">
              {item}
            </span>
            <span
              className="w-[5px] h-[5px] lg:w-[6px] lg:h-[6px] rounded-full bg-[#FFC900] inline-block flex-shrink-0"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
