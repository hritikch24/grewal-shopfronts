import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'What We Fit and Repair',
  description:
    'Aluminium and glass shopfronts, roller shutters, security, fire and automatic doors, plus repairs and an emergency line, from our base in Coventry.',
  alternates: { canonical: 'https://www.grewalshopfrontandshutters.co.uk/services' },
  openGraph: {
    title: 'What We Fit and Repair | Grewal Shopfront & Shutters',
    description: 'Shopfronts, shutters and commercial doors made, fitted and repaired by a Coventry firm trading since 2004.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/services',
    siteName: 'Grewal Shopfront & Shutters',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Fit and Repair | Grewal Shopfront & Shutters',
    description: 'Shopfronts, shutters and commercial doors made, fitted and repaired by a Coventry firm trading since 2004.',
  },
};

/** Card photos, kept separate from the page hero images in data/services.ts. */
const CARD_IMAGE: Record<string, string> = {
  'aluminium-shopfronts': 'aluminium-shopfront-1.jpeg',
  'roller-shutters': 'roller-shutter-1.jpeg',
  'security-doors': 'security-grill-1.jpeg',
  'automatic-doors': 'automatic-door-1.jpeg',
  'bi-fold-doors': 'bifolding-door-1.jpeg',
  'fire-doors': 'fire-door.jpeg',
  'shopfront-repairs': 'shopfront-3.jpeg',
  'emergency-callout': 'shopfront-7.jpeg',
  'shutter-repair': 'roller-shutter-1.jpeg',
  'glass-replacement': 'aluminium-shopfront-1.jpeg',
};

const GROUPS: { heading: string; note: string; slugs: string[] }[] = [
  {
    heading: 'New fronts and glazing',
    note: 'Made to measure for your opening and fitted by the team that surveyed it.',
    slugs: ['aluminium-shopfronts', 'glass-shopfronts', 'bi-fold-doors', 'aluminium-doors', 'aluminium-windows', 'curtain-walling'],
  },
  {
    heading: 'Security and safety',
    note: 'Shutters and doors chosen around your insurer, your fire risk assessment and how you trade.',
    slugs: ['roller-shutters', 'security-doors', 'fire-doors', 'automatic-doors'],
  },
  {
    heading: 'Repairs and emergencies',
    note: 'Offered around Coventry and Birmingham and across our repair area, roughly 100 miles from Birmingham.',
    slugs: ['shopfront-repairs', 'shutter-repair', 'glass-replacement', 'emergency-callout'],
  },
];

export default function ServicesPage() {
  const bySlug = new Map(services.map((s) => [s.slug, s]));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'What Grewal Shopfront & Shutters fits and repairs',
            numberOfItems: services.length,
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.name,
              url: `https://www.grewalshopfrontandshutters.co.uk/services/${s.slug}`,
            })),
          }),
        }}
      />

      <section className="relative min-h-[35vh] flex items-end bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'What we do' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">
            What we fit and repair
          </h1>
          <p className="text-grey-300 text-lg mt-3 max-w-2xl">
            Fourteen kinds of work, one team. Pick a service to see how it works, typical prices and the
            questions customers ask most.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section key={group.heading} className="section-padding">
          <div className="container-max">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-2">{group.heading}</h2>
            <p className="text-grey-600 mb-8 max-w-2xl">{group.note}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.slugs.map((slug) => {
                const service = bySlug.get(slug);
                if (!service) return null;
                return (
                  <Link key={slug} href={`/services/${slug}`} className="group card-surface overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={`/assets/${CARD_IMAGE[slug] ?? service.heroImage}`}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-navy text-lg group-hover:text-gold transition-colors mb-2">{service.name}</h3>
                      <p className="text-grey-600 text-sm leading-relaxed">{service.shortDescription}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Not sure which you need?</h2>
          <p className="text-grey-300 text-lg max-w-xl mx-auto mb-8">
            Send a photo of the front and tell us what is wrong or what you want. We will point you the right way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Send your details</Link>
            <a href="tel:07597630000" className="btn-outline">Call 07597 630000</a>
          </div>
        </div>
      </section>
    </>
  );
}
