import type { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
  title: 'Photos of Our Work',
  description: 'Photos and short videos of shopfronts, shutters and doors fitted by Grewal Shopfront & Shutters, filtered by type of work.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
