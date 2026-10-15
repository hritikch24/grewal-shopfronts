import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'emergency-shopfront-boarding-what-to-do',
  title: 'Shop Broken Into? What to Do in the First Few Hours',
  description:
    'A calm checklist for the morning after a break-in or smashed window: safety, police, photos, boarding up, insurers and getting back to trading.',
  seoTitle: 'After a Shop Break-In: What to Do',
  crumb: 'After a break-in',
  published: '2025-04-20',
  modified: '2026-10-15',
  intro: [
    'Arriving to find your window smashed or your door forced is a horrible shock. It helps to have a simple order of things to do, so nothing important is missed while you are dealing with the mess.',
  ],
  sections: [
    {
      heading: '1. Safety first',
      paragraphs: [
        'If you think anyone could still be inside, do not go in. Call 999. Keep staff and customers away from broken glass, especially low panes and the pavement outside.',
      ],
    },
    {
      heading: '2. Report it',
      paragraphs: [
        'Report the crime to the police, either on 999 if it is happening now or 101 afterwards. Write down the crime reference number: your insurer will ask for it.',
      ],
    },
    {
      heading: '3. Record everything before it is moved',
      list: [
        'Photos and a short video of the damage, inside and out.',
        'What appears to be missing.',
        'Any CCTV footage, saved before it records over.',
      ],
    },
    {
      heading: '4. Make the premises secure',
      paragraphs: [
        'Call an emergency shopfront service to board or temporarily glaze the opening, secure a damaged shutter or change locks if keys may be compromised. A good firm will also clear broken glass and photograph the damage and its own work for your insurer.',
        'Leaving a shop open invites a second break-in and can affect your insurance, so this step should not wait until the next working day.',
      ],
    },
    {
      heading: '5. Call your insurer or broker',
      paragraphs: [
        'Tell them what happened, give the crime number and ask what they need. Most commercial policies cover making the premises safe, but the details vary. Keep every receipt.',
      ],
    },
    {
      heading: '6. Plan the permanent repair',
      paragraphs: [
        'New glass, locks or shutter parts usually have to be made or ordered. Get the permanent repair measured while the emergency work is done, so the boards come down as soon as possible. It is also a sensible moment to upgrade: laminated glass, a better lock or a shutter where there was none.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Who pays for emergency boarding?',
      answer:
        'You pay the contractor, and most commercial policies reimburse it. Check your policy and keep the invoice and photos.',
    },
    {
      question: 'Can I keep trading with boards up?',
      answer:
        'Often, yes. Boards can be painted or carry a notice, and a temporary pane can be fitted in a door so customers can still get in.',
    },
    {
      question: 'How quickly can you board up a shop?',
      answer:
        'Near Coventry and Birmingham, usually within hours. Further away, ring us and we will tell you honestly whether a local firm would be quicker.',
    },
  ],
  related: [
    { href: '/services/emergency-callout', label: 'Emergency call-out' },
    { href: '/services/glass-replacement', label: 'Glass replacement' },
    { href: '/services/security-doors', label: 'Security doors' },
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
