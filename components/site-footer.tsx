'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './ui';

export function SiteFooter() {
  const pathname = usePathname();
  return pathname === '/' ? null : <Footer />;
}
