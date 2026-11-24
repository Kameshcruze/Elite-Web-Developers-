/**
 * Elite Web Developers - Central SEO & Structured Data Configuration
 *
 * PLACEHOLDER NOTICE:
 * Set VITE_SITE_URL in your deployment environment (or replace the fallback below)
 * with your real production domain (e.g. https://elitewebdevelopers.in) before launch.
 */

import { CONTACT_INFO } from './content';

function resolveSiteUrl(): string {
  const fromVite =
    typeof import.meta !== 'undefined' &&
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_SITE_URL;
  const fromProcess =
    typeof process !== 'undefined' && process.env?.VITE_SITE_URL;
  const raw = fromVite || fromProcess || 'https://YOUR-DOMAIN.com';
  return raw.replace(/\/+$/, '');
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = 'Elite Web Developers';
export const DEFAULT_OG_IMAGE = '/og-default.png';

export interface PageSeoMeta {
  path: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  priority?: number;
  changefreq?: 'weekly' | 'monthly' | 'yearly';
}

export const PAGE_SEO: Record<string, PageSeoMeta> = {
  '/': {
    path: '/',
    title: 'Elite Web Developers | Web Design in Bangalore & Karur',
    description:
      'Elite Web Developers designs and builds fast websites, online stores, and web apps for businesses in Bangalore, Karur, and across Tamil Nadu.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  '/about': {
    path: '/about',
    title: 'About Elite Web Developers | Bangalore & Karur Studio',
    description:
      'Founded in 2025 by Kamesh Ravichandran, Elite Web Developers builds fast web apps, e-commerce stores, and portfolio sites from Bangalore & Karur.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/services': {
    path: '/services',
    title: 'Web Development Services | Elite Web Developers',
    description:
      'Explore our web development services: business websites, Shopify & WooCommerce online stores, custom web apps, dashboards, and ongoing site care.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  '/services/business-websites': {
    path: '/services/business-websites',
    title: 'Business Website Design | Elite Web Developers',
    description:
      'Mobile-first business websites built for speed, credibility, and search visibility. Tailored WordPress, Elementor, and custom sites for Indian brands.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/services/online-stores': {
    path: '/services/online-stores',
    title: 'Shopify & WooCommerce Stores | Elite Web Developers',
    description:
      'Custom Shopify, WordPress, and WooCommerce online stores with tailored product pages, bundle flows, cart drawers, and smooth checkout experiences.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/services/web-apps-and-dashboards': {
    path: '/services/web-apps-and-dashboards',
    title: 'Web Apps & Custom Dashboards | Elite Web Developers',
    description:
      'Custom React, Python, and full-stack web applications, admin panels, and role-based staff dashboards built around how your business team operates.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/services/care-and-support': {
    path: '/services/care-and-support',
    title: 'Website Care & Support | Elite Web Developers',
    description:
      'Ongoing website care after launch: updates, bug fixes, speed optimisation, SEO basics, and business email setup for WordPress, Shopify, and web apps.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/process': {
    path: '/process',
    title: 'Our 4-Step Web Process | Elite Web Developers',
    description:
      'See how Elite Web Developers takes projects from Discover and Design through Build to Launch and care, keeping scope, screens, and handover clear.',
    priority: 0.75,
    changefreq: 'monthly',
  },
  '/works': {
    path: '/works',
    title: 'Portfolio & Live Works | Elite Web Developers',
    description:
      'Browse 11 live client websites, Shopify and WooCommerce stores, hospitality sites, and custom dashboards built by Elite Web Developers across India.',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/works/bunt-india': {
    path: '/works/bunt-india',
    title: 'BUNT India Shopify Store | Elite Web Developers',
    description:
      'Case study for BUNT India: a modern Shopify online store for a premium pet furniture brand featuring quick view, brand story pages, and mobile banners.',
    ogImage: '/projects/bunt-india.png',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/works/the-fat-cookie-chef': {
    path: '/works/the-fat-cookie-chef',
    title: 'The Fat Cookie Chef Store | Elite Web Developers',
    description:
      'Case study for The Fat Cookie Chef: a Shopify bakery storefront with best sellers, a build-your-own-box bundle builder, cart drawer, and FAQ pages.',
    ogImage: '/projects/the-fat-cookie-chef.png',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/works/virukshaa-events': {
    path: '/works/virukshaa-events',
    title: 'Virukshaa Events Site & App | Elite Web Developers',
    description:
      'Case study for Virukshaa Events: an event portfolio website extended with a private workers dashboard and role-based access control for staff pages.',
    ogImage: '/projects/virukshaa-events.png',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/faq': {
    path: '/faq',
    title: 'Web Development FAQs | Elite Web Developers',
    description:
      'Answers to common questions about working with Elite Web Developers: timelines, Shopify vs WordPress, scope-based quotes, post-launch care, and more.',
    priority: 0.75,
    changefreq: 'monthly',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Elite Web Developers | Bangalore & Karur',
    description:
      'Start your website, online store, or web app with Elite Web Developers. Reach us on WhatsApp (+91 95852 62522) or email in Bangalore and Karur.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/web-development-bangalore': {
    path: '/web-development-bangalore',
    title: 'Web Developers in Bangalore | Elite Web Developers',
    description:
      'Custom business websites, Shopify and WooCommerce stores, React web apps, and ongoing site care for startups and growing businesses in Bangalore.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/web-development-karur': {
    path: '/web-development-karur',
    title: 'Web Developers in Karur | Elite Web Developers',
    description:
      'Reliable websites, e-commerce stores, and custom dashboards for textile exporters, manufacturers, and local businesses in Karur and Tamil Nadu.',
    priority: 0.85,
    changefreq: 'monthly',
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | Elite Web Developers',
    description:
      'Read how Elite Web Developers handles contact form details, WhatsApp inquiries, third-party fonts and screenshot previews, and your privacy rights.',
    priority: 0.3,
    changefreq: 'yearly',
  },
  '/terms-and-conditions': {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | Elite Web Developers',
    description:
      'Review the website terms of use, project scope guidelines, intellectual property, third-party links, and disclaimers for Elite Web Developers.',
    priority: 0.3,
    changefreq: 'yearly',
  },
  '/404': {
    path: '/404',
    title: 'Page Not Found | Elite Web Developers',
    description:
      'The page you were looking for could not be found on Elite Web Developers. Explore our portfolio, web development services, or contact us directly.',
    noindex: true,
  },
};

export const PRERENDER_ROUTES: string[] = Object.values(PAGE_SEO)
  .filter((entry) => !entry.noindex)
  .map((entry) => entry.path);

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`;
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: toAbsoluteUrl('/favicon-512x512.png'),
    founder: {
      '@type': 'Person',
      name: 'Kamesh Ravichandran',
    },
    foundingDate: '2025',
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    areaServed: ['Bangalore', 'Karur', 'Tamil Nadu', 'India'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
    ],
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en-IN',
  };
}

export function buildProfessionalServiceSchema(
  pagePath: string,
  areaServed: string[] = ['Bangalore', 'Karur', 'Tamil Nadu']
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: toAbsoluteUrl(pagePath),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    founder: {
      '@type': 'Person',
      name: 'Kamesh Ravichandran',
    },
    foundingDate: '2025',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    areaServed: areaServed.map((city) => ({
      '@type': 'Place',
      name: city,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore & Karur',
      addressRegion: 'Karnataka & Tamil Nadu',
      addressCountry: 'IN',
    },
  };
}

export function buildServiceSchema(params: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: toAbsoluteUrl(params.path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
    },
    areaServed: ['Bangalore', 'Karur', 'Tamil Nadu', 'India'],
  };
}

export function buildFaqSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}
