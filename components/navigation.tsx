'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigation } from '@/data/site';

function NavigationIcon({ name }: { name: string }) {
  if (name === 'Home') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9.5v10h13v-10M9.5 19.5v-6h5v6"/></svg>;
  if (name === 'Work') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>;
  if (name === 'About') return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c.6-3.2 2.8-4.8 6.5-4.8s5.9 1.6 6.5 4.8"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="1.8"/><circle cx="9" cy="9" r="1.5"/><path d="m5 17 4.6-4.5 3.1 2.7 2.2-2 4.1 3.8"/></svg>;
}

export function Navigation() {
  const pathname = usePathname();
  const [clock, setClock] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    const update = () => setClock(formatter.format(new Date()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="header">
      <div className="nav-shell">
        <span className="nav-location">Africa/Lagos</span>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined}>
              <NavigationIcon name={item.label} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <time className="nav-clock" aria-label="Current time in Lagos">{clock || '00:00:00'}</time>
      </div>
    </header>
  );
}
