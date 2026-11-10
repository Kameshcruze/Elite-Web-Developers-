import React, { useState, useEffect, useRef } from 'react';
import { ALL_WORKS, WorkProject } from '../works';

interface ProjectViewerModalProps {
  project: WorkProject | null;
  onClose: () => void;
  onSelectProject?: (project: WorkProject) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectViewerModal: React.FC<ProjectViewerModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [activeTab, setActiveTab] = useState<'live' | 'screenshot'>('live');
  const [iframeLoading, setIframeLoading] = useState(true);
  const [screenshotError, setScreenshotError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Find index in ALL_WORKS
  const currentIndex = project
    ? ALL_WORKS.findIndex((p) => p.slug === project.slug)
    : -1;

  const handlePrev = () => {
    if (currentIndex >= 0 && onSelectProject) {
      const prevIndex = (currentIndex - 1 + ALL_WORKS.length) % ALL_WORKS.length;
      onSelectProject(ALL_WORKS[prevIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && onSelectProject) {
      const nextIndex = (currentIndex + 1) % ALL_WORKS.length;
      onSelectProject(ALL_WORKS[nextIndex]);
    }
  };

  // Set default tab when project opens or changes
  useEffect(() => {
    if (project) {
      setActiveTab(project.defaultTab || (project.url ? 'live' : 'screenshot'));
      setIframeLoading(true);
      setScreenshotError(false);
      setDevice('desktop');

      // Update URL hash
      const isWorksRoute = window.location.hash.startsWith('#/works');
      if (isWorksRoute) {
        window.location.hash = `#/works/${project.slug}`;
      } else {
        window.location.hash = `project=${project.slug}`;
      }

      document.body.style.overflow = 'hidden';

      // Focus close button
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      const hash = window.location.hash;
      if (hash.startsWith('#/works/')) {
        window.location.hash = '#/works';
      } else if (hash.startsWith('#project=')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Handle keyboard shortcuts (Escape to close, ArrowLeft for Prev, ArrowRight for Next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, currentIndex, onClose]);

  if (!project) return null;

  const domain = project.url
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'Concept architecture';

  // Frame width based on selected device mode
  const getFrameWidth = () => {
    switch (device) {
      case 'mobile':
        return '390px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const screenshotSrc = `/projects/${project.slug}.png`;
  const fallbackThumSrc = project.url
    ? `https://image.thum.io/get/width/1400/${project.url}`
    : '';

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-[#08090B]/90 backdrop-blur-[10px] transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="viewer-title"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main modal panel */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[1360px] h-[92vh] max-h-[960px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[20px] lg:rounded-[28px] shadow-2xl flex flex-col overflow-hidden z-10 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        {/* Top Header Bar */}
        <header className="flex-shrink-0 px-4 lg:px-6 py-3.5 bg-[#08090B] border-b border-[rgba(245,243,239,0.14)] flex flex-wrap items-center justify-between gap-3">
          {/* Left: Previous / Next Controls + Title & Domain Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prev/Next arrows cycling through all 11 works */}
            <div className="flex items-center gap-1 bg-[#1B1C21] p-0.5 rounded-full border border-[rgba(245,243,239,0.14)]">
              <button
                type="button"
                onClick={handlePrev}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[rgba(245,243,239,0.7)] hover:text-[#FFC900] hover:bg-[#14151A] transition-colors"
                aria-label="Previous project (or Left Arrow)"
                title="Previous project (←)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span className="text-[11px] font-mono text-[rgba(245,243,239,0.5)] px-1">
                {currentIndex + 1}/{ALL_WORKS.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[rgba(245,243,239,0.7)] hover:text-[#FFC900] hover:bg-[#14151A] transition-colors"
                aria-label="Next project (or Right Arrow)"
                title="Next project (→)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <h2 id="viewer-title" className="text-[16px] lg:text-[19px] font-semibold text-[#F5F3EF] tracking-[-0.5px]">
              {project.title}
            </h2>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B1C21] border border-[rgba(245,243,239,0.14)] text-[12px] font-mono text-[#FFC900]">
              <span className="w-2 h-2 rounded-full bg-[#FFC900] animate-pulse" />
              {domain}
            </span>
          </div>

          {/* Center: Device Toggle (Desktop / Tablet / Mobile) */}
          <div className="hidden sm:flex items-center bg-[#1B1C21] p-1 rounded-full border border-[rgba(245,243,239,0.14)]">
            <button
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1 text-[12px] font-medium rounded-full transition-colors ${
                device === 'desktop'
                  ? 'bg-[#FFC900] text-[#08090B]'
                  : 'text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF]'
              }`}
              aria-label="Desktop preview 100%"
            >
              Desktop
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`px-3 py-1 text-[12px] font-medium rounded-full transition-colors ${
                device === 'tablet'
                  ? 'bg-[#FFC900] text-[#08090B]'
                  : 'text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF]'
              }`}
              aria-label="Tablet preview 768px"
            >
              Tablet
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1 text-[12px] font-medium rounded-full transition-colors ${
                device === 'mobile'
                  ? 'bg-[#FFC900] text-[#08090B]'
                  : 'text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF]'
              }`}
              aria-label="Mobile preview 390px"
            >
              Mobile
            </button>
          </div>

          {/* Right: Tabs (Live / Screenshot), Open in new tab, Close button */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* View Tabs */}
            <div className="flex items-center bg-[#1B1C21] p-1 rounded-full border border-[rgba(245,243,239,0.14)]">
              {project.url && (
                <button
                  onClick={() => setActiveTab('live')}
                  className={`px-3 py-1 text-[12px] font-medium rounded-full transition-colors ${
                    activeTab === 'live'
                      ? 'bg-[#FFC900] text-[#08090B]'
                      : 'text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF]'
                  }`}
                >
                  Live
                </button>
              )}
              <button
                onClick={() => setActiveTab('screenshot')}
                className={`px-3 py-1 text-[12px] font-medium rounded-full transition-colors ${
                  activeTab === 'screenshot' || !project.url
                    ? 'bg-[#FFC900] text-[#08090B]'
                    : 'text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF]'
                }`}
              >
                Screenshot
              </button>
            </div>

            {/* Open in new tab ↗ */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#FFC900]/40 text-[#FFC900] text-[12.5px] font-medium hover:bg-[#FFC900] hover:text-[#08090B] transition-colors"
              >
                <span>Open in new tab</span>
                <span>↗</span>
              </a>
            )}

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#F5F3EF] hover:text-[#FFC900] border border-[rgba(245,243,239,0.14)] hover:border-[#FFC900] transition-colors cursor-pointer"
              aria-label="Close project viewer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        {/* Viewport Frame Container */}
        <div className="flex-1 bg-[#08090B] p-2 sm:p-4 overflow-hidden flex flex-col items-center justify-center relative">
          <div
            className="h-full max-w-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[14px] overflow-hidden flex flex-col transition-all duration-300 ease-out shadow-2xl relative"
            style={{ width: getFrameWidth() }}
          >
            {activeTab === 'live' && project.url ? (
              <div className="relative w-full h-full flex flex-col">
                {/* Yellow loading skeleton spinner */}
                {iframeLoading && (
                  <div className="absolute inset-0 bg-[#14151A] flex flex-col items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full border-3 border-[#FFC900]/20 border-t-[#FFC900] animate-spin mb-3" />
                    <p className="text-[13px] text-[rgba(245,243,239,0.7)] font-mono">
                      Connecting to {domain}...
                    </p>
                  </div>
                )}

                <iframe
                  src={project.url}
                  title={`${project.title} live preview`}
                  onLoad={() => setIframeLoading(false)}
                  className="w-full flex-1 border-none bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />

                {/* Helpful note under iframe as required */}
                <div className="py-2.5 px-4 bg-[#1B1C21] border-t border-[rgba(245,243,239,0.14)] text-center text-[12px] text-[rgba(245,243,239,0.7)] flex flex-wrap items-center justify-center gap-2">
                  <span>Preview not loading? Some sites block embedding.</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline font-medium"
                  >
                    Open it in a new tab ↗
                  </a>
                </div>
              </div>
            ) : (
              /* Screenshot tab: Full-length scrollable screenshot */
              <div className="w-full h-full overflow-y-auto bg-[#14151A]">
                <img
                  src={screenshotError ? fallbackThumSrc : screenshotSrc}
                  onError={() => {
                    if (!screenshotError && fallbackThumSrc) {
                      setScreenshotError(true);
                    }
                  }}
                  alt={`${project.title} full-page presentation`}
                  className="w-full object-cover object-top block"
                />

                {/* Bottom Project Details card */}
                <div className="p-6 lg:p-8 bg-[#14151A] border-t border-[rgba(245,243,239,0.14)]">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-[12px] font-medium tracking-[3px] text-[#FFC900] uppercase mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-[26px] font-semibold text-[#F5F3EF] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-[rgba(245,243,239,0.7)] leading-[1.7] mb-6">
                      {project.description}
                    </p>

                    {project.bullets && project.bullets.length > 0 && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {project.bullets.map((b, i) => (
                          <li key={i} className="text-[13.5px] text-[rgba(245,243,239,0.85)] flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#FFC900] mt-1.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(245,243,239,0.1)]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[12px] px-3.5 py-1.5 rounded-full border border-[rgba(245,243,239,0.2)] text-[#F5F3EF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
