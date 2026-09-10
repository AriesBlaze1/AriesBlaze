import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { CommandPalette } from '@/components/command-palette';
import { SiteFooter } from '@/components/site-footer';
import { site } from '@/data/site';
import './globals.css';
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'John Oyekunle — Software & Product Developer | AriesBlaze',
    template: '%s | AriesBlaze',
  },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name, url: site.url }],
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#faf9f6' };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <CommandPalette />
        <SiteFooter />
      </body>
    </html>
  );
}
