import React from 'react';
import { Link } from 'react-router';
import { PROCESS_STEPS } from '../content';
import { PAGE_SEO, buildBreadcrumbSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface ProcessPageProps {
  onOpenContact: (service?: string) => void;
}

const STEP_DETAILS: Record<
  string,
  { whatHappens: string[]; whatYouGet: string }
> = {
  '01': {
    whatHappens: [
      'Short discovery call or WhatsApp discussion to understand your business, customers, and objectives',
      'Review of your existing site (if any), reference designs, and required pages or store features',
      'Platform recommendation (Shopify, WordPress + WooCommerce, or custom React / Python)',
    ],
    whatYouGet: 'A clear written scope, milestone plan, and straightforward quote before work begins.',
  },
  '02': {
    whatHappens: [
      'Structuring page hierarchy, navigation, and key calls to action around how visitors browse',
      'Designing the visual direction—typography, spacing, color contrast, and mobile layouts',
      'Review and revision cycle so you approve the look and layout before any code is written',
    ],
    whatYouGet: 'Approved layouts for key desktop and mobile screens with zero guesswork.',
  },
  '03': {
    whatHappens: [
      'Clean front-end and back-end implementation tailored to the agreed platform and stack',
      'Cross-device testing on phones, tablets, and desktop viewports for speed and usability',
      'On-page SEO basics (meta titles, descriptions, headings, image optimisation) and live progress previews',
    ],
    whatYouGet: 'A fast, tested staging build you can click through on your own phone and laptop.',
  },
  '04': {
    whatHappens: [
      'Domain connection, SSL verification, and live deployment with zero-downtime checks',
      'Walkthrough and training so your team can update content, products, or dashboard records confidently',
      'Post-launch care for updates, bug fixes, speed tuning, and business email setup whenever needed',
    ],
    whatYouGet: 'A live website ready for customers plus ongoing technical support from our team.',
  },
};

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenContact }) => {
  const seo = PAGE_SEO['/process'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/process"
        schemas={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Process', path: '/process' },
          ]),
        ]}
      />

      {/* Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-10 lg:pb-16 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Process' },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            HOW WE WORK
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          A clear four-step process from brief to launch<span className="text-[#FFC900]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] lg:text-[18px] text-[rgba(245,243,239,0.7)] leading-[1.7]">
          Every website, online store, and custom web app follows the same transparent workflow so you always know what is happening now and what comes next.
        </p>
      </section>

      {/* Expanded 4 Steps */}
      <section className="pb-[52px] lg:pb-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="space-y-6 lg:space-y-8">
          {PROCESS_STEPS.map((step) => {
            const detail = STEP_DETAILS[step.number];
            return (
              <article
                key={step.number}
                className="rounded-[24px] lg:rounded-[28px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-6 lg:gap-12 items-start">
                  <div>
                    <div className="text-[48px] lg:text-[64px] font-semibold leading-none tracking-[-2px] text-[#FFC900] mb-3">
                      {step.number}
                    </div>
                    <h2 className="text-[26px] lg:text-[34px] font-semibold text-[#F5F3EF] tracking-[-0.8px] mb-2">
                      {step.title}
                    </h2>
                    <p className="text-[15px] text-[rgba(245,243,239,0.7)] leading-[1.7]">
                      {step.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[12px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
                      WHAT HAPPENS IN THIS STEP
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {detail.whatHappens.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.82)] leading-[1.65]"
                        >
                          <span className="w-[7px] h-[7px] rounded-full bg-[#FFC900] mt-2 flex-shrink-0" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-[16px] bg-[#1B1C21] border border-[rgba(245,243,239,0.1)] px-5 py-4 text-[14px] text-[rgba(245,243,239,0.85)]">
                      <span className="text-[#FFC900] font-medium mr-2">Outcome:</span>
                      {detail.whatYouGet}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14.5px] px-7 py-3.5 hover:brightness-105 transition"
          >
            <span>Explore our services</span>
            <span>→</span>
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14.5px] px-7 py-3.5 hover:border-[#FFC900] hover:text-[#FFC900] transition"
          >
            <span>Read common FAQs</span>
          </Link>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact()} />
      <Footer />
    </div>
  );
};
