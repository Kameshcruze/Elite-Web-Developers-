import React from 'react';
import { Link } from 'react-router';
import { PROCESS_STEPS } from '../content';
import { ALL_WORKS } from '../works';
import { SERVICES_DETAIL, getServiceBySlug } from '../servicesData';
import {
  PAGE_SEO,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProjectScreenshot } from '../components/ProjectScreenshot';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface ServiceDetailPageProps {
  slug: string;
  onOpenContact: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onOpenContact,
}) => {
  const service = getServiceBySlug(slug) || SERVICES_DETAIL[0];
  const seo = PAGE_SEO[service.path] || PAGE_SEO['/services'];
  const relatedWorks = service.relatedWorkSlugs
    .map((workSlug) => ALL_WORKS.find((w) => w.slug === workSlug))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));
  const otherServices = SERVICES_DETAIL.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={service.path}
        schemas={[
          buildServiceSchema({
            name: service.title,
            description: service.shortDescription,
            path: service.path,
            serviceType: service.serviceType,
          }),
          buildFaqSchema(service.faqs),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: service.path },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-20 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: service.title },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            {service.eyebrow}
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          {service.headline}<span className="text-[#FFC900]">.</span>
        </h1>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="space-y-4">
            <p className="text-[15.5px] lg:text-[18px] text-[rgba(245,243,239,0.78)] leading-[1.75]">
              {service.leadParagraph}
            </p>
            <p className="text-[14.5px] lg:text-[16px] text-[rgba(245,243,239,0.65)] leading-[1.75]">
              {service.secondaryParagraph}
            </p>
          </div>

          <div className="rounded-[24px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 lg:p-7">
            <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-3">
              READY TO DISCUSS YOUR SCOPE?
            </div>
            <p className="text-[14px] text-[rgba(245,243,239,0.7)] leading-[1.7] mb-5">
              Share your goals and timeline. We respond with a clear, scope-based plan—no generic packages or hidden costs.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenContact(service.contactServiceValue)}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14.5px] px-6 py-3 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Start this project</span>
                <span>→</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] px-5 py-3 hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
              >
                <span>Contact page</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Tech Used (Light section matching Home rhythm) */}
      <section className="w-full bg-[#F5F3EF] text-[#08090B] py-[52px] lg:py-[110px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
            <div>
              <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#08090B]/65 mb-2 block">
                WHAT&apos;S INCLUDED
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-semibold leading-[1.08] tracking-[-1px] lg:tracking-[-1.8px] text-[#08090B] mb-6">
                Built around your goals<span className="text-[#FFC900]">.</span>
              </h2>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-3 border-t border-[rgba(8,9,11,0.14)] text-[14.5px] lg:text-[15.5px] text-[rgba(8,9,11,0.82)] leading-[1.65]"
                  >
                    <span className="w-[8px] h-[8px] rounded-full bg-[#FFC900] mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="rounded-[24px] bg-[#08090B] text-[#F5F3EF] p-6 lg:p-8 mb-6">
                <span className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] block mb-3">
                  TECHNOLOGIES USED
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.16)] text-[#F5F3EF] text-[13px] font-medium px-4 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[rgba(8,9,11,0.18)] bg-[#F5F3EF] p-6 lg:p-8">
                <span className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#08090B]/60 block mb-3">
                  HOW WE DELIVER
                </span>
                <ol className="space-y-3">
                  {PROCESS_STEPS.map((step) => (
                    <li key={step.number} className="flex items-start gap-3 text-[14px]">
                      <span className="font-semibold text-[#08090B]">{step.number}.</span>
                      <span className="text-[rgba(8,9,11,0.78)]">
                        <strong className="font-semibold text-[#08090B]">{step.title}:</strong> {step.description}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Live Projects */}
      {relatedWorks.length > 0 && (
        <section className="py-[52px] lg:py-[100px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-2 block">
                RELEVANT LIVE WORK
              </span>
              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.08] tracking-[-1px] text-[#F5F3EF]">
                Projects in this category<span className="text-[#FFC900]">.</span>
              </h2>
            </div>
            <Link
              to="/works"
              className="text-[14px] font-medium text-[#FFC900] hover:underline"
            >
              View all 11 live works →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedWorks.slice(0, 3).map((work) => (
              <article
                key={work.slug}
                className="group relative bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[22px] p-4 sm:p-5 flex flex-col justify-between hover:border-[rgba(255,201,0,0.55)] transition-all"
              >
                <div>
                  <div className="aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-[#1B1C21] mb-4">
                    <ProjectScreenshot project={work} />
                  </div>
                  <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-1">
                    {work.category}
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#F5F3EF] mb-2">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${work.title} live website in a new tab`}
                      className="after:absolute after:inset-0 after:z-10"
                    >
                      {work.title}
                    </a>
                  </h3>
                  <p className="text-[13.5px] text-[rgba(245,243,239,0.68)] leading-[1.65] mb-4">
                    {work.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(245,243,239,0.1)] text-[13px] font-medium">
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 text-[#FFC900] hover:underline"
                  >
                    View live site ↗
                  </a>
                  {work.caseStudy && (
                    <Link
                      to={`/works/${work.slug}`}
                      className="relative z-20 text-[rgba(245,243,239,0.8)] hover:text-[#FFC900]"
                    >
                      Case study →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Service FAQs */}
      <section className="pb-[52px] lg:pb-[100px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="border-t border-[rgba(245,243,239,0.14)] pt-12 lg:pt-16">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-2 block">
            COMMON QUESTIONS
          </span>
          <h2 className="text-[28px] sm:text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-[#F5F3EF] mb-8">
            Questions about {service.title.toLowerCase()}<span className="text-[#FFC900]">.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[20px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6"
              >
                <h3 className="text-[16px] lg:text-[17px] font-semibold text-[#F5F3EF] leading-[1.4] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Other Services Cross-links */}
          <div className="mt-10 pt-8 border-t border-[rgba(245,243,239,0.1)] flex flex-wrap items-center gap-3">
            <span className="text-[13px] text-[rgba(245,243,239,0.55)] mr-2">
              Other services:
            </span>
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={other.path}
                className="rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] px-4 py-2 text-[13px] text-[#F5F3EF] hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
              >
                {other.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact(service.contactServiceValue)} />
      <Footer />
    </div>
  );
};
