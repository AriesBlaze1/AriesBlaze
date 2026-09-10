'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation, socials } from '@/data/site';
import { Arrow, BrandMark } from './icons';
import { CommandTrigger } from './command-palette';

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);
  function close() {
    setOpen(false);
    toggle.current?.focus();
  }
  const active = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="header">
      <div className="nav-shell container">
        <Link className="brand" href="/" aria-label="AriesBlaze home">
          <BrandMark />
          <span>
            AriesBlaze<span className="brand-period">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href) ? 'page' : undefined}
            >
              {item.label}
              {item.label === 'Lab' && <span className="lab-dot" />}
            </Link>
          ))}
        </nav>
        <CommandTrigger />
        <Link className="nav-contact" href="/contact">
          Let’s talk <Arrow diagonal />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <span className="hamburger" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
      <dialog
        id="mobile-navigation"
        aria-label="Site navigation"
        ref={dialog}
        className="mobile-menu"
        onCancel={close}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="mobile-menu-top">
          <span className="eyebrow">AriesBlaze / Navigation</span>
          <button onClick={close} autoFocus aria-label="Close navigation">
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {[...navigation, { label: 'Contact', href: '/contact' }].map(
            (item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active(item.href) ? 'page' : undefined}
              >
                <span className="mono">0{index + 1}</span>
                {item.label}
                <Arrow diagonal />
              </Link>
            ),
          )}
        </nav>
        <div className="mobile-menu-bottom">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
          <p>John Oyekunle · Lagos, Nigeria</p>
        </div>
      </dialog>
    </header>
  );
}
