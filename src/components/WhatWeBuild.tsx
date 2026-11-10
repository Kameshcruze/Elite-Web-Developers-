import React from 'react';
import { SERVICES } from '../content';

interface WhatWeBuildProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="w-full bg-[#F5F3EF] text-[#08090B] py-[52px] lg:py-[110px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px]">
        {/* Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-8 mb-[28px] lg:mb-[56px]">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-[#08090B]">
            What we build<span className="text-[#FFC900]">.</span>
          </h2>
          <p className="max-w-[440px] text-[14.5px] lg:text-[17px] text-[rgba(8,9,11,0.7)] leading-[1.7] mt-2 lg:mt-0 lg:pb-1">
            {/* Desktop text */}
            <span className="hidden sm:inline">
              From a first business website to a custom app, we handle design, development, and launch under one roof.
            </span>
            {/* Mobile text */}
            <span className="sm:hidden">
              From a first business website to a custom app, we handle design, development, and launch.
            </span>
          </p>
        </div>

        {/* 4 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[20px]">
          {SERVICES.map((service) => {
            const isInverted = service.inverted;

            return (
              <div
                key={service.number}
                onClick={() => onSelectService?.(service.title)}
                className={`service-card group relative rounded-[24px] p-5 lg:p-[30px_26px] min-h-[auto] lg:min-h-[300px] flex flex-col justify-between transition-all duration-350 ease-out cursor-pointer active:scale-[0.98] ${
                  isInverted
                    ? 'bg-[#08090B] text-[#F5F3EF] border border-[#08090B] hover:bg-[#FFC900] hover:text-[#08090B] hover:border-[#FFC900] hover:-translate-y-[6px]'
                    : 'bg-[#F5F3EF] text-[#08090B] border border-[rgba(8,9,11,0.18)] hover:bg-[#FFC900] hover:border-[#FFC900] hover:-translate-y-[6px]'
                }`}
              >
                <div>
                  {/* 46px yellow rounded-square containing number 01 to 04 */}
                  <div
                    className={`w-[46px] h-[46px] rounded-[14px] flex items-center justify-center text-[18px] font-semibold transition-colors duration-350 ${
                      isInverted
                        ? 'bg-[#FFC900] text-[#08090B] group-hover:bg-[#08090B] group-hover:text-[#FFC900]'
                        : 'bg-[#FFC900] text-[#08090B] group-hover:bg-[#08090B] group-hover:text-[#FFC900]'
                    }`}
                  >
                    {service.number}
                  </div>

                  {/* Title (22px, 600, margin-top 70px desktop / 18px mobile) */}
                  <h3 className="text-[18px] lg:text-[22px] font-semibold leading-[1.3] tracking-[-0.5px] mt-[18px] lg:mt-[70px] mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description (14.5px, line-height 1.7, 72% opacity) */}
                  <p
                    className={`text-[13.5px] lg:text-[14.5px] leading-[1.7] ${
                      isInverted
                        ? 'text-[#F5F3EF]/72 group-hover:text-[#08090B]/85'
                        : 'text-[rgba(8,9,11,0.72)] group-hover:text-[#08090B]/85'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <span>Start this build</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
