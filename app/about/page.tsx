import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Us — 20+ Years Trade Experience Since 2004',
  description:
    'Learn about Grewal Shopfront & Shutters — a Coventry-based shopfront and shutter specialist with over 20 years of experience since 2004, built on quality craftsmanship, reliability, and competitive pricing. Companies House registered.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/about',
  },
  openGraph: {
    title: 'About Grewal Shopfront & Shutters — Coventry Shopfront & Shutter Specialists',
    description: 'Companies House registered shopfront and shutter company with 20+ years of trade experience since 2004. Quality craftsmanship, nationwide coverage.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/about',
    siteName: 'Grewal Shopfront & Shutters',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Grewal Shopfront & Shutters — 20+ Years Experience',
    description: 'Coventry-based shopfront and shutter specialists with 20+ years of trade experience since 2004.',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F9F7F4] text-[#1A1A1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://www.grewalshopfrontandshutters.co.uk/about"}]}) }} />
      <SchemaMarkup type="LocalBusiness" />

      {/* Page Banner */}
      <section
        className="relative text-center text-white py-0"
        style={{ padding: '220px 0 90px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.85)]" />
        <Image
          src="/assets/service-auto-sliding-doors.webp"
          alt="About Grewal Shopfront & Shutters"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,54px)] font-heading font-bold text-white mb-4">
            About Grewal
          </h1>
          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[#F0D080] hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-[60px] items-center">
          <div>
            <Image
              src="/assets/grewal-logo.png"
              alt="Grewal installation team on-site"
              width={480}
              height={360}
              className="rounded-[14px] w-full max-w-[480px]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
              Our Story
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-[#1A1A1A] mb-[18px]">
              Built On Precision, Trust &amp; Two Decades of Craft
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C9A84C] mb-[22px]" />
            <p className="text-[#4A4A4A] text-[17px] leading-relaxed mb-4">
              Founded with a single van and a commitment to quality, Grewal Shopfront &amp; Shutters has grown into one of the UK&apos;s most trusted names in shopfront design, roller shutters and security doors. Every installation — from a single domestic garage shutter to a full industrial warehouse fit-out — is treated with the same attention to detail.
            </p>
            <p className="text-[#4A4A4A] text-[17px] leading-relaxed">
              Today our in-house team of certified engineers covers the length of the UK, backed by our own manufacturing standards and a workmanship guarantee on every job we complete.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F2EDE4]" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-[60px]">
            <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
              Our Purpose
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-[#1A1A1A] mb-[18px]">
              Mission &amp; Vision
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C9A84C] mx-auto mb-[22px]" />
          </div>
          <div className="grid md:grid-cols-2 gap-[30px]">
            <div className="bg-white rounded-[10px] p-10 border border-[#E5DDD0] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(201,168,76,0.25)] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[rgba(201,168,76,0.12)] rounded-xl mb-[18px]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#A8832A]" aria-hidden="true">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] font-heading font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                To deliver secure, beautifully engineered shopfronts and shutters that give UK businesses confidence, day and night.
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-10 border border-[#E5DDD0] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(201,168,76,0.25)] transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-[rgba(201,168,76,0.12)] rounded-xl mb-[18px]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#A8832A]" aria-hidden="true">
                  <path d="M12 15l-2 5-1.5-.5L10 14m2 1l2 5 1.5-.5L14 14m-2 1V9m-4 3l-3.5-2L4 12l4.5 3M16 12l3.5-2L18 12l-4.5 3M8 6a4 4 0 108 0 4 4 0 00-8 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] font-heading font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
                To be the UK&apos;s most trusted shopfront and shutter specialist, known for craftsmanship, reliability and honest service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111]" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] text-center">
            {[
              { num: '500+', label: 'Projects Completed', icon: 'badge' },
              { num: '20+', label: 'Years Experience', icon: 'trophy' },
              { num: '1000+', label: 'Happy Clients', icon: 'users' },
              { num: '24/7', label: 'Support Available', icon: 'clock' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="w-14 h-14 mx-auto mb-[18px] flex items-center justify-center bg-[rgba(201,168,76,0.15)] rounded-xl">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#C9A84C]" aria-hidden="true">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="font-heading text-[46px] font-extrabold text-[#C9A84C]">{stat.num}</div>
                <div className="text-white/70 text-sm uppercase tracking-wide mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F2EDE4] relative overflow-hidden" style={{ padding: '100px 0' }}>
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        <div className="max-w-[1380px] mx-auto px-6 grid md:grid-cols-2 gap-[60px] items-center relative">
          <div>
            <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
              Why Choose Us
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-[#1A1A1A] mb-[18px]">
              What Sets Grewal Apart
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C9A84C] mb-[22px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
              {[
                { title: 'Certified Engineers', desc: 'Fully trained, insured, in-house team.' },
                { title: 'Transparent Pricing', desc: 'No hidden costs, ever.' },
                { title: 'Fast Turnaround', desc: 'Most jobs completed within days.' },
                { title: 'Written Guarantee', desc: 'Workmanship guaranteed on every job.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[rgba(201,168,76,0.12)] rounded-xl">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#A8832A]" aria-hidden="true">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-heading font-bold text-lg mb-1.5">{item.title}</h4>
                    <p className="text-[#4A4A4A] text-[14.5px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/assets/why-choose-bg.webp"
            alt="Completed installation"
            width={600}
            height={450}
            className="rounded-[14px] border-[8px] border-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] outline outline-2 outline-[#C9A84C] outline-offset-[6px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative text-center text-charcoal" style={{ padding: '110px 0' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.82)] to-[rgba(10,10,10,0.9)]" />
        <Image
          src="/assets/cta-banner-bg.webp"
          alt=""
          fill
          className="object-cover -z-10"
          loading="lazy"
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h2 className="text-[clamp(28px,4vw,44px)] font-heading font-bold text-white mb-[18px]">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-white/75 max-w-[600px] mx-auto mb-9 text-[17px]">
            Speak to our team today for a free, no-obligation consultation.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="tel:07597630000"
              className="inline-flex items-center gap-2 px-8 py-[15px] rounded-md font-semibold text-[15px] border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="inline" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-[15px] rounded-md font-semibold text-[15px] bg-[#C9A84C] text-charcoal hover:bg-[#A8832A] hover:shadow-[0_20px_60px_rgba(201,168,76,0.25)] hover:scale-[1.03] transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
