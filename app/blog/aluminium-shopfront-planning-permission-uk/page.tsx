import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'aluminium-shopfront-planning-permission-uk',
  title: 'Do You Need Planning Permission for a New Shopfront?',
  description:
    'When a new shopfront, shutter or sign needs planning permission, advertisement consent or listed building consent in England, and how to avoid a refusal.',
  seoTitle: 'Planning Permission for Shopfronts',
  crumb: 'Planning permission',
  published: '2025-03-15',
  modified: '2026-10-15',
  intro: [
    'Most shop owners are surprised to learn that changing a shopfront usually needs permission from the council. The work feels like a repair or a refresh, but planning law looks at how the street will look afterwards, not at why you are doing it.',
    'This guide covers the three consents that come up most often in England, what tends to get refused, and how to give an application the best chance. Wales, Scotland and Northern Ireland have their own systems with similar ideas.',
  ],
  sections: [
    {
      heading: 'Planning permission for the front itself',
      paragraphs: [
        'Shops do not have the same permitted development rights for their frontages that houses have for many home improvements. In practice, if the new front will look noticeably different from the old one (a new door position, different materials, a bigger fascia, a recessed entrance filled in), the council will expect a planning application.',
        'Genuine repairs, and replacements that match the old front closely in design and materials, often do not need permission. The difficulty is that "closely" is a judgement. If in doubt, ask the council for a view before ordering anything.',
      ],
    },
    {
      heading: 'Advertisement consent for the sign',
      paragraphs: [
        'Signs are controlled under separate advertisement rules. Some simple, unlit fascia signs below certain sizes have what is called deemed consent and need no application. Illuminated signs, projecting signs and anything large usually need advertisement consent. A new shopfront application and a sign application are often submitted together.',
      ],
    },
    {
      heading: 'Listed buildings and conservation areas',
      paragraphs: [
        'If the building is listed, almost any change that affects its character, inside or out, needs listed building consent as well as planning permission. Carrying out work without it is a criminal offence, not just a planning breach.',
        'Conservation areas are not as strict as listing, but councils apply design guidance more firmly there. Expect them to care about traditional proportions, stallrisers, the depth of the fascia, the colour and material of the frame, and above all shutters.',
      ],
    },
    {
      heading: 'Shutters: the most common refusal',
      paragraphs: [
        'Solid external roller shutters are refused more than any other shopfront feature, because a street of closed solid shutters looks dead at night. Many councils prefer, in rough order:',
      ],
      list: [
        'an internal shutter or grille behind the glass',
        'laminated security glass instead of a shutter',
        'an external open-mesh or perforated shutter with the box hidden behind the fascia',
      ],
      after: ['Check your council\'s shopfront design guide before you choose a shutter. Many publish one.'],
    },
    {
      heading: 'Building Regulations are separate',
      paragraphs: [
        'Planning decides how the front looks. Building Regulations deal with how it performs: safety glass in the right places, access for disabled people, fire escape routes and, in many cases, energy efficiency. Your installer should design to these whether or not planning permission is needed.',
      ],
    },
    {
      heading: 'Giving your application a good chance',
      list: [
        'Look at the street. Fronts that suit their neighbours are approved more easily.',
        'Keep a stallriser and a fascia in proportion with the building above.',
        'Show the shutter, if any, on the drawings; leaving it off and adding it later causes trouble.',
        'Include photos of the existing front and clear drawings of the new one.',
        'Talk to the planning officer early if the building is listed or in a conservation area.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can I replace my shopfront like-for-like without permission?',
      answer:
        'Often, if it genuinely matches the old one in design and materials. Anything that changes the appearance usually needs planning permission.',
    },
    {
      question: 'Does a new shop sign need permission?',
      answer:
        'Many do. Small unlit fascia signs may have deemed consent, but illuminated and projecting signs usually need advertisement consent.',
    },
    {
      question: 'What happens if I fit a shopfront without permission?',
      answer:
        'The council can take enforcement action and require you to change or remove it. On a listed building, unauthorised work is a criminal offence.',
    },
    {
      question: 'Do you prepare planning drawings?',
      answer:
        'We supply drawings of the proposed front that can go with an application, and tell you at survey what is likely to be needed.',
    },
  ],
  related: [
    { href: '/services/aluminium-shopfronts', label: 'Aluminium shopfronts' },
    { href: '/services/roller-shutters', label: 'Roller shutters' },
    { href: '/blog/shopfront-regulations-building-standards-uk-2026', label: 'Shopfront rules in 2026' },
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
