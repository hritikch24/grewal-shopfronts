import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'shopfront-installation-cost-uk-2026',
  title: 'What a New Shopfront Costs in 2026',
  seoTitle: 'Shopfront Installation Cost 2026',
  description:
    'Typical 2026 prices for a new aluminium shopfront, shutter and entrance door, the extras that catch people out, and how to compare quotes fairly.',
  crumb: 'Costs in 2026',
  published: '2026-06-13',
  modified: '2026-10-15',
  intro: [
    'The honest answer to "how much is a new shopfront?" is "it depends on the opening". But you can get a long way with a few typical figures and a list of what makes them go up. All prices here are before VAT, for supply and fitting.',
  ],
  sections: [
    {
      heading: 'Typical figures',
      list: [
        'One aluminium shop unit: £2,500 to £5,000.',
        'Two units side by side: £4,500 to £8,500.',
        'A parade of three or more: £12,000 to £25,000.',
        'Frames with a thermal break: add £800 to £1,500.',
        'A hand-operated shutter up to 3 m: £800 to £1,500; motorised: £1,500 to £3,000.',
        'A single aluminium entrance door: £1,200 to £2,800.',
      ],
      after: ['Our prices page lists every service in the same way, and the figures there are the ones we quote from.'],
    },
    {
      heading: 'What pushes the price up',
      list: [
        'Laminated or double-glazed glass instead of plain toughened.',
        'A weak or missing lintel that needs steelwork.',
        'Difficult access, high-level work or a crane for large panes.',
        'Night or weekend fitting so you can keep trading.',
        'Special colours, curved glass or a recessed entrance.',
        'Planning requirements on listed buildings or in conservation areas.',
      ],
    },
    {
      heading: 'What is often left out of cheap quotes',
      paragraphs: [
        'Check whether the price includes removing and disposing of the old front, the door closer, locks, the stallriser panel, sealing and making good, and VAT. A quote that leaves these out will look cheaper than one that does not.',
      ],
    },
    {
      heading: 'Saving money sensibly',
      paragraphs: [
        'If your frame is sound, replacing glass, a door or the locks may be all you need. If you are fitting a new front and a shutter, do them together: building the shutter box into the new fascia is neater and cheaper than adding it later.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is VAT included in these prices?',
      answer: 'No. All figures are before VAT.',
    },
    {
      question: 'Why do London shopfronts cost more?',
      answer:
        'Travel, parking, congestion and emission charges, and out-of-hours working all add cost.',
    },
    {
      question: 'Can I get a price without a survey?',
      answer:
        'You can get a ballpark from photos and a rough width. A written price needs the opening measured.',
    },
  ],
  related: [
    { href: '/cost-guide', label: 'Prices for every service' },
    { href: '/instant-quote', label: 'Price estimator' },
    { href: '/services/aluminium-shopfronts', label: 'Aluminium shopfronts' },
  ],
};

export const metadata: Metadata = {
  title: post.seoTitle ?? post.title,
  description: post.description,
  alternates: { canonical: `https://www.grewalshopfrontandshutters.co.uk/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url: `https://www.grewalshopfrontandshutters.co.uk/blog/${post.slug}`, type: 'article' },
};

export default function Page() {
  return <Article {...post} />;
}
