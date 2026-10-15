import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'shopfront-design-trends-uk-2026',
  title: 'Shopfront Design in 2026: What Owners Are Choosing',
  seoTitle: 'Shopfront Design Ideas for 2026',
  description:
    'Dark frames, bigger glass, hidden shutters and fronts that fold open: the shopfront choices we are asked for most in 2026, and when each fits.',
  crumb: 'Design in 2026',
  published: '2026-06-13',
  modified: '2026-10-15',
  intro: [
    'Fashions in shopfronts move slowly, because a front lasts decades. But some choices have clearly become the default for new fronts, and a few older habits are fading. Here is what we see most often at survey, and the practical side of each.',
  ],
  sections: [
    {
      heading: 'Dark frames',
      paragraphs: [
        'Anthracite grey and black frames are now the most requested finishes, with bronze close behind for food and hospitality. Dark frames make the glass look bigger and the display brighter. They also hide dirt well. In conservation areas, check the council\'s guidance: some streets suit painted traditional colours better.',
      ],
    },
    {
      heading: 'Bigger glass, fewer bars',
      paragraphs: [
        'Owners want as few dividing bars as possible. Modern frames and glass make that achievable, but bigger panes cost more to replace if broken. Laminated glass on the street side is worth considering for any large pane.',
      ],
    },
    {
      heading: 'Shutters you cannot see',
      paragraphs: [
        'The shutter box is increasingly hidden behind the fascia, or replaced by an internal grille. It looks better during the day and is more likely to be approved by planners.',
      ],
    },
    {
      heading: 'Fronts that open up',
      paragraphs: [
        'Cafés, dessert shops and bars continue to ask for bi-fold or sliding fronts that open fully in summer. They work best on streets with real foot traffic and a pavement wide enough for people to linger.',
      ],
    },
    {
      heading: 'Lower thresholds',
      paragraphs: [
        'Level or near-level entrances are now expected, both for wheelchair and buggy users and because they simply feel more welcoming. They need careful drainage detail outside.',
      ],
    },
    {
      heading: 'Signs that light themselves',
      paragraphs: [
        'Built-up letters with soft LED backlighting have largely replaced boxy lit panels. Remember that illuminated signs usually need advertisement consent.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What colour shopfront frame is most popular?',
      answer:
        'Anthracite grey and black are the most requested, followed by bronze. Any RAL colour is possible.',
    },
    {
      question: 'Are frameless glass shopfronts still popular?',
      answer:
        'Yes for boutiques, salons and showrooms. For shops that heat all year or need strong night security, a slim framed front is often the better choice.',
    },
    {
      question: 'Will a modern design get planning approval?',
      answer:
        'On ordinary parades, usually. On listed buildings and in conservation areas, a more traditional design is often expected.',
    },
  ],
  related: [
    { href: '/services/aluminium-shopfronts', label: 'Aluminium shopfronts' },
    { href: '/services/glass-shopfronts', label: 'Frameless glass shopfronts' },
    { href: '/services/bi-fold-doors', label: 'Bi-fold fronts' },
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
