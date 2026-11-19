/**
 * GENERAL TERMS AND CONDITIONS TEMPLATE — NOT LEGAL ADVICE.
 * Owner should review these terms with qualified legal counsel and replace the
 * governing-law jurisdiction placeholder below before publishing commercially.
 */

import React from 'react';
import { Link } from 'react-router';
import { CONTACT_INFO } from '../content';
import { PAGE_SEO, buildBreadcrumbSchema } from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';

export const TermsPage: React.FC = () => {
  const seo = PAGE_SEO['/terms-and-conditions'];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/terms-and-conditions"
        schemas={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Terms and Conditions', path: '/terms-and-conditions' },
          ]),
        ]}
      />

      <section className="pt-8 sm:pt-12 lg:pt-16 pb-[60px] lg:pb-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full flex-1">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Terms and Conditions' },
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
            Terms and Conditions<span className="text-[#FFC900]">.</span>
          </h1>
          <p className="text-[13.5px] text-[rgba(245,243,239,0.55)] mb-10">
            Last updated: November 2026 · Elite Web Developers (Bangalore, India · Karur, Tamil Nadu)
          </p>

          <div className="space-y-8 text-[14.5px] lg:text-[15.5px] text-[rgba(245,243,239,0.78)] leading-[1.8]">
            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                1. Use of this website
              </h2>
              <p>
                By accessing or using this website operated by <strong className="font-semibold text-[#F5F3EF]">Elite Web Developers</strong>, you agree to these Terms and Conditions. You agree to use this website only for lawful purposes and not to attempt to disrupt, scrape maliciously, or interfere with its availability or security.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                2. Services and project scope
              </h2>
              <p>
                Information on this website—including descriptions of business websites, online stores, web applications, dashboards, and care services—is provided for general informational purposes and does not constitute a binding offer. Specific deliverables, timelines, revision rounds, and technical requirements for any client engagement are agreed in writing via a project proposal or scope document before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                3. Quotes and payments
              </h2>
              <p>
                Project fees are quoted individually based on agreed scope, platform requirements, and complexity. Payment milestones, invoicing schedules, third-party costs (such as domain registration, hosting, paid themes, plugins, or Shopify subscriptions), and change-request terms are specified in the written quote or agreement for each project.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                4. Client responsibilities and content ownership
              </h2>
              <p>
                Clients are responsible for providing accurate business details, text, brand assets, product data, and timely feedback needed to keep a project on schedule, and for ensuring they hold the rights or licenses to any logos, photographs, or copy supplied to us. Upon full payment of agreed project fees, ownership of the final agreed deliverables transfers to the client as outlined in the project agreement, excluding pre-existing open-source libraries, third-party themes/plugins, and general reusable code tools.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                5. Intellectual property on this website
              </h2>
              <p>
                All original text, layout design, branding, and custom code published on the Elite Web Developers website remain the intellectual property of Elite Web Developers unless stated otherwise. Client brand names, trademarks, and live website screenshots shown in our portfolio remain the property of their respective owners and are displayed solely to showcase work completed by our studio.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                6. Third-party links and services
              </h2>
              <p>
                Our website contains links to external client websites and third-party platforms such as WhatsApp. We do not control or guarantee the uptime, content, or policies of external websites, and accessing them is at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                7. Disclaimers and limitation of liability
              </h2>
              <p>
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. To the fullest extent permitted by applicable law, Elite Web Developers shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website. Any warranties or liability terms for paid client engagements are governed exclusively by the signed project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                8. Governing law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in{' '}
                <span className="text-[#FFC900]">
                  [CONFIRM JURISDICTION — e.g., Bengaluru, Karnataka or Karur, Tamil Nadu]
                </span>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                9. Changes to these terms
              </h2>
              <p>
                We may revise these Terms and Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms. Also see our{' '}
                <Link to="/privacy-policy" className="text-[#FFC900] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-[#F5F3EF] mb-3">
                10. Contact
              </h2>
              <p>
                Questions regarding these Terms and Conditions can be sent to:
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
