/**
 * Elite Web Developers - Single Source of Truth for Works
 * NOTE: The owner can freely edit the categories, descriptions, titles, and bullets below.
 */

export interface WorkCaseStudy {
  summary: string;
  whatWeBuilt: string[];
  stackUsed: string[];
  serviceSlug: string;
  serviceLabel: string;
}

export interface WorkProject {
  slug: string;
  title: string;
  url: string;
  /* OWNER NOTE: Edit category name here (e.g. E-commerce, Business, Food and Cafes, Events and Weddings) */
  category: string;
  tags: string[];
  /* OWNER NOTE: Edit project description copy here */
  description: string;
  bullets?: string[];
  featured: boolean;
  /** True when /public/projects/<slug>.webp & .png exist locally; false falls back directly to thum.io */
  hasLocalScreenshot: boolean;
  screenshotWidth: number;
  screenshotHeight: number;
  serviceSlug: string;
  caseStudy?: WorkCaseStudy;
}

export const ALL_WORKS: WorkProject[] = [
  {
    slug: 'bunt-india',
    title: 'BUNT India',
    url: 'https://buntindia.com',
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Product pages'],
    description:
      'An online store for a premium pet furniture brand, with a clean product catalogue, brand story pages and a modern, minimal look.',
    bullets: [
      'Product showcase with quick view and add to cart',
      'Brand story and about pages',
      'Free shipping and first-order offer messaging',
      'Separate desktop and mobile hero banners',
    ],
    featured: true,
    hasLocalScreenshot: true,
    screenshotWidth: 1400,
    screenshotHeight: 900,
    serviceSlug: 'online-stores',
    caseStudy: {
      summary:
        'BUNT India needed a clean, modern Shopify storefront that presents its pet furniture range clearly on both desktop and mobile screens while highlighting its brand story and first-order offers.',
      whatWeBuilt: [
        'Product showcase with quick view and direct add-to-cart controls',
        'Dedicated brand story and about pages structured for clarity',
        'Free shipping and first-order offer messaging integrated into the shopping flow',
        'Separate desktop and mobile hero banners so key visuals stay framed on every screen size',
      ],
      stackUsed: ['Shopify', 'Custom CSS', 'Custom JavaScript', 'HTML5', 'Speed optimisation'],
      serviceSlug: 'online-stores',
      serviceLabel: 'Online stores',
    },
  },
  {
    slug: 'the-fat-cookie-chef',
    title: 'The Fat Cookie Chef',
    url: 'https://thefatcookiechef.com',
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Bundle builder'],
    description:
      'A freshly baked cookie store with best sellers, a full cookie collection and a build-your-own-box flow.',
    bullets: [
      'Best sellers and full cookie collection',
      'Build-your-box bundle flow with a bundle discount',
      'Brand story, FAQ and policy pages',
      'Cart drawer and search',
    ],
    featured: true,
    hasLocalScreenshot: true,
    screenshotWidth: 1440,
    screenshotHeight: 900,
    serviceSlug: 'online-stores',
    caseStudy: {
      summary:
        'The Fat Cookie Chef wanted an approachable Shopify bakery storefront that lets customers browse best sellers, explore the full cookie collection, and assemble custom gift boxes with automatic bundle discounts.',
      whatWeBuilt: [
        'Curated best sellers showcase alongside the complete cookie catalogue',
        'Interactive build-your-own-box bundle flow with a bundle discount',
        'Structured brand story, FAQ, and store policy pages for buyer confidence',
        'Slide-out cart drawer and storefront search for fast ordering on mobile',
      ],
      stackUsed: ['Shopify', 'Custom JavaScript', 'Custom CSS', 'HTML5', 'SEO basics'],
      serviceSlug: 'online-stores',
      serviceLabel: 'Online stores',
    },
  },
  {
    slug: 'virukshaa-events',
    title: 'Virukshaa Events',
    url: 'https://virukshaaevents.in',
    category: 'Events and Weddings',
    tags: ['Portfolio site', 'Dashboard', 'Access control'],
    description:
      'A portfolio website for an event company, extended with a private workers dashboard for managing their team.',
    bullets: [
      'Portfolio site showcasing past events',
      'Workers dashboard integrated into the site',
      'Access control for staff-only pages',
    ],
    featured: true,
    hasLocalScreenshot: true,
    screenshotWidth: 1440,
    screenshotHeight: 900,
    serviceSlug: 'web-apps-and-dashboards',
    caseStudy: {
      summary:
        'Virukshaa Events needed a public-facing portfolio to showcase past events and win inquiries, paired with a private staff portal built directly into the same web platform to coordinate team operations.',
      whatWeBuilt: [
        'Public event portfolio website presenting past weddings and corporate setups',
        'Private workers dashboard integrated directly into the site architecture',
        'Role-based access control protecting staff-only pages and internal views',
      ],
      stackUsed: [
        'Full-stack development',
        'Custom JavaScript',
        'Custom CSS',
        'HTML5',
        'Speed optimisation',
      ],
      serviceSlug: 'web-apps-and-dashboards',
      serviceLabel: 'Web apps and dashboards',
    },
  },
  {
    slug: 'sparrowlook',
    title: 'SPARROWLOOK',
    url: 'https://sparrowlook.com',
    category: 'E-commerce',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    description:
      'A WooCommerce store for an oversized t-shirt brand in Chennai, with bundle pricing and a custom size chart.',
    featured: false,
    hasLocalScreenshot: true,
    screenshotWidth: 1440,
    screenshotHeight: 900,
    serviceSlug: 'online-stores',
  },
  {
    slug: 'kichun-studio',
    title: 'Kichun Studio',
    url: 'https://kichunstudio.com',
    category: 'Business',
    tags: ['Business website', 'Responsive design', 'Brand showcase'],
    /* OWNER NOTE: Review description copy */
    description:
      'A clean, responsive business website for Kichun Studio built to showcase their studio identity, services, and inquiry touchpoints across desktop and mobile.',
    featured: false,
    hasLocalScreenshot: true,
    screenshotWidth: 1280,
    screenshotHeight: 720,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'bloom-cafes',
    title: 'Bloom Cafes',
    url: 'https://bloomcafes.com',
    category: 'Food and Cafes',
    tags: ['Cafe website', 'Menu & brand', 'Mobile-first'],
    /* OWNER NOTE: Review description copy & add local screenshot at public/projects/bloom-cafes.webp */
    description:
      'A mobile-first hospitality website for Bloom Cafes designed to present the cafe atmosphere, menu highlights, and visitor details clearly on phones and desktops.',
    featured: false,
    hasLocalScreenshot: false,
    screenshotWidth: 1400,
    screenshotHeight: 875,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'ama-legal-solutions',
    title: 'AMA Legal Solutions',
    url: 'https://www.amalegalsolutions.com',
    category: 'Business',
    tags: ['Business website', 'Service pages', 'Lead generation'],
    /* OWNER NOTE: Review description copy */
    description:
      'A structured corporate website for AMA Legal Solutions presenting legal practice areas, firm credibility, and direct consultation inquiry paths.',
    featured: false,
    hasLocalScreenshot: true,
    screenshotWidth: 1440,
    screenshotHeight: 900,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'foire',
    title: 'Foire',
    url: 'https://foire.in',
    category: 'Business',
    tags: ['Business website', 'Brand presence', 'Mobile-first'],
    /* OWNER NOTE: Review description copy */
    description:
      'A modern business website for Foire crafted for fast page loads, clear brand storytelling, and straightforward customer inquiries across devices.',
    featured: false,
    hasLocalScreenshot: true,
    screenshotWidth: 1440,
    screenshotHeight: 900,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'delhi-house-cafe',
    title: 'Delhi House Cafe',
    url: 'https://www.delhihousecafe.com',
    category: 'Food and Cafes',
    tags: ['Cafe website', 'Hospitality', 'Mobile-first'],
    /* OWNER NOTE: Review description copy & add local screenshot at public/projects/delhi-house-cafe.webp */
    description:
      'A welcoming cafe and dining website for Delhi House Cafe highlighting its hospitality experience, menu offerings, and location information for guests.',
    featured: false,
    hasLocalScreenshot: false,
    screenshotWidth: 1400,
    screenshotHeight: 875,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'vivaah-connect',
    title: 'Vivaah Connect',
    url: 'https://www.vivaahaconnect.com',
    category: 'Events and Weddings',
    tags: ['Events website', 'Wedding services', 'Responsive design'],
    /* OWNER NOTE: Review description copy & add local screenshot at public/projects/vivaah-connect.webp */
    description:
      'A dedicated events and weddings web presence for Vivaah Connect focused on clear service presentation and easy client inquiries on mobile and desktop.',
    featured: false,
    hasLocalScreenshot: false,
    screenshotWidth: 1400,
    screenshotHeight: 875,
    serviceSlug: 'business-websites',
  },
  {
    slug: 'cat-zone',
    title: 'Cat Zone',
    url: 'https://www.catzone.in',
    category: 'E-commerce',
    tags: ['E-commerce', 'Online catalogue', 'Responsive design'],
    /* OWNER NOTE: Review description copy & add local screenshot at public/projects/cat-zone.webp */
    description:
      'An e-commerce website for Cat Zone structured for smooth product browsing, mobile shopping usability, and fast page performance.',
    featured: false,
    hasLocalScreenshot: false,
    screenshotWidth: 1400,
    screenshotHeight: 875,
    serviceSlug: 'online-stores',
  },
];

export const FEATURED_WORKS = ALL_WORKS.filter((w) => w.featured);

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return ALL_WORKS.find((w) => w.slug === slug);
}

export const WORK_CATEGORIES = [
  'All',
  'E-commerce',
  'Food and Cafes',
  'Business',
  'Events and Weddings',
] as const;
