import React from 'react';
import { FEATURED_WORKS, ProjectItem } from '../content';
import { WorkCard } from './WorkCard';

interface WorkProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigateToWorks?: () => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject, onNavigateToWorks }) => {
  const card01 = FEATURED_WORKS[0]; // bunt-india
  const card02 = FEATURED_WORKS[1]; // the-fat-cookie-chef
  const card03 = FEATURED_WORKS[2]; // virukshaa-events

  return (
    <section
      id="work"
      className="py-[52px] lg:py-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto scroll-mt-[90px]"
    >
      {/* Section Heading Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-8 mb-[32px] lg:mb-[60px]">
        <div>
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-2 block">
            SELECTED WORK
          </span>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-[#F5F3EF]">
            Websites that perform<span className="text-[#FFC900]">.</span>
          </h2>
        </div>
        <p className="max-w-[460px] text-[14.5px] lg:text-[17px] text-[rgba(245,243,239,0.68)] leading-[1.7] mt-2 lg:mt-0 lg:pb-1">
          A look at recent flagship stores, portals, and web experiences built and delivered for Tamil Nadu businesses.
        </p>
      </div>

      {/* Project Grid: Card 01 full-width; Cards 02 and 03 half-width side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[32px]">
        {card01 && (
          <WorkCard
            key={card01.slug}
            project={card01}
            numberPrefix="01"
            isFeature={true}
            onSelectProject={onSelectProject}
          />
        )}
        {card02 && (
          <WorkCard
            key={card02.slug}
            project={card02}
            numberPrefix="02"
            isFeature={false}
            onSelectProject={onSelectProject}
          />
        )}
        {card03 && (
          <WorkCard
            key={card03.slug}
            project={card03}
            numberPrefix="03"
            isFeature={false}
            onSelectProject={onSelectProject}
          />
        )}
      </div>

      {/* Centered 'View more works →' ghost button with 56px desktop / 32px mobile gap */}
      <div className="mt-8 lg:mt-[56px] text-center">
        <a
          href="#/works"
          onClick={(e) => {
            if (onNavigateToWorks) {
              e.preventDefault();
              onNavigateToWorks();
            }
          }}
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-[rgba(245,243,239,0.4)] text-[#F5F3EF] font-medium text-[14px] lg:text-[15px] transition-all duration-200 ease-out hover:bg-[#F5F3EF] hover:text-[#08090B] hover:border-[#F5F3EF] active:scale-[0.98]"
        >
          <span>View more works</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
};
