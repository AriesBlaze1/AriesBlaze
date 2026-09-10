import { PageIntro } from '@/components/ui';
import { Arrow } from '@/components/icons';
import { site, socials } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Contact',
  'Contact John Oyekunle for product development, opportunities, and collaboration.',
  '/contact',
);
export default function ContactPage() {
  return (
    <div className="container contact-page">
      <PageIntro
        label="Contact / Let’s talk"
        title="Have a product worth building?"
      >
        <p>
          Tell me what you’re working on, where you are with it, and what you
          need. Product work, opportunities, and collaborations are all welcome.
        </p>
      </PageIntro>
      <a className="email-row" href={`mailto:${site.email}`}>
        <span className="eyebrow">Email me</span>
        <span>{site.email}</span>
        <Arrow diagonal />
      </a>
      <div className="contact-details">
        <p>
          Based in Lagos, Nigeria.
          <br />
          Open to conversations beyond it.
        </p>
        <div>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
