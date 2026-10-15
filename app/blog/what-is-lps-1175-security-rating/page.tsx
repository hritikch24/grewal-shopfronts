import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'what-is-lps-1175-security-rating',
  title: 'LPS 1175 Explained for Shop Owners',
  description:
    'What an LPS 1175 security rating means on a door or shutter, how to read the rating, how to check a certificate is real, and why fitting matters.',
  crumb: 'LPS 1175',
  published: '2025-04-10',
  modified: '2026-10-15',
  intro: [
    'If your insurer has written "LPS 1175" into your policy, or a supplier is using it to justify a higher price, it helps to know what it actually means.',
  ],
  sections: [
    {
      heading: 'What it is',
      paragraphs: [
        'LPS 1175 is a security standard run by the Loss Prevention Certification Board. It tests whole products, such as doors, shutters, grilles and screens, against trained attackers using set tool kits for a set time. If nobody gets through in that time, the product passes at that level.',
      ],
    },
    {
      heading: 'Reading the rating',
      paragraphs: [
        'Older certificates use security ratings SR1 to SR8, with higher numbers meaning tougher attacks. The current issue of the standard uses a letter for the tool kit and a number for the attack time, for example B3 or C5. Insurers and specifications may quote either style, so ask which they mean.',
        'For most shops, a lower-to-middle rating is enough. Premises holding cash, jewellery, phones, tobacco or medicines are often asked for more.',
      ],
    },
    {
      heading: 'Checking it is genuine',
      paragraphs: [
        'Certified products are listed in the LPCB Red Book, which anyone can search online, and carry a certification label. "Built to LPS 1175" or "equivalent to" is not the same as certified. Ask for the certificate number and look it up.',
      ],
    },
    {
      heading: 'Why fitting matters',
      paragraphs: [
        'A rated door or shutter was tested fixed in a particular way. If it is fixed into weak brickwork or with fewer anchors, it will not perform as tested and an insurer may question it. Ask your installer how the fixings match the certificate.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Which LPS 1175 rating does my shop need?',
      answer:
        'Whatever your insurer or landlord specifies. If they do not specify, ask your broker before paying for a higher rating than you need.',
    },
    {
      question: 'Are rated shutters much more expensive?',
      answer:
        'Yes, rated products cost more because of the testing and heavier construction. See our prices page for typical figures.',
    },
    {
      question: 'Is LPS 1175 the same as PAS 24?',
      answer:
        'No. PAS 24 is a different test, used mostly for doors and windows. Both show resistance to attack, in different ways.',
    },
  ],
  related: [
    { href: '/services/security-doors', label: 'Security doors' },
    { href: '/services/roller-shutters', label: 'Roller shutters' },
    { href: '/glossary', label: 'Trade words explained' },
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
