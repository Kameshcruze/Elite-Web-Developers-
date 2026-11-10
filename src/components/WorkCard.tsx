import React from 'react';
import { ProjectItem } from '../content';
import { ProjectScreenshot } from './ProjectScreenshot';

interface WorkCardProps {
  project: ProjectItem;
  numberPrefix?: string;
  isFeature?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  project,
  numberPrefix = '01',
  isFeature = false,
}) => {
  return (
    <article
      className={`group project-card relative bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[22px] lg:rounded-[28px] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[8px] hover:border-[rgba(255,201,0,0.55)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] cursor-pointer active:scale-[0.98] ${
        isFeature ? 'col-span-1 lg:col-span-2 p-4 sm:p-6 lg:p-[28px]' : 'col-span-1 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between'
      }`}
    >
      {isFeature ? (
        // Feature Card layout (Card 01 - BUNT India): Screen on Left, Text on Right
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-10 items-center">
          {/* Screen (Left) with 16:10 aspect ratio */}
          <div className="w-full aspect-[16/10] sm:h-[320px] lg:h-[420px] rounded-[18px] lg:rounded-[22px] overflow-hidden bg-[#1B1C21]">
            <div className="w-full h-full transition-transform duration-400 ease-out group-hover:scale-[1.02]">
              <ProjectScreenshot project={project} />
            </div>
          </div>

          {/* Details (Right) */}
          <div className="flex flex-col justify-center">
            <div className="text-[13px] font-medium tracking-[3px] text-[#FFC900] uppercase mb-[10px]">
              {numberPrefix} / {project.category}
            </div>

            <div className="flex items-center justify-between gap-3 mb-[12px]">
              <h3 className="text-[26px] lg:text-[34px] font-semibold text-[#F5F3EF] leading-[1.15] tracking-[-0.8px] lg:tracking-[-1.2px]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="after:absolute after:inset-0 after:z-10 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded-sm"
                >
                  {project.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in a new tab`}
                className="relative z-20 w-7 h-7 flex items-center justify-center text-[#FFC900] transition-all duration-400 group-hover:rotate-45 group-hover:scale-110 flex-shrink-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <p className="text-[14.5px] lg:text-[16px] text-[rgba(245,243,239,0.68)] leading-[1.7] mb-4">
              {project.description}
            </p>

            {/* Bullets */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="space-y-0 my-2">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-[13.5px] lg:text-[15px] py-[9px] border-t border-[rgba(245,243,239,0.14)] flex items-start gap-3 text-[rgba(245,243,239,0.85)]"
                  >
                    <span
                      className="w-[8px] h-[8px] rounded-full bg-[#FFC900] mt-1.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tags */}
            <div className="relative z-20 pointer-events-none flex flex-wrap gap-2 mt-[14px] mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] lg:text-[12.5px] font-normal px-[14px] py-[6px] rounded-full border border-[rgba(245,243,239,0.3)] text-[rgba(245,243,239,0.9)] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View live site ↗ link */}
            <div className="pt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live site for ${project.title} (opens in a new tab)`}
                className="relative z-20 group/link inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#FFC900] hover:text-[#FFC900] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded"
              >
                <span>View live site</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Half-width Standard Card layout (Card 02 & 03)
        <div>
          <div className="w-full aspect-[16/10] sm:h-[280px] lg:h-[320px] rounded-[16px] lg:rounded-[20px] overflow-hidden bg-[#1B1C21]">
            <div className="w-full h-full transition-transform duration-400 ease-out group-hover:scale-[1.02]">
              <ProjectScreenshot project={project} />
            </div>
          </div>

          <div className="pt-[22px] px-[8px] pb-[6px]">
            <div className="text-[13px] font-medium tracking-[3px] text-[#FFC900] uppercase mb-[10px]">
              {numberPrefix} / {project.category}
            </div>

            <div className="flex items-center justify-between gap-3 mb-[10px]">
              <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#F5F3EF] leading-[1.2] tracking-[-0.6px] lg:tracking-[-1px]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="after:absolute after:inset-0 after:z-10 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded-sm"
                >
                  {project.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in a new tab`}
                className="relative z-20 w-6 h-6 flex items-center justify-center text-[#FFC900] transition-all duration-400 group-hover:rotate-45 group-hover:scale-110 flex-shrink-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <p className="text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.68)] leading-[1.7] mb-4">
              {project.description}
            </p>

            {/* Bullets if present */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="space-y-0 my-2 mb-3">
                {project.bullets.slice(0, 3).map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-[13px] lg:text-[14px] py-[7px] border-t border-[rgba(245,243,239,0.1)] flex items-start gap-2.5 text-[rgba(245,243,239,0.85)]"
                  >
                    <span
                      className="w-[7px] h-[7px] rounded-full bg-[#FFC900] mt-1.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="line-clamp-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="relative z-20 pointer-events-none flex flex-wrap gap-2 mt-[14px] mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] lg:text-[12px] font-normal px-[13px] py-[5px] rounded-full border border-[rgba(245,243,239,0.3)] text-[rgba(245,243,239,0.9)] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View live site ↗ link */}
            <div className="pt-2 border-t border-[rgba(245,243,239,0.1)]">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live site for ${project.title} (opens in a new tab)`}
                className="relative z-20 group/link inline-flex items-center gap-1.5 text-[14px] font-medium text-[#FFC900] hover:text-[#FFC900] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2 rounded"
              >
                <span>View live site</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
