'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Data ─────────────────────────────────────────────────────────────── */

const serviceCategories = [
  {
    title: 'Roller Shutters',
    items: [
      { label: 'Security Roller Shutters', href: '/services/security-roller-shutters' },
      { label: 'Aluminium Roller Shutters', href: '/services/aluminium-roller-shutters' },
      { label: 'Steel Roller Shutters', href: '/services/steel-roller-shutters' },
      { label: 'Industrial Roller Shutters', href: '/services/industrial-roller-shutters' },
      { label: 'Electric Roller Shutters', href: '/services/electric-roller-shutters' },
    ],
  },
  {
    title: 'Shopfronts',
    items: [
      { label: 'Aluminium Shopfronts', href: '/services/aluminium-shopfronts' },
      { label: 'Automatic Shopfronts', href: '/services/automatic-shopfronts' },
      { label: 'Toughened Glass Shopfronts', href: '/services/toughened-glass-shopfronts' },
    ],
  },
  {
    title: 'Doors',
    items: [
      { label: 'Automatic Sliding Doors', href: '/services/automatic-sliding-doors' },
      { label: 'Bi-Folding Doors', href: '/services/bi-folding-doors' },
      { label: 'Fire Doors', href: '/services/fire-doors' },
      { label: 'Steel Security Doors', href: '/services/steel-security-doors' },
      { label: 'Roller Shutter Doors', href: '/services/roller-shutter-doors' },
      { label: 'Glass Doors', href: '/services/glass-doors' },
    ],
  },
  {
    title: 'Other Products',
    items: [
      { label: 'Scissor Gates', href: '/services/scissor-gates' },
      { label: 'PVC Strip Curtains', href: '/services/pvc-strip-curtains' },
      { label: 'Wicket Doors', href: '/services/wicket-doors' },
      { label: 'PA Doors', href: '/services/pa-doors' },
    ],
  },
];

const areas = [
  { label: 'London', href: '/areas/london' },
  { label: 'Birmingham', href: '/areas/birmingham' },
  { label: 'Manchester', href: '/areas/manchester' },
  { label: 'Leeds', href: '/areas/leeds' },
  { label: 'Liverpool', href: '/areas/liverpool' },
  { label: 'Sheffield', href: '/areas/sheffield' },
  { label: 'Bristol', href: '/areas/bristol' },
  { label: 'Coventry', href: '/areas/coventry' },
  { label: 'Leicester', href: '/areas/leicester' },
  { label: 'Nottingham', href: '/areas/nottingham' },
  { label: 'Glasgow', href: '/areas/glasgow' },
  { label: 'Wolverhampton', href: '/areas/wolverhampton' },
  { label: 'View All Areas', href: '/areas' },
];

