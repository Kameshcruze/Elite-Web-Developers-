import React from 'react';
import { Link } from 'react-router';
import { FEATURED_WORKS } from '../works';
import { PROCESS_STEPS, SERVICES, TOOLKIT_CHIPS } from '../content';
import {
  PAGE_SEO,
  buildBreadcrumbSchema,
  buildProfessionalServiceSchema,
} from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProjectScreenshot } from '../components/ProjectScreenshot';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface CityLandingPageProps {
  city: 'bangalore' | 'karur';
  onOpenContact: (service?: string) => void;
}

const CITY_CONTENT = {
  bangalore: {
    path: '/web-development-bangalore',
    cityName: 'Bangalore',
    breadcrumbLabel: 'Web Development Bangalore',
    eyebrow: 'BANGALORE · WEB DEVELOPMENT STUDIO',
    headline: 'Web developers in Bangalore for fast websites, stores, and apps',
    lead:
      'Elite Web Developers works with Bangalore startups, direct-to-consumer brands, cafes, and service businesses to design and build fast websites, Shopify and WooCommerce stores, and custom React and Python web apps.',
    secondary:
      'In a competitive city like Bangalore, slow templates and cluttered pages lose customers quickly. We focus on clean mobile-first interfaces, clear messaging, fast load times, and direct developer communication from Discover to Launch.',
    areaServed: ['Bangalore', 'Bengaluru', 'Karnataka', 'India'],
    highlightsTitle: 'What Bangalore businesses come to us for',
    highlights: [
      {
        title: 'Direct-to-consumer online stores',
        body: 'Shopify and WooCommerce storefronts with custom product pages, bundle builders, quick view, and mobile-ready checkout flows.',
      },
      {
        title: 'Custom React & Python web apps',
        body: 'Admin panels, internal tools, and role-based staff dashboards designed around how your operations team actually works.',
      },
      {
        title: 'High-trust company & hospitality sites',
        body: 'Mobile-first websites for professional firms, studios, and cafes that load fast and convert visitors into WhatsApp or email leads.',
      },
    ],
    otherCityPath: '/web-development-karur',
    otherCityLabel: 'Web development in Karur',
  },
  karur: {
    path: '/web-development-karur',
    cityName: 'Karur',
    breadcrumbLabel: 'Web Development Karur',
    eyebrow: 'KARUR, TAMIL NADU · WEB DEVELOPMENT STUDIO',
    headline: 'Web developers in Karur for reliable business websites and stores',
    lead:
      'Based in Karur, Tamil Nadu alongside Bangalore, Elite Web Developers helps Karur textile businesses, exporters, local retail brands, event companies, and service providers build dependable websites, online stores, and internal dashboards.',
    secondary:
      'Whether you need a professional online catalogue for domestic and international buyers, an e-commerce store on Shopify or WooCommerce, or ongoing website updates and business email setup, you get direct local support without agency overhead.',
    areaServed: ['Karur', 'Tamil Nadu', 'India'],
    highlightsTitle: 'How we support Karur & Tamil Nadu businesses',
    highlights: [
      {
        title: 'Credible business & exporter websites',
        body: 'Clean, mobile-first websites that showcase products, capabilities, and direct WhatsApp or email inquiry paths for local and global buyers.',
      },
      {
        title: 'Online stores built to scale',
        body: 'WordPress + WooCommerce and Shopify shops with custom size charts, bundle pricing, and easy order management training.',
      },
      {
        title: 'Hands-on launch & ongoing care',
        body: 'We handle launch, team training, speed tuning, routine updates, and business email setup so your site stays dependable year-round.',
      },
    ],
    otherCityPath: '/web-development-bangalore',
    otherCityLabel: 'Web development in Bangalore',
  },
} as const;

