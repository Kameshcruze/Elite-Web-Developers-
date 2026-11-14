/**
 * Elite Web Developers - Central Content Configuration
 * Editable content configuration for business details, navigation,
 * services, process steps, and toolkit.
 * Works data single source of truth is in src/works.ts.
 */

import { ALL_WORKS, FEATURED_WORKS, WorkProject } from './works';

export { ALL_WORKS, FEATURED_WORKS };
export type { WorkProject };
export type ProjectItem = WorkProject;

export interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  inverted?: boolean;
}

export interface ProcessStep {
  number: string;
  numericValue: number;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  phoneLabel: string;
  email: string;
  emailLabel: string;
  location: string;
  locationLabel: string;
  headline: string;
  eyebrow: string;
  ctaButtonText: string;
}

export const CONTACT_INFO: ContactInfo = {
  eyebrow: "LET'S TALK",
  headline: "Have a project in mind?",
  phoneLabel: "Phone / WhatsApp",
  phone: "+91 95852 62522",
  emailLabel: "Email",
  email: "support.elitewebdevelopers@gmail.com",
  locationLabel: "Based in",
  location: "Bangalore, India · Karur, Tamil Nadu",
  ctaButtonText: "Start a project →",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Works", href: "#/works", isRoute: true },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  eyebrow: "ELITE WEB DEVELOPERS · Tamil Nadu",
  headline: "Websites that work as hard as you do.",
  paragraph:
    "Elite Web Developers designs and builds fast, reliable websites, online stores, and web apps for businesses across Bangalore, Karur, and Tamil Nadu.",
  primaryCta: "View our work →",
  ghostCta: "Watch intro",
  chips: [
    { label: "WooCommerce", position: "top-right" },
    { label: "Full-stack", position: "bottom-left" },
    { label: "Custom dashboards", position: "bottom-right" },
  ],
};

/* Updated Capability Strip per instruction 1 */
export const CAPABILITIES: string[] = [
  "WORDPRESS",
  "SHOPIFY",
  "WOOCOMMERCE",
  "E-COMMERCE STORES",
  "BUSINESS WEBSITES",
  "CUSTOM DASHBOARDS",
];

/* Re-export projects list from works.ts */
export const PROJECTS = ALL_WORKS;

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Fast, mobile-first websites that help local businesses look credible and get found.",
    inverted: false,
  },
  {
    number: "02",
    title: "Online stores",
    description:
      "WordPress and WooCommerce shops with tailored product pages, bundles, and checkout.",
    inverted: false,
  },
  {
    number: "03",
    title: "Web apps and dashboards",
    description:
      "Custom tools, admin panels, and staff dashboards built around how you work.",
    inverted: false,
  },
  {
    number: "04",
    title: "Care and support",
    description:
      "Updates, fixes, speed tuning, and email setup after your site goes live.",
    inverted: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    numericValue: 1,
    title: "Discover",
    description:
      "We learn about your business, customers, and goals, then agree on scope.",
  },
  {
    number: "02",
    numericValue: 2,
    title: "Design",
    description: "You see the look and layout before any code is written.",
  },
  {
    number: "03",
    numericValue: 3,
    title: "Build",
    description:
      "We develop, test on every screen size, and share progress along the way.",
  },
  {
    number: "04",
    numericValue: 4,
    title: "Launch and care",
    description:
      "We go live, train you, and stay on hand for updates and fixes.",
  },
];

/* Updated Toolkit Chips per instruction 1 (added Shopify, React, Python) */
export const TOOLKIT_CHIPS: string[] = [
  "Shopify",
  "WordPress",
  "WooCommerce",
  "Elementor",
  "React",
  "Python",
  "Custom JavaScript",
  "Custom CSS",
  "HTML5",
  "Full-stack development",
  "SEO basics",
  "Speed optimisation",
];

export const FOOTER_CONTENT = {
  copyright: "© 2026 Elite Web Developers. All rights reserved.",
  subtext: "Serving businesses across Bangalore, Karur & Tamil Nadu",
};

/**
 * Pure validation helper for contact form
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};
  if (!data.name || data.name.trim().length === 0) {
    errors.name = "Please enter your name";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.phone || data.phone.trim().length < 6) {
    errors.phone = "Please enter a valid phone or WhatsApp number";
  }
  if (!data.message || data.message.trim().length < 5) {
    errors.message = "Please describe your project or request";
  }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

/**
 * Builds a universal WhatsApp link pre-filled with project inquiry details
 */
export function buildWhatsAppContactUrl(
  phone: string,
  data: {
    name: string;
    email: string;
    phone: string;
    service?: string;
    message: string;
  }
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const lines = [
    `*New Project Inquiry - Elite Web Developers*`,
    ``,
    `*Name:* ${data.name.trim()}`,
    `*Email:* ${data.email.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Project Type:* ${data.service || 'General Inquiry'}`,
    ``,
    `*Project Brief:*`,
    `${data.message.trim()}`,
  ];
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}

