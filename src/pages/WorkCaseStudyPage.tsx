import React from 'react';
import { Link } from 'react-router';
import { ALL_WORKS, FEATURED_WORKS, getWorkBySlug } from '../works';
import { PAGE_SEO, buildBreadcrumbSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProjectScreenshot } from '../components/ProjectScreenshot';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface WorkCaseStudyPageProps {
  slug: string;
  onOpenContact: (service?: string) => void;
}

export const WorkCaseStudyPage: React.FC<WorkCaseStudyPageProps> = ({
  slug,
  onOpenContact,
}) => {
  const project = getWorkBySlug(slug) || FEATURED_WORKS[0];
  const path = `/works/${project.slug}`;
  const seo = PAGE_SEO[path] || PAGE_SEO['/works'];
  const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const otherFeatured = FEATURED_WORKS.filter((w) => w.slug !== project.slug);
  const moreWorks = ALL_WORKS.filter(
    (w) => w.slug !== project.slug && !w.featured
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={path}
        ogImage={seo.ogImage}
        schemas={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Works', path: '/works' },
            { name: project.title, path },
          ]),
        ]}
      />

      {/* Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-10 lg:pb-14 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Works', to: '/works' },
            { label: project.title },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            CASE STUDY · {project.category}
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF]">
              {project.title}<span className="text-[#FFC900]">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15.5px] lg:text-[18px] text-[rgba(245,243,239,0.74)] leading-[1.7]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website in a new tab`}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14.5px] px-7 py-3.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Visit live site</span>
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] px-6 py-3.5 hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
            >
              <span>← All works</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Visual Showcase */}
      <section className="pb-12 lg:pb-16 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="group rounded-[24px] lg:rounded-[32px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(245,243,239,0.1)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC900]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/30" />
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] lg:text-[13px] font-mono text-[#FFC900] hover:underline"
            >
              {domain} ↗
            </a>
          </div>

          <div className="w-full aspect-[16/10] max-h-[580px] rounded-[16px] lg:rounded-[20px] overflow-hidden bg-[#1B1C21]">
            <ProjectScreenshot project={project} eager={true} />
          </div>
        </div>
      </section>

      {/* Project Overview & Features Built */}
      <section className="pb-[52px] lg:pb-[100px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-3 block">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-[26px] sm:text-[36px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#F5F3EF] mb-4">
                What we designed and built<span className="text-[#FFC900]">.</span>
              </h2>
              <p className="text-[15px] lg:text-[16.5px] text-[rgba(245,243,239,0.74)] leading-[1.75]">
                {project.caseStudy?.summary || project.description}
              </p>
            </div>

            <div>
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#F5F3EF] mb-4">
                Key deliverables
              </h3>
              <ul className="space-y-0">
                {(project.caseStudy?.whatWeBuilt || project.bullets || []).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-3.5 border-t border-[rgba(245,243,239,0.14)] text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.85)] leading-[1.65]"
                  >
                    <span className="w-[8px] h-[8px] rounded-full bg-[#FFC900] mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 lg:p-7">
              <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
                PROJECT DETAILS
              </div>
              <dl className="space-y-4 text-[14px]">
                <div className="border-t border-[rgba(245,243,239,0.1)] pt-3">
                  <dt className="text-[rgba(245,243,239,0.5)] text-[12px] uppercase tracking-wider mb-1">
                    Category
                  </dt>
                  <dd className="text-[#F5F3EF] font-medium">{project.category}</dd>
                </div>
                <div className="border-t border-[rgba(245,243,239,0.1)] pt-3">
                  <dt className="text-[rgba(245,243,239,0.5)] text-[12px] uppercase tracking-wider mb-1">
                    Live website
                  </dt>
                  <dd>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFC900] hover:underline font-mono text-[13px]"
                    >
                      {domain} ↗
                    </a>
                  </dd>
                </div>
                {project.caseStudy && (
                  <div className="border-t border-[rgba(245,243,239,0.1)] pt-3">
                    <dt className="text-[rgba(245,243,239,0.5)] text-[12px] uppercase tracking-wider mb-1">
                      Related service
                    </dt>
                    <dd>
                      <Link
                        to={`/services/${project.caseStudy.serviceSlug}`}
                        className="text-[#FFC900] hover:underline font-medium"
                      >
                        {project.caseStudy.serviceLabel} →
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 pt-5 border-t border-[rgba(245,243,239,0.1)]">
                <div className="text-[12px] text-[rgba(245,243,239,0.5)] uppercase tracking-wider mb-3">
                  Stack &amp; capabilities
                </div>
                <div className="flex flex-wrap gap-2">
                  {(project.caseStudy?.stackUsed || project.tags).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#1B1C21] border border-[rgba(245,243,239,0.16)] px-3.5 py-1.5 text-[12px] text-[#F5F3EF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 lg:p-7">
              <h3 className="text-[18px] font-semibold text-[#F5F3EF] mb-2">
                Planning something similar?
              </h3>
              <p className="text-[13.5px] text-[rgba(245,243,239,0.68)] leading-[1.65] mb-4">
                Tell us about your project and we will share how we would approach the design and build.
              </p>
              <button
                onClick={() => onOpenContact(project.caseStudy?.serviceLabel)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14px] px-5 py-3 hover:brightness-105 transition cursor-pointer"
              >
                <span>Start a similar project</span>
                <span>→</span>
              </button>
            </div>
          </aside>
        </div>

        {/* More Case Studies */}
        <div className="mt-14 pt-12 border-t border-[rgba(245,243,239,0.12)]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#F5F3EF] tracking-[-0.8px]">
              More featured case studies<span className="text-[#FFC900]">.</span>
            </h2>
            <Link to="/works" className="text-[14px] font-medium text-[#FFC900] hover:underline">
              All 11 works →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherFeatured.map((item) => (
              <Link
                key={item.slug}
                to={`/works/${item.slug}`}
                className="group rounded-[22px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 hover:border-[rgba(255,201,0,0.55)] transition-all"
              >
                <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-2">
                  {item.category}
                </div>
                <h3 className="text-[22px] font-semibold text-[#F5F3EF] group-hover:text-[#FFC900] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.65] mb-3">
                  {item.description}
                </p>
                <span className="text-[13.5px] font-medium text-[#FFC900]">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
          {moreWorks.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-[rgba(245,243,239,0.6)]">
              <span>Also live in our portfolio:</span>
              {moreWorks.map((w) => (
                <a
                  key={w.slug}
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F3EF] hover:text-[#FFC900] underline decoration-[rgba(245,243,239,0.25)] underline-offset-4"
                >
                  {w.title} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact(project.caseStudy?.serviceLabel)} />
      <Footer />
    </div>
  );
};
