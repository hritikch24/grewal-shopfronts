import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Shopfront Glossary',
  description:
    'Plain-English meanings of the words used about shopfronts, shutters, glass and fire doors: stallriser, fascia, laminated glass, FD30, LPS 1175 and more.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/glossary',
  },
  openGraph: {
    title: 'Shopfront Glossary | Grewal Shopfront & Shutters',
    description:
      'Shopfront, shutter and door words explained in plain English.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/glossary',
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedService?: { label: string; href: string };
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Advertisement consent',
    definition:
      'Separate permission from the council to display a sign. Most new shop signs need it, especially illuminated ones, even when the shopfront itself does not need planning permission.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Anodised finish',
    definition:
      'A metallic finish made by thickening the natural oxide layer on aluminium. It looks like brushed metal rather than paint, and is an alternative to powder coating.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Bi-parting doors',
    definition:
      'Automatic sliding doors that open from the middle, one leaf going left and one right. The usual choice for busy shop and supermarket entrances.',
    relatedService: { label: 'Automatic Doors', href: '/services/automatic-doors' },
  },
  {
    term: 'Conservation area',
    definition:
      'An area the council protects for its historic or architectural character. Shopfront, sign and shutter changes there face stricter planning rules, and solid external shutters are often refused.',
  },
  {
    term: 'Curtain (shutter)',
    definition:
      'The part of a roller shutter that rolls up and down, made from interlocking laths. It can be solid, perforated, punched or insulated.',
    relatedService: { label: 'Roller Shutters', href: '/services/roller-shutters' },
  },
  {
    term: 'Fanlight',
    definition:
      'A glazed panel above a door or above the main shopfront glass. It can be fixed or hinged to let air in.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Fascia',
    definition:
      'The flat band above the shop window that carries the shop sign. On many fronts it also hides the shutter box.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'FD30 and FD60',
    definition:
      'Fire door ratings. FD30 means the complete doorset held back fire for 30 minutes in a test; FD60 means 60 minutes. The rating covers the whole set, not just the door leaf.',
    relatedService: { label: 'Fire Doors', href: '/services/fire-doors' },
  },
  {
    term: 'FD30S',
    definition:
      'A fire door that also has smoke seals, which limit cold smoke passing around the edges. The S stands for smoke.',
    relatedService: { label: 'Fire Doors', href: '/services/fire-doors' },
  },
  {
    term: 'Floor spring',
    definition:
      'A closer hidden in a box in the floor under a door, common on glass and aluminium shop doors. It controls how the door swings and closes, and can hold it open.',
    relatedService: { label: 'Shopfront Repairs', href: '/services/shopfront-repairs' },
  },
  {
    term: 'Guide rails',
    definition:
      'The vertical channels either side of a roller shutter that the curtain runs in. Bent or loose guides are a common reason a shutter sticks.',
    relatedService: { label: 'Shutter Repair', href: '/services/shutter-repair' },
  },
  {
    term: 'Headbox',
    definition:
      'The box at the top of a roller shutter that hides the rolled-up curtain and the barrel it winds onto.',
    relatedService: { label: 'Roller Shutters', href: '/services/roller-shutters' },
  },
  {
    term: 'Intumescent strip',
    definition:
      'A strip set into the edge of a fire door or frame that swells up in heat and seals the gap. Fitting the wrong size or leaving gaps in it can stop the door working.',
    relatedService: { label: 'Fire Doors', href: '/services/fire-doors' },
  },
  {
    term: 'Laminated glass',
    definition:
      'Two or more sheets of glass bonded with a plastic layer. When hit, it cracks but stays in one piece, which makes it a strong choice for shop windows facing the street.',
    relatedService: { label: 'Glass Replacement', href: '/services/glass-replacement' },
  },
  {
    term: 'Lath',
    definition:
      'One of the interlocking strips that make up a roller shutter curtain. A damaged lath can often be replaced on its own.',
    relatedService: { label: 'Shutter Repair', href: '/services/shutter-repair' },
  },
  {
    term: 'Listed building consent',
    definition:
      'Permission needed for changes to a listed building that affect its character, inside or out. It is separate from planning permission and often needed for shopfront work.',
  },
  {
    term: 'LPS 1175',
    definition:
      'A security standard that rates doors, shutters and screens by how long they resist attack and with which tools. Higher ratings stand up to longer attacks with heavier tools.',
    relatedService: { label: 'Security Doors', href: '/services/security-doors' },
  },
  {
    term: 'Low-energy operator',
    definition:
      'A gentle automatic opener for a swing door. It moves slowly, so it needs fewer sensors, and suits clinics, offices and accessible toilets.',
    relatedService: { label: 'Automatic Doors', href: '/services/automatic-doors' },
  },
  {
    term: 'Mullion',
    definition:
      'An upright bar in a shopfront frame that divides the glass into panels and carries wind load to the floor and lintel.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Panic bar',
    definition:
      'A bar across a fire exit door that opens it with one push from inside, while the outside stays locked.',
    relatedService: { label: 'Security Doors', href: '/services/security-doors' },
  },
  {
    term: 'PAS 24',
    definition:
      'A British security test for doors and windows, checking they resist being forced, levered or having glass removed. Some landlords and insurers ask for it.',
    relatedService: { label: 'Aluminium Doors', href: '/services/aluminium-doors' },
  },
  {
    term: 'Powder coating',
    definition:
      'A paint finish applied as a dry powder and baked hard in an oven. It is the normal finish for aluminium frames and is available in any RAL colour.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'RAL colour',
    definition:
      'A numbered colour system used across Europe, for example RAL 7016 (anthracite grey) or RAL 9005 (black). Quoting the number avoids colour mix-ups.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Safety edge',
    definition:
      'A pressure-sensitive strip on the bottom of a motorised shutter or door that stops or reverses it if it touches something.',
    relatedService: { label: 'Roller Shutters', href: '/services/roller-shutters' },
  },
  {
    term: 'Stallriser',
    definition:
      'The solid panel below the shop window, between the glass and the pavement. It protects the glass from kicks and trolleys and is often required in traditional designs.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'Thermal break',
    definition:
      'An insulating plastic strip built into an aluminium frame so cold does not travel straight through the metal. It keeps the inside warmer and stops condensation on the frame.',
    relatedService: { label: 'Aluminium Windows', href: '/services/aluminium-windows' },
  },
  {
    term: 'Toughened glass',
    definition:
      'Glass heat-treated to be much stronger than ordinary glass. If it breaks, it falls into small blunt pieces. It cannot be cut after toughening, so it is always made to size.',
    relatedService: { label: 'Glass Replacement', href: '/services/glass-replacement' },
  },
  {
    term: 'Transom',
    definition:
      'A horizontal bar in a shopfront frame, often above the door, separating the main glass from a fanlight.',
    relatedService: { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  },
  {
    term: 'U-value',
    definition:
      'A number showing how much heat passes through a window, door or wall. The lower it is, the better it keeps heat in.',
    relatedService: { label: 'Aluminium Windows', href: '/services/aluminium-windows' },
  },
];

