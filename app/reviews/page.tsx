import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const COMPANY = 'Grewal Shopfront & Shutters';
const SITE = 'https://www.grewalshopfrontandshutters.co.uk';

export const metadata: Metadata = {
  title: 'Reviews and References',
  description: `How to check ${COMPANY} before you hire us: our work on Instagram, references from recent customers, and Google reviews.`,
  alternates: { canonical: `${SITE}/reviews` },
  openGraph: {
    title: `Reviews and References | ${COMPANY}`,
    description: 'Check our work before you hire us: photos, references from recent customers and Google reviews.',
    url: `${SITE}/reviews`,
  },
};

/*
 * No review text is published on this page. Reviews shown here would be ones
 * we chose ourselves, and customer quotes must never be written by us. The
 * page points to places a customer can check independently instead.
 */
const CHECKS: { title: string; body: string; link?: { href: string; label: string } }[] = [
  {
    title: 'See finished jobs',
    body: 'We post photos of fronts, shutters and doors we have fitted on Instagram, usually with the town and what was done.',
    link: { href: 'https://www.instagram.com/grewalshopfrontsuk/', label: 'Open our Instagram' },
  },
  {
    title: 'Read Google reviews',
    body: 'Search for Grewal Shopfront & Shutters on Google Maps to read reviews left directly by customers. We cannot edit or remove those.',
  },
  {
    title: 'Ask for a reference',
    body: 'For larger jobs, we can put you in touch with a recent customer who has agreed to take a call, ideally one with a similar shop or a similar job.',
  },
  {
    title: 'Come and look at one',
    body: 'If one of our fronts is near you, we can tell you where it is so you can see the finish for yourself.',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews and references' }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Check us before you hire us</h1>
          <p className="text-grey-300 mt-3 max-w-2xl text-lg">
            Testimonials on a company&apos;s own website are easy to write and hard to trust. Here is how to check
            our work somewhere we do not control.
          </p>
        </div>
      </section>

      <section className="bg-grey-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {CHECKS.map((c) => (
              <div key={c.title} className="bg-grey-100 rounded-2xl p-6 shadow-sm border border-grey-100 flex flex-col">
                <h2 className="font-semibold text-charcoal text-lg">{c.title}</h2>
                <p className="text-grey-700 mt-3 flex-1 leading-relaxed">{c.body}</p>
                {c.link && (
                  <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-gold font-semibold text-sm">
                    {c.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Worked with us?</h2>
          <p className="text-grey-300 mt-3">
            A Google review helps other shop owners decide. Tell it how it was, good or bad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/contact" className="inline-block bg-gold text-navy font-bold py-3 px-8 rounded-lg hover:bg-gold/90 transition-colors">
              Ask for a price
            </Link>
            <Link href="/services" className="inline-block border border-grey-400 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              What we do
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