/* ── Icons ────────────────────────────────────────────────────────────── */

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [areasHover, setAreasHover] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const areasTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobileAccordion = useCallback((key: string) => {
    setMobileAccordion(prev => prev === key ? null : key);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* ── TOP BAR ──────────────────────────────────────────────────── */}
        <div
          className="hidden md:block text-[12.5px] tracking-[0.2px]"
          style={{
            background: 'linear-gradient(90deg, #111111 0%, #1c1a16 50%, #111111 100%)',
            color: '#E9DFC8',
            borderBottom: '1px solid rgba(201,168,76,0.35)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-[9px]">
            {/* Left: phone + email */}
            <div className="flex gap-[26px]">
              <a
                href="tel:07597630000"
                className="inline-flex items-center gap-[7px] transition-colors hover:text-gold-light"
                style={{ color: '#E9DFC8' }}
              >
                <PhoneIcon className="text-gold-light" />
                07597 630000
              </a>
              <a
                href="mailto:info@grewalshopfrontandshutters.co.uk"
                className="inline-flex items-center gap-[7px] transition-colors hover:text-gold-light"
                style={{ color: '#E9DFC8' }}
              >
                <MailIcon className="text-gold-light" />
                info@grewalshopfrontandshutters.co.uk
              </a>
            </div>

            {/* Right: social + badge */}
            <div className="flex items-center gap-[22px]">
              <div className="flex gap-[14px]">
                <a href="#" aria-label="Facebook" className="transition-colors hover:text-gold-light" style={{ color: '#E9DFC8' }}>
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-gold-light" style={{ color: '#E9DFC8' }}>
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Twitter" className="transition-colors hover:text-gold-light" style={{ color: '#E9DFC8' }}>
                  <TwitterIcon />
                </a>
                <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-gold-light" style={{ color: '#E9DFC8' }}>
                  <LinkedInIcon />
                </a>
              </div>
              <span
                className="inline-flex items-center gap-[7px] font-bold text-[11.5px] tracking-[0.3px] px-[14px] py-[5px] rounded-full animate-pulse"
                style={{
                  background: 'linear-gradient(110deg, #A8832A 0%, #C9A84C 30%, #f5d97a 50%, #C9A84C 70%, #A8832A 100%)',
                  color: '#1A1A1A',
                }}
              >
                <ClockIcon />
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>

        {/* ── MAIN NAV ─────────────────────────────────────────────────── */}
        <nav
          className="relative transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'saturate(160%) blur(14px)',
            WebkitBackdropFilter: 'saturate(160%) blur(14px)',
            borderBottom: '1px solid #E5DDD0',
            boxShadow: scrolled
              ? '0 1px 0 rgba(201,168,76,0.6), 0 18px 40px rgba(17,17,17,0.12)'
              : '0 1px 0 rgba(201,168,76,0.5), 0 12px 30px rgba(17,17,17,0.06)',
          }}
        >
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'py-[9px]' : 'py-4'}`}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/grewal-logo.png"
                alt="Grewal Shopfront and Shutters"
                width={scrolled ? 44 : 64}
                height={scrolled ? 44 : 64}
                className="block transition-all duration-300"
                style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-[2px]" role="list">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-[5px] px-[13px] py-4 font-semibold text-[13.5px] tracking-[0.2px] text-text-primary rounded-lg transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-[#7A5E1C] whitespace-nowrap relative group"
                >
                  Home
                  <span className="absolute left-5 right-5 bottom-[9px] h-[2px] rounded-[2px] bg-gradient-to-r from-gold-light to-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              </li>

              {/* Services mega dropdown */}
              <li
                className="relative"
                onMouseEnter={() => { clearTimeout(servicesTimeout.current); setServicesHover(true); }}
                onMouseLeave={() => { servicesTimeout.current = setTimeout(() => setServicesHover(false), 150); }}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-[5px] px-[13px] py-4 font-semibold text-[13.5px] tracking-[0.2px] text-text-primary rounded-lg transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-[#7A5E1C] whitespace-nowrap relative group"
                >
                  Services
                  <ChevronDown className={`text-gold-dark transition-transform duration-250 ${servicesHover ? 'rotate-180' : ''}`} />
                  <span className="absolute left-5 right-5 bottom-[9px] h-[2px] rounded-[2px] bg-gradient-to-r from-gold-light to-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
                {/* Mega dropdown */}
                <div
                  className={`absolute top-full left-1/2 z-40 transition-all duration-300 ${
                    servicesHover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[10px]'
                  }`}
                  style={{
                    transform: servicesHover ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                    width: 'min(720px, calc(100vw - 24px))',
                    background: '#fff',
                    border: '1px solid rgba(17,17,17,0.08)',
                    borderTop: 'none',
                    borderRadius: '0 0 18px 18px',
                    boxShadow: '0 8px 16px rgba(17,17,17,0.06), 0 40px 70px rgba(17,17,17,0.22)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gold top accent */}
                  <div className="h-[3px] bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 p-5">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="mb-3">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-gold-dark mb-2 px-3">{cat.title}</h4>
                        {cat.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-[11px] px-3 py-[8px] rounded-[10px] border border-transparent transition-all hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.28)] group/card"
                          >
                            <span className="flex-shrink-0 w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-gold-dark transition-all group-hover/card:border-[rgba(201,168,76,0.5)]" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.06) 100%)', border: '1px solid rgba(201,168,76,0.25)' }}>
                              <ArrowRightIcon className="w-[14px] h-[14px]" />
                            </span>
                            <span className="text-[13px] font-semibold text-text-primary group-hover/card:text-[#7A5E1C] transition-colors leading-tight">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Areas dropdown */}
              <li
                className="relative"
                onMouseEnter={() => { clearTimeout(areasTimeout.current); setAreasHover(true); }}
                onMouseLeave={() => { areasTimeout.current = setTimeout(() => setAreasHover(false), 150); }}
              >
                <Link
                  href="/areas"
                  className="flex items-center gap-[5px] px-[13px] py-4 font-semibold text-[13.5px] tracking-[0.2px] text-text-primary rounded-lg transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-[#7A5E1C] whitespace-nowrap relative group"
                >
                  Areas
                  <ChevronDown className={`text-gold-dark transition-transform duration-250 ${areasHover ? 'rotate-180' : ''}`} />
                  <span className="absolute left-5 right-5 bottom-[9px] h-[2px] rounded-[2px] bg-gradient-to-r from-gold-light to-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
                <div
                  className={`absolute top-full left-1/2 z-40 transition-all duration-300 ${
                    areasHover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[10px]'
                  }`}
                  style={{
                    transform: areasHover ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                    width: 'min(360px, calc(100vw - 24px))',
                    background: '#fff',
                    border: '1px solid rgba(17,17,17,0.08)',
                    borderTop: 'none',
                    borderRadius: '0 0 18px 18px',
                    boxShadow: '0 8px 16px rgba(17,17,17,0.06), 0 40px 70px rgba(17,17,17,0.22)',
                    overflow: 'hidden',
                  }}
                >
                  <div className="h-[3px] bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
                  <div className="grid grid-cols-2 gap-[6px] p-[14px]">
                    {areas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className={`flex items-center gap-[11px] px-3 py-[8px] rounded-[10px] border border-transparent transition-all hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.28)] group/card ${
                          area.label === 'View All Areas' ? 'col-span-2 justify-center font-bold text-gold-dark' : ''
                        }`}
                      >
                        <span className="text-[13px] font-semibold text-text-primary group-hover/card:text-[#7A5E1C] transition-colors">{area.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {['Gallery', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="flex items-center gap-[5px] px-[13px] py-4 font-semibold text-[13.5px] tracking-[0.2px] text-text-primary rounded-lg transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-[#7A5E1C] whitespace-nowrap relative group"
                  >
                    {item}
                    <span className="absolute left-5 right-5 bottom-[9px] h-[2px] rounded-[2px] bg-gradient-to-r from-gold-light to-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/services/repair-maintenance"
                  className="flex items-center gap-[5px] px-[13px] py-4 font-semibold text-[13.5px] tracking-[0.2px] text-text-primary rounded-lg transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-[#7A5E1C] whitespace-nowrap relative group"
                >
                  Repair
                  <span className="absolute left-5 right-5 bottom-[9px] h-[2px] rounded-[2px] bg-gradient-to-r from-gold-light to-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              </li>
            </ul>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-[14px] flex-shrink-0">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 flex-shrink-0 whitespace-nowrap px-6 py-[13px] text-[13.5px] font-bold rounded-lg text-[#1A1A1A] relative overflow-hidden transition-all duration-250 hover:-translate-y-[2px]"
                style={{
                  background: 'linear-gradient(135deg, #F0D080 0%, #C9A84C 45%, #A8832A 100%)',
                  boxShadow: '0 8px 20px rgba(201,168,76,0.35)',
                }}
              >
                <PhoneIcon className="w-[14px] h-[14px]" />
                Get a Free Quote
              </Link>
              <button
                className="lg:hidden p-2 text-text-primary bg-transparent border-none cursor-pointer"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[650] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ background: 'rgba(17,17,17,0.6)', backdropFilter: 'blur(2px)' }}
        onClick={closeMobile}
      />
      {/* Slide-in panel */}
      <div
        className={`fixed top-0 bottom-0 z-[700] flex flex-col overflow-y-auto transition-[left] duration-400 lg:hidden ${
          mobileOpen ? 'left-0' : '-left-full'
        }`}
        style={{
          width: 'min(90vw, 380px)',
          background: '#fff',
          boxShadow: '0 0 60px rgba(0,0,0,0.25)',
        }}
      >
        {/* Mobile header */}
        <div
          className="flex justify-between items-center px-5 py-4"
          style={{
            background: 'linear-gradient(90deg, #111111, #1c1a16)',
            borderBottom: '2px solid #C9A84C',
          }}
        >
          <Image
            src="/assets/grewal-logo.png"
            alt="Grewal"
            width={40}
            height={40}
            className="rounded-lg bg-white p-1"
          />
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="text-gold-light bg-transparent border-none cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile links */}
        <ul className="px-5 py-[10px] flex-1" role="list">
          <li>
            <Link href="/" className="block py-[14px] font-semibold border-b border-border" onClick={closeMobile}>
              Home
            </Link>
          </li>

          {/* Service accordions */}
          {serviceCategories.map((cat) => (
            <li key={cat.title}>
              <button
                className="flex justify-between items-center w-full py-[14px] font-semibold border-b border-border text-left"
                onClick={() => toggleMobileAccordion(cat.title)}
              >
                {cat.title}
                <ChevronDown className={`text-gold-dark transition-transform duration-300 ${mobileAccordion === cat.title ? 'rotate-180' : ''}`} />
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-350"
                style={{ maxHeight: mobileAccordion === cat.title ? `${cat.items.length * 44}px` : '0px' }}
              >
                {cat.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-[10px] pl-[14px] text-[14px] text-text-secondary"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          {/* Areas accordion */}
          <li>
            <button
              className="flex justify-between items-center w-full py-[14px] font-semibold border-b border-border text-left"
              onClick={() => toggleMobileAccordion('areas')}
            >
              Areas We Cover
              <ChevronDown className={`text-gold-dark transition-transform duration-300 ${mobileAccordion === 'areas' ? 'rotate-180' : ''}`} />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-350"
              style={{ maxHeight: mobileAccordion === 'areas' ? `${areas.length * 44}px` : '0px' }}
            >
              {areas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="block py-[10px] pl-[14px] text-[14px] text-text-secondary"
                  onClick={closeMobile}
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </li>

          {['Gallery', 'About', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block py-[14px] font-semibold border-b border-border"
                onClick={closeMobile}
              >
                {item}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/services/repair-maintenance"
              className="block py-[14px] font-semibold border-b border-border"
              onClick={closeMobile}
            >
              Repair &amp; Maintenance
            </Link>
          </li>
        </ul>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="mx-5 mb-5 flex items-center justify-center gap-2 px-6 py-[13px] text-[13.5px] font-bold rounded-lg text-[#1A1A1A]"
          style={{
            background: 'linear-gradient(135deg, #F0D080 0%, #C9A84C 45%, #A8832A 100%)',
            boxShadow: '0 8px 20px rgba(201,168,76,0.35)',
          }}
          onClick={closeMobile}
        >
          <PhoneIcon className="w-[14px] h-[14px]" />
          Get a Free Quote
        </Link>
      </div>
    </>
  );
}