export const CityLandingPage: React.FC<CityLandingPageProps> = ({
  city,
  onOpenContact,
}) => {
  const data = CITY_CONTENT[city];
  const seo = PAGE_SEO[data.path];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={data.path}
        schemas={[
          buildProfessionalServiceSchema(data.path, [...data.areaServed]),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: data.breadcrumbLabel, path: data.path },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-20 px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: data.breadcrumbLabel },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            {data.eyebrow}
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[68px] font-semibold leading-[1.06] tracking-[-1.5px] lg:tracking-[-2.8px] text-[#F5F3EF] max-w-4xl">
          {data.headline}<span className="text-[#FFC900]">.</span>
        </h1>

        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-[15.5px] lg:text-[18px] text-[rgba(245,243,239,0.78)] leading-[1.75]">
            {data.lead}
          </p>
          <p className="text-[14.5px] lg:text-[16px] text-[rgba(245,243,239,0.64)] leading-[1.75]">
            {data.secondary}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14.5px] px-7 py-3.5 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Start a project in {data.cityName}</span>
            <span>→</span>
          </button>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14.5px] px-6 py-3.5 hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
          >
            <span>View live works</span>
          </Link>
        </div>
      </section>

      {/* City Highlights (Light section) */}
      <section className="w-full bg-[#F5F3EF] text-[#08090B] py-[52px] lg:py-[110px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-[96px]">
          <div className="mb-10 lg:mb-14 max-w-3xl">
            <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#08090B]/65 mb-2 block">
              LOCAL EXPERTISE
            </span>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.08] tracking-[-1px] lg:tracking-[-2px] text-[#08090B]">
              {data.highlightsTitle}<span className="text-[#FFC900]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-12">
            {data.highlights.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[rgba(8,9,11,0.18)] bg-[#F5F3EF] p-6 lg:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-[42px] h-[42px] rounded-[12px] bg-[#FFC900] text-[#08090B] flex items-center justify-center text-[16px] font-semibold mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[20px] lg:text-[22px] font-semibold tracking-[-0.5px] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[rgba(8,9,11,0.74)] leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* All 4 Services quick links */}
          <div className="rounded-[24px] bg-[#08090B] text-[#F5F3EF] p-6 sm:p-8">
            <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
              SERVICES AVAILABLE IN {data.cityName.toUpperCase()}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group rounded-[16px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-4 hover:border-[#FFC900] transition-colors"
                >
                  <div className="text-[12px] font-semibold text-[#FFC900] mb-1">
                    {service.number}
                  </div>
                  <div className="text-[15.5px] font-semibold text-[#F5F3EF] group-hover:text-[#FFC900] transition-colors mb-1">
                    {service.title} →
                  </div>
                  <p className="text-[12.5px] text-[rgba(245,243,239,0.65)] leading-[1.6]">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works & Toolkit */}
      <section className="py-[52px] lg:py-[100px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
          <div>
            <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900] mb-2 block">
              FEATURED PORTFOLIO
            </span>
            <h2 className="text-[28px] sm:text-[42px] font-semibold leading-[1.08] tracking-[-1px] text-[#F5F3EF]">
              Recent live websites &amp; apps<span className="text-[#FFC900]">.</span>
            </h2>
          </div>
          <Link to="/works" className="text-[14px] font-medium text-[#FFC900] hover:underline">
            Explore all 11 works →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {FEATURED_WORKS.map((work) => (
            <article
              key={work.slug}
              className="group rounded-[22px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-5 flex flex-col justify-between hover:border-[rgba(255,201,0,0.55)] transition-all"
            >
              <div>
                <div className="aspect-[16/10] rounded-[14px] overflow-hidden bg-[#1B1C21] mb-4">
                  <ProjectScreenshot project={work} />
                </div>
                <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-1">
                  {work.category}
                </div>
                <h3 className="text-[20px] font-semibold text-[#F5F3EF] mb-2">
                  {work.title}
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
                  className="text-[#FFC900] hover:underline"
                >
                  Live site ↗
                </a>
                <Link
                  to={`/works/${work.slug}`}
                  className="text-[rgba(245,243,239,0.82)] hover:text-[#FFC900]"
                >
                  Case study →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Process + Stack Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 border-t border-[rgba(245,243,239,0.12)]">
          <div>
            <h3 className="text-[22px] font-semibold text-[#F5F3EF] mb-4">
              Simple 4-step delivery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[18px] bg-[#14151A] border border-[rgba(245,243,239,0.12)] p-4"
                >
                  <div className="text-[13px] font-semibold text-[#FFC900] mb-1">
                    {step.number} · {step.title}
                  </div>
                  <p className="text-[13px] text-[rgba(245,243,239,0.68)] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-[#F5F3EF] mb-4">
              Technologies we work with
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {TOOLKIT_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-[#14151A] border border-[rgba(245,243,239,0.14)] px-4 py-2 text-[13px] text-[#F5F3EF]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[14px]">
              <Link to={data.otherCityPath} className="text-[#FFC900] hover:underline">
                Also serving: {data.otherCityLabel} →
              </Link>
              <Link to="/faq" className="text-[rgba(245,243,239,0.75)] hover:text-[#FFC900]">
                Read FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA onOpenContactModal={() => onOpenContact()} />
      <Footer />
    </div>
  );
};
