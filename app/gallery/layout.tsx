import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Grewal Shopfront & Shutters',
  description:
    'Browse our portfolio of completed shopfront, roller shutter, and security door installations across the UK. See real projects from our 20+ years of experience.',
  alternates: { canonical: 'https://www.grewalshopfrontandshutters.co.uk/gallery' },
  openGraph: {
    title: 'Project Gallery | Grewal Shopfront & Shutters',
    description: 'Browse our portfolio of completed shopfront, roller shutter, and security door installations across the UK.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/gallery',
    siteName: 'Grewal Shopfront & Shutters',
    images: [{ url: 'https://www.grewalshopfrontandshutters.co.uk/assets/portfolio-1.webp', width: 1200, height: 800, alt: 'Grewal Shopfront & Shutters project gallery' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery | Grewal Shopfront & Shutters',
    description: 'Browse our portfolio of completed shopfront, roller shutter, and security door installations across the UK.',
    images: ['https://www.grewalshopfrontandshutters.co.uk/assets/portfolio-1.webp'],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
