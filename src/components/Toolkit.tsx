import React from 'react';
import { Link } from 'react-router';
import { TOOLKIT_CHIPS } from '../content';

export const Toolkit: React.FC = () => {
  return (
    <section
      id="stack"
      className="bg-[#08090B] pt-[10px] lg:pt-[20px] pb-[52px] lg:pb-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto"
    >
      <div className="mb-[24px] lg:mb-[40px]">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-[#F5F3EF]">
          Our toolkit<span className="text-[#FFC900]">.</span>
        </h2>
      </div>

      {/* Row of wrapping pill chips */}
      <div className="flex flex-wrap gap-[8px] lg:gap-[12px]">
        {TOOLKIT_CHIPS.map((chip, idx) => (
          <span
            key={chip}
            style={{
              transitionDelay: `${idx * 40}ms`,
            }}
            className="toolkit-chip inline-flex items-center rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] text-[#F5F3EF] font-medium text-[12.5px] lg:text-[16px] px-[16px] py-[9px] lg:px-[24px] lg:py-[12px] transition-all duration-200 ease-out hover:bg-[#FFC900] hover:text-[#08090B] hover:-translate-y-[3px] hover:border-[#FFC900] cursor-default select-none shadow-sm"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Short internal link to /about */}
      <div className="mt-7 lg:mt-10 flex justify-end">
        <Link
          to="/about"
          className="group inline-flex items-center gap-2 text-[14px] lg:text-[15px] font-medium text-[rgba(245,243,239,0.75)] hover:text-[#FFC900] transition-colors"
        >
          <span>Learn more about our studio</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
};
