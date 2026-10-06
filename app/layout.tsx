import type { Metadata, Viewport } from 'next';
import { Geist, Outfit, Inter } from 'next/font/google';
import Script from 'next/script';
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
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
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
    default: 'John Oyekunle | Software Developer in Lagos',
    template: '%s | AriesBlaze',
  },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.brand,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: site.url,
    title: 'John Oyekunle | Software Developer in Lagos | AriesBlaze',
    description: site.description,
    siteName: site.brand,
    locale: 'en_NG',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'John Oyekunle, software and product developer known as AriesBlaze',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Oyekunle | Software Developer in Lagos | AriesBlaze',
    description: site.description,
    images: ['/opengraph-image'],
    creator: '@_ariesblaze',
  },
};
export const viewport: Viewport = { themeColor: '#ffffff' };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable} ${inter.variable}`}>
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
        <Script
          async
          src="https://www.sabilytics.com/script.js"
          data-site="j2h8vmb6q3it"
          data-domain="ariesblaze.pxxl.click"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
