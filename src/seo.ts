import { SITE_DATA } from './data/siteData';
import { ServicePageData } from './data/servicePages';

export const SITE_URL = 'https://www.ybgp.in/';

const homeDescription = 'YBGP helps entrepreneurs, startups and businesses in Noida and Delhi NCR turn ideas into profitable businesses through strategy, planning, compliance, technology, branding and growth support.';

export const setPageMetadata = (page?: ServicePageData) => {
  const title = page?.title ?? 'Business Consultant in Noida & Delhi NCR | YBGP';
  const description = page?.description ?? homeDescription;
  const url = page ? `${SITE_URL}${page.slug}/` : SITE_URL;
  const image = `${SITE_URL}og-image.svg`;

  document.title = title;
  const setMeta = (selector: string, content: string, attribute: 'name' | 'property' = 'name') => {
    let element = document.head.querySelector<HTMLMetaElement>(`${attribute === 'name' ? 'meta[name="' : 'meta[property="'}${selector}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, selector);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setMeta('description', description);
  setMeta('robots', 'index, follow');
  setMeta('og:type', 'website', 'property');
  setMeta('og:url', url, 'property');
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:image', image, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:url', url);
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  let schema = document.head.querySelector<HTMLScriptElement>('#page-schema');
  if (!schema) {
    schema = document.createElement('script');
    schema.id = 'page-schema';
    schema.type = 'application/ld+json';
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify(page ? [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    description,
    provider: { '@type': 'ProfessionalService', name: SITE_DATA.fullName, url: SITE_URL },
    areaServed: ['Noida', 'Delhi NCR'],
    url,
    mainEntityOfPage: url
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.name, item: url }
    ]
  }] : [{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_DATA.fullName,
    url: SITE_URL,
    description
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }]
  }]);
};
