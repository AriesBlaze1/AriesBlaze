import { StackModule } from '@/components/home-modules';
import { ProfileCollage } from '@/components/profile-collage';
import { ContactBand, PageIntro, SectionHeading } from '@/components/ui';
import { toolsWithPurpose } from '@/data/tooling';
import { aboutParagraphs, capabilities, currently, site, technologies } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
import { personEntity } from '@/lib/structured-data';

export const metadata = pageMetadata(
  'About John Oyekunle',
  'Meet John Oyekunle, known online as AriesBlaze: a software and product developer in Lagos, Nigeria, building websites, web applications, and SaaS products.',
  '/about',
);

const buildSteps = [
  'Understand the problem',
  'Design the flow',
  'Build the interface',
  'Connect the systems',
  'Test',
  'Deploy',
  'Iterate',
];

export default function AboutPage() {
  return (
    <div className="container about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            '@id': `${site.url}/about#profile`,
            url: `${site.url}/about`,
            name: 'About John Oyekunle | AriesBlaze',
            mainEntity: personEntity,
          }).replace(/</g, '\\u003c'),
        }}
      />
      <PageIntro label="John Oyekunle / Building as AriesBlaze" title="I learn by building.">
        <p>Software &amp; Product Developer.<br />{site.location}. Three years and still figuring things out.</p>
      </PageIntro>

      <div className="about-body">
        <aside className="about-side"><ProfileCollage /></aside>
        <div className="prose">
          {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      <section className="section about-current">
        <SectionHeading number="01" title="Right now" />
        <div className="current-learning">
          {currently.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span><strong>{item.value}</strong><p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-process">
        <SectionHeading number="02" title="How I build" />
        <div className="process">
          <ol className="build-process">
            {buildSteps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3></li>
            ))}
          </ol>
          <p className="process-note">The interface is only one layer of the product.</p>
        </div>
      </section>

      <section className="section about-capabilities">
        <SectionHeading number="03" title="What I work on" />
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.number}>
              <span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-tools-section">
        <SectionHeading number="04" title="Tools with a purpose" />
        <StackModule tools={toolsWithPurpose} />
        <div className="technology-groups">
          {technologies.map((group) => (
            <div className="technology-row" key={group.category}>
              <h3>{group.category}</h3><p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactBand />
    </div>
  );
}
