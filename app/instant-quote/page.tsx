import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import InstantQuoteForm from '@/components/InstantQuoteForm';

const siteUrl = 'https://www.grewalshopfrontandshutters.co.uk';

export const metadata: Metadata = {
  // The root layout appends " | Grewal Shopfront & Shutters" via its title template.
  title: 'Shopfront Price Estimator',
  description:
    'A guide price for a shopfront, shutter or door in about a minute, based on the jobs we quote most. A free survey and written price follow if you want one.',
  alternates: { canonical: `${siteUrl}/instant-quote` },
  openGraph: {
    title: 'Price Estimator | Grewal Shopfront & Shutters',
    description: 'A guide price on screen in about a minute. No obligation.',
    url: `${siteUrl}/instant-quote`,
    type: 'website',
  },
};

export default function InstantQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
              { '@type': 'ListItem', position: 2, name: 'Price estimator', item: `${siteUrl}/instant-quote` },
            ],
          }),
        }}
      />

      <section className="relative bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Price estimator' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 max-w-3xl">
            Rough price in a minute
          </h1>
          <p className="text-grey-300 text-lg mt-3 max-w-2xl">
            Pick the job, tell us where it is and tick anything awkward about the site. You get a guide figure on screen. It is not a quote; it leans towards the lower end of our usual range so you are not put off by a worst case.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <InstantQuoteForm />
            </div>

            <aside className="space-y-6">
              <div className="card-surface p-6">
                <h2 className="text-lg font-heading font-bold mb-3">How close will it be?</h2>
                <p className="text-grey-500 text-sm mb-3">
                  It works from the typical ranges on our{' '}
                  <Link href="/cost-guide" className="text-gold hover:underline">prices page</Link>, then allows for where you are, how many you need and anything awkward about the site.
                </p>
                <p className="text-grey-500 text-sm">
                  What it cannot see is the building itself: a tired lintel, an odd-sized opening or a floor that is out of level. That is why the written price after a survey can come back <strong>higher or lower</strong>.
                </p>
              </div>

              <div className="card-surface p-6">
                <h2 className="text-lg font-heading font-bold mb-3">After you press the button</h2>
                <ol className="space-y-3">
                  {[
                    'The figure appears on screen and a copy goes to your inbox.',
                    'We may ring to go through it; say in the notes if you would rather we emailed.',
                    'If you want, we book a free survey at a time that suits you.',
                    'You get a written price listing what is and is not included.',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-grey-500 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy font-bold text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-surface p-6">
                <h2 className="text-lg font-heading font-bold mb-2">Rather speak to someone?</h2>
                <p className="text-grey-500 text-sm mb-4">
                  Describe the job on the phone and we will give you a rough figure there and then.
                </p>
                <a href="tel:07597630000" className="btn-gold w-full text-center">
                  Call 07597 630000
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
