import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  CONTACT_INFO,
  SERVICE_FORM_OPTIONS,
  ValidationErrors,
  buildWhatsAppContactUrl,
  validateContactForm,
} from '../content';
import {
  PAGE_SEO,
  buildBreadcrumbSchema,
  buildProfessionalServiceSchema,
} from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
  const seo = PAGE_SEO['/contact'];
  const directWhatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_FORM_OPTIONS[0].value as string,
    message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const url = buildWhatsAppContactUrl(CONTACT_INFO.phone, formData);
    setWhatsappLink(url);
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EF] flex flex-col">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/contact"
        schemas={[
          buildProfessionalServiceSchema('/contact'),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <section className="pt-8 sm:pt-12 lg:pt-16 pb-[60px] lg:pb-[110px] px-5 sm:px-12 lg:px-[96px] max-w-[1440px] mx-auto w-full flex-1">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Contact' },
          ]}
        />

        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11.5px] lg:text-[13px] font-medium uppercase tracking-[3px] lg:tracking-[4px] text-[#FFC900]">
            LET&apos;S TALK
          </span>
          <span className="w-[28px] h-[4px] lg:w-[36px] lg:h-[5px] rounded-[3px] bg-[#FFC900] inline-block" aria-hidden="true" />
        </div>

        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-3px] text-[#F5F3EF] max-w-4xl">
          Have a project in mind<span className="text-[#FFC900]">?</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] lg:text-[18px] text-[rgba(245,243,239,0.7)] leading-[1.7] mb-10 lg:mb-14">
          Tell us about your website, online store, or web app. We work with businesses across Bangalore, Karur, and Tamil Nadu, and typically respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-8 lg:gap-12 items-start">
          {/* Inline WhatsApp Inquiry Form */}
          <div className="rounded-[28px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#FFC900] text-[#08090B] flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-[28px] font-semibold text-[#F5F3EF] tracking-[-1px] mb-3">
                  Message ready in WhatsApp<span className="text-[#FFC900]">.</span>
                </h2>
                <p className="text-[15px] text-[rgba(245,243,239,0.68)] leading-[1.7] max-w-md mx-auto mb-6">
                  Your project details have been formatted and opened in WhatsApp ({CONTACT_INFO.phone}). If a new tab did not open, use the button below.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-[26px] py-[13px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
                    >
                      <span>Open in WhatsApp</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-[24px] py-[13px] border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] rounded-full hover:bg-[#F5F3EF]/10 transition-colors cursor-pointer"
                  >
                    Send another brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#F5F3EF] tracking-[-0.6px] mb-1">
                    Send your project brief
                  </h2>
                  <p className="text-[13.5px] text-[rgba(245,243,239,0.6)]">
                    Fill in your details below to open a pre-filled WhatsApp message directly with our team.
                  </p>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="page-contact-name">
                    Your Name *
                  </label>
                  <input
                    id="page-contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                  />
                  {errors.name && <p className="text-[#FFC900] text-[12px] mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="page-contact-email">
                      Email Address *
                    </label>
                    <input
                      id="page-contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                    />
                    {errors.email && <p className="text-[#FFC900] text-[12px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="page-contact-phone">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="page-contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 95852 62522"
                      className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                    />
                    {errors.phone && <p className="text-[#FFC900] text-[12px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="page-contact-service">
                    Project Type
                  </label>
                  <select
                    id="page-contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] transition-colors"
                  >
                    {SERVICE_FORM_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="page-contact-message">
                    Project Brief *
                  </label>
                  <textarea
                    id="page-contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what you are looking to build, your business type, and any reference links or timeline..."
                    className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[#FFC900] text-[12px] mt-1">{errors.message}</p>}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-[14px] px-[26px] bg-[#FFC900] text-[#08090B] font-semibold text-[15px] rounded-full inline-flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,201,0,0.35)] transition-all disabled:opacity-50 cursor-pointer active:scale-[0.98]"
                  >
                    <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Send on WhatsApp →'}</span>
                  </button>
                  <p className="text-[12px] text-[rgba(245,243,239,0.52)] text-center mt-3 leading-[1.6]">
                    Your form details are not stored on our servers; submitting prepares a direct WhatsApp message. Read our{' '}
                    <Link to="/privacy-policy" className="text-[#FFC900] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Direct Contact Details Card */}
          <div className="space-y-6">
            <div className="rounded-[28px] bg-[#FFC900] text-[#08090B] p-6 sm:p-8 lg:p-9">
              <div className="text-[11.5px] font-medium uppercase tracking-[3px] text-[#08090B]/75 mb-3">
                DIRECT CHANNELS
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-semibold leading-[1.1] tracking-[-1px] mb-6">
                Reach us directly.
              </h2>

              <dl className="space-y-5 text-[15px]">
                <div className="border-t border-[#08090B]/15 pt-4">
                  <dt className="text-[12px] font-medium uppercase tracking-[2px] text-[#08090B]/70 mb-1">
                    {CONTACT_INFO.phoneLabel}
                  </dt>
                  <dd className="text-[18px] font-semibold">
                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </dd>
                </div>

                <div className="border-t border-[#08090B]/15 pt-4">
                  <dt className="text-[12px] font-medium uppercase tracking-[2px] text-[#08090B]/70 mb-1">
                    {CONTACT_INFO.emailLabel}
                  </dt>
                  <dd className="text-[16px] sm:text-[17px] font-semibold break-all">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>

                <div className="border-t border-[#08090B]/15 pt-4">
                  <dt className="text-[12px] font-medium uppercase tracking-[2px] text-[#08090B]/70 mb-1">
                    {CONTACT_INFO.locationLabel}
                  </dt>
                  <dd className="text-[16px] font-medium">{CONTACT_INFO.location}</dd>
                </div>
              </dl>

              <div className="mt-7">
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#08090B] text-[#F5F3EF] font-medium text-[14.5px] px-6 py-3 hover:bg-white hover:text-[#08090B] transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#14151A] border border-[rgba(245,243,239,0.14)] p-6 sm:p-7">
              <div className="text-[11.5px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-3">
                SERVICE AREAS
              </div>
              <p className="text-[14px] text-[rgba(245,243,239,0.7)] leading-[1.7] mb-4">
                We collaborate closely with businesses across Bangalore, Karur, Chennai, and throughout Tamil Nadu and India.
              </p>
              <div className="flex flex-wrap gap-3 text-[13.5px] font-medium">
                <Link to="/web-development-bangalore" className="text-[#FFC900] hover:underline">
                  Web development Bangalore →
                </Link>
                <Link to="/web-development-karur" className="text-[#FFC900] hover:underline">
                  Web development Karur →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