const letters = [...new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))].sort();

export default function GlossaryPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.grewalshopfrontandshutters.co.uk/glossary#termset',
    name: 'Shopfront and shutter words explained',
    description:
      'Plain-English meanings of trade words used about shopfronts, shutters, glass and doors.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/glossary',
    hasDefinedTerm: glossaryTerms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.grewalshopfrontandshutters.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.grewalshopfrontandshutters.co.uk/glossary' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-gradient-dark section-padding">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Glossary' }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Trade words, <span className="text-gradient-gold">explained</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-grey-300 leading-relaxed">
            Quotes and council letters are full of trade words. Here is what they mean, in a sentence or two each.
          </p>
        </div>
      </section>

      {/* Letter Navigation */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <nav aria-label="Glossary letter navigation" className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-grey-100 text-charcoal font-heading font-semibold text-sm hover:bg-gold hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          {letters.map((letter) => {
            const termsForLetter = glossaryTerms.filter(
              (t) => t.term[0].toUpperCase() === letter
            );
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-8">
                <h2 className="text-3xl font-heading font-bold text-white border-b-2 border-gold pb-2 mb-6">
                  {letter}
                </h2>
                <dl className="space-y-8">
                  {termsForLetter.map((item) => (
                    <div key={item.term}>
                      <dt className="text-lg font-heading font-semibold text-charcoal">
                        {item.term}
                      </dt>
                      <dd className="mt-2 text-grey-600 leading-relaxed">
                        {item.definition}
                      </dd>
                      {item.relatedService && (
                        <dd className="mt-2">
                          <Link
                            href={item.relatedService.href}
                            className="text-sm text-gold hover:underline font-medium"
                          >
                            See: {item.relatedService.label}
                          </Link>
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Word on your quote you do not understand?
          </h2>
          <p className="text-grey-300 mb-8 max-w-xl mx-auto">
            Send it to us and we will explain it, even if the quote is from another firm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Ask us
            </Link>
            <a href="tel:+447597630000" className="btn-outline">
              Call 07597 630000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
