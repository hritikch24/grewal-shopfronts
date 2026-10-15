import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Shopfront and Shutter Prices 2026',
  description:
    'Typical 2026 prices for aluminium shopfronts, roller shutters, security, fire and automatic doors, repairs and glass, before VAT, and what pushes a price up.',
  alternates: { canonical: 'https://www.grewalshopfrontandshutters.co.uk/cost-guide' },
  openGraph: {
    title: 'Shopfront and Shutter Prices 2026 | Grewal Shopfront & Shutters',
    description: 'Price ranges we actually quote, service by service, with the things that change them.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/cost-guide',
  },
};

const faqs = [
  { q: 'Why do shopfront quotes vary so much between firms?', a: 'Mostly because they are not quoting for the same thing. Check the glass type, whether the frame has a thermal break, what locks and closer are included, and whether removal of the old front and VAT are in the price.' },
  { q: 'Is VAT included in these prices?', a: 'No. Every figure on this page is before VAT. VAT-registered businesses can usually reclaim it.' },
  { q: 'Do London jobs cost more?', a: 'Usually, yes. Travel, parking, congestion and emission charges, and out-of-hours working all add cost. We price those in openly rather than hiding them.' },
  { q: 'What is not usually included in a shopfront price?', a: 'Planning and advertisement application fees, a new sign, structural steelwork if the lintel needs replacing, and electrical work beyond connecting a shutter or door motor. We list exclusions on the quote.' },
  { q: 'Can I save money by keeping my existing frame?', a: 'Sometimes. If the frame is sound, replacing glass, doors, locks or the closer can cost a fraction of a new front.' },
  { q: 'Do you charge for the survey?', a: 'No. Surveys and written quotes are free, with no obligation.' },
  { q: 'Is a motorised shutter worth the extra cost?', a: 'On wide shutters, or where one person opens up alone, usually yes. It is safer, quicker and stops staff forcing a heavy curtain by hand.' },
  { q: 'How do you take payment?', a: 'We agree terms on the quote. Larger jobs normally involve a deposit when materials are ordered, with the balance on completion.' },
];

const schemaData = {
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shopfront and shutter prices for 2026',
  datePublished: '2026-06-13',
  dateModified: '2026-10-15',
  author: { '@type': 'Organization', name: 'Grewal Shopfront & Shutters', url: 'https://www.grewalshopfrontandshutters.co.uk' },
  publisher: { '@type': 'Organization', name: 'Grewal Shopfront & Shutters', url: 'https://www.grewalshopfrontandshutters.co.uk' },
  mainEntityOfPage: 'https://www.grewalshopfrontandshutters.co.uk/cost-guide',
};

const PRICE_MOVERS = [
  { t: 'Getting in and out', d: 'Narrow streets, no parking, high-level work or a crane lift for large glass all add time.' },
  { t: 'The lintel above', d: 'If the beam over the opening is weak or must be replaced, steelwork and a structural check come first.' },
  { t: 'Council rules', d: 'Conservation areas and listed buildings can require special materials, designs and application fees.' },
  { t: 'Working hours', d: 'Night or weekend fitting to keep you trading costs more than a normal working day.' },
  { t: 'What comes out', d: 'Removing an old front is included as standard; old asbestos panels need a specialist and are priced separately.' },
  { t: 'Glass choice', d: 'Laminated, double-glazed and solar-control glass each cost more than plain toughened glass.' },
];

export default function CostGuidePage() {
  const priced = services.filter((s) => s.pricingGuide);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"Prices","item":"https://www.grewalshopfrontandshutters.co.uk/cost-guide"}]}) }} />
      <SchemaMarkup type="FAQPage" data={schemaData} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <section className="bg-gradient-dark section-padding">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Prices' }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            What things cost in <span className="text-gradient-gold">2026</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-grey-300 leading-relaxed">
            The ranges below are the ones we quote most often, service by service. All are before VAT, for
            supply and fitting. Your own price depends on the building, so we confirm it in writing after a survey.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="rounded-xl border border-gold bg-grey-100 p-6">
            <h2 className="text-xl font-heading font-bold mb-2">Rather have a figure for your job?</h2>
            <p className="text-grey-600 text-sm mb-4">
              Our estimator asks a few questions about the opening and the site, then shows a guide price on screen and emails you a copy.
            </p>
            <Link href="/instant-quote" className="btn-gold">Try the estimator</Link>
          </div>
        </div>
      </section>

      {priced.map((s, i) => (
        <section key={s.slug} className={`section-padding ${i % 2 === 0 ? 'bg-grey-50' : ''}`}>
          <div className="container-max">
            <h2 className="text-3xl font-heading font-bold text-navy mb-3">{s.name}</h2>
            <p className="text-grey-600 max-w-3xl mb-6">{s.pricingGuide!.content}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {s.pricingGuide!.ranges.map((r) => (
                <div key={r.item} className="card-surface rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-navy text-base">{r.item}</h3>
                  <p className="text-2xl font-bold text-gradient-gold mt-2">{r.price}</p>
                </div>
              ))}
            </div>
            <Link href={`/services/${s.slug}`} className="inline-block mt-4 text-gold text-sm font-semibold">
              How {s.name.toLowerCase()} jobs work
            </Link>
          </div>
        </section>
      ))}

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-heading font-bold text-navy mb-6">Things that push a price up</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {PRICE_MOVERS.map((item) => (
              <div key={item.t} className="card-surface rounded-xl p-5">
                <h3 className="font-heading font-semibold text-navy">{item.t}</h3>
                <p className="text-grey-500 text-sm mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-navy mb-8">Questions about prices</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="card-surface rounded-xl group">
                <summary className="cursor-pointer p-5 font-heading font-semibold text-charcoal flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-gold text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5 text-grey-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Turn a range into a price</h2>
          <p className="text-grey-300 mb-8 max-w-xl mx-auto">
            A free survey gives you a written figure for your building, with nothing to sign.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Book a survey</Link>
            <a href="tel:+447597630000" className="btn-outline">Call 07597 630000</a>
          </div>
        </div>
      </section>
    </>
  );
}
