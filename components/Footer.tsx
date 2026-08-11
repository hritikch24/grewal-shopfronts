import Link from 'next/link';
import Image from 'next/image';

/* ── Data ─────────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get a Quote', href: '/contact' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Repair & Maintenance', href: '/services/repair-maintenance' },
];

const footerServices = [
  { label: 'Security Roller Shutters', href: '/services/security-roller-shutters' },
  { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
  { label: 'Toughened Glass Shopfronts', href: '/services/toughened-glass-shopfronts' },
  { label: 'Industrial Roller Shutters', href: '/services/industrial-roller-shutters' },
  { label: 'Electric Roller Shutters', href: '/services/electric-roller-shutters' },
  { label: 'Automatic Sliding Doors', href: '/services/automatic-sliding-doors' },
  { label: 'Scissor Gates', href: '/services/scissor-gates' },
  { label: 'PVC Strip Curtains', href: '/services/pvc-strip-curtains' },
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

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
              <div className="flex gap-3">
                {[
                  { icon: <FacebookIcon />, label: 'Facebook' },
                  { icon: <InstagramIcon />, label: 'Instagram' },
                  { icon: <TwitterIcon />, label: 'Twitter' },
                  { icon: <LinkedInIcon />, label: 'LinkedIn' },
                  { icon: <YouTubeIcon />, label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-250 hover:scale-[1.15]"
                    style={{ background: '#1E1E1E', color: '#BBBBBB' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#C9A84C';
                      e.currentTarget.style.color = '#111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#1E1E1E';
                      e.currentTarget.style.color = '#BBBBBB';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
