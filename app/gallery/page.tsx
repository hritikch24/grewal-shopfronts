import type { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Browse our portfolio of shopfront installations, roller shutters, security doors, and more across the UK. See real projects completed by Grewal Shopfront & Shutters.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
