import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Contact Us — Free Shopfront Survey & Quote',
  description:
    'Contact Grewal Shopfront & Shutters for a free site survey and quotation. Call 07597 630000, WhatsApp +44 7597 630000, or email info@grewalshopfrontandshutters.co.uk. West Midlands, UK.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/contact',
  },
  openGraph: {
    title: 'Contact Grewal Shopfront & Shutters — Free Survey & Quote',
    description: 'Get a free site survey and detailed quotation for your shopfront project. Call, WhatsApp, or fill in our form.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/contact',
    siteName: 'Grewal Shopfront & Shutters',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Grewal Shopfront & Shutters — Free Survey & Quote',
    description: 'Get a free site survey and quotation. Call, WhatsApp, or fill in our form.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F9F7F4] text-[#1A1A1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"Contact","item":"https://www.grewalshopfrontandshutters.co.uk/contact"}]}) }} />
      <SchemaMarkup type="LocalBusiness" />

      {/* Page Banner */}
      <section className="relative text-center text-white" style={{ padding: '220px 0 90px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.85)]" />
        <Image
          src="/assets/contact-bg.webp"
          alt="Contact Grewal Shopfront & Shutters"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,54px)] font-heading font-bold text-white mb-4">
            Contact Us
          </h1>
          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[#F0D080] hover:underline">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards + Form */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-[70px]">
            {[
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Call Us',
                content: <a href="tel:07597630000" className="text-[#1A1A1A] hover:text-[#A8832A] transition-colors">07597 630000</a>,
              },
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Email Us',
                content: <a href="mailto:info@grewalshopfrontandshutters.co.uk" className="text-[#1A1A1A] hover:text-[#A8832A] transition-colors break-all">info@grewalshopfrontandshutters.co.uk</a>,
              },
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Visit Us',
                content: <span>31 Trelawney Road, Exhall, Coventry, CV7 9FB</span>,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-4 items-start bg-[#F2EDE4] p-[30px] rounded-[14px] border border-transparent hover:-translate-y-1.5 hover:bg-white hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[rgba(201,168,76,0.12)] rounded-xl text-[#A8832A]">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-[#1A1A1A] font-heading font-bold text-lg mb-1.5">{card.title}</h4>
                  <p className="text-[#4A4A4A] text-[14.5px]">{card.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Main: Dark Panel + Form */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-[50px] items-stretch">
            {/* Dark "Get in Touch" Panel */}
            <div className="bg-[#111111] rounded-[18px] p-[44px_40px] text-charcoal flex flex-col gap-7 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.14),transparent_70%)] pointer-events-none" />

              <div>
                <span className="inline-block bg-[rgba(201,168,76,0.15)] text-[#F0D080] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
                  Get In Touch
                </span>
                <h3 className="text-navy font-heading font-bold text-[25px] mb-2.5">We&apos;re Here to Help</h3>
                <p className="text-white/60 text-[14.5px] leading-[1.7]">
                  Have a question or ready to start your project? Reach out directly or send us a message — our team typically responds within one working day.
                </p>
              </div>

              <ul className="flex flex-col gap-4 relative z-[1]">
                {[
                  { label: '07597 630000', sub: 'Mon-Sat, 8am-6pm', icon: 'phone' },
                  { label: '24/7 Emergency Call-Out', sub: 'Available any time', icon: 'clock' },
                  { label: 'info@grewalshopfrontandshutters.co.uk', sub: 'We reply within 1 working day', icon: 'mail' },
                  { label: 'Our Office', sub: '31 Trelawney Road, Exhall, Coventry, CV7 9FB', icon: 'map' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-[14px] items-start">
                    <div className="flex-shrink-0 w-[42px] h-[42px] flex items-center justify-center bg-[rgba(201,168,76,0.15)] text-[#F0D080] rounded-[10px]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-navy text-[15px] font-bold">{item.label}</strong>
                      <span className="block text-white/50 text-[13px] mt-0.5">{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Google Map */}
              <div className="rounded-[14px] overflow-hidden relative z-[1]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.8!2d-1.9667!3d52.4897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s31+Trelawney+Road%2C+Exhall%2C+Coventry+CV7+9FB!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="210"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our location on Google Maps"
                  className="block"
                />
              </div>

              {/* A four-icon social row sat here, every icon on href="#" and all four
                    drawn with the same placeholder circle. The business has no
                    social accounts, so it linked nowhere and looked unfinished. */}
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-[14px] p-10 shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
              <div className="mb-7">
                <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
                  Send a Message
                </span>
                <h2 className="text-[28px] font-heading font-bold text-[#1A1A1A] mb-[18px]">
                  Request a Callback
                </h2>
                <div className="w-[70px] h-[3px] bg-[#C9A84C] mb-[22px]" />
                <p className="text-[#4A4A4A] text-[15px]">
                  Fill in the form below and a member of our team will get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F2EDE4]" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-[60px]">
            <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
              FAQ
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-[#1A1A1A] mb-[18px]">
              Common Questions
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C9A84C] mx-auto mb-[22px]" />
            <p className="text-[#4A4A4A] max-w-[540px] mx-auto mt-3.5">
              Click a question below to see the answer.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { q: 'How quickly can you provide a quote?', a: 'Most quotes are provided within 24-48 hours of a site survey, and often same-day for straightforward jobs.' },
              { q: 'Do you offer emergency repairs?', a: 'Yes - we operate a 24/7 emergency call-out service for shutters and security doors, ensuring your premises stays secure.' },
              { q: 'Do you cover my area?', a: 'We install and service across the whole of the UK with mobile engineering teams ready to respond anywhere.' },
              { q: 'What information do I need to provide?', a: 'Just your location, a brief description of what you need, and a contact number. Our team will handle the rest, including a no-obligation site survey.' },
              { q: 'Can I get an online quote?', a: 'Yes - use our online quote request form and a specialist will follow up within one working day to discuss your requirements.' },
            ].map((faq) => (
              <details key={faq.q} className="border-b border-[#E5DDD0] group">
                <summary className="flex justify-between items-center py-[22px] font-semibold text-[16px] text-[#1A1A1A] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#C9A84C] flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="pb-[22px] text-[#4A4A4A] text-[14.5px]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
