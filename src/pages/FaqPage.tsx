import React from 'react';
import { Link } from 'react-router';
import { STUDIO_FAQS } from '../faqData';
import { PAGE_SEO, buildBreadcrumbSchema, buildFaqSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface FaqPageProps {
  onOpenContact: (service?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenContact }) => {
  const seo = PAGE_SEO['/faq'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/faq"
        schemas={[
          buildFaqSchema(STUDIO_FAQS),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      {/* Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-10 lg:pb-14 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'FAQ' },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          Straight answers before we start<span className="text-[#FFC900]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] lg:text-[18px] text-[rgba(245,243,239,0.7)] leading-[1.7]">
          Everything business owners usually ask about our process, platforms, timelines, scope-based quotes, and post-launch care.
        </p>
      </section>

      {/* FAQ List (native details keeps every answer in raw static HTML for search engines & accessibility) */}
      <section className="pb-[52px] lg:pb-[100px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="max-w-4xl space-y-4">
          {STUDIO_FAQS.map((item, idx) => (
            <details
              key={item.question}
              open={idx < 3}
              className="group rounded-[20px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] open:border-[rgba(255,201,0,0.45)] transition-colors"
            >
              <summary className="list-none cursor-pointer px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 select-none">
                <h2 className="text-[16.5px] sm:text-[18.5px] font-semibold text-[#F5F3EF] leading-[1.4]">
                  {item.question}
                </h2>
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full border border-[rgba(245,243,239,0.2)] text-[#FFC900] flex items-center justify-center flex-shrink-0 text-[18px] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                <p className="text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.72)] leading-[1.75] border-t border-[rgba(245,243,239,0.1)] pt-4">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 max-w-4xl rounded-[22px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-[20px] font-semibold text-[#F5F3EF] mb-1">
              Still have a question?
            </h3>
            <p className="text-[14px] text-[rgba(245,243,239,0.68)]">
              Send us a quick message on WhatsApp or visit our Contact page for a direct reply.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14px] px-6 py-3 hover:brightness-105 transition"
            >
              <span>Go to Contact</span>
              <span>→</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] px-5 py-3 hover:border-[#FFC900] hover:text-[#FFC900] transition"
            >
              <span>Browse services</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact()} />
      <Footer />
    </div>
  );
};
