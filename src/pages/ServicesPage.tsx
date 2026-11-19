import React from 'react';
import { Link } from 'react-router';
import { SERVICES_DETAIL } from '../servicesData';
import { PAGE_SEO, buildBreadcrumbSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface ServicesPageProps {
  onOpenContact: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  const seo = PAGE_SEO['/services'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/services"
        schemas={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />

      {/* Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-10 lg:pb-16 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Services' },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            WHAT WE BUILD
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          Web development services under one roof<span className="text-[#FFC900]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] lg:text-[18px] text-[rgba(245,243,239,0.7)] leading-[1.7]">
          From a first business website to a Shopify or WooCommerce storefront, custom web app, or ongoing site care—we handle design, engineering, and launch for businesses across Bangalore, Karur, and Tamil Nadu.
        </p>
      </section>

      {/* Light Services Grid Section */}
      <section className="w-full bg-[#F5F3EF] text-[#08090B] py-[52px] lg:py-[110px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES_DETAIL.map((service) => {
              const isDark = service.number === '04';
              return (
                <article
                  key={service.slug}
                  className={`rounded-[26px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 ${
                    isDark
                      ? 'bg-[#08090B] text-[#F5F3EF] border border-[#08090B]'
                      : 'bg-[#F5F3EF] text-[#08090B] border border-[rgba(8,9,11,0.18)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-[46px] h-[46px] rounded-[14px] bg-[#FFC900] text-[#08090B] flex items-center justify-center text-[18px] font-semibold">
                        {service.number}
                      </div>
                      <span
                        className={`text-[11.5px] font-medium uppercase tracking-[2px] ${
                          isDark ? 'text-[#FFC900]' : 'text-[#08090B]/60'
                        }`}
                      >
                        {service.technologies.slice(0, 3).join(' · ')}
                      </span>
                    </div>

                    <h2 className="text-[26px] lg:text-[32px] font-semibold leading-[1.15] tracking-[-0.8px] mb-3">
                      {service.title}
                    </h2>

                    <p
                      className={`text-[14.5px] lg:text-[15.5px] leading-[1.7] mb-5 ${
                        isDark ? 'text-[rgba(245,243,239,0.75)]' : 'text-[rgba(8,9,11,0.74)]'
                      }`}
                    >
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-7">
                      {service.included.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2.5 text-[13.5px] lg:text-[14px] leading-[1.6] ${
                            isDark ? 'text-[rgba(245,243,239,0.85)]' : 'text-[rgba(8,9,11,0.82)]'
                          }`}
                        >
                          <span className="w-[7px] h-[7px] rounded-full bg-[#FFC900] mt-2 flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-current/15">
                    <Link
                      to={service.path}
                      className={`inline-flex items-center gap-2 rounded-full font-medium text-[14px] px-6 py-3 transition-all ${
                        isDark
                          ? 'bg-[#FFC900] text-[#08090B] hover:brightness-105'
                          : 'bg-[#08090B] text-[#F5F3EF] hover:bg-[#FFC900] hover:text-[#08090B]'
                      }`}
                    >
                      <span>Explore {service.title.toLowerCase()}</span>
                      <span>→</span>
                    </Link>

                    <button
                      onClick={() => onOpenContact(service.contactServiceValue)}
                      className={`inline-flex items-center gap-1.5 rounded-full font-medium text-[13.5px] px-5 py-3 border transition-colors cursor-pointer ${
                        isDark
                          ? 'border-[rgba(245,243,239,0.3)] text-[#F5F3EF] hover:border-[#FFC900] hover:text-[#FFC900]'
                          : 'border-[rgba(8,9,11,0.28)] text-[#08090B] hover:border-[#08090B]'
                      }`}
                    >
                      <span>Start a project</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-links to Works & Process */}
      <section className="py-[52px] lg:py-[90px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="rounded-[26px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="text-[11.5px] font-medium uppercase tracking-[3px] text-[#FFC900] block mb-2">
              NOT SURE WHICH FITS?
            </span>
            <h2 className="text-[24px] sm:text-[32px] font-semibold tracking-[-0.8px] text-[#F5F3EF]">
              See how our 4-step process works or browse live builds<span className="text-[#FFC900]">.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14px] px-6 py-3 hover:brightness-105 transition"
            >
              <span>View live works</span>
              <span>→</span>
            </Link>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] px-6 py-3 hover:border-[#FFC900] hover:text-[#FFC900] transition"
            >
              <span>Our process</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact()} />
      <Footer />
    </div>
  );
};
