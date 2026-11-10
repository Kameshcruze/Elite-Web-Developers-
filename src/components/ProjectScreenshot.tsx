import React, { useState } from 'react';
import { ProjectItem } from '../content';

interface ProjectScreenshotProps {
  project: ProjectItem;
  className?: string;
  isInteractive?: boolean;
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({
  project,
  className = '',
}) => {
  // Try local first, then thum.io, then styled fallback
  const [imgStage, setImgStage] = useState<'local' | 'thum' | 'fallback'>('local');

  const localSrc = `/projects/${project.slug}.png`;
  const thumSrc = project.url
    ? `https://image.thum.io/get/width/1400/crop/875/${project.url}`
    : '';

  const handleError = () => {
    if (imgStage === 'local') {
      if (project.url) {
        setImgStage('thum');
      } else {
        setImgStage('fallback');
      }
    } else if (imgStage === 'thum') {
      setImgStage('fallback');
    }
  };

  const currentSrc = imgStage === 'local' ? localSrc : thumSrc;

  if (imgStage === 'fallback' || !project.url) {
    return (
      <div
        className={`w-full h-full bg-[#14151A] rounded-[14px] lg:rounded-[18px] p-6 flex flex-col justify-between border border-[rgba(245,243,239,0.12)] select-none ${className}`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,243,239,0.1)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC900]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/30" />
          </div>
          <span className="text-[11px] font-mono text-[rgba(245,243,239,0.5)]">
            {project.url ? project.url.replace(/^https?:\/\//, '') : `${project.slug}.local`}
          </span>
        </div>

        <div className="text-center py-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FFC900]/10 text-[#FFC900] text-[11px] font-medium uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h4 className="text-[22px] lg:text-[28px] font-semibold text-[#F5F3EF] tracking-[-0.5px]">
            {project.title}
          </h4>
          <p className="text-[13px] text-[rgba(245,243,239,0.6)] mt-1 max-w-sm mx-auto">
            {project.url ? 'Connecting to live screenshot...' : 'Custom production architecture'}
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[rgba(245,243,239,0.4)]">
          <span>Elite Web Developers</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-[14px] lg:rounded-[18px] bg-[#14151A] ${className}`}>
      {/* Scrollable image on card hover */}
      <img
        src={currentSrc}
        alt={`${project.title} live website screenshot`}
        onError={handleError}
        className="w-full h-[128%] object-cover object-top transition-transform duration-[4000ms] ease-out group-hover:-translate-y-[25%]"
        loading="lazy"
      />

      {/* Subtle top glare/gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#08090B]/30 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
};
