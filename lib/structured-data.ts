import { site, socials } from '@/data/site';

export const personEntity = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  alternateName: site.brand,
  url: site.url,
  image: [
    `${site.url}/images/ariesblaze-portrait-01.jpeg`,
    `${site.url}/images/ariesblaze-portrait-02.jpeg`,
  ],
  jobTitle: site.title,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  knowsAbout: [
    'Software development',
    'Web development',
    'Web application development',
    'SaaS product development',
  ],
  sameAs: socials.map((social) => social.url),
};
