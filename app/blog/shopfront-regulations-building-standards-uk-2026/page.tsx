import type { Metadata } from 'next';
import Article, { type ArticleProps } from '@/components/Article';

const post: ArticleProps = {
  slug: 'shopfront-regulations-building-standards-uk-2026',
  title: 'Shopfront Rules in 2026: Glass, Access, Fire and Energy',
  seoTitle: 'Shopfront Regulations in 2026',
  description:
    'The building rules that shape a new shopfront in England: safety glass, step-free access, escape routes, energy use and automatic door safety, explained simply.',
  crumb: 'Rules in 2026',
  published: '2026-06-13',
  modified: '2026-10-15',
  intro: [
    'Planning decides how a shopfront looks. A separate set of rules decides whether it is safe and usable. Your installer should design to these from the start; here is what they cover so you can ask the right questions.',
  ],
  sections: [
    {
      heading: 'Safety glass',
      paragraphs: [
        'Glass in doors, in panels beside doors and in low areas near the floor must be safety glass that breaks safely or holds together. This comes from Building Regulations guidance on protection from impact (Approved Document K). Large clear panes also need markings at eye level so people do not walk into them.',
      ],
    },
    {
      heading: 'Getting in: access for everyone',
      paragraphs: [
        'New entrances should be usable by disabled people, people with buggies and older customers. That means a level or gently ramped threshold, a wide enough clear opening, and a door that is not too heavy to open. Separately, the Equality Act requires businesses to make reasonable adjustments, which often means an automatic or low-energy door.',
      ],
    },
    {
      heading: 'Getting out: escape routes',
      paragraphs: [
        'Doors on escape routes must open easily from inside without a key, which is where panic bars and push pads come in. Security measures must not trap people inside. Fire doors inside the building must match the fire strategy and close by themselves.',
      ],
    },
    {
      heading: 'Energy use',
      paragraphs: [
        'Energy rules can apply to new and replacement windows and doors in commercial buildings, although shop display glazing is treated differently from ordinary windows. Frames with a thermal break and double glazing are the usual way to meet the rules where they apply, and they make the shop more comfortable anyway.',
      ],
    },
    {
      heading: 'Automatic doors',
      paragraphs: [
        'Powered pedestrian doors should be set up and tested to the European safety standard for them, with sensors that stop the door hitting or trapping people. Ask for the test record at handover and keep the door serviced.',
      ],
    },
    {
      heading: 'Who checks?',
      paragraphs: [
        'Building control (the council or an approved inspector) oversees work that falls under Building Regulations. Fire safety in an occupied building is the responsibility of the person in charge of the premises, checked by the fire and rescue service.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Does every new shopfront need building control approval?',
      answer:
        'Not always. It depends on the work. We tell you at survey whether an application is likely to be needed.',
    },
    {
      question: 'Do shop doors have to be a minimum width?',
      answer:
        'New entrances should provide a clear width suitable for wheelchair users. We check this when we measure.',
    },
    {
      question: 'Can a security shutter block a fire exit?',
      answer:
        'It must not prevent escape when the building is occupied. Shutters over escape doors need careful planning.',
    },
  ],
  related: [
    { href: '/blog/aluminium-shopfront-planning-permission-uk', label: 'Planning permission for shopfronts' },
    { href: '/services/automatic-doors', label: 'Automatic doors' },
    { href: '/services/fire-doors', label: 'Fire doors' },
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
