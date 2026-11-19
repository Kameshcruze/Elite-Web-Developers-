/**
 * Elite Web Developers - Structured Services Content
 * Uses only real capabilities, toolkit items, and live client works from the studio.
 */

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  number: string;
  slug: string;
  path: string;
  title: string;
  headline: string;
  eyebrow: string;
  shortDescription: string;
  leadParagraph: string;
  secondaryParagraph: string;
  contactServiceValue: string;
  serviceType: string;
  included: string[];
  technologies: string[];
  relatedWorkSlugs: string[];
  faqs: ServiceFaqItem[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    number: '01',
    slug: 'business-websites',
    path: '/services/business-websites',
    title: 'Business websites',
    headline: 'Business websites built to earn trust',
    eyebrow: 'SERVICE 01 · BUSINESS WEBSITES',
    shortDescription:
      'Fast, mobile-first websites that help local businesses look credible and get found.',
    leadParagraph:
      'Your website is often the first place a prospective customer checks before calling or visiting. We design and build clear, mobile-first websites for service firms, cafes, studios, event companies, and growing local brands across Bangalore, Karur, and Tamil Nadu.',
    secondaryParagraph:
      'Every site is structured around real customer questions—clear service pages, fast loading on mobile networks, on-page SEO fundamentals, and direct WhatsApp or email inquiry paths without clutter.',
    contactServiceValue: 'Business websites',
    serviceType: 'Business Website Design and Development',
    included: [
      'Custom responsive layout tailored to your brand and audience',
      'Mobile-first engineering tested across phones, tablets, and desktops',
      'Clean page hierarchy with on-page SEO basics (titles, descriptions, headings)',
      'Direct WhatsApp, call, and email inquiry flows',
      'WordPress + Elementor or lightweight custom front-end setup depending on editing needs',
      'Speed optimisation and launch handover training',
    ],
    technologies: ['WordPress', 'Elementor', 'HTML5', 'Custom CSS', 'Custom JavaScript', 'SEO basics', 'Speed optimisation'],
    relatedWorkSlugs: ['ama-legal-solutions', 'kichun-studio', 'foire', 'bloom-cafes', 'delhi-house-cafe', 'vivaah-connect'],
    faqs: [
      {
        question: 'Can I update text and photos on my business website after launch?',
        answer:
          'Yes. If your team wants to edit pages regularly, we build on WordPress with a clean Elementor setup and walk you through updating text, images, and new sections during handover.',
      },
      {
        question: 'Do you handle mobile responsiveness and basic SEO?',
        answer:
          'Yes. Every business website is designed mobile-first, tested across screen sizes, and launched with clean headings, meta tags, and fast-loading images.',
      },
      {
        question: 'Can you connect my website forms directly to WhatsApp or email?',
        answer:
          'Yes. We regularly wire inquiry buttons and forms directly to WhatsApp or your business email so leads reach you right away.',
      },
    ],
  },
  {
    number: '02',
    slug: 'online-stores',
    path: '/services/online-stores',
    title: 'Online stores',
    headline: 'Online stores designed for smooth shopping',
    eyebrow: 'SERVICE 02 · ONLINE STORES',
    shortDescription:
      'Shopify, WordPress, and WooCommerce shops with tailored product pages, bundles, and checkout.',
    leadParagraph:
      'Whether you are launching a direct-to-consumer brand or moving an established catalogue online, we build Shopify and WordPress / WooCommerce stores that make browsing, bundling, and checking out straightforward on mobile.',
    secondaryParagraph:
      'From custom product pages, quick-view drawers, and build-your-own-box bundle flows to custom size charts and offer messaging, we tailor the storefront to how your customers actually buy.',
    contactServiceValue: 'Online stores',
    serviceType: 'E-commerce Store Development',
    included: [
      'Shopify or WordPress + WooCommerce storefront setup and custom styling',
      'Tailored product pages, collections, quick view, and cart drawers',
      'Bundle pricing, build-your-own-box flows, and custom size charts when needed',
      'Separate desktop and mobile hero banners for crisp visual framing',
      'Essential store pages: brand story, FAQs, shipping, and policy templates',
      'Speed tuning, SEO basics, and team training on managing orders and inventory',
    ],
    technologies: ['Shopify', 'WordPress', 'WooCommerce', 'Elementor', 'Custom JavaScript', 'Custom CSS', 'Speed optimisation'],
    relatedWorkSlugs: ['bunt-india', 'the-fat-cookie-chef', 'sparrowlook', 'cat-zone'],
    faqs: [
      {
        question: 'Should I choose Shopify or WooCommerce for my online store?',
        answer:
          'Shopify works great when you want hosted reliability, fast setup, and minimal server maintenance. WordPress with WooCommerce fits well if you want full content flexibility or specific WordPress workflows. During Discover, we help you pick the better fit for your catalogue and team.',
      },
      {
        question: 'Can you build custom features like bundle boxes or size charts?',
        answer:
          'Yes. We have built build-your-own-box bundle flows with automatic discounts (such as The Fat Cookie Chef) as well as bundle pricing and custom size charts (such as SPARROWLOOK).',
      },
      {
        question: 'Will I be able to add new products and manage orders myself?',
        answer:
          'Yes. Both Shopify and WooCommerce come with straightforward dashboards, and we train you on adding products, editing prices, and fulfilling orders before handover.',
      },
    ],
  },
  {
    number: '03',
    slug: 'web-apps-and-dashboards',
    path: '/services/web-apps-and-dashboards',
    title: 'Web apps and dashboards',
    headline: 'Web apps and dashboards built around your workflow',
    eyebrow: 'SERVICE 03 · WEB APPS & DASHBOARDS',
    shortDescription:
      'Custom tools, admin panels, and staff dashboards built around how you work.',
    leadParagraph:
      'When spreadsheets and generic plugins slow your team down, a focused web app or internal dashboard keeps operations organized. We build custom front-ends, back-end APIs, admin panels, and role-based staff portals using React, Python, and modern full-stack web technologies.',
    secondaryParagraph:
      'We can also pair a public customer-facing website with a private staff dashboard under one roof—like our build for Virukshaa Events—so your team manages day-to-day work behind clean access control.',
    contactServiceValue: 'Web apps and dashboards',
    serviceType: 'Custom Web Application and Dashboard Development',
    included: [
      'Requirements scoping to map roles, permissions, and daily staff workflows',
      'Custom React interfaces and Python / full-stack application logic',
      'Private admin panels and staff dashboards with access control',
      'Responsive screens that work cleanly for both office desktops and field phones',
      'Integration alongside your public website when needed',
      'Testing across screen sizes, documentation, and team onboarding',
    ],
    technologies: ['React', 'Python', 'Full-stack development', 'Custom JavaScript', 'Custom CSS', 'HTML5'],
    relatedWorkSlugs: ['virukshaa-events'],
    faqs: [
      {
        question: 'Can a private staff dashboard live alongside our public website?',
        answer:
          'Yes. For Virukshaa Events, we combined a public event portfolio website with a private workers dashboard protected by staff-only access control.',
      },
      {
        question: 'What stack do you use for custom web apps?',
        answer:
          'Depending on what your project requires, we build with React, Python, custom JavaScript, HTML5, and full-stack web architectures tailored for maintainability and speed.',
      },
      {
        question: 'How do we scope a custom web app before starting?',
        answer:
          'We begin with a Discover session to list user roles, core screens, and must-have features. You approve the layout and scope before development begins so there are no surprises.',
      },
    ],
  },
  {
    number: '04',
    slug: 'care-and-support',
    path: '/services/care-and-support',
    title: 'Care and support',
    headline: 'Ongoing website care after you go live',
    eyebrow: 'SERVICE 04 · CARE & SUPPORT',
    shortDescription:
      'Updates, fixes, speed tuning, and email setup after your site goes live.',
    leadParagraph:
      'Launching a website is the start, not the finish line. We stay on hand to keep your WordPress, WooCommerce, Shopify, or custom site updated, fast, and dependable so you can focus on running your business.',
    secondaryParagraph:
      'Whether you need quick bug fixes, page speed optimisation, on-page SEO fundamentals, content updates, or business email setup, you have a direct line to the developers who understand your site.',
    contactServiceValue: 'Care and support',
    serviceType: 'Website Maintenance, Speed Tuning, and Support',
    included: [
      'Routine platform, theme, and plugin updates with visual checks',
      'Bug fixes, layout adjustments, and small feature additions',
      'Speed optimisation (image compression, script cleanup, mobile load tuning)',
      'On-page SEO basics (meta tags, heading structure, indexing health)',
      'Business email setup and DNS configuration assistance',
      'Direct WhatsApp and email support from Bangalore and Karur',
    ],
    technologies: ['WordPress', 'WooCommerce', 'Shopify', 'Speed optimisation', 'SEO basics', 'Custom CSS', 'Custom JavaScript'],
    relatedWorkSlugs: ['bunt-india', 'sparrowlook', 'virukshaa-events'],
    faqs: [
      {
        question: 'Do you support websites that were not originally built by you?',
        answer:
          'Yes. Share your live URL and what needs attention—such as speed tuning, fixes, or updates—and we will review the site and confirm how we can help.',
      },
      {
        question: 'Can you help set up business email on our domain?',
        answer:
          'Yes. Email setup and domain configuration are part of our post-launch care and support service.',
      },
      {
        question: 'How do we request updates or fixes?',
        answer:
          'You can message us directly on WhatsApp (+91 95852 62522) or email support.elitewebdevelopers@gmail.com with your requested changes.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
