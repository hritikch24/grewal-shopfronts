'use client';

import Link from 'next/link';
import Image from 'next/image';

/* ── Data ─────────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Instant Estimate', href: '/instant-quote' },
  { label: 'Get a Quote', href: '/contact' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Repair & Maintenance', href: '/services/shopfront-repairs' },
];

const footerServices = [
  { label: 'Roller Shutters', href: '/services/roller-shutters' },
  { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  { label: 'Glass Shopfronts', href: '/services/glass-shopfronts' },
  { label: 'Security Doors', href: '/services/security-doors' },
  { label: 'Automatic Doors', href: '/services/automatic-doors' },
  { label: 'Shutter Repair', href: '/services/shutter-repair' },
  { label: 'Emergency Callout', href: '/services/emergency-callout' },
  { label: 'Curtain Walling', href: '/services/curtain-walling' },
];

/* ── Icons ────────────────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 mt-[2px]" style={{ color: '#C9A84C' }}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 mt-[2px]" style={{ color: '#C9A84C' }}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 mt-[2px]" style={{ color: '#C9A84C' }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0 mt-[2px]" style={{ color: '#C9A84C' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0" style={{ color: '#C9A84C' }}>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}






/* ── Component ────────────────────────────────────────────────────────── */

export default function Footer() {
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.0!2d-1.4823!3d52.4651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI3JzU0LjQiTiAxwrAyOCc1Ni4zIlc!5e0!3m2!1sen!2suk!4v1';

  return (
    <>
      <footer
        className="relative overflow-hidden"
        style={{
          background: '#111111',
          color: '#BBBBBB',
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), repeating-linear-gradient(120deg, transparent 0 80px, rgba(201,168,76,0.03) 80px 81px)',
        }}
      >
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] pb-[60px] relative z-[1]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
            {/* Column 1: Logo + tagline + social */}
            <div>
              <Image
                src="/assets/grewal-logo.png"
                alt="Grewal Shopfront and Shutters"
                width={78}
                height={78}
                className="mb-5"
              />
              <p className="text-[14px] leading-[1.8] mb-5" style={{ color: '#BBBBBB' }}>
                UK&apos;s trusted specialists in shopfronts, roller shutters &amp; security solutions.
                <br />
                Quality. Security. Style.
              </p>
              <a
                href="https://www.instagram.com/grewalshopfrontsuk/"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Grewal Shopfront &amp; Shutters on Instagram"
                className="inline-flex items-center gap-2 text-[14px] transition-opacity hover:opacity-70"
                style={{ color: '#C9A84C' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0z"/>
                  <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.41" cy="5.59" r="1.44"/>
                </svg>
                Follow us on Instagram
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4
                className="text-[17px] mb-[22px] relative pb-3"
                style={{ color: '#C9A84C', fontFamily: "'Outfit', sans-serif" }}
              >
                Quick Links
                <span className="absolute left-0 bottom-0 w-[30px] h-[2px]" style={{ background: '#C9A84C' }} />
              </h4>
              <ul className="space-y-0">
                {quickLinks.map((link) => (
                  <li
                    key={link.label}
                    className="pb-3 mb-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[14px] transition-all duration-200 hover:translate-x-1"
                      style={{ color: '#BBBBBB' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#BBBBBB'; }}
                    >
                      <ArrowRightIcon />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h4
                className="text-[17px] mb-[22px] relative pb-3"
                style={{ color: '#C9A84C', fontFamily: "'Outfit', sans-serif" }}
              >
                Our Services
                <span className="absolute left-0 bottom-0 w-[30px] h-[2px]" style={{ background: '#C9A84C' }} />
              </h4>
              <ul className="space-y-0">
                {footerServices.map((service) => (
                  <li
                    key={service.label}
                    className="pb-3 mb-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-[14px] transition-all duration-200 hover:translate-x-1"
                      style={{ color: '#BBBBBB' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#BBBBBB'; }}
                    >
                      <ArrowRightIcon />
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4
                className="text-[17px] mb-[22px] relative pb-3"
                style={{ color: '#C9A84C', fontFamily: "'Outfit', sans-serif" }}
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-[30px] h-[2px]" style={{ background: '#C9A84C' }} />
              </h4>
              <ul className="space-y-[14px] mb-4">
                <li className="flex items-start gap-[10px] text-[14px]">
                  <PhoneIcon />
                  <a
                    href="tel:07597630000"
                    className="transition-colors duration-200"
                    style={{ color: '#BBBBBB' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#BBBBBB'; }}
                  >
                    07597 630000
                  </a>
                </li>
                <li className="flex items-start gap-[10px] text-[14px]">
                  <MailIcon />
                  <a
                    href="mailto:info@grewalshopfrontandshutters.co.uk"
                    className="transition-colors duration-200 break-all"
                    style={{ color: '#BBBBBB' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#BBBBBB'; }}
                  >
                    info@grewalshopfrontandshutters.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-[10px] text-[14px]" style={{ color: '#BBBBBB' }}>
                  <MapPinIcon />
                  <span>31 Trelawney Road, Exhall, Coventry, CV7 9FB</span>
                </li>
                <li className="flex items-start gap-[10px] text-[14px]" style={{ color: '#BBBBBB' }}>
                  <ClockIcon />
                  <span>Mon-Sat: 8am-6pm | Emergency: 24/7</span>
                </li>
              </ul>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/447597630000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[13.5px] px-[18px] py-[10px] rounded-full text-white my-[6px] mb-[18px] transition-all duration-200 hover:-translate-y-[2px]"
                style={{
                  background: '#25D366',
                  boxShadow: '0 4px 12px rgba(37,211,102,0.25)',
                }}
              >
                <WhatsAppIcon />
                Chat with us
              </a>

              {/* Google Maps embed */}
              <div className="rounded-[10px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <iframe
                  src={mapsEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our location on Google Maps"
                  className="w-full h-[140px] border-0 block"
                  style={{ filter: 'grayscale(0.3) invert(0.92) contrast(0.9)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative z-[1] py-[22px]"
          style={{
            background: '#0A0A0A',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center flex-wrap gap-3 text-[13px]" style={{ color: '#888888' }}>
            <p>&copy; {new Date().getFullYear()} Grewal Shopfront & Shutters. All rights reserved.</p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200"
                style={{ color: '#888888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888888'; }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-200"
                style={{ color: '#888888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888888'; }}
              >
                Terms &amp; Conditions
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>
                Designed &amp; Developed by{' '}
                <a
                  href="https://flymediatech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                  style={{ color: '#C9A84C' }}
                >
                  Fly Media Tech
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button — omitted here since FloatingWhatsApp component already exists */}
    </>
  );
}
