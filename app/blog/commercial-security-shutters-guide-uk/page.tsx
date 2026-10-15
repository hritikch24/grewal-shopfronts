import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'commercial-security-shutters-guide-uk',
  title: 'Security Shutters for Shops: A Buyer\'s Guide',
  description:
    'Solid, perforated or internal? Hand or motor? How to choose a shop shutter that your insurer, your council and your staff will all accept.',
  seoTitle: 'Shop Security Shutters Guide',
  crumb: 'Security shutters',
  published: '2026-06-13',
  modified: '2026-10-15',
  intro: [
    'A shutter is often the single biggest security upgrade a shop can make. But the wrong choice can be refused by the council, ignored by your insurer or hated by the staff who open it every morning.',
    'Here is how we help customers decide.',
  ],
  sections: [
    {
      heading: 'Start with three questions',
      list: [
        'What does your insurance policy say? Some name a type or a security rating.',
        'What will your council accept on your street?',
        'Who opens the shop, and how often does the shutter run?',
      ],
      after: ['The answers usually narrow the choice to one or two options before price even comes into it.'],
    },
    {
      heading: 'Curtain types',
      list: [
        'Solid steel: maximum privacy and resistance, but often refused on high streets.',
        'Perforated: tiny holes let light and a view of the display through; more often approved.',
        'Punched lath: larger slots, usually fitted behind the glass.',
        'Insulated: foam-filled laths for loading bays and heated units.',
        'Grilles: open lattice, usually internal, popular in conservation areas.',
      ],
    },
    {
      heading: 'Hand or motor?',
      paragraphs: [
        'Small shop shutters can be lifted by hand with spring help. Above roughly three metres wide, or where one person opens up alone, a motor is safer and stops staff forcing a heavy curtain. Motors can run from a key switch, button or remote fob, and a safety edge stops the shutter if it meets something on the way down.',
      ],
    },
    {
      heading: 'Where the box goes',
      paragraphs: [
        'The rolled-up curtain lives in a box at the top. Hidden behind the fascia it is almost invisible; fixed to the face of the building it is cheaper but more noticeable, and councils often object. Plan the box at the same time as any new front or sign.',
      ],
    },
    {
      heading: 'Ratings and insurers',
      paragraphs: [
        'Security-rated shutters have been tested as a complete set. If your insurer asks for a rating, the certificate only counts if the shutter is fitted as tested, so tell your installer before ordering.',
      ],
    },
    {
      heading: 'Living with it',
      paragraphs: [
        'Keep the guides clean, never force a shutter that sticks, and have it serviced once a year. Most breakdowns we see start as a small noise or a slight stick that was ignored for months.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Which shutter type is most likely to get planning approval?',
      answer:
        'Internal shutters or grilles, then perforated or open-mesh external shutters with a hidden box. Solid external shutters are the most often refused.',
    },
    {
      question: 'Can an existing manual shutter be motorised?',
      answer:
        'Often, yes, if the barrel and curtain are in good condition. A motor is fitted into the barrel and wired to a switch.',
    },
    {
      question: 'Do perforated shutters give enough security?',
      answer:
        'For most shops, yes. They resist forced entry well; the holes are small. High-risk premises may need a rated solid shutter or extra measures.',
    },
  ],
  related: [
    { href: '/services/roller-shutters', label: 'Roller shutters' },
    { href: '/services/shutter-repair', label: 'Shutter repair' },
    { href: '/blog/how-to-maintain-commercial-roller-shutters', label: 'Looking after a shutter' },
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
