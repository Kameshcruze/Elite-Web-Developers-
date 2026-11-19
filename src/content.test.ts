import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  buildWhatsAppContactUrl,
  normalizeServiceOption,
  PROJECTS,
  ALL_WORKS,
  FEATURED_WORKS,
  SERVICES,
  PROCESS_STEPS,
  TOOLKIT_CHIPS,
  CAPABILITIES,
  CONTACT_INFO,
  NAV_LINKS,
} from './content';
import {
  PAGE_SEO,
  PRERENDER_ROUTES,
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
} from './seo';
import { SERVICES_DETAIL } from './servicesData';
import { STUDIO_FAQS } from './faqData';

test('works integrity: all 11 projects exist and removed projects are deleted', () => {
  assert.equal(ALL_WORKS.length, 11);
  assert.equal(PROJECTS.length, 11);

  // Check 3 featured works
  assert.equal(FEATURED_WORKS.length, 3);
  assert.equal(FEATURED_WORKS[0].slug, 'bunt-india');
  assert.equal(FEATURED_WORKS[1].slug, 'the-fat-cookie-chef');
  assert.equal(FEATURED_WORKS[2].slug, 'virukshaa-events');

  // Featured works have case study data
  for (const featured of FEATURED_WORKS) {
    assert.ok(featured.caseStudy, `caseStudy exists for ${featured.slug}`);
    assert.ok(featured.caseStudy.whatWeBuilt.length >= 3);
  }

  // Verify removed projects are not present
  const titles = ALL_WORKS.map((w) => w.title.toLowerCase());
  assert.ok(!titles.includes('murthi machin works'));
  assert.ok(!titles.includes('voice of logu'));
  assert.ok(!titles.includes('leadhunt'));
  assert.ok(!titles.includes('proposal website'));

  // Verify all 11 projects have valid fields & screenshot metadata
  let localCount = 0;
  let remoteCount = 0;
  for (const project of ALL_WORKS) {
    assert.ok(project.slug, `slug exists for ${project.title}`);
    assert.ok(project.title, `title exists for ${project.slug}`);
    assert.ok(project.category, `category exists for ${project.title}`);
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0);
    assert.ok(project.description.length > 40, `non-thin description for ${project.slug}`);
    assert.ok(project.url && project.url.startsWith('http'), `valid url exists for ${project.title}`);
    assert.ok(project.screenshotWidth > 0 && project.screenshotHeight > 0);
    if (project.hasLocalScreenshot) localCount++;
    else remoteCount++;
  }
  assert.equal(localCount, 7);
  assert.equal(remoteCount, 4);
});

test('capability strip and toolkit chips reflect updated requirements', () => {
  assert.deepEqual(CAPABILITIES, [
    'WORDPRESS',
    'SHOPIFY',
    'WOOCOMMERCE',
    'E-COMMERCE STORES',
    'BUSINESS WEBSITES',
    'CUSTOM DASHBOARDS',
  ]);

  assert.ok(TOOLKIT_CHIPS.includes('Shopify'));
  const elementorIndex = TOOLKIT_CHIPS.indexOf('Elementor');
  assert.ok(elementorIndex >= 0);
  assert.equal(TOOLKIT_CHIPS[elementorIndex + 1], 'React');
  assert.equal(TOOLKIT_CHIPS[elementorIndex + 2], 'Python');
  assert.equal(TOOLKIT_CHIPS.length, 12);
});

test('navigation uses clean real routes with no hash links', () => {
  assert.equal(NAV_LINKS.length, 5);
  for (const link of NAV_LINKS) {
    assert.ok(link.href.startsWith('/'), `route starts with / for ${link.label}`);
    assert.ok(!link.href.includes('#'), `no hash link for ${link.label}`);
  }
});

test('content integrity: services, service details, process steps, and FAQs', () => {
  assert.equal(SERVICES.length, 4);
  assert.equal(SERVICES[3].inverted, true);
  assert.ok(SERVICES[1].description.includes('Shopify'));
  assert.equal(SERVICES_DETAIL.length, 4);
  assert.equal(PROCESS_STEPS.length, 4);
  assert.ok(STUDIO_FAQS.length >= 8);
});

