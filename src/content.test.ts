import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  PROJECTS,
  ALL_WORKS,
  FEATURED_WORKS,
  SERVICES,
  PROCESS_STEPS,
  TOOLKIT_CHIPS,
  CAPABILITIES,
  CONTACT_INFO,
} from './content';

test('works integrity: all 11 projects exist and removed projects are deleted', () => {
  assert.equal(ALL_WORKS.length, 11);
  assert.equal(PROJECTS.length, 11);

  // Check 3 featured works
  assert.equal(FEATURED_WORKS.length, 3);
  assert.equal(FEATURED_WORKS[0].slug, 'bunt-india');
  assert.equal(FEATURED_WORKS[1].slug, 'the-fat-cookie-chef');
  assert.equal(FEATURED_WORKS[2].slug, 'virukshaa-events');

  // Verify removed projects are not present
  const titles = ALL_WORKS.map((w) => w.title.toLowerCase());
  assert.ok(!titles.includes('murthi machin works'));
  assert.ok(!titles.includes('voice of logu'));
  assert.ok(!titles.includes('leadhunt'));
  assert.ok(!titles.includes('proposal website'));

  // Verify all 11 projects have valid fields
  for (const project of ALL_WORKS) {
    assert.ok(project.slug, `slug exists for ${project.title}`);
    assert.ok(project.title, `title exists for ${project.slug}`);
    assert.ok(project.category, `category exists for ${project.title}`);
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0);
    assert.ok(project.description);
    assert.ok(project.url && project.url.startsWith('http'), `valid url exists for ${project.title}`);
  }
});

test('capability strip and toolkit chips reflect updated requirements', () => {
  // Check exact 6 items in CAPABILITIES strip
  assert.deepEqual(CAPABILITIES, [
    'WORDPRESS',
    'SHOPIFY',
    'WOOCOMMERCE',
    'E-COMMERCE STORES',
    'BUSINESS WEBSITES',
    'CUSTOM DASHBOARDS',
  ]);

  // Check Shopify chip is in toolkit
  assert.ok(TOOLKIT_CHIPS.includes('Shopify'));
  assert.equal(TOOLKIT_CHIPS.length, 10);
});

test('content integrity: services and process steps match specs', () => {
  assert.equal(SERVICES.length, 4);
  assert.equal(SERVICES[3].inverted, true);
  assert.equal(PROCESS_STEPS.length, 4);
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
