import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GarageDoors, { fillKinds } from '@/components/GarageDoors';
import { garage, garageLive, garageRepairPage as page } from '@/data/garage-doors';

// Not public until the owner confirms garage door work (data/garage-doors.ts).
export function generateMetadata(): Metadata {
  if (!garageLive) return {};
  const url = `https://www.grewalshopfrontandshutters.co.uk${page.path}`;
  const description = fillKinds(page.description, garage.repairs);
  return {
    title: page.title,
    description,
    alternates: { canonical: url },
    robots: garage.published ? undefined : { index: false, follow: true },
    openGraph: { title: page.title, description, url, type: 'website' },
  };
}

export default function Page() {
  if (!garageLive) notFound();
  return <GarageDoors page={page} kinds={garage.repairs} repair={true} />;
}
