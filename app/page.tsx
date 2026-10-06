import { HomeShowcase } from '@/components/home-showcase';
import { ndaWork, projects } from '@/data/projects';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
import { personEntity } from '@/lib/structured-data';

export const metadata = pageMetadata(
  'John Oyekunle | Software Developer in Lagos',
  site.description,
  '/',
);

export default function Home() {
  return (
    <div className="portfolio-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              personEntity,
              {
                '@type': 'WebSite',
                '@id': `${site.url}/#website`,
                url: site.url,
                name: site.brand,
                alternateName: site.name,
                inLanguage: 'en-NG',
                publisher: { '@id': personEntity['@id'] },
              },
              {
                '@type': 'WebPage',
                '@id': `${site.url}/#webpage`,
                url: site.url,
                name: 'John Oyekunle | Software Developer in Lagos | AriesBlaze',
                isPartOf: { '@id': `${site.url}/#website` },
                mainEntity: { '@id': personEntity['@id'] },
                inLanguage: 'en-NG',
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
      <HomeShowcase projects={projects} ndaCount={ndaWork.count} />
    </div>
  );
}
