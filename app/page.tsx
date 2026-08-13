import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "UK's Premier Shopfront & Shutter Specialists | Grewal Shopfront & Shutters",
  description:
    'UK shopfront & shutter specialists. Aluminium shopfronts, security roller shutters, steel security doors, automatic sliding doors & 24/7 emergency callout. Free site surveys.',
  alternates: { canonical: 'https://www.grewalshopfrontandshutters.co.uk' },
  openGraph: {
    title: "UK's Premier Shopfront & Shutter Specialists | Grewal Shopfront & Shutters",
    description: 'Aluminium shopfronts, security roller shutters, steel doors & 24/7 emergency callout. 20+ years experience. Free site surveys across the UK.',
    url: 'https://www.grewalshopfrontandshutters.co.uk',
    siteName: 'Grewal Shopfront & Shutters',
    images: [{ url: 'https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png', width: 1170, height: 1166, alt: 'Grewal Shopfront & Shutters' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UK's Premier Shopfront & Shutter Specialists | Grewal Shopfront & Shutters",
    description: 'Aluminium shopfronts, security roller shutters, steel doors & 24/7 emergency callout. Free site surveys.',
    images: ['https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png'],
  },
};

/* ── Data ─────────────────────────────────────────────────────────────── */

const services = [
  { title: 'Security Roller Shutters', image: '/assets/service-security-shutter.webp', href: '/services/security-roller-shutters', desc: 'Robust protection for retail and commercial units.' },
  { title: 'Aluminium Shopfronts', image: '/assets/service-aluminium-shopfront.webp', href: '/services/aluminium-shopfronts', desc: 'Sleek, modern storefronts built to impress.' },
  { title: 'Steel Security Doors', image: '/assets/service-steel-door.jpeg', href: '/services/steel-security-doors', desc: 'Maximum resistance against forced entry.' },
  { title: 'Industrial Shutters', image: '/assets/service-industrial-shutter.webp', href: '/services/industrial-roller-shutters', desc: 'Heavy-duty doors for warehouses and factories.' },
  { title: 'Automatic Sliding Doors', image: '/assets/service-auto-sliding-doors.webp', href: '/services/automatic-sliding-doors', desc: 'Smooth automated access for busy premises.' },
  { title: 'Toughened Glass Shopfronts', image: '/assets/service-glass-shopfront.webp', href: '/services/toughened-glass-shopfronts', desc: 'Frameless glass that lets your brand shine.' },
];

const featuredProducts = [
  { title: 'Security Roller Shutters', image: '/assets/service-security-shutter.webp', href: '/services/security-roller-shutters', desc: 'Heavy-duty roller shutters for maximum security.' },
  { title: 'Aluminium Shopfronts', image: '/assets/service-aluminium-shopfront.webp', href: '/services/aluminium-shopfronts', desc: 'Modern aluminium storefronts built to last.' },
  { title: 'Electric Roller Shutters', image: '/assets/preview-electric.webp', href: '/services/electric-roller-shutters', desc: 'Convenient motorised operation for daily use.' },
  { title: 'Automatic Sliding Doors', image: '/assets/service-auto-sliding-doors.webp', href: '/services/automatic-sliding-doors', desc: 'Smooth automated access for busy premises.' },
  { title: 'Industrial Roller Shutters', image: '/assets/service-industrial-shutter.webp', href: '/services/industrial-roller-shutters', desc: 'Heavy-duty doors for warehouses and factories.' },
  { title: 'Toughened Glass Shopfronts', image: '/assets/service-glass-shopfront.webp', href: '/services/toughened-glass-shopfronts', desc: 'Frameless glass that lets your brand shine.' },
];

const testimonials = [
  { name: 'James Carter', location: 'Birmingham', text: 'Grewal fitted our new shopfront in two days with zero disruption to trading. Immaculate finish and great communication throughout.' },
  { name: 'Sarah Nichols', location: 'Manchester', text: 'Our security shutter has taken a beating and still works flawlessly two years on. Worth every penny for the peace of mind.' },
  { name: 'Mohammed Iqbal', location: 'Leeds', text: 'From quote to install, everything was transparent and on schedule. Highly recommend Grewal for any commercial security work.' },
];

const areas = [
  'London', 'Birmingham', 'Manchester', 'Leeds', 'Sheffield', 'Liverpool',
  'Glasgow', 'Bristol', 'Nottingham', 'Leicester', 'Coventry', 'Wolverhampton',
  'Devonshire', 'Cornwall', 'Yorkshire', 'North Wales', 'South Wales', 'Mid Wales',
];

const portfolio = [
  { img: 'portfolio-1.webp', cat: 'roller-shutters' },
  { img: 'portfolio-2.webp', cat: 'shopfronts' },
  { img: 'portfolio-3.webp', cat: 'doors' },
  { img: 'portfolio-4.webp', cat: 'roller-shutters' },
  { img: 'portfolio-5.webp', cat: 'shopfronts' },
  { img: 'portfolio-6.webp', cat: 'doors' },
];

const faqs = [
  { q: 'What services do you offer?', a: 'We install and maintain roller shutters, shopfronts, security doors, automatic doors, and more -- covering commercial and industrial properties across the UK.' },
  { q: 'How long does installation take?', a: 'Most standard installations are completed in a single day. Larger or bespoke projects may take 2-3 days. We always aim to minimise disruption to your business.' },
  { q: 'Do you cover my area?', a: 'Yes -- we operate nationwide across the whole of the UK with mobile engineering teams ready to respond anywhere.' },
  { q: 'Are your shutters fire-rated?', a: 'Yes. We supply and install fire-rated shutters that comply with UK Building Regulations and BS EN 1634 standards, suitable for compartmentalisation in commercial premises.' },
  { q: 'Do you offer a warranty on installations?', a: 'All our installations come with a comprehensive warranty. Parts and workmanship are covered, and our aftercare team is available for any follow-up service.' },
];

const blogPosts = [
  { img: 'blog-1.webp', tag: 'Security', date: '2 Jul 2026', title: '5 Signs Your Roller Shutter Needs Repair', excerpt: 'Learn the early warning signs before a small issue becomes a costly breakdown.' },
  { img: 'blog-2.webp', tag: 'Shopfronts', date: '24 Jun 2026', title: 'Choosing The Right Shopfront For Your Brand', excerpt: 'Aluminium, glass or automatic -- which shopfront style suits your business best.' },
  { img: 'blog-1.webp', tag: 'Guides', date: '15 Jun 2026', title: 'Fire-Rated Shutters: What UK Law Requires', excerpt: 'A practical guide to fire compartmentalisation compliance for commercial units.' },
];

const trustBrands = ['CHAS Certified', 'SafeContractor', 'Constructionline', 'FENSA Registered', 'Trustmark', 'As Seen In Trade Weekly'];

/* ── Component ────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="LocalBusiness" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.grewalshopfrontandshutters.co.uk/#webpage',
            name: "Grewal Shopfront & Shutters | UK's Premier Shopfront & Shutter Specialists",
            url: 'https://www.grewalshopfrontandshutters.co.uk',
            isPartOf: { '@id': 'https://www.grewalshopfrontandshutters.co.uk/#website' },
            about: { '@id': 'https://www.grewalshopfrontandshutters.co.uk/#organization' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.hero-description', '.services-section h2'],
            },
            significantLink: [
              'https://www.grewalshopfrontandshutters.co.uk/services',
              'https://www.grewalshopfrontandshutters.co.uk/contact',
              'https://www.grewalshopfrontandshutters.co.uk/areas',
            ],
          }),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/assets/hero-bg.webp" alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        {/* Diagonal gold lines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-24 pb-16">
            {/* Left: Text */}
            <div>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20 mb-6">
                UK&apos;s Trusted Shopfront Specialists
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Aluminium Shopfronts, Roller Shutters &amp; Security Doors Across the UK
              </h1>
              <p className="hero-description text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
                From aluminium shopfronts to industrial security shutters — we design, manufacture and install with precision, backed by two decades of trusted craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="https://wa.me/447597630000" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-7 py-3.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  07597 630000
                </a>
                <a href="mailto:info@grewalshopfrontandshutters.co.uk" className="btn-outline text-base px-7 py-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email Us
                </a>
              </div>
              {/* Hero counters */}
              <div className="flex items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#C9A84C]">500+</span>
                  <span className="text-gray-400 text-sm">Projects</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#C9A84C]">20+</span>
                  <span className="text-gray-400 text-sm">Years</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#C9A84C]">100%</span>
                  <span className="text-gray-400 text-sm">Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right: Video/Image card with LED glow border */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  padding: '3px',
                  background: 'linear-gradient(135deg, #C9A84C, #F0D080, #A8832A, #C9A84C)',
                  backgroundSize: '300% 300%',
                  animation: 'led-border 4s ease infinite',
                }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/hero-shutter-new.webp"
                    alt="Modern aluminium shopfront by Grewal Shopfront & Shutters"
                    width={600}
                    height={700}
                    className="object-cover w-full"
                    priority
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2: TRUST BAR
      ══════════════════════════════════════════════════════════════════ */}
      <div className="bg-white border-y border-[#E5DDD0] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...trustBrands, ...trustBrands].map((brand, i) => (
            <span key={i} className="whitespace-nowrap text-[#888] text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3: ABOUT US
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo image */}
            <div className="flex items-center justify-center">
              <Image
                src="/assets/grewal-logo.png"
                alt="Grewal Shopfront and Shutters"
                width={400}
                height={400}
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Right: Text + icon boxes */}
            <div>
              <span className="pill mb-4">About Grewal</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">
                Two Decades of Craftsmanship in Every Installation
              </h2>
              <div className="section-underline mb-6" />
              <p className="text-[#4A4A4A] text-base leading-relaxed mb-8">
                Grewal Shopfront &amp; Shutters has spent over 20 years helping UK businesses and homeowners secure their premises without compromising on style. From boutique shopfronts to industrial roller shutters, every project is manufactured to precise specification and fitted by our own certified engineers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">Quality</h4>
                    <p className="text-[#888] text-xs mt-0.5">Premium materials, built to last.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">Speed</h4>
                    <p className="text-[#888] text-xs mt-0.5">Fast turnaround, minimal disruption.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">Security</h4>
                    <p className="text-[#888] text-xs mt-0.5">Engineered for real-world protection.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">Guarantee</h4>
                    <p className="text-[#888] text-xs mt-0.5">Workmanship guaranteed in writing.</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn-gold text-sm px-6 py-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4: SERVICES GRID
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2EDE4] py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">What We Offer</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Our Core Services</h2>
            <div className="section-underline mx-auto mb-4" />
            <p className="text-[#4A4A4A] max-w-xl mx-auto">From shopfronts to security shutters, everything is designed, manufactured and installed in-house.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-card group">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                <div className="service-card__overlay" />
                <div className="service-card__content">
                  <h3 className="font-heading font-bold text-white text-xl mb-1">{s.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{s.desc}</p>
                  <span className="text-[#F0D080] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Service
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5: WHY CHOOSE US
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2EDE4] bg-dot-pattern py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Icon boxes */}
            <div>
              <span className="pill mb-4">Why Choose Us</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">
                Trusted UK-Wide, Built On Experience
              </h2>
              <div className="section-underline mb-8" />
              <div className="space-y-2">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7m6-3v2M12 2a8 8 0 0 0-8 8c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0C14.461 20.193 20 14.993 20 10a8 8 0 0 0-8-8z"/><path d="M12 12v.01"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">20+ Years Experience</h4>
                    <p className="text-[#888] text-xs mt-0.5">Two decades serving UK businesses.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20M5 20V10l7-6 7 6v10"/><rect x="9" y="14" width="6" height="6"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">Free Site Survey</h4>
                    <p className="text-[#888] text-xs mt-0.5">Accurate measuring at no cost.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">UK Wide Installation</h4>
                    <p className="text-[#888] text-xs mt-0.5">Fully mobile engineering teams.</p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A1A1A] text-sm">24/7 Emergency Service</h4>
                    <p className="text-[#888] text-xs mt-0.5">Rapid response repairs, any time.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Image with gold outline */}
            <div className="relative flex items-center justify-center">
              <div className="relative rounded-xl overflow-hidden" style={{ outline: '3px solid #C9A84C', outlineOffset: '8px' }}>
                <Image
                  src="/assets/why-us.webp"
                  alt="Completed shopfront installation"
                  width={560}
                  height={420}
                  className="object-cover rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6: STATISTICS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>, value: '500+', label: 'Projects Completed' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7m6-3v2M10 22h4M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"/></svg>, value: '20+', label: 'Years Experience' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, value: '1000+', label: 'Happy Clients' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="font-heading text-4xl sm:text-5xl font-extrabold text-[#C9A84C] mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7: FEATURED PRODUCTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Featured Products</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Popular Products &amp; Installations</h2>
            <div className="section-underline mx-auto" />
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {featuredProducts.map((p) => (
              <div key={p.title} className="flex-shrink-0 w-72 snap-start bg-white rounded-lg border border-[#E5DDD0] overflow-hidden hover:shadow-lg hover:border-[#C9A84C] transition-all duration-300">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="288px" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-bold text-[#1A1A1A] text-base mb-1">{p.title}</h4>
                  <p className="text-[#888] text-sm mb-4">{p.desc}</p>
                  <Link href={p.href} className="btn-gold text-xs px-4 py-2">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8: HOW IT WORKS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2EDE4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Our Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">How It Works</h2>
            <div className="section-underline mx-auto" />
          </div>
          {/* Progress line */}
          <div className="hidden md:block relative h-1 bg-[#E5DDD0] rounded-full max-w-3xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, step: 'STEP 01', title: 'Contact Us', desc: 'Free, no-obligation consultation.' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20M5 20V10l7-6 7 6v10"/><rect x="9" y="14" width="6" height="6"/></svg>, step: 'STEP 02', title: 'Site Survey', desc: 'We measure and plan precisely.' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, step: 'STEP 03', title: 'Manufacturing', desc: 'Built to your exact specifications.' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, step: 'STEP 04', title: 'Installation', desc: 'Professional, tidy, on-schedule fitting.' },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A8832A] flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {step.icon}
                </div>
                <span className="text-[#C9A84C] text-xs font-bold tracking-widest">{step.step}</span>
                <h4 className="font-heading font-bold text-[#1A1A1A] text-lg mt-1 mb-1">{step.title}</h4>
                <p className="text-[#888] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9: PORTFOLIO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="pill">Our Work</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Recent Projects</h2>
            <div className="section-underline mx-auto" />
          </div>
          {/* Filter bar */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {['All', 'Roller Shutters', 'Shopfronts', 'Doors'].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === 'All'
                    ? 'bg-[#C9A84C] text-white border-[#C9A84C]'
                    : 'bg-white text-[#4A4A4A] border-[#E5DDD0] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((item, i) => (
              <div key={i} className="relative group rounded-lg overflow-hidden aspect-[4/3] cursor-pointer">
                <Image
                  src={`/assets/${item.img}`}
                  alt="Installation project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/40 transition-colors duration-300 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-gold text-sm px-6 py-3">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 10: CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/cta-banner-bg.webp" alt="" fill className="object-cover" sizes="100vw" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready To Secure Your Premises?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a free, no-obligation quote from our UK-wide team of specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07597630000" className="btn-outline text-base px-8 py-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now
            </a>
            <Link href="/contact" className="btn-gold text-base px-8 py-4" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 11: TESTIMONIALS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2EDE4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Testimonials</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">What Our Clients Say</h2>
            <div className="section-underline mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-6 border border-[#E5DDD0] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A8832A] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1A1A1A] text-sm">{t.name}</p>
                    <p className="text-[#888] text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 12: COVERAGE AREAS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="areas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Map image with pins */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/assets/contact-bg.webp"
                  alt="UK coverage map"
                  width={560}
                  height={420}
                  className="object-cover w-full rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Pin markers */}
                <span className="absolute top-[20%] left-[40%] text-[#C9A84C] drop-shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </span>
                <span className="absolute top-[45%] left-[60%] text-[#C9A84C] drop-shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </span>
                <span className="absolute top-[65%] left-[35%] text-[#C9A84C] drop-shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </span>
              </div>
            </div>
            {/* Right: City list */}
            <div>
              <span className="pill mb-4">Coverage</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Proudly Serving The Whole UK</h2>
              <div className="section-underline mb-6" />
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((city) => (
                  <li key={city}>
                    <Link href={`/areas/${city.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-[#4A4A4A] text-sm hover:text-[#C9A84C] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 13: FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">FAQ</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Common Questions</h2>
            <div className="section-underline mx-auto mb-4" />
            <p className="text-[#4A4A4A]">Click any question to see how we&apos;d respond — just like chatting with our team.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#F9F7F4] border border-[#E5DDD0] rounded-lg overflow-hidden hover:border-[#C9A84C] transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-heading font-semibold text-[#1A1A1A] text-sm">
                  {faq.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[#4A4A4A] text-sm leading-relaxed border-t border-[#E5DDD0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 14: BLOG POSTS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2EDE4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">From The Blog</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-2">Latest News &amp; Guides</h2>
            <div className="section-underline mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-[#E5DDD0] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image src={`/assets/${post.img}`} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded">{post.tag}</span>
                </div>
                <div className="p-5">
                  <span className="text-[#888] text-xs">{post.date}</span>
                  <h3 className="font-heading font-bold text-[#1A1A1A] text-base mt-1 mb-2">{post.title}</h3>
                  <p className="text-[#4A4A4A] text-sm mb-4">{post.excerpt}</p>
                  <span className="text-[#C9A84C] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTACT FORM / QUOTE SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="quote">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="pill mb-4">Get Started</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-4 mb-4">Get a Free Shopfront Installation Quote</h2>
              <p className="text-[#4A4A4A] text-lg mb-8">No obligations. No hidden costs. Just a straightforward quotation for your project.</p>
              <div className="space-y-4 mb-8">
                {['Free site survey within 48 hours', 'Detailed written quotation', 'Response within 2 business hours', '24/7 emergency line available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-[#4A4A4A] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#F9F7F4] rounded-lg p-5 border border-[#E5DDD0]">
                <p className="text-[#888] text-xs uppercase tracking-wider mb-2 font-semibold">Prefer to talk?</p>
                <a href="tel:07597630000" className="text-[#C9A84C] text-xl font-bold hover:text-[#A8832A] transition-colors">07597 630000</a>
                <p className="text-[#888] text-xs mt-1">Mon-Fri 8am-6pm &bull; Sat 9am-4pm &bull; Emergency 24/7</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
