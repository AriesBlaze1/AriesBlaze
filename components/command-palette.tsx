'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import { site, socials } from '@/data/site';

type Command = { label: string; hint: string; href?: string; action?: () => void };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('ariesblaze:command', onOpen);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('ariesblaze:command', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) window.setTimeout(() => input.current?.focus(), 0);
  }, [open]);

  const commands = useMemo<Command[]>(
    () => [
      { label: 'View work', hint: 'Portfolio', href: '/work' },
      { label: 'Open gallery', hint: 'Media', href: '/gallery' },
      { label: 'Open Spenddeck', hint: 'Product', href: '/work/spenddeck' },
      { label: 'Open SitePulse', hint: 'Product', href: '/work/sitepulse' },
      { label: 'Go to Lab', hint: 'Experiments', href: '/lab' },
      { label: 'Read writing', hint: 'Notes', href: '/writing' },
      { label: 'About John', hint: 'Profile', href: '/about' },
      { label: 'Contact', hint: 'Start a conversation', href: '/contact' },
      { label: 'Open X', hint: '@ariesblaze', href: socials[0]?.url },
      {
        label: 'Copy email',
        hint: site.email,
        action: () => navigator.clipboard?.writeText(site.email),
      },
      ...projects.map((project) => ({
        label: `View ${project.name}`,
        hint: project.category,
        href: `/work/${project.slug}`,
      })),
    ],
    [],
  );
  const visible = commands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes(query.toLowerCase()),
  );

  if (!open) return null;
  return (
    <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-input-wrap">
          <span aria-hidden="true">⌕</span>
          <input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects and pages…" aria-label="Search commands" />
          <kbd>ESC</kbd>
        </div>
        <div className="command-results" role="listbox">
          {visible.length ? visible.map((command) => command.href ? (
            <Link className="command-item" href={command.href} key={`${command.label}-${command.hint}`} onClick={() => setOpen(false)} target={command.href.startsWith('http') ? '_blank' : undefined} rel={command.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>{command.label}</span><small>{command.hint}</small>
            </Link>
          ) : (
            <button className="command-item" type="button" key={command.label} onClick={() => { command.action?.(); setOpen(false); }}>
              <span>{command.label}</span><small>{command.hint}</small>
            </button>
          )) : <p className="command-empty">No matching commands.</p>}
        </div>
        <p className="command-footer"><span>Navigate with <kbd>Tab</kbd></span><span>Run with <kbd>Enter</kbd></span></p>
      </section>
    </div>
  );
}

export function CommandTrigger() {
  return (
    <button
      type="button"
      className="command-trigger"
      onClick={() => window.dispatchEvent(new Event('ariesblaze:command'))}
      aria-label="Open command palette"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
      <span className="command-label">Search</span>
      <kbd>⌘ K</kbd>
    </button>
  );
}
