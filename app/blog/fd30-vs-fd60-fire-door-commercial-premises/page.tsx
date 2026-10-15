import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'fd30-vs-fd60-fire-door-commercial-premises',
  title: 'FD30 or FD60: Which Fire Door Does Your Building Need?',
  description:
    'What FD30, FD60 and the S suffix mean, how your fire risk assessment decides which you need, and why fitting matters as much as the door.',
  seoTitle: 'FD30 vs FD60 Fire Doors',
  crumb: 'FD30 or FD60',
  published: '2025-04-01',
  modified: '2026-10-15',
  intro: [
    'Fire risk assessments often end with a list of doors marked "replace with FD30S" or "upgrade to FD60". If you are the person responsible for the building, here is what that means and how to get it right.',
  ],
  sections: [
    {
      heading: 'What the numbers mean',
      paragraphs: [
        'The number is the time, in minutes, that a complete doorset held back fire in a standard test. FD30 is 30 minutes and FD60 is 60. The S suffix means the door also has smoke seals that slow cold smoke getting round the edges, which matters because smoke usually reaches people before flames do.',
      ],
    },
    {
      heading: 'Who decides which you need',
      paragraphs: [
        'Not the door supplier. The rating comes from the building\'s fire strategy or your fire risk assessment, based on what the door protects. As a rough guide:',
      ],
      list: [
        'FD30 or FD30S is typical for doors onto escape corridors, kitchens and many flat entrance doors.',
        'FD60 is used where a longer protection time is needed, such as some stair enclosures, plant rooms and risky storage.',
      ],
      after: ['If your assessment does not say, ask the assessor rather than guessing.'],
    },
    {
      heading: 'Why fitting decides whether it works',
      paragraphs: [
        'A certified door can fail badly if it is hung wrongly. The gaps round the edge must be within the maker\'s limits, intumescent strips must be the right size and in the right place, the frame must be fixed and sealed into the wall with fire-rated material, and every piece of hardware must be approved for that door. Cutting in a new lock with an ordinary router or adding a cat flap can undo the rating.',
      ],
    },
    {
      heading: 'Self-closing and hold-open devices',
      paragraphs: [
        'Most fire doors must close fully by themselves. Doors wedged open are one of the most common faults inspectors find. Where a door needs to stay open in normal use, fit a device that releases it when the fire alarm sounds.',
      ],
    },
    {
      heading: 'Your responsibilities',
      paragraphs: [
        'Under the Fire Safety Order, the responsible person (usually the employer, owner or managing agent) must keep fire doors in working order. In buildings with flats above shops, shared stairs and flat entrance doors need particular attention, and taller residential buildings have specific inspection duties.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is FD60 always better than FD30?',
      answer:
        'It resists fire for longer, but the right door is the one your fire strategy calls for. FD60 doors are heavier and cost more.',
    },
    {
      question: 'Can I repair a fire door instead of replacing it?',
      answer:
        'Sometimes. Adjusting the closer, replacing seals or re-hanging can fix many faults if the door and frame are sound and certified.',
    },
    {
      question: 'How do I know a door is certified?',
      answer:
        'Look for a label or plug on the top or hinge edge, and ask for the certificate. We record both for every door we fit.',
    },
  ],
  related: [
    { href: '/services/fire-doors', label: 'Fire doors' },
    { href: '/services/security-doors', label: 'Security doors' },
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
