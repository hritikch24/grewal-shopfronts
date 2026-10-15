import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Questions We Get Asked',
  description:
    'Straight answers on shopfront prices, planning, shutters, glass, fire doors, emergencies and how far we travel, from a Coventry firm trading since 2004.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/faq',
  },
  openGraph: {
    title: 'Questions We Get Asked | Grewal Shopfront & Shutters',
    description: 'Shopfront prices, planning, shutters, glass, fire doors and emergencies, answered plainly.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/faq',
  },
};

const faqs = [
  {
    question: 'Where are you based, and how far do you travel?',
    answer:
      'Our base is in Exhall, on the north side of Coventry near junction 3 of the M6. Around Coventry and Birmingham we offer everything, including the emergency line. Across our repair area, roughly 100 miles from Birmingham, we fit and book repair visits. Further away, we take on planned installation projects in England by arrangement.',
  },
  {
    question: 'How long have you been trading?',
    answer:
      'We have been fitting commercial shopfronts, shutters and doors since 2004.',
  },
  {
    question: 'Roughly what does a new shopfront cost?',
    answer:
      'A single aluminium shop unit usually falls between £2,500 and £5,000 before VAT. Two units side by side are typically £4,500 to £8,500. Width, door type, glass and colour make the difference. We give you a written price after a free survey, before anything is ordered.',
  },
  {
    question: 'Will my shop have to close while you fit the new front?',
    answer:
      'Usually not, or only for a day. We make the front off site and fit it in one or two days, leaving the shop locked and secure each evening.',
  },
  {
    question: 'Is the survey really free?',
    answer:
      'Yes. We measure the opening, check the structure and talk through the options at no cost and with no obligation. You then get a written price.',
  },
  {
    question: 'Do I need planning permission to change my shopfront?',
    answer:
      'Often, yes. Most councils treat a change to how a shopfront looks as needing planning permission, and new signs usually need advertisement consent. Listed buildings need listed building consent as well. True like-for-like repairs often do not need permission. We check your address during the survey and can supply drawings for the application.',
  },
  {
    question: 'Can I have a roller shutter on the outside of my shop?',
    answer:
      'It depends on the council and the street. Many councils resist solid external shutters on high streets and in conservation areas, and prefer perforated, open-mesh or internal shutters. We check what your council is likely to accept before you order.',
  },
  {
    question: 'Which is better for a shop: aluminium, PVC-U or timber?',
    answer:
      'For most commercial fronts, aluminium. It is strong enough for slim frames and big glass, copes with a heavy door being used all day, and does not rot or need painting. Timber is often required on listed buildings. PVC-U is cheaper but less suited to busy commercial entrances.',
  },
  {
    question: 'What glass should a shopfront have?',
    answer:
      'Glass in doors and near the floor must be safety glass by law. We fit toughened glass as a minimum, and recommend laminated glass on the street side for shops with valuable stock, because it holds together when hit.',
  },
  {
    question: 'Will a new front lower my heating bills?',
    answer:
      'It can. Frames with a thermal break and double-glazed units lose far less heat than old single-glazed fronts, and stop condensation running down the frame.',
  },
  {
    question: 'How much is a roller shutter?',
    answer:
      'A hand-operated shop shutter up to 3 m wide is typically £800 to £1,500 before VAT, and a motorised one £1,500 to £3,000. Fire-rated and industrial shutters cost more. We confirm the exact figure after a survey.',
  },
  {
    question: 'My shutter is stuck. Can you fix one you did not install?',
    answer:
      'Yes. We repair all the common makes, manual and electric. Broken springs, failed motors, bent laths and jammed guides are the usual faults, and most are fixed in one visit.',
  },
  {
    question: 'What should I do if my shutter is stuck open at closing time?',
    answer:
      'Do not force it, as that can bend more laths. If you are near Coventry or Birmingham, ring our emergency line and we will make it secure. Further away, a local engineer will be quicker.',
  },
  {
    question: 'Do you offer a 24-hour emergency service?',
    answer:
      'Yes, around Coventry and Birmingham and within our repair area. The line is answered day and night. We tell you an honest arrival time and the call-out charge before we set off.',
  },
  {
    question: 'My shop window was smashed overnight. What happens first?',
    answer:
      'Make sure nobody is hurt, report it to the police for a crime number, take photos, then call us. We board or temporarily glaze the opening, clear the glass and give you photos and a report for your insurer, then order the new glass.',
  },
  {
    question: 'How quickly can broken shop glass be replaced?',
    answer:
      'Toughened glass has to be made to size, so standard panes usually take a few working days after we measure. We secure the gap the same day so you are not left open.',
  },
  {
    question: 'Will my insurance pay for emergency boarding and new glass?',
    answer:
      'Most commercial policies cover making premises safe and replacing glass, but check your terms. We provide photos, sizes and an itemised invoice, which is what insurers usually ask for.',
  },
  {
    question: 'What security rating should my back door have?',
    answer:
      'Start with your insurance policy or lease, because they often name one. Without a stated rating, a steel door with multi-point locking and hinge bolts suits most shops. High-value stock may justify a tested, rated door.',
  },
  {
    question: 'Can a security door still be a fire exit?',
    answer:
      'Yes. Panic bars or push pads let people out with one push, while the outside stays locked.',
  },
  {
    question: 'My fire risk assessment says our fire doors fail. Can you help?',
    answer:
      'Yes. We inspect each door, repair those worth saving and replace the rest with certified doorsets, then give you a record of every door for your assessor.',
  },
  {
    question: 'Do shops have to have automatic doors?',
    answer:
      'There is no blanket rule, but businesses must make reasonable adjustments for disabled customers. For many entrances, an automatic or low-energy door is the simplest way to do that.',
  },
  {
    question: 'Can you automate the entrance door I already have?',
    answer:
      'Often, yes, if the door and frame are sound. We fit an operator and sensors to the existing door. If it is too worn or heavy, we will say so.',
  },
  {
    question: 'Are bi-fold doors a good idea for a café?',
    answer:
      'For cafés, bars and restaurants they work well: the whole front opens on warm days, and a built-in door works normally the rest of the time. The beam above must carry the panels, which we check at survey.',
  },
  {
    question: 'Is it cheaper to repair my shopfront than replace it?',
    answer:
      'Usually. Dropped doors, failed closers, broken locks and cracked glass are all fixed far more cheaply than a new front. If repairs would be money wasted, we say so and price both.',
  },
  {
    question: 'Can you match the colour of my existing frames?',
    answer:
      'Yes. We powder coat in any RAL colour, and can match from a sample if you do not know the number.',
  },
  {
    question: 'Do you offer servicing for shutters and automatic doors?',
    answer:
      'Yes. A yearly visit, or twice a year for busy doors, keeps springs, motors and safety sensors in order and helps avoid breakdowns at awkward times.',
  },
  {
    question: 'How long from first call to a fitted shopfront?',
    answer:
      'Typically four to six weeks: survey, price, about three to four weeks to make the front, then one or two days to fit. Planning consent, if needed, adds time before we can order.',
  },
  {
    question: 'How do I get a price?',
    answer:
      'Call or WhatsApp 07597 630000, or use the contact form. A photo and rough width get you a ballpark figure; a free survey turns it into a written price.',
  },
];

const schemaData = {
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"FAQ","item":"https://www.grewalshopfrontandshutters.co.uk/faq"}]}) }} />
      <SchemaMarkup type="FAQPage" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-dark section-padding">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Questions we <span className="text-gradient-gold">get asked</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-grey-300 leading-relaxed">
            These are the things shop owners ask us on the phone every week. If yours is not here, ring or message us.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <p className="text-grey-600 max-w-3xl leading-relaxed">
            Prices below are typical ranges before VAT. Your own figure depends on the building, so treat these as a starting point and ask us for a survey.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <FAQSection faqs={faqs} title="Prices, planning, repairs and more" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Something we have not covered?
          </h2>
          <p className="text-grey-300 mb-8 max-w-xl mx-auto">
            Send a photo and a line about the problem. We usually reply the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Send a message
            </Link>
            <a href="tel:+447597630000" className="btn-outline">
              Call 07597 630000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