test('normalizeServiceOption aligns all service cards and variants cleanly', () => {
  assert.equal(normalizeServiceOption('Business websites'), 'Business websites');
  assert.equal(normalizeServiceOption('Business website'), 'Business websites');
  assert.equal(normalizeServiceOption('Online stores'), 'Online stores');
  assert.equal(normalizeServiceOption('Online store'), 'Online stores');
  assert.equal(normalizeServiceOption('Web apps and dashboards'), 'Web apps and dashboards');
  assert.equal(normalizeServiceOption('Care and support'), 'Care and support');
  assert.equal(normalizeServiceOption(undefined), 'Business websites');
});

test('SEO metadata: all 18 canonical routes have unique titles <= 60 chars and descriptions 140-160 chars', () => {
  assert.equal(PRERENDER_ROUTES.length, 18);

  const seenTitles = new Set<string>();
  const seenDescriptions = new Set<string>();

  for (const route of PRERENDER_ROUTES) {
    const meta = PAGE_SEO[route];
    assert.ok(meta, `SEO metadata exists for ${route}`);
    assert.ok(
      meta.title.length <= 60,
      `Title too long (${meta.title.length} chars) for ${route}: "${meta.title}"`
    );
    assert.ok(
      meta.description.length >= 140 && meta.description.length <= 160,
      `Description out of 140-160 range (${meta.description.length} chars) for ${route}: "${meta.description}"`
    );
    assert.ok(!seenTitles.has(meta.title), `Duplicate title on ${route}`);
    assert.ok(!seenDescriptions.has(meta.description), `Duplicate description on ${route}`);
    seenTitles.add(meta.title);
    seenDescriptions.add(meta.description);
  }

  assert.ok(PAGE_SEO['/about'].description.includes('Founded in 2025 by Kamesh Ravichandran'));

  const orgSchema = buildOrganizationSchema() as {
    founder?: { name?: string };
    foundingDate?: string;
  };
  assert.equal(orgSchema.founder?.name, 'Kamesh Ravichandran');
  assert.equal(orgSchema.foundingDate, '2025');

  const profSchema = buildProfessionalServiceSchema('/about') as {
    founder?: { name?: string };
    foundingDate?: string;
  };
  assert.equal(profSchema.founder?.name, 'Kamesh Ravichandran');
  assert.equal(profSchema.foundingDate, '2025');
});

test('contact form validation rejects empty or invalid fields', () => {
  const result = validateContactForm({
    name: '',
    email: 'invalid-email',
    phone: '',
    message: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
});

test('contact form validation accepts valid data', () => {
  const result = validateContactForm({
    name: 'Karthik',
    email: 'karthik@example.com',
    phone: '+91 95852 62522',
    message: 'We need an e-commerce website for our textile brand.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('contact info contains required Bangalore & Karur locations and updated contact details', () => {
  assert.ok(CONTACT_INFO.location.includes('Bangalore'));
  assert.ok(CONTACT_INFO.location.includes('Karur'));
  assert.equal(CONTACT_INFO.phone, '+91 95852 62522');
  assert.equal(CONTACT_INFO.email, 'support.elitewebdevelopers@gmail.com');
});

test('buildWhatsAppContactUrl builds correct wa.me link with form details', () => {
  const url = buildWhatsAppContactUrl(CONTACT_INFO.phone, {
    name: 'Anand Kumar',
    email: 'anand@example.com',
    phone: '9876543210',
    service: 'Online stores',
    message: 'Need a Shopify store for apparel.',
  });

  assert.ok(url.startsWith('https://wa.me/919585262522?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Anand Kumar'));
  assert.ok(decoded.includes('anand@example.com'));
  assert.ok(decoded.includes('9876543210'));
  assert.ok(decoded.includes('Online stores'));
  assert.ok(decoded.includes('Need a Shopify store for apparel.'));
});
