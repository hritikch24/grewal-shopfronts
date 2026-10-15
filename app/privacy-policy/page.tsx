import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Grewal Shopfront & Shutters Limited uses the details you give us, which companies help us run the website, how long we keep data, and your rights.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const EMAIL = 'info@grewalshopfrontandshutters.co.uk';

/**
 * Keep this page true to what the code does. If a provider, tag or form field
 * is added or removed, change the matching line here in the same commit.
 */
const PROVIDERS: { name: string; does: string; gets: string }[] = [
  { name: 'Vercel Inc.', does: 'Hosts the website', gets: 'IP address and request logs' },
  { name: 'Neon Technologies', does: 'Stores enquiries and chat logs in our database', gets: 'What you send through the forms and chat' },
  { name: 'Resend Inc.', does: 'Sends enquiry notifications and replies by email', gets: 'Name, email address and message' },
  { name: 'Groq, Inc.', does: 'Runs the website chat assistant, the service recommender and the price estimator\'s wording, and helps staff draft replies to enquiries', gets: 'What you type into those tools, and enquiry details when a reply is drafted' },
  { name: 'xAI, OpenAI and Anthropic', does: 'Back-up AI services used by staff tools that turn a typed note into a quote or invoice', gets: 'The note typed by staff, which may include a customer name and job details' },
  { name: 'Google LLC', does: 'Advertising measurement (Google Ads tag) and, where enabled, Google Tag Manager and Analytics', gets: 'Pages visited, device and browser details, cookie identifiers and an IP address' },
];

const SECTIONS: { heading: string; paragraphs?: string[]; list?: string[] }[] = [
  {
    heading: '1. Who we are',
    paragraphs: [
      'This website is run by Grewal Shopfront & Shutters Limited, registered in England and Wales and based in Exhall, Coventry. We decide how the personal data described here is used, which makes us the "controller" under UK data protection law.',
      `Questions about this policy or your data: email ${EMAIL}.`,
    ],
  },
  {
    heading: '2. What we collect',
    paragraphs: ['From the contact, quote and estimator forms:'],
    list: [
      'your name, email address and phone number',
      'the site address or town, and the service you are asking about',
      'anything you write in your message, and any photos or measurements you send',
    ],
  },
  {
    heading: '2a. From the chat assistant',
    paragraphs: [
      'The words you type into the chat, and any details you choose to give there. The chat is answered by an AI service (see section 5), not a person, unless you ask us to call you.',
    ],
  },
  {
    heading: '2b. When you browse',
    paragraphs: ['Like most websites, ours records technical details of visits:'],
    list: [
      'IP address, browser, device and operating system',
      'which pages you open, for how long, and which site sent you',
      'identifiers stored in cookies (see section 7)',
    ],
  },
  {
    heading: '3. What we use it for',
    list: [
      'answering your enquiry and arranging a survey',
      'preparing a quote and, if you go ahead, doing the work and invoicing it',
      'seeing which pages and adverts bring customers to us, so we spend sensibly',
      'meeting legal duties such as keeping tax records',
    ],
    paragraphs: ['We do not make decisions about you by automated means that have legal or similarly significant effects.'],
  },
  {
    heading: '4. Our legal reasons',
    list: [
      'Steps before a contract, and the contract itself: to quote for and carry out work you ask for.',
      'Legitimate interests: to reply to enquiries and chat messages, improve the website and measure our advertising, balanced against your rights.',
      'Legal obligation: to keep financial records.',
      'Consent: where we ask for it. You can withdraw consent at any time.',
    ],
  },
  {
    heading: '6. How long we keep it',
    list: [
      'Enquiries that do not lead to work: up to 12 months, then deleted.',
      'Customers: for the length of the job and six years after, the usual period for contract claims.',
      'Chat logs: up to 90 days, unless the chat becomes an enquiry or a job.',
      'Website measurement data: up to 26 months.',
      'Accounting records: six years from the end of the tax year, as HMRC requires.',
    ],
  },
  {
    heading: '7. Cookies',
    paragraphs: [
      'Some cookies keep the site working, such as remembering what you entered in a form. Google\'s advertising tag also loads when you visit and may set cookies that show which advert, if any, brought you here.',
      'You can block or delete cookies in your browser settings. The site still works without measurement cookies. More on managing cookies: www.allaboutcookies.org.',
    ],
  },
  {
    heading: '8. Your rights',
    paragraphs: ['Under UK data protection law you can ask us to:'],
    list: [
      'give you a copy of the data we hold about you',
      'correct anything that is wrong or incomplete',
      'delete your data where we no longer need it',
      'limit how we use it while a question is sorted out',
      'stop using it for our legitimate interests, unless we have strong grounds to continue',
      'send it to you, or another firm, in a common digital format, where the law allows',
    ],
  },
  {
    heading: '9. Asking about your data',
    paragraphs: [
      `Email ${EMAIL} with your request. We may ask you to confirm who you are. We aim to acknowledge requests within five working days and answer within one month; complex requests can take up to two months longer, and we will tell you if so.`,
    ],
  },
  {
    heading: '10. Complaints',
    paragraphs: [
      'Please tell us first and we will try to put it right. You can also complain to the Information Commissioner\'s Office (ICO): www.ico.org.uk, helpline 0303 123 1113, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF.',
    ],
  },
  {
    heading: '11. Changes',
    paragraphs: ['If we change how we use data, we update this page and the date at the top.'],
  },
];

export default function PrivacyPolicyPage() {
  // Section 5 (the provider table) sits between 4 and 6.
  const split = SECTIONS.findIndex((s) => s.heading.startsWith('6.'));
  const before = SECTIONS.slice(0, split);
  const after = SECTIONS.slice(split);
  return (
    <main className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs onLight items={[{ label: 'Privacy Policy' }]} />

          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-2">Privacy Policy</h1>
          <p className="text-grey-500 text-sm mb-10">Last updated: October 2026</p>

          <div className="prose-content space-y-10 text-grey-700 leading-relaxed">
            <section>
              <p>
                This page explains what we do with the details you give us when you use this website, ask for a
                price or hire us, who else handles them on our behalf, and what you can ask us to do with them.
              </p>
            </section>

            {before.map((s) => (
              <PolicySection key={s.heading} {...s} />
            ))}

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Companies that handle data for us</h2>
              <p className="mb-4">
                We use these providers to run the business. They may only use your data to provide their service
                to us. We never sell your data.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-grey-200">
                  <thead>
                    <tr className="bg-grey-100 text-left">
                      <th className="p-3 font-semibold text-navy">Company</th>
                      <th className="p-3 font-semibold text-navy">What it does for us</th>
                      <th className="p-3 font-semibold text-navy">What it receives</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVIDERS.map((p) => (
                      <tr key={p.name} className="border-t border-grey-200 align-top">
                        <td className="p-3 font-medium text-charcoal">{p.name}</td>
                        <td className="p-3">{p.does}</td>
                        <td className="p-3">{p.gets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Several of these companies are based in the United States. Where data leaves the UK, it is
                protected by the safeguards UK law requires, such as approved contract terms.
              </p>
            </section>

            {after.map((s) => (
              <PolicySection key={s.heading} {...s} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function PolicySection({ heading, paragraphs, list }: { heading: string; paragraphs?: string[]; list?: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy mb-4">{heading}</h2>
      {paragraphs?.map((p) => (
        <p key={p} className="mb-4">
          {p}
        </p>
      ))}
      {list && (
        <ul className="list-disc pl-6 space-y-2">
          {list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
