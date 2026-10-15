import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms Grewal Shopfront & Shutters Limited works on: quotes, deposits and payment, fitting, guarantees, cancellation, liability and complaints.',
  alternates: {
    canonical: '/terms',
  },
};

const EMAIL = 'info@grewalshopfrontandshutters.co.uk';

/*
 * Plain-English wording of the company's standard terms. Clause numbers and
 * every commercial figure (validity, deposit, warranty period, interest,
 * time limits) are unchanged from the previous version; only the wording is
 * new. Change a figure here only on the owner's instruction.
 */
const CLAUSES: { heading: string; items: string[] }[] = [
  {
    heading: '1. Words used in these terms',
    items: [
      '"Contract" means our agreement with you to supply Goods and/or Services, made up of these terms and the Quotation you accepted.',
      '"Goods" means the products and materials we supply as part of the Services, such as shopfronts, roller shutters, grilles and their hardware.',
      '"Services" means the fitting, repair, maintenance or other work described in the Quotation.',
      '"Quotation" means our written document setting out the work, specification and price.',
      '"Site" means the premises where the work is done, as named in the Quotation.',
      '"Consumer" means a person buying mainly for purposes outside their trade, business, craft or profession, as the Consumer Rights Act 2015 defines it. Anyone else is a "Business Customer".',
    ],
  },
  {
    heading: '2. The work we do',
    items: [
      '2.1 We supply and fit commercial shopfronts, aluminium framing, roller shutters, grilles, fire doors and similar products for shops and commercial premises in the West Midlands and beyond.',
      '2.2 The Quotation sets out exactly what is included. We will carry out the work with reasonable skill and care, following the building regulations and industry standards that apply.',
      '2.3 We may use subcontractors for any part of the work without telling you first. We stay responsible for the quality of that work.',
      '2.4 We are not structural engineers or planning consultants. We may tell you which consents we think a job is likely to need and supply drawings, but that is general guidance, not professional advice. Getting every consent, approval and planning permission before we start remains your responsibility.',
    ],
  },
  {
    heading: '3. Quotations and prices',
    items: [
      '3.1 A Quotation stays open for 30 days from the date on it unless we say otherwise in writing. After that we may update the price to reflect changes in material or labour costs.',
      '3.2 Quotations rely on the information available when they are prepared. The final price depends on a proper survey of the Site. If the survey shows conditions that are materially different from what was expected, we will send a revised Quotation before going ahead.',
      '3.3 Quoted prices include VAT at the current rate where it applies, and the VAT is shown as a separate line on quotations and invoices.',
      '3.4 If you ask for changes after the Contract is made, extra charges may apply. We will confirm any extra cost in writing before doing the changed work.',
      '3.5 We are not bound by a typing, clerical or similar mistake in a Quotation, price list or other document.',
    ],
  },
  {
    heading: '4. Making the Contract',
    items: [
      '4.1 The Contract is made when you accept our Quotation in writing (email counts) and pay the deposit, or when we confirm your order in writing, whichever happens first.',
      '4.2 Your own purchase order terms do not apply unless we agree to them in writing.',
      '4.3 We may decline an order before a Contract is made. If we turn an order down once your deposit is paid, the whole deposit comes back to you within 14 days.',
    ],
  },
  {
    heading: '5. Paying us',
    items: [
      '5.1 Deposit: 50% of the Contract value (or another amount stated in the Quotation) is due when you accept, before we order or make any Goods.',
      '5.2 Balance: the rest is due at practical completion, meaning the work is substantially finished and fit for use even if small snagging items remain.',
      '5.3 Pay by bank transfer, debit card or any other way we agree in writing. Cash payments over £1,000 are not accepted.',
      '5.4 Paying on time is essential. If a payment is late we may: charge Business Customers interest at 8% a year above the Bank of England base rate under the Late Payment of Commercial Debts (Interest) Act 1998; pause further work until we are paid; and end the Contract if payment is more than 30 days overdue.',
      '5.5 Goods remain the property of Grewal Shopfront & Shutters Limited until we have been paid in full.',
    ],
  },
  {
    heading: '6. Fitting',
    items: [
      '6.1 Access: you must give us safe, clear access to the Site at the agreed times, with stock and furniture moved out of the way. If access is delayed or refused, we may charge our normal day rate for the time lost.',
      '6.2 Dates: we will make reasonable efforts to meet agreed dates, but they are estimates, not guarantees. We are not liable for delays outside our reasonable control (see clause 10).',
      '6.3 The building: you confirm that the existing walls, lintels and frames are sound and able to carry the new installation. We are not liable for damage caused by structural defects that already existed and could not reasonably be seen at survey.',
      '6.4 Hidden services: you are responsible for telling us where concealed or underground gas, water, electricity and telecoms services run. We are not liable for damage to services you did not identify before work started.',
      '6.5 Waste: we take away the waste our work creates when we finish, unless we agree otherwise in writing.',
      '6.6 Sign-off: when we finish, we will ask you to sign a completion certificate. Signing it does not affect your rights over hidden defects or warranty claims.',
    ],
  },
  {
    heading: '7. Guarantees',
    items: [
      '7.1 Workmanship: we guarantee our fitting work against defects in workmanship for 12 months from practical completion. If a workmanship defect appears in that time, we will come back and put it right free of charge, subject to clause 7.3.',
      '7.2 Manufacturers\' guarantees: Goods come with their manufacturer\'s guarantee, which we will pass to you on completion. These sit alongside our workmanship guarantee and follow the manufacturer\'s own terms.',
      '7.3 Our workmanship guarantee does not cover: damage from misuse, neglect or not following our maintenance advice; fire, vandalism or accidental knocks; ordinary wear; work on the Goods by others without our written agreement; or damage caused by structural defects already present at the Site.',
      '7.4 To claim, tell us in writing as soon as you can after finding the defect. We will inspect it and, if it is covered, fix it within a reasonable time.',
    ],
  },
  {
    heading: '8. Limits on liability',
    items: [
      '8.1 Nothing in these terms limits or excludes what we owe for death or personal injury resulting from our negligence, for fraud or fraudulent misrepresentation, or for anything else the law does not allow us to limit.',
      '8.2 Apart from the cases in clause 8.1, the most we will pay a Business Customer, whether the claim is for breach of contract, negligence or another tort, breach of statutory duty or anything else, is the total Contract price you have paid.',
      '8.3 We are not liable to Business Customers for indirect or consequential loss, lost profit, lost business, business interruption or lost anticipated savings.',
      '8.4 If you are a Consumer, these terms take nothing away from what the Consumer Rights Act 2015 and other consumer law give you.',
    ],
  },
  {
    heading: '9. Cancelling',
    items: [
      '9.1 Consumers: if you made the Contract off our premises or at a distance (for example by phone or online), you may cancel within 14 days of the Contract being made, and you do not need to say why. That right comes from the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.',
      '9.2 Made-to-measure Goods: under Regulation 28(1)(b) of those Regulations, that right does not apply to Goods made to your specification or clearly personalised, such as made-to-measure frames or shutters, once manufacture has started.',
      '9.3 If you ask us to start work within the 14 days, you must pay for the Services provided up to the point you cancel.',
      '9.4 Business Customers have no legal right to cancel once the Contract is made. If you want to cancel, tell us in writing; we may keep the deposit and charge for Goods ordered, made or committed to before you cancelled.',
      '9.5 We may cancel before work starts if circumstances outside our control make it impractical to go ahead. If we do, we will refund your deposit in full within 14 days.',
    ],
  },
  {
    heading: '10. Events outside our control',
    items: [
      '10.1 We will not be treated as breaking the Contract, or be liable, where a failure or delay is caused by events beyond our reasonable control, including natural events, fire, flood, storms, civil unrest, government restrictions, pandemics, strikes, utility failures and material shortages.',
      '10.2 We will tell you as soon as reasonably possible about such an event and how long it is likely to last. If the delay goes beyond 60 days, either of us may end the Contract in writing, and we will refund money paid for work not yet done.',
    ],
  },
  {
    heading: '11. Drawings and photos',
    items: [
      '11.1 Our drawings, designs, specifications and quotation documents remain our intellectual property. They may not be copied or shared with others without our written permission.',
      '11.2 We may use photos of finished work in our marketing, including on this website and social media, but we will not include personal details that identify you without your consent.',
    ],
  },
  {
    heading: '12. Complaints',
    items: [
      `12.1 If you are unhappy with our work or service, please tell us as soon as possible by emailing ${EMAIL}.`,
      '12.2 We confirm we have your written complaint within 3 working days, and try to send a full answer in 14 working days.',
      '12.3 Where we cannot sort it out, Consumers may be able to use an Alternative Dispute Resolution (ADR) scheme or go to court.',
    ],
  },
  {
    heading: '13. Law and courts',
    items: [
      '13.1 English and Welsh law governs these terms and any dispute or claim connected with them, including non-contractual ones.',
      '13.2 The courts of England and Wales have exclusive jurisdiction over any such dispute, except that we may seek an urgent interim injunction in any court that has jurisdiction.',
    ],
  },
  {
    heading: '14. General',
    items: [
      '14.1 These terms and the accepted Quotation are the whole agreement between us and replace any earlier discussions, letters or agreements about the same work.',
      '14.2 If a court finds any part of these terms unlawful or unenforceable, the rest still applies.',
      '14.3 If we do not enforce a right straight away, we have not given it up.',
      '14.4 Only you and we can enforce these terms. The Contracts (Rights of Third Parties) Act 1999 gives nobody else rights under them.',
      '14.5 We may change these terms. The version in force when your Contract is made is the one that applies to it.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs onLight items={[{ label: 'Terms & Conditions' }]} />

          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-4 mb-2">Terms &amp; Conditions</h1>
          <p className="text-grey-500 text-sm mb-10">Last updated: October 2026</p>

          <div className="prose-content space-y-10 text-grey-700 leading-relaxed">
            <section>
              <p>
                These terms apply to every quotation, order and contract between Grewal Shopfront &amp; Shutters
                Limited, registered in England and Wales (&ldquo;we&rdquo; or &ldquo;us&rdquo;), and our customers
                (&ldquo;you&rdquo;). Please read them before you go ahead.
              </p>
              <p className="mt-4">
                You accept them when you accept a Quotation, place an order or pay a deposit. They do not affect
                your statutory rights.
              </p>
            </section>

            {CLAUSES.map((c) => (
              <section key={c.heading}>
                <h2 className="text-2xl font-bold text-navy mb-4">{c.heading}</h2>
                <ul className="space-y-3">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">15. Contact</h2>
              <p>
                Grewal Shopfront &amp; Shutters Limited, Exhall, Coventry. Email{' '}
                <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-light transition-colors">
                  {EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
