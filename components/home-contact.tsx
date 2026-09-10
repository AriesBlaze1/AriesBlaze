'use client';

import { useState } from 'react';
import { Arrow } from './icons';
import { site, socials } from '@/data/site';

export function HomeContact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    await navigator.clipboard?.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <section className="home-contact" aria-labelledby="home-contact-title">
    <div><p className="module-label">Connection ready</p><h2 id="home-contact-title">Have a product worth building<span className="accent">?</span></h2><p>For product work, opportunities, or a good conversation.</p></div>
    <div className="contact-actions"><a href={`mailto:${site.email}`}>Email <Arrow diagonal /></a><button type="button" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'}</button><a href={socials[0].url} target="_blank" rel="noreferrer">Open X <Arrow diagonal /></a><a href="/contact">Contact page <Arrow /></a></div>
  </section>;
}
