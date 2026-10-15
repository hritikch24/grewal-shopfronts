import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { garage, kindName, kindsInWords, type DoorKind, type GaragePageCopy } from '@/data/garage-doors';

const SITE = 'https://www.grewalshopfrontandshutters.co.uk';

export const fillKinds = (text: string, kinds: DoorKind[]) => text.replace('{kinds}', kindsInWords(kinds));

/** Layout for the two garage door hub pages (light theme, like the rest of the site). */
export default function GarageDoors({ page, kinds, repair }: { page: GaragePageCopy; kinds: DoorKind[]; repair: boolean }) {
  const url = `${SITE}${page.path}`;
  const summary = fillKinds(page.summary, kinds);
  const sections = page.sections.filter((s) => s.key !== 'automation' || garage.automation);
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}/#webpage`,
        url,
        name: page.heading,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${url}/#service` },
      },
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: page.heading,
        description: summary,
        url,
        provider: { '@id': `${SITE}/#organization` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: page.heading }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">{page.heading}</h1>
          <p className="text-grey-300 text-lg mt-3 max-w-3xl">{summary}</p>
          {!garage.published && (
            <p className="mt-4 text-sm text-gold" role="note">
              Unpublished draft, for the owner to approve.
            </p>
          )}
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#garage-form" className="btn-gold">
              {repair ? 'Get a Repair Price' : 'Arrange a Survey'}
            </a>
            <a href="tel:07597630000" className="btn-outline">
              Call 07597 630000
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-heading font-bold text-navy mb-6">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.audiences.map((a) => (
              <div key={a.who} className="bg-white rounded-xl border border-grey-200 p-6">
                <h3 className="font-heading font-bold text-navy">{a.who}</h3>
                <p className="text-charcoal text-sm mt-2">{a.what}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-navy mt-12 mb-6">Door Types</h2>
          <div className="overflow-x-auto bg-white rounded-xl border border-grey-200">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-grey-200">
                  <th scope="col" className="p-4 font-heading text-navy">Door</th>
                  <th scope="col" className="p-4 font-heading text-navy">{page.kindColumns[0]}</th>
                  <th scope="col" className="p-4 font-heading text-navy">{page.kindColumns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {kinds.map((k) => (
                  <tr key={k} className="border-b border-grey-200 last:border-0 align-top">
                    <th scope="row" className="p-4 font-semibold text-navy">{kindName[k]}</th>
                    <td className="p-4 text-charcoal">{page.kindRows[k][0]}</td>
                    <td className="p-4 text-charcoal">{page.kindRows[k][1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2 space-y-10">
              {sections.map((s) => (
                <div key={s.title} id={s.key}>
                  <h2 className="text-2xl font-heading font-bold text-navy mb-3">{s.title}</h2>
                  {s.body.map((p) => (
                    <p key={p} className="text-charcoal leading-relaxed mb-3">{p}</p>
                  ))}
                  {s.checklist && (
                    <ul className="list-disc pl-5 space-y-1 text-charcoal">
                      {s.checklist.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-grey-200 p-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">Step by Step</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-charcoal">
                  {page.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="bg-white rounded-xl border border-grey-200 p-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">The Price Depends On</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal">
                  {page.pricedOn.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-grey-200 p-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">Not Included</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal">
                  {page.excluded.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-grey-200 p-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">See Also</h2>
                <ul className="space-y-2 text-sm">
                  {page.seeAlso.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-charcoal hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <FAQSection faqs={page.faqs} title="Common Questions" />
        </div>
      </section>

      <section id="garage-form" className="section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">
              {repair ? 'Tell Us About the Fault' : 'Tell Us About the Opening'}
            </h2>
            <p className="text-charcoal text-lg mb-6">
              Pick the garage door service, add the postcode and what you need. Photos help most: WhatsApp them to
              07597 630000.
            </p>
            <a href="https://wa.me/447597630000" target="_blank" rel="noopener noreferrer" className="btn-gold">
              WhatsApp Photos
            </a>
          </div>
          <ContactForm garage presetService={repair ? 'Garage Door Repair' : 'New Garage Door'} />
        </div>
      </section>
    </>
  );
}
