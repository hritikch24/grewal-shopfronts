import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'A Coventry shopfront and shutter firm trading since 2004. Free surveys, written prices and honest advice on whether to repair or replace.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/why-choose-us',
  },
  openGraph: {
    title: 'How We Work | Grewal Shopfront & Shutters',
    description: 'Trading since 2004 from Exhall, Coventry. What you can expect from us, and what we will not promise.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/why-choose-us',
  },
};

const PROMISES = [
  {
    title: 'A real survey before a real price',
    desc: 'We measure your opening and check the wall, floor and lintel before we quote. Ballpark figures by phone are fine, but nothing is ordered from a guess.',
  },
  {
    title: 'The price in writing',
    desc: 'You get a written quote listing what is included. If something changes on site, we tell you before doing the extra work, not on the invoice.',
  },
  {
    title: 'Repair if repair makes sense',
    desc: 'Many fronts and shutters only need a part or an adjustment. If a repair is the better money, we will say so even though a new front earns us more.',
  },
  {
    title: 'Honest about distance',
    desc: 'We are based in Exhall, Coventry. Repairs and emergencies are for the area we can reach in fair time. Further away, we will tell you to call someone local.',
  },
  {
    title: 'Planning checked up front',
    desc: 'We look at your council\'s rules for shutters, signs and listed buildings before you order, so you are not left with a front you cannot keep.',
  },
  {
    title: 'Paperwork you can use',
    desc: 'Fire door records, test results for automatic doors, and damage reports for insurers come as standard on the jobs that need them.',
  },
];

const STANDARDS = [
  'Safety glass in doors and low panels (toughened or laminated)',
  'Powered pedestrian doors: BS EN 16005 settings and records',
  'Fire doorsets fitted to the maker\'s tested details',
  'Security-rated doors and shutters (LPS 1175, PAS 24) when asked for',
  'Building Regulations for energy, access and fire, where they apply',
  'Equality Act duties: thresholds, widths and opening forces',
];

export default function WhyChooseUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"How we work","item":"https://www.grewalshopfrontandshutters.co.uk/why-choose-us"}]}) }} />
      <SchemaMarkup type="LocalBusiness" />

      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How we work' }]} />
          <h1 className="font-heading text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginTop: '1.5rem' }}>
            How we <span className="text-gradient-gold">work</span>
          </h1>
          <p className="text-grey-300" style={{ maxWidth: '42rem', marginTop: '1rem', fontSize: '1.125rem' }}>
            We have been fitting and fixing shopfronts, shutters and commercial doors since 2004, from a yard in
            Exhall on the edge of Coventry. This page sets out what you can expect, and what we will not promise.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-navy" style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>What you can expect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {PROMISES.map((d) => (
              <div key={d.title} className="card-surface" style={{ padding: '1.5rem' }}>
                <h3 className="font-heading text-charcoal" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{d.title}</h3>
                <p className="text-grey-600" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-max" style={{ maxWidth: '48rem' }}>
          <h2 className="font-heading text-navy" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>What we will not promise</h2>
          <p className="text-grey-600" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            We will not promise a price without seeing the job, a fitting date before the materials are confirmed,
            or a call-out time to somewhere we cannot reach quickly. We will not tell you a shutter or sign will be
            approved by your council when we know it is unlikely. Saying no early saves you money later.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: '48rem' }}>
          <h2 className="font-heading text-navy" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Rules and standards we work to</h2>
          <p className="text-grey-600" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Which ones apply depends on the job. We tell you on the quote.</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {STANDARDS.map((s) => (
              <li key={s} className="text-charcoal" style={{ padding: '0.5rem 0', fontSize: '0.95rem' }}>&#10003; {s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark" style={{ textAlign: 'center' }}>
        <div className="container-max" style={{ maxWidth: '36rem' }}>
          <h2 className="font-heading text-white" style={{ fontSize: '2rem', marginBottom: '1rem' }}>See if we are a fit</h2>
          <p className="text-grey-300" style={{ marginBottom: '1.5rem' }}>
            Ring <a href="tel:07597630000" className="text-gold" style={{ textDecoration: 'underline' }}>07597 630000</a> or send a photo and a line about the job.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Send your details</Link>
            <Link href="/reviews" className="btn-outline">Check our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
