import Link from 'next/link';
import { Arrow } from '@/components/icons';
import { ProjectMedia } from '@/components/project-media';
import { projects } from '@/data/projects';
import { site, socials } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Discuss your project',
  'Looking to build a website, web app, or SaaS product? Contact John Oyekunle, known as AriesBlaze, to talk through the goal, scope, and next step.',
  '/contact',
);

const projectEmail = `mailto:${site.email}?subject=${encodeURIComponent(
  'Project inquiry for AriesBlaze',
)}&body=${encodeURIComponent(
  "Hi John,\n\nI'd like to talk about a project.\n\nWhat I'm building:\nWho it's for:\nWhat I need help with:\nTarget timeline:\nBudget range (if known):\n\nRelevant links:\n",
)}`;

const services = [
  {
    number: '01',
    title: 'Websites & e-commerce',
    description:
      'Clear, considered websites and storefronts that help people understand what you offer and what to do next.',
  },
  {
    number: '02',
    title: 'Web apps & SaaS',
    description:
      'Product interfaces, dashboards, and useful web apps, connected to the systems that make them work.',
  },
  {
    number: '03',
    title: 'Product improvements',
    description:
      'Make an existing product easier to use, improve its interface, or connect the services behind it.',
  },
];

const usefulDetails = [
  'What you are building and who it is for',
  'The problem you want to solve',
  'What kind of help you need',
  'Your timeline and budget range, if known',
];

const directSocials = socials.filter((social) =>
  ['LinkedIn', 'Telegram'].includes(social.label),
);
const proofProjects = projects.filter((project) =>
  ['askform', 'sitepulse', 'velune'].includes(project.slug),
);

export default function ContactPage() {
  return (
    <div className="container contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" />
            Project inquiries / John Oyekunle
          </p>
          <h1 id="contact-title">Have a website or product to build?</h1>
          <p className="contact-lead">
            I&apos;m John Oyekunle, known as AriesBlaze. I build websites, web
            apps, and SaaS products, from the first interface through the
            systems behind it.
          </p>
          <div className="contact-hero-actions">
            <a className="contact-primary" href={projectEmail}>
              Start a project conversation
              <Arrow diagonal />
            </a>
            <Link className="text-link" href="/work">
              See selected work
              <Arrow />
            </Link>
          </div>
          <p className="contact-reassurance">
            No polished brief needed. A rough idea, challenge, or link is enough
            to start.
          </p>
        </div>

        <aside className="contact-brief" aria-labelledby="contact-brief-title">
          <p className="eyebrow">A useful first message</p>
          <h2 id="contact-brief-title">Share what you know so far.</h2>
          <ol>
            {usefulDetails.map((detail, index) => (
              <li key={detail}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
          <p className="contact-brief-note">
            Not sure about the scope yet? That&apos;s fine. We can start with the
            problem you want to solve.
          </p>
        </aside>
      </section>

      <section className="contact-services" aria-labelledby="contact-services-title">
        <div className="contact-section-heading">
          <div>
            <p className="eyebrow">Ways I can help</p>
            <h2 id="contact-services-title">From first idea to better product.</h2>
          </div>
          <p>
            Bring a clear brief or an early question. We can work out the right
            scope from there.
          </p>
        </div>

        <div className="contact-service-grid">
          {services.map((service) => (
            <article className="contact-service" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-engagement" aria-label="Project fit and engagement process">
        <div className="contact-engagement-fit">
          <p className="eyebrow">Who I work with</p>
          <h2>Open to all industries and stages.</h2>
          <p>
            I work with individuals, founders, small businesses, and established
            teams. Whether you&apos;re starting with an idea or improving an
            existing site or product, tell me what you want to make possible.
          </p>
        </div>

        <div className="contact-engagement-process">
          <p className="eyebrow">How an engagement works</p>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Share the brief</h3>
                <p>Tell me the goal, what you need, and any timing or links I should know.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Confirm fit and scope</h3>
                <p>We clarify deliverables, priorities, constraints, and whether the work is a fit.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Agree, then build</h3>
                <p>I lay out the delivery plan, timeline, and cost. Work starts once we agree on scope and terms.</p>
              </div>
            </li>
          </ol>
          <p className="contact-engagement-note">
            The first conversation is to check fit and scope. There&apos;s no
            commitment to start.
          </p>
        </div>
      </section>

      <section className="contact-proof" aria-labelledby="contact-proof-title">
        <div className="contact-section-heading">
          <div>
            <p className="eyebrow">Selected product work</p>
            <h2 id="contact-proof-title">Built around real problems.</h2>
          </div>
          <Link className="text-link" href="/work">
            Browse all work
            <Arrow />
          </Link>
        </div>
        <div className="contact-proof-grid">
          {proofProjects.map((project) => (
            <Link
              className="contact-proof-card"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className={`contact-proof-visual ${project.color}`}>
                <ProjectMedia
                  src={project.image}
                  name={project.name}
                  alt={project.alt}
                  sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="contact-proof-copy">
                <span className="mono">{project.category}</span>
                <h3>
                  {project.name}
                  <Arrow diagonal />
                </h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-direct" aria-label="Contact details">
        <div className="contact-direct-email">
          <p className="eyebrow">Email works best for project details</p>
          <a href={projectEmail}>
            {site.email}
            <Arrow diagonal />
          </a>
          <p>Based in Lagos, Nigeria. Open to conversations beyond it.</p>
        </div>
        <div className="contact-direct-social">
          <p className="eyebrow">Prefer to connect first?</p>
          <nav aria-label="Contact John on social media">
            {directSocials.map((social) => (
              <a
                href={social.url}
                key={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
                <Arrow diagonal />
              </a>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
