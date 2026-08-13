'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';

const galleryItems = [
  { img: 'portfolio-1.webp', cat: 'roller-shutters', title: 'Security Shutter, Birmingham' },
  { img: 'portfolio-2.webp', cat: 'shopfronts', title: 'Aluminium Shopfront, London' },
  { img: 'portfolio-3.webp', cat: 'doors', title: 'Sliding Doors, Manchester' },
  { img: 'portfolio-4.webp', cat: 'roller-shutters', title: 'Industrial Shutter, Leeds' },
  { img: 'portfolio-5.webp', cat: 'shopfronts', title: 'Glass Shopfront, Sheffield' },
  { img: 'portfolio-6.webp', cat: 'doors', title: 'Fire Door, Liverpool' },
  { img: 'service-steel-door.jpeg', cat: 'doors', title: 'Steel Security Door, Bristol' },
  { img: 'service-scissor-gate.webp', cat: 'other', title: 'Scissor Gate, Coventry' },
  { img: 'preview-electric.webp', cat: 'roller-shutters', title: 'Electric Shutter, Leicester' },
  { img: 'warehouse-doors.webp', cat: 'doors', title: 'Sectional Doors, Wolverhampton' },
  { img: 'service-aluminium-shopfront.webp', cat: 'shopfronts', title: 'Aluminium Shopfront, Coventry' },
  { img: 'service-industrial-shutter.webp', cat: 'roller-shutters', title: 'Industrial Roller Shutter' },
  { img: 'service-glass-shopfront.webp', cat: 'shopfronts', title: 'Glass Shopfront Installation' },
  { img: 'service-auto-sliding-doors.webp', cat: 'doors', title: 'Automatic Sliding Doors' },
  { img: 'service-bifold-door.webp', cat: 'doors', title: 'Bi-Fold Door System' },
  { img: 'roler.webp', cat: 'roller-shutters', title: 'Roller Shutter Detail' },
  { img: 'workers-installing.webp', cat: 'shopfronts', title: 'Installation in Progress' },
  { img: 'service-security-shutter.webp', cat: 'roller-shutters', title: 'Security Roller Shutter' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Roller Shutters', value: 'roller-shutters' },
  { label: 'Shopfronts', value: 'shopfronts' },
  { label: 'Doors', value: 'doors' },
  { label: 'Other', value: 'other' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.cat === activeFilter);

  return (
    <div className="bg-[#F9F7F4] text-[#1A1A1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"Portfolio","item":"https://www.grewalshopfrontandshutters.co.uk/gallery"}]}) }} />
      <SchemaMarkup type="LocalBusiness" />

      {/* Page Banner */}
      <section className="relative text-center text-white" style={{ padding: '220px 0 90px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.85)]" />
        <Image
          src="/assets/portfolio-1.webp"
          alt="Our Portfolio"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,54px)] font-heading font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[#F0D080] hover:underline">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex justify-center gap-3 mb-11 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-6 py-2.5 rounded-full border font-semibold text-sm transition-all ${
                  activeFilter === f.value
                    ? 'bg-[#C9A84C] border-[#C9A84C] text-white'
                    : 'bg-white border-[#E5DDD0] text-[#1A1A1A] hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6" style={{ columnGap: '24px' }}>
            {filtered.map((item) => (
              <div
                key={item.img}
                className="break-inside-avoid mb-6 relative rounded-xl overflow-hidden group"
              >
                <Image
                  src={`/assets/${item.img}`}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-[rgba(201,168,76,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative text-center text-white" style={{ padding: '110px 0' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.82)] to-[rgba(10,10,10,0.9)]" />
        <Image
          src="/assets/cta-banner-bg.webp"
          alt=""
          fill
          className="object-cover -z-10"
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h2 className="text-[clamp(28px,4vw,44px)] font-heading font-bold text-white mb-[18px]">
            Like What You See?
          </h2>
          <p className="text-white/75 max-w-[600px] mx-auto mb-9 text-[17px]">
            Get a free quote for your own shopfront or shutter project.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-[15px] rounded-md font-semibold text-[15px] bg-[#C9A84C] text-white hover:bg-[#A8832A] hover:shadow-[0_20px_60px_rgba(201,168,76,0.25)] hover:scale-[1.03] transition-all animate-[pulse_2.4s_ease-in-out_infinite]"
              style={{
                animationName: 'ctaPulse',
              }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Project Videos */}
      <section className="bg-[#F2EDE4]" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-[60px]">
            <span className="inline-block bg-[rgba(201,168,76,0.12)] text-[#A8832A] text-[13px] font-semibold tracking-wide px-[18px] py-[7px] rounded-full mb-[18px] uppercase">
              See Our Work
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-[#1A1A1A] mb-[18px]">
              Project Videos
            </h2>
            <div className="w-[70px] h-[3px] bg-[#C9A84C] mx-auto mb-[22px]" />
            <p className="text-[#4A4A4A] text-[17px]">See our team in action — from site surveys to completed installations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {[
              { src: '/assets/project-video-1.mp4', title: 'Shopfront installation in progress' },
              { src: '/assets/project-video-2.mp4', title: 'On-site survey and assessment' },
              { src: '/assets/project-video-3.mp4', title: 'Completed project walkthrough' },
            ].map((v) => (
              <div key={v.src} className="rounded-xl overflow-hidden bg-white border border-[#E5DDD0] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                <video controls preload="metadata" className="w-full aspect-video object-cover" playsInline>
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="px-5 py-3">
                  <p className="text-[#4A4A4A] text-sm font-medium">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
