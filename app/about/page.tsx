/* eslint-disable @next/next/no-img-element */
import { ContactBand, PageIntro, SectionHeading } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'About John',
  'John Oyekunle is a Software & Product Developer in Lagos. Three years of learning by building, from websites to complete products.',
  '/about',
);
export default function AboutPage() {
  const tools = [
    ['Next.js', 'nextdotjs', 'Product interface'],
    ['TypeScript', 'typescript', 'Reliable code'],
    ['Tailwind CSS', 'tailwindcss', 'Interface systems'],
    ['Node.js', 'nodedotjs', 'Application logic'],
    ['PostgreSQL', 'postgresql', 'Product data'],
    ['Supabase', 'supabase', 'Backend systems'],
    ['Figma', 'figma', 'Product design'],
    ['GitHub', 'github', 'Version control'],
  ];
  return (
    <div className="container">
      <PageIntro
        label="John Oyekunle / Building as AriesBlaze"
        title="I learn by building."
      >
        <p>
          Software & Product Developer.
          <br />
          Lagos, Nigeria. Three years and still figuring things out.
        </p>
      </PageIntro>
      <div className="about-body">
        <div className="about-side">
          <span className="large-monogram">
            AB<span>.</span>
          </span>
          <p>
            One person.
            <br />
            Many ideas.
            <br />
            Always building.
          </p>
        </div>
        <div className="prose">
          <p>
            I’m John Oyekunle, a Software &amp; Product Developer in Lagos,
            Nigeria. I build products from the interface through to the systems
            that make them useful.
          </p>
          <p>
            My work began with websites and grew through building: each idea
            introducing the product, data, and infrastructure problems needed
            to make it real.
          </p>
        </div>
      </div>
      <section className="section">
        <SectionHeading number="01" title="Tools with a purpose" />
        <div className="about-tools tool-marquee" aria-label="Technology stack"><div className="tool-track">{[...tools, ...tools].map(([name, logo, purpose], index) => <div className="tool-chip" key={`${name}-${index}`} aria-hidden={index >= tools.length}><img src={`https://cdn.simpleicons.org/${logo}/20211f`} alt={index < tools.length ? `${name} logo` : ''} /><span>{name}</span><small>{purpose}</small></div>)}</div></div>
      </section>
      <section className="section about-process">
        <SectionHeading number="02" title="How I build" />
        <div className="process">
          <p>
            Understand the problem → Design the flow → Build the interface →
            Connect the systems → Test → Deploy → Iterate
          </p>
          <span>The interface is only one layer of the product.</span>
        </div>
      </section>
      <ContactBand />
    </div>
  );
}
