import Link from 'next/link';
import { experiments } from '@/data/experiments';
import { PageIntro, TextLink } from '@/components/ui';
import { ProjectMedia } from '@/components/project-media';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Lab',
  'Small tools, interface studies, and independent experiments by AriesBlaze.',
  '/lab',
);
export default function LabPage() {
  return (
    <div className="container lab-page">
      <PageIntro
        label="The lab / A little room to experiment"
        title="Built out of curiosity."
      >
        <p>
          Smaller tools, interface studies, and ideas I want to try. Every
          product begins here; some experiments remain just for the fun of
          building.
        </p>
      </PageIntro>
      <div className="lab-grid">
        {experiments.map((experiment, index) => (
          <article key={experiment.slug} className="experiment">
            <div className="experiment-top">
              <span className="mono">
                EXPERIMENT {String(index + 1).padStart(2, '0')}
              </span>
              <span>{experiment.status || experiment.category}</span>
            </div>
            {experiment.image ? (
              <div className="experiment-media">
                <ProjectMedia src={experiment.image} name={experiment.name} />
              </div>
            ) : (
              <div className={`experiment-type ${experiment.slug}`}>
                <span>
                  {experiment.slug === 'websnap' ? '[ ws ]' : 'cut / board'}
                </span>
                <small>{experiment.category}</small>
              </div>
            )}
            <h2>{experiment.name}</h2>
            <p>{experiment.description}</p>
            {experiment.technologies && (
              <p className="experiment-stack">
                Built with {experiment.technologies.join(', ')}.
              </p>
            )}
            {experiment.url ? (
              <TextLink external href={experiment.url}>
                Open project
              </TextLink>
            ) : (
              <span className="template-note">
                Interface study · No public demo
              </span>
            )}
          </article>
        ))}
      </div>
      <section className="lab-notes">
        <p className="eyebrow">Lab notes</p>
        <h2>The small discoveries deserve a home, too.</h2>
        <p>
          A space for short technical observations, experiments, and lessons. No
          published notes yet.
        </p>
        <Link className="text-link" href="/writing">
          Visit writing →
        </Link>
      </section>
    </div>
  );
}
