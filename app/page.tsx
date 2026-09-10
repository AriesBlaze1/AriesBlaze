import { HomeShowcase } from '@/components/home-showcase';
import { projects } from '@/data/projects';
import { site, socials } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'John Oyekunle — Software & Product Developer',
  site.description,
  '/',
);

const showcaseOrder = [
  'spenddeck',
  'askform',
  'sitepulse',
  'velune',
  'arcnotes',
  'leadmap',
  'markprint',
  'fromus',
];

const showcaseProjects = showcaseOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <div className="home-page">
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
      <HomeShowcase projects={showcaseProjects} totalProjects={projects.length} />
    </div>
  );
}
