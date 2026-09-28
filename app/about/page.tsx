import { StackModule } from '@/components/home-modules';
import { ProfileCollage } from '@/components/profile-collage';
import { ContactBand, PageIntro, SectionHeading } from '@/components/ui';
import { toolsWithPurpose } from '@/data/tooling';
import { aboutParagraphs, capabilities, currently, site, technologies } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'About John',
  'John Oyekunle is a Software & Product Developer in Lagos. Three years of learning by building, from websites to complete products.',
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
