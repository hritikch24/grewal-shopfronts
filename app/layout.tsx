import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyBar from '@/components/MobileStickyBar';
import StickyDesktopCTA from '@/components/StickyDesktopCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Analytics from '@/components/Analytics';
import CallTracker from '@/components/CallTracker';
import SiteChrome from '@/components/SiteChrome';
import { Suspense } from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = 'https://www.grewalshopfrontandshutters.co.uk';

export const metadata: Metadata = {
  title: {
    template: '%s | Grewal Shopfront & Shutters',
    default: 'Grewal Shopfront & Shutters | UK\'s Premier Shopfront & Shutter Specialists',
  },
  description:
    'Leading UK shopfront and shutter specialists — security roller shutters, aluminium shopfronts, steel security doors, industrial shutters & automatic doors. 20+ years experience, 500+ projects, free site surveys.',
  keywords: [
    'shopfront installation UK',
    'roller shutters',
    'security shutters',
    'aluminium shopfronts',
    'security doors',
    'industrial shutters',
    'automatic doors',
    'toughened glass shopfronts',
    'shopfront repairs',
    'emergency shutter repair',
    'Grewal Shopfront',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Grewal Shopfront & Shutters',
    title: 'Grewal Shopfront & Shutters | UK\'s Premier Shopfront & Shutter Specialists',
    description:
      'Leading UK shopfront and shutter specialists — security roller shutters, aluminium shopfronts, steel security doors, industrial shutters & automatic doors. 20+ years experience, 500+ projects.',
    images: [
      {
        url: `${siteUrl}/assets/shopfront-2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Grewal Shopfront & Shutters — Professional Shopfront Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grewal Shopfront & Shutters | UK\'s Premier Shopfront & Shutter Specialists',
    description:
      'Leading UK shopfront and shutter specialists — security roller shutters, aluminium shopfronts, steel security doors, industrial shutters & automatic doors.',
    images: [`${siteUrl}/assets/shopfront-2.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-GB': siteUrl,
    },
  },
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="Exhall, Coventry, West Midlands, United Kingdom" />
        <meta name="geo.position" content="52.4651;-1.4823" />
        <meta name="ICBM" content="52.4651, -1.4823" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.grewalshopfrontandshutters.co.uk" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://www.grewalshopfrontandshutters.co.uk/#website',
              name: 'Grewal Shopfront & Shutters',
              url: 'https://www.grewalshopfrontandshutters.co.uk',
              publisher: {
                '@id': 'https://www.grewalshopfrontandshutters.co.uk/#organization',
              },
              inLanguage: 'en-GB',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://www.grewalshopfrontandshutters.co.uk/services?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              '@id': 'https://www.grewalshopfrontandshutters.co.uk/#navigation',
              name: 'Main Navigation',
              url: 'https://www.grewalshopfrontandshutters.co.uk',
              hasPart: [
                { '@type': 'SiteNavigationElement', name: 'Services', url: 'https://www.grewalshopfrontandshutters.co.uk/services' },
                { '@type': 'SiteNavigationElement', name: 'Areas We Cover', url: 'https://www.grewalshopfrontandshutters.co.uk/areas' },
                { '@type': 'SiteNavigationElement', name: 'About Us', url: 'https://www.grewalshopfrontandshutters.co.uk/about' },
                { '@type': 'SiteNavigationElement', name: 'Gallery', url: 'https://www.grewalshopfrontandshutters.co.uk/gallery' },
                { '@type': 'SiteNavigationElement', name: 'Blog', url: 'https://www.grewalshopfrontandshutters.co.uk/blog' },
                { '@type': 'SiteNavigationElement', name: 'Cost Guide', url: 'https://www.grewalshopfrontandshutters.co.uk/cost-guide' },
                { '@type': 'SiteNavigationElement', name: 'FAQ', url: 'https://www.grewalshopfrontandshutters.co.uk/faq' },
                { '@type': 'SiteNavigationElement', name: 'Reviews', url: 'https://www.grewalshopfrontandshutters.co.uk/reviews' },
                { '@type': 'SiteNavigationElement', name: 'Contact', url: 'https://www.grewalshopfrontandshutters.co.uk/contact' },
              ],
            }),
          }}
        />
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="min-h-full flex flex-col font-body bg-obsidian text-charcoal">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main className="flex-1">{children}</main>
        <SiteChrome>
          <Footer />
          <ChatWidget />
          <MobileStickyBar />
          <StickyDesktopCTA />
          <FloatingWhatsApp />
        </SiteChrome>
        <Suspense fallback={null}>
          <Analytics />
          <CallTracker />
        </Suspense>
      </body>
    </html>
  );
}
