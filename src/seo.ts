import { SITE_DATA } from './data/siteData';
import { ServicePageData } from './data/servicePages';

export const SITE_URL = 'https://www.ybgp.in/';
export interface SitePageData {
  slug: string;
  title: string;
  description: string;
}

const homeDescription = 'YBGP helps entrepreneurs, startups and businesses in Noida and Delhi NCR turn ideas into profitable businesses through strategy, planning, compliance, technology, branding and growth support.';

export const setPageMetadata = (page?: ServicePageData | SitePageData) => {
  const title = page?.title ?? 'Business Consultant in Noida & Delhi NCR | YBGP';
  const description = page?.description ?? homeDescription;
  const url = page ? `${SITE_URL}${page.slug}/` : SITE_URL;
  const image = `${SITE_URL}og-image.svg`;
  const siteName = SITE_DATA.fullName;
  const pageType = page ? 'website' : 'website';

  document.title = title;

  const setMeta = (selector: string, content: string, attribute: 'name' | 'property' = 'name') => {
    const selectorString = attribute === 'name' ? `meta[name="${selector}"]` : `meta[property="${selector}"]`;
    let element = document.head.querySelector<HTMLMetaElement>(selectorString);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, selector);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setMeta('description', description);
  setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMeta('author', 'Shubhanshu Jain - YBGP');
  setMeta('keywords', 'business consultant in Noida, business consultant in Delhi NCR, startup consulting, business strategy consulting, business planning consultant, business registration and compliance, website and app development, branding and digital marketing, business growth consulting');
  setMeta('theme-color', '#0E2B22');
  setMeta('application-name', 'YBGP');
  setMeta('apple-mobile-web-app-title', 'YBGP');
  setMeta('format-detection', 'telephone=no');
  setMeta('og:type', pageType, 'property');
  setMeta('og:site_name', siteName, 'property');
  setMeta('og:url', url, 'property');
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:image', image, 'property');
  setMeta('og:image:alt', `${siteName} - Business Growth Partner`, 'property');
  setMeta('og:locale', 'en_IN', 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:site', '@ybgp.consulting');
  setMeta('twitter:creator', '@ybgp.consulting');
  setMeta('twitter:url', url);
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);
  setMeta('twitter:image:alt', `${siteName} - Business Growth Partner`);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  let alternate = document.head.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="en-in"]');
  if (!alternate) {
    alternate = document.createElement('link');
    alternate.rel = 'alternate';
    alternate.setAttribute('hreflang', 'en-in');
    document.head.appendChild(alternate);
  }
  alternate.href = url;

  let schema = document.head.querySelector<HTMLScriptElement>('#page-schema');
  if (!schema) {
    schema = document.createElement('script');
    schema.id = 'page-schema';
    schema.type = 'application/ld+json';
    document.head.appendChild(schema);
  }

  const baseOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: SITE_DATA.fullName,
    alternateName: SITE_DATA.brandName,
    url: SITE_URL,
    logo: `${SITE_URL}logo.svg`,
    image: `${SITE_URL}og-image.svg`,
    telephone: `+${SITE_DATA.phoneRaw}`,
    email: SITE_DATA.email,
    founder: {
      '@type': 'Person',
      name: SITE_DATA.owner,
      jobTitle: SITE_DATA.ownerTitle
    },
    areaServed: ['Noida', 'Delhi NCR', 'India'],
    sameAs: [SITE_DATA.instagramUrl, SITE_DATA.linkedinUrl],
    description: description
  };

  const faqList = SITE_DATA.faq.map((entry) => ({
    '@type': 'Question',
    name: entry.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: entry.answer
    }
  }));

  const schemaPayload = page && 'name' in page
    ? [{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: page.name,
        description,
        provider: {
          '@type': ['Organization', 'ProfessionalService'],
          name: SITE_DATA.fullName,
          url: SITE_URL,
          logo: `${SITE_URL}logo.svg`
        },
        serviceType: page.name,
        areaServed: ['Noida', 'Delhi NCR', 'India'],
        mainEntityOfPage: url
      }, {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: page.name, item: url }
        ]
      }, {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqList
      }, baseOrganizationSchema]
    : [{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_DATA.fullName,
        url: SITE_URL,
        description
      }, baseOrganizationSchema, {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqList
      }, {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }]
      }];

  schema.textContent = JSON.stringify(schemaPayload);
};
