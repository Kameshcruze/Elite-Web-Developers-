import React, { useState } from 'react';
import { ALL_WORKS, WORK_CATEGORIES, WorkProject } from '../works';
import { ProjectScreenshot } from './ProjectScreenshot';
import { ContactCTA } from './ContactCTA';
import { Footer } from './Footer';

interface WorksPageProps {
  onOpenContact: () => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({
  onOpenContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? ALL_WORKS
      : ALL_WORKS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      {/* Works Page Header Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-12 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        {/* Breadcrumb / Back link */}
        <div className="mb-4 lg:mb-6">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-[13px] lg:text-[14px] text-[rgba(245,243,239,0.6)] hover:text-[#FFC900] transition-colors"
          >
            <span>← Back to home</span>
          </a>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            OUR WORK
          </span>
          <span
            className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block"
            aria-hidden="true"
          />
        </div>

        {/* H1 Headline */}
        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          Websites we&apos;ve built, live<span className="text-[#FFC900]">.</span>
        </h1>

        {/* Subtitle & Project Count Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4 lg:mt-6 pt-2 border-t border-[rgba(245,243,239,0.1)]">
          <p className="max-w-[580px] text-[15px] lg:text-[17px] text-[rgba(245,243,239,0.68)] leading-[1.7]">
            Explore our complete portfolio of live client stores, corporate sites, hospitality experiences, and web apps built for Tamil Nadu and global clients.
          </p>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] text-[12.5px] font-mono text-[#FFC900]">
              <span className="w-2 h-2 rounded-full bg-[#FFC900]" />
              Showing {filteredProjects.length} of {ALL_WORKS.length} websites
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar under Navbar */}
      <div className="sticky top-[72px] lg:top-[88px] z-30 bg-[#08090B]/90 backdrop-blur-[14px] border-y border-[rgba(245,243,239,0.12)] py-3 px-5 sm:px-12 lg:px-[96px]">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          {WORK_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === 'All'
                ? ALL_WORKS.length
                : ALL_WORKS.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[12.5px] lg:text-[13.5px] font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#FFC900] text-[#08090B] shadow-md shadow-[#FFC900]/20'
                    : 'bg-[#14151A] text-[rgba(245,243,239,0.7)] hover:text-[#F5F3EF] hover:border-[#FFC900]/40 border border-[rgba(245,243,239,0.14)]'
                }`}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-[#08090B]/20 text-[#08090B] font-bold'
                      : 'bg-[#1B1C21] text-[rgba(245,243,239,0.5)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const domain = project.url
              ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
              : '';

            return (
              <article
                key={project.slug}
                className="group relative bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[rgba(255,201,0,0.55)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                {/* Top: 16:10 Screenshot with hover scroll & floating 'Open' badge */}
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-[14px] lg:rounded-[16px] overflow-hidden bg-[#1B1C21] border border-[rgba(245,243,239,0.08)]">
                    <ProjectScreenshot project={project} />

                    {/* Yellow circular "Open" badge fading in on hover */}
                    <div className="absolute inset-0 bg-[#08090B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[13px] flex items-center justify-center shadow-lg transform scale-80 group-hover:scale-100 transition-transform duration-300">
                        <span>Open ↗</span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="pt-4 pb-2">
                    {/* Category */}
                    <div className="text-[12px] lg:text-[13px] font-medium tracking-[3px] text-[#FFC900] uppercase mb-1.5">
                      {project.category}
                    </div>

                    {/* Title + Domain with stretched link */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#F5F3EF] leading-tight tracking-[-0.6px]">
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
                      {project.featured && (
                        <span className="relative z-20 pointer-events-none flex-shrink-0 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#FFC900]/15 text-[#FFC900] border border-[#FFC900]/30 mt-1">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Muted Domain */}
                    {domain && (
                      <div className="text-[12.5px] font-mono text-[rgba(245,243,239,0.5)] mb-3">
                        {domain}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-[14px] lg:text-[15px] text-[rgba(245,243,239,0.68)] leading-[1.65] mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="relative z-20 pointer-events-none flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] lg:text-[12px] font-normal px-3 py-1 rounded-full border border-[rgba(245,243,239,0.2)] text-[rgba(245,243,239,0.85)] group-hover:border-[rgba(245,243,239,0.35)] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Row: Primary 'Experience live' + Small '↗' new-tab button */}
                <div className="pt-3 border-t border-[rgba(245,243,239,0.1)] flex items-center justify-between gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Experience live site for ${project.title} (opens in a new tab)`}
                    className="relative z-20 flex-1 inline-flex items-center justify-center gap-2 bg-[#FFC900] text-[#08090B] font-medium text-[13.5px] py-2.5 px-4 rounded-full transition-all duration-200 hover:brightness-105 active:scale-[0.98] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2"
                  >
                    <span>Experience live</span>
                    <span aria-hidden="true">→</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 w-10 h-10 rounded-full border border-[rgba(245,243,239,0.25)] text-[#F5F3EF] hover:border-[#FFC900] hover:text-[#FFC900] flex items-center justify-center transition-colors flex-shrink-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2"
                      aria-label={`Open ${project.title} directly in new tab`}
                      title="Open website in new tab"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Shared CTA Block & Footer */}
      <ContactCTA onOpenContactModal={onOpenContact} />
      <Footer />
    </div>
  );
};
