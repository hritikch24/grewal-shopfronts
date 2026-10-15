import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'best-shopfront-company-uk-how-to-choose',
  title: 'How to Choose a Shopfront Company: 10 Questions to Ask',
  description:
    'Ten questions that sort reliable shopfront and shutter firms from the rest, plus the warning signs to watch for before you pay a deposit.',
  seoTitle: 'Choosing a Shopfront Company',
  crumb: 'Choosing a company',
  published: '2025-04-25',
  modified: '2026-10-15',
  intro: [
    'A shopfront is a big spend for a small business, and most owners only buy one or two in a lifetime. That makes it hard to tell a careful firm from a careless one until the job is half done.',
    'These are the questions we would ask if we were in your shoes. A good firm will answer all of them without fuss.',
  ],
  sections: [
    {
      heading: 'Ten questions worth asking',
      list: [
        'Will you measure the opening yourselves before giving a final price?',
        'Is the quote in writing, and does it say what is not included?',
        'Who will actually fit it: your own team or subcontractors?',
        'What glass are you fitting, and is it safety glass where it needs to be?',
        'Does the frame have a thermal break, and does that matter for my shop?',
        'Do I need planning permission or advertisement consent, and will you supply drawings?',
        'How long will the shop be out of action on fitting day?',
        'What happens to the old front?',
        'What guarantee do I get, and who stands behind it: you or the manufacturer?',
        'Can I see a front you have fitted, or speak to a recent customer?',
      ],
    },
    {
      heading: 'Warning signs',
      list: [
        'A firm price over the phone for a full front, without seeing it.',
        'Pressure to sign today for a "special price".',
        'A large deposit requested before anything is measured.',
        'No mention of planning when your building is listed or on a protected street.',
        'Vague answers about glass type or who does the fitting.',
        'Reviews that all sound the same, or that appear word for word on other firms\' websites.',
      ],
    },
    {
      heading: 'Comparing quotes fairly',
      paragraphs: [
        'Line quotes up item by item: frame type and colour, glass type, door and lock, closer, shutter if any, removal of the old front, and VAT. A cheaper quote often leaves out laminated glass, a thermal break or the closer, and those are exactly the parts you notice later.',
        'Ask each firm the same questions and write down the answers. It soon becomes clear who has actually thought about your building.',
      ],
    },
    {
      heading: 'Checking reviews',
      paragraphs: [
        'Reviews on a firm\'s own website are chosen by the firm. Reviews on Google Maps or similar sites are harder to fake and easier to compare. Look for detail about the job, the town and how problems were handled, not just five stars.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Should I always pick the cheapest quote?',
      answer:
        'Only if it includes the same things as the others. Check glass, frame, locks and removal before comparing totals.',
    },
    {
      question: 'Is a deposit normal for a shopfront?',
      answer:
        'Yes, a deposit when materials are ordered is common, because fronts are made to measure. Be wary of large deposits before a survey.',
    },
    {
      question: 'How many quotes should I get?',
      answer:
        'Two or three is usually enough to see what a fair price looks like for your building.',
    },
  ],
  related: [
    { href: '/why-choose-us', label: 'How we work' },
    { href: '/reviews', label: 'Check our work' },
    { href: '/cost-guide', label: 'Typical prices' },
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
