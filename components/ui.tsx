import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow } from './icons';
import { navigation, site, socials } from '@/data/site';

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return external ? (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <Arrow diagonal />
    </a>
  ) : (
    <Link className="text-link" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-name">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">
        <span className="tiny-line" />
        {label}
      </p>
      <h1>{title}</h1>
      {children && <div className="intro-copy">{children}</div>}
    </div>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">A good place to start</p>
        <h2 id="contact-title">
          Have a product
          <br />
          worth building<span className="accent">?</span>
        </h2>
        <p>For product work, opportunities, or a good conversation.</p>
      </div>
      <a
        className="contact-circle"
        href={`mailto:${site.email}`}
        aria-label={`Email ${site.name}`}
      >
        <Arrow diagonal />
      </a>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
        <Arrow diagonal />
      </a>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-intro">
          <Link href="/" className="footer-brand">
            AriesBlaze<span className="accent">.</span>
          </Link>
          <p>Software &amp; Product Developer building from Lagos, Nigeria.</p>
          <Link className="footer-contact" href="/contact">
            Start a conversation <Arrow diagonal />
          </Link>
        </div>
        <div className="footer-links">
          <div>
            <span className="mono">EXPLORE</span>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="mono">CONNECT</span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label} <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AriesBlaze</p>
        <p>Made in The Lab.</p>
      </div>
    </footer>
  );
}
