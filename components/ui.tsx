import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow } from './icons';
import { footerNavigation, site } from '@/data/site';

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
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} <span>/</span> {site.brand}</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-socials" aria-label="Social links">
          <a href="https://github.com/ariesblaze" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.12c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.51.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
          </a>
          <a href="https://x.com/_ariesblaze" target="_blank" rel="noreferrer" aria-label="X">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.4L5.58 22H2.44l7.25-8.29L1.8 2h6.4l4.43 6.76L18.9 2Zm-1.1 18h1.73L7.27 3.89H5.41L17.8 20Z"/></svg>
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 21 19H3a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 3 5Z"/><path className="mail-cutout" d="m3 7 9 6 9-6"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
