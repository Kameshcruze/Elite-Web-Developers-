import React from 'react';
import { Link } from 'react-router';
import { PAGE_SEO } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Footer } from '../components/Footer';

export const NotFoundPage: React.FC = () => {
  const seo = PAGE_SEO['/404'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/404"
        noindex={true}
      />

      <section className="flex-1 flex items-center justify-center px-5 sm:px-12 lg:px-[96px] py-20 lg:py-28 max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-[12px] font-medium uppercase tracking-[3px] text-[#FFC900]">
              ERROR 404
            </span>
          </div>

          <h1 className="text-[44px] sm:text-[64px] lg:text-[84px] font-semibold leading-[1.02] tracking-[-2px] text-[#F5F3EF] mb-5">
            Page not found<span className="text-[#FFC900]">.</span>
          </h1>

          <p className="text-[15px] lg:text-[17px] text-[rgba(245,243,239,0.68)] leading-[1.7] mb-9">
            The page you requested may have moved or no longer exists. Use the links below to jump back to our main sections.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC900] text-[#08090B] font-medium text-[14.5px] px-7 py-3.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Back to Home</span>
              <span>→</span>
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14.5px] px-6 py-3.5 hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
            >
              <span>View our works</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14.5px] px-6 py-3.5 hover:border-[#FFC900] hover:text-[#FFC900] transition-colors"
            >
              <span>Contact us</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[13.5px] text-[rgba(245,243,239,0.6)]">
            <Link to="/services" className="hover:text-[#FFC900] transition-colors">
              Services
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/process" className="hover:text-[#FFC900] transition-colors">
              Process
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/about" className="hover:text-[#FFC900] transition-colors">
              About
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/faq" className="hover:text-[#FFC900] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
