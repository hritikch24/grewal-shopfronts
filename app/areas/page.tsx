import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { cities, type Reach } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Where We Work',
  description:
    'Based in Exhall, Coventry. Repairs and call-outs around Coventry and Birmingham, installs across our repair area, and planned projects further afield.',
  alternates: { canonical: 'https://www.grewalshopfrontandshutters.co.uk/areas' },
  openGraph: {
    title: 'Where We Work | Grewal Shopfront & Shutters',
    description: 'One base in Coventry. What we offer depends on how far you are from it; each town page says exactly what.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/areas',
  },
};

const BANDS: { reach: Reach; heading: string; note: string }[] = [
  {
    reach: 'local',
    heading: 'On our doorstep',
    note: 'New fronts, shutters and doors, repairs, and the emergency line day and night.',
  },
  {
    reach: 'regional',
    heading: 'Inside our repair area',
    note: 'Roughly within 100 miles of Birmingham. Installations, and repair visits booked in.',
  },
  {
    reach: 'project',
    heading: 'Further afield',
    note: 'Planned installation projects by arrangement. Too far for us to promise repairs or emergencies.',
  },
];

export default function AreasPage() {
  return (
    <>
      <section className="relative min-h-[35vh] flex items-end bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Where we work' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">Where we work</h1>
          <p className="text-grey-300 text-lg mt-3 max-w-2xl">
            We have one base, in Exhall on the north side of Coventry. What we can offer you depends on how far
            away you are, and each town page says so plainly.
          </p>
        </div>
      </section>
      {BANDS.map((band) => (
        <section key={band.reach} className="section-padding">
          <div className="container-max">
            <h2 className="font-heading text-2xl font-bold text-navy mb-2">{band.heading}</h2>
            <p className="text-grey-600 mb-6 max-w-2xl">{band.note}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities
                .filter((c) => c.reach === band.reach)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/${city.slug}`}
                    className="group flex items-center gap-3 p-5 rounded-xl border border-grey-200 hover:border-gold hover:bg-gold/5 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold flex-shrink-0" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                    <span className="font-heading font-bold text-charcoal group-hover:text-gold transition-colors">{city.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Town not listed?</h2>
          <p className="text-grey-300 text-lg max-w-xl mx-auto mb-8">
            Give us the postcode and what you need. We will tell you straight whether we can help.
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
