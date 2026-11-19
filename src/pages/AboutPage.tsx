import React from 'react';
import { Link } from 'react-router';
import { CONTACT_INFO, PROCESS_STEPS, SERVICES, TOOLKIT_CHIPS } from '../content';
import {
  PAGE_SEO,
  buildBreadcrumbSchema,
  buildProfessionalServiceSchema,
} from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface AboutPageProps {
  onOpenContact: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const seo = PAGE_SEO['/about'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/about"
        schemas={[
          buildProfessionalServiceSchema('/about'),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      {/* Hero Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-20 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'About' },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            ABOUT THE STUDIO
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          Fast, reliable web engineering built for growing businesses<span className="text-[#FFC900]">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] lg:text-[18px] text-[rgba(245,243,239,0.72)] leading-[1.75]">
          Elite Web Developers designs and builds business websites, Shopify and WooCommerce online stores, custom web applications, and internal dashboards for businesses across Bangalore, Karur, Tamil Nadu, and beyond.
        </p>
      </section>

      {/* Who We Are & Where We Work */}
      <section className="w-full bg-[#F5F3EF] text-[#08090B] py-[52px] lg:py-[110px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#08090B]/70 mb-3 block">
                WHO WE ARE
              </span>
              <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.08] tracking-[-1px] lg:tracking-[-2px] text-[#08090B] mb-6">
                Design, development, and launch under one roof<span className="text-[#FFC900]">.</span>
              </h2>
              <p className="text-[15px] lg:text-[17px] text-[rgba(8,9,11,0.75)] leading-[1.75] mb-5">
                We focus on websites that work as hard as the businesses behind them—clear navigation, mobile-first layouts, clean code, and dependable support after launch. Whether you are launching your first storefront or pairing a public site with a private staff dashboard, you work directly with the people designing and building your product.
              </p>

              {/* Studio Story */}
              <div className="rounded-[20px] border border-[rgba(8,9,11,0.16)] bg-white/60 p-5 lg:p-6 space-y-3.5">
                <div className="text-[11px] font-medium uppercase tracking-[2.5px] text-[#08090B]/60">
                  OUR STORY
                </div>
                <p className="text-[14px] lg:text-[15px] text-[rgba(8,9,11,0.82)] leading-[1.75]">
                  Elite Web Developers was founded in 2025 by Kamesh Ravichandran with a simple goal: to help business owners get more clients through websites that actually work.
                </p>
                <p className="text-[14px] lg:text-[15px] text-[rgba(8,9,11,0.78)] leading-[1.75]">
                  Too many small and growing businesses have a website that looks fine but doesn&apos;t bring in enquiries or sales. We build websites that are fast, clear, and designed to turn visitors into customers.
                </p>
                <p className="text-[14px] lg:text-[15px] text-[rgba(8,9,11,0.78)] leading-[1.75]">
                  Working from Bangalore and Karur, we specialise in web apps, e-commerce stores, and portfolio websites. Beyond client work, we also want to build useful digital products that create real value for the society around us.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              <div className="rounded-[24px] bg-[#08090B] text-[#F5F3EF] p-6 lg:p-7">
                <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-3">
                  BASED IN
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold mb-2">
                  Bangalore &amp; Karur
                </h3>
                <p className="text-[14px] text-[rgba(245,243,239,0.7)] leading-[1.7] mb-4">
                  Serving businesses in Bangalore, Karur, Chennai, and across Tamil Nadu and India.
                </p>
                <div className="flex flex-wrap gap-3 text-[13px] font-medium">
                  <Link to="/web-development-bangalore" className="text-[#FFC900] hover:underline">
                    Bangalore →
                  </Link>
                  <Link to="/web-development-karur" className="text-[#FFC900] hover:underline">
                    Karur →
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[rgba(8,9,11,0.18)] bg-[#F5F3EF] p-6 lg:p-7">
                <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#08090B]/60 mb-3">
                  DIRECT ACCESS
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold mb-2">
                  Straightforward communication
                </h3>
                <p className="text-[14px] text-[rgba(8,9,11,0.72)] leading-[1.7]">
                  Scope agreed upfront, designs reviewed before coding begins, and direct WhatsApp and email updates at every milestone.
                </p>
              </div>

              <div className="sm:col-span-2 rounded-[24px] border border-[rgba(8,9,11,0.18)] bg-[#F5F3EF] p-6 lg:p-7">
                <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#08090B]/60 mb-3">
                  CORE SERVICES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="group flex items-center justify-between rounded-[14px] border border-[rgba(8,9,11,0.14)] px-4 py-3 text-[14px] font-medium text-[#08090B] hover:bg-[#FFC900] hover:border-[#FFC900] transition-colors"
                    >
                      <span>
                        <span className="text-[#08090B]/50 mr-2">{service.number}</span>
                        {service.title}
                      </span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work & Toolkit */}
      <section className="py-[52px] lg:py-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-3 block">
              HOW WE WORK
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-[#F5F3EF] mb-6">
              Four clear steps from idea to launch<span className="text-[#FFC900]">.</span>
            </h2>
            <div className="space-y-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 border-t border-[rgba(245,243,239,0.12)] pt-4"
                >
                  <span className="text-[24px] font-semibold text-[#FFC900] leading-none pt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#F5F3EF] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-[14.5px] font-medium text-[#FFC900] hover:underline"
              >
                <span>See our full process</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div>
            <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-3 block">
              OUR TOOLKIT
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-semibold leading-[1.1] tracking-[-1px] text-[#F5F3EF] mb-6">
              Technologies we build with<span className="text-[#FFC900]">.</span>
            </h2>
            <p className="text-[14.5px] lg:text-[16px] text-[rgba(245,243,239,0.68)] leading-[1.7] mb-6">
              We choose the platform that fits your business rather than forcing one stack on every client—from Shopify and WordPress / WooCommerce stores to custom React and Python web apps.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {TOOLKIT_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] text-[#F5F3EF] font-medium text-[13px] lg:text-[14.5px] px-4 py-2"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="rounded-[20px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6">
              <div className="text-[12px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-2">
                DIRECT CONTACT
              </div>
              <p className="text-[14px] text-[rgba(245,243,239,0.72)] leading-[1.7] mb-4">
                Phone / WhatsApp: {CONTACT_INFO.phone}
                <br />
                Email: {CONTACT_INFO.email}
                <br />
                Location: {CONTACT_INFO.location}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/works"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14px] px-5 py-2.5 hover:brightness-105 transition"
                >
                  <span>Explore our works</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] px-5 py-2.5 hover:border-[#FFC900] hover:text-[#FFC900] transition"
                >
                  <span>Read FAQs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact()} />
      <Footer />
    </div>
  );
};
