/**
 * GENERAL PRIVACY POLICY TEMPLATE — NOT LEGAL ADVICE.
 * Owner should review and customize this policy with qualified legal counsel
 * if business data practices, analytics, or regulatory requirements change.
 */

import React from 'react';
import { Link } from 'react-router';
import { CONTACT_INFO } from '../content';
import { PAGE_SEO, buildBreadcrumbSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';

export const PrivacyPolicyPage: React.FC = () => {
  const seo = PAGE_SEO['/privacy-policy'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/privacy-policy"
        schemas={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]),
        ]}
      />

      <section className="pt-8 sm:pt-12 lg:pt-16 pb-[60px] lg:pb-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full flex-1">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Privacy Policy' },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] text-[#FFC900]">
              LEGAL
            </span>
            <span className="w-[28px] h-[4px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
          </div>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold leading-[1.06] tracking-[-1.5px] text-[#F5F3EF] mb-4">
            Privacy Policy<span className="text-[#FFC900]">.</span>
          </h1>
          <p className="text-[13.5px] text-[rgba(245,243,239,0.55)] mb-10">
            Last updated: November 2026 · Elite Web Developers (Bangalore, India · Karur, Tamil Nadu)
          </p>

          <div className="space-y-8 text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.78)] leading-[1.8]">
            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                1. Who we are
              </h2>
              <p>
                This website is operated by <strong className="font-semibold text-[#F5F3EF]">Elite Web Developers</strong>, a web design and development studio based in Bangalore, India and Karur, Tamil Nadu. This Privacy Policy explains what information is collected when you visit our website or contact us, how it is used, and the choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                2. Information you provide through our contact forms
              </h2>
              <p className="mb-3">
                When you use the project inquiry modal or the form on our{' '}
                <Link to="/contact" className="text-[#FFC900] hover:underline">
                  Contact page
                </Link>
                , you may enter:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone or WhatsApp number</li>
                <li>Selected project type (e.g., Business websites, Online stores, Web apps and dashboards, Care and support)</li>
                <li>Your project brief or message</li>
              </ul>
              <p className="mt-3">
                <strong className="font-semibold text-[#F5F3EF]">How form data is handled:</strong> Our website does not store your contact form submission in a database on our own servers. When you submit the form, your browser formats those details into a pre-filled WhatsApp message link (<code className="text-[#FFC900] text-[13px]">wa.me</code>) and opens WhatsApp so you can review and send the message directly to us. Once you send a message on WhatsApp or email us directly, your communication is governed by WhatsApp&apos;s or your email provider&apos;s terms and privacy policies in addition to ours.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                3. How we use your information
              </h2>
              <p>
                We use the contact and project details you choose to send us solely to reply to your inquiry, prepare project scope estimates or proposals, deliver agreed web development services, and provide post-launch support. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                4. Third-party services used by this website
              </h2>
              <p className="mb-3">
                While browsing this website, your browser makes standard requests to the following external services to display typography and portfolio previews:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="font-semibold text-[#F5F3EF]">Google Fonts:</strong> Loads the Poppins typeface so pages display consistently across devices.
                </li>
                <li>
                  <strong className="font-semibold text-[#F5F3EF]">thum.io:</strong> Used as a fallback preview service for live website thumbnails on certain portfolio cards where a local screenshot is not bundled.
                </li>
                <li>
                  <strong className="font-semibold text-[#F5F3EF]">WhatsApp (wa.me):</strong> Opens only when you explicitly click a WhatsApp link or submit a project inquiry form.
                </li>
                <li>
                  <strong className="font-semibold text-[#F5F3EF]">External client websites:</strong> Clicking portfolio links opens third-party client websites in a new tab. We are not responsible for the privacy practices of those external sites.
                </li>
              </ul>
              <p className="mt-3">
                Standard web hosting providers may also record basic server access logs (such as IP address, browser user agent, and requested URL) for security and uptime reliability.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                5. Cookies and analytics
              </h2>
              <p>
                This website does not currently use advertising trackers, third-party marketing cookies, or behavioral analytics cookies. If we introduce privacy-friendly analytics or additional cookies in the future, we will update this policy before or upon enabling them.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                6. Data retention
              </h2>
              <p>
                Because contact forms are not saved on our website servers, we only retain correspondence you send to our WhatsApp business number or email address for as long as needed to respond to your inquiry, manage ongoing client projects, or meet legal and accounting obligations.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                7. Your rights
              </h2>
              <p>
                You may contact us at any time to request access to personal details you have shared with us via email or WhatsApp, ask us to correct inaccurate details, or request deletion of your inquiry correspondence where we are not legally required to retain it.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                8. Children&apos;s privacy
              </h2>
              <p>
                Our website and web development services are intended for business owners and adults. We do not knowingly collect personal information from children under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                9. Updates and contact details
              </h2>
              <p className="mb-3">
                We may update this Privacy Policy periodically as our website or services evolve. Any updates will appear on this page with a revised &ldquo;Last updated&rdquo; date.
              </p>
              <p>
                For privacy questions or data deletion requests, contact us at:
                <br />
                Email:{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#FFC900] hover:underline">
                  {CONTACT_INFO.email}
                </a>
                <br />
                Phone / WhatsApp:{' '}
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFC900] hover:underline"
                >
                  {CONTACT_INFO.phone}
                </a>
                <br />
                Location: {CONTACT_INFO.location}
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
