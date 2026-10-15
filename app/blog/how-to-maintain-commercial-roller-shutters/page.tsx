import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'how-to-maintain-commercial-roller-shutters',
  title: 'Looking After a Roller Shutter: Checks That Prevent Breakdowns',
  seoTitle: 'Roller Shutter Care: Simple Checks',
  description:
    'Weekly, monthly and yearly checks that keep a shop or industrial roller shutter running, the noises that warn of trouble, and what never to try yourself.',
  crumb: 'Shutter care',
  published: '2025-03-10',
  modified: '2026-10-15',
  intro: [
    'Most shutter breakdowns give warning. A new squeak, a slight hesitation at the top, a curtain that leans to one side: these are the signs that, caught early, mean a small repair instead of a shop stuck shut at 8am.',
  ],
  sections: [
    {
      heading: 'Every week',
      list: [
        'Sweep the bottom of the opening so grit and litter do not jam the bottom rail.',
        'Watch the shutter go up and down once. Listen for new noises.',
        'Check nothing is stored where the curtain comes down.',
      ],
    },
    {
      heading: 'Every month',
      list: [
        'Wipe the guide rails and remove anything stuck in them.',
        'Look along the curtain for bent or cracked laths.',
        'Test the safety edge on a motorised shutter: it should stop or reverse on contact.',
        'Check the bottom locks open and close freely.',
      ],
    },
    {
      heading: 'Every year',
      paragraphs: [
        'Have a professional service. An engineer checks the spring tension, motor, limit settings, brake, fixings and safety devices, and lubricates the parts that need it. For shutters that run many times a day, such as loading bays, twice a year is better.',
      ],
    },
    {
      heading: 'Warning signs to act on',
      list: [
        'Grinding or clicking from the motor or barrel.',
        'The curtain dropping faster than usual, or feeling heavier when lifted by hand.',
        'One side lower than the other.',
        'Stopping halfway or reversing for no reason.',
        'A key switch or remote that works only sometimes.',
      ],
    },
    {
      heading: 'What not to do',
      paragraphs: [
        'Never adjust or release the spring yourself: it stores a lot of energy and can cause serious injury. Do not force a shutter that is stuck, because it bends more laths. And do not keep running a motor that is labouring; it is likely to burn out.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What lubricant should I use on shutter guides?',
      answer:
        'Usually none on the guides themselves, as grease collects grit. Keep them clean and leave lubrication of moving parts to the service visit.',
    },
    {
      question: 'How long does a roller shutter last?',
      answer:
        'With servicing, many shutters last 15 years or more. Springs and motors may be replaced during that time.',
    },
    {
      question: 'Do you service shutters you did not fit?',
      answer:
        'Yes, within our repair area. We service and repair all the common makes.',
    },
  ],
  related: [
    { href: '/services/shutter-repair', label: 'Shutter repair' },
    { href: '/services/roller-shutters', label: 'New roller shutters' },
    { href: '/blog/commercial-security-shutters-guide-uk', label: 'Choosing a security shutter' },
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
