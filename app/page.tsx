import { HomeShowcase } from '@/components/home-showcase';
import { ndaWork, projects } from '@/data/projects';
import { site, socials } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'John Oyekunle — Software & Product Developer',
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
            '@type': 'Person',
            name: site.name,
            alternateName: site.brand,
            jobTitle: site.title,
            url: site.url,
            sameAs: socials.map((social) => social.url),
          }).replace(/</g, '\\u003c'),
        }}
      />
      <HomeShowcase projects={projects} ndaCount={ndaWork.count} />
    </div>
  );
}
