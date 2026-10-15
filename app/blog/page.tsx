import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides for Shop Owners',
  description:
    'Plain-English guides for shop owners: prices, planning, shutters, fire doors, security ratings and what to do after a break-in.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/blog',
  },
  openGraph: {
    title: 'Shopfront Guides & Articles — Grewal Shopfront & Shutters',
    description: 'Plain-English guides on prices, planning, shutters, fire doors and break-ins.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/blog',
    siteName: 'Grewal Shopfront & Shutters',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopfront Guides & Articles — Grewal Shopfront & Shutters',
    description: 'Plain-English guides on prices, planning, shutters, fire doors and break-ins.',
  },
};

const posts = [
  { slug: 'shopfront-installation-cost-uk-2026', img: 'blog-3.webp', category: 'Prices', date: '13 Jun 2026', title: 'What a New Shopfront Costs in 2026', excerpt: 'Typical figures for fronts, shutters and doors, the extras that catch people out, and how to compare quotes fairly.' },
  { slug: 'shopfront-design-trends-uk-2026', img: 'blog-1.webp', category: 'Design', date: '13 Jun 2026', title: 'Shopfront Design in 2026: What Owners Are Choosing', excerpt: 'Dark frames, bigger glass, hidden shutters and fronts that fold open, and when each one makes sense.' },
  { slug: 'shopfront-regulations-building-standards-uk-2026', img: 'blog-2.webp', category: 'Rules', date: '13 Jun 2026', title: 'Shopfront Rules in 2026: Glass, Access, Fire and Energy', excerpt: 'The building rules behind a new front, from safety glass to step-free entrances, in plain terms.' },
  { slug: 'commercial-security-shutters-guide-uk', img: 'blog-4.webp', category: 'Security', date: '13 Jun 2026', title: 'Security Shutters for Shops: A Buyer\'s Guide', excerpt: 'Solid, perforated or internal; hand or motor. How to pick a shutter your insurer and council will accept.' },
  { slug: 'best-shopfront-company-uk-how-to-choose', img: 'blog-5.webp', category: 'Advice', date: '25 Apr 2025', title: 'How to Choose a Shopfront Company: 10 Questions to Ask', excerpt: 'The questions that sort careful firms from careless ones, and the warning signs before you pay a deposit.' },
  { slug: 'emergency-shopfront-boarding-what-to-do', img: 'blog-1.webp', category: 'Emergencies', date: '20 Apr 2025', title: 'Shop Broken Into? What to Do in the First Few Hours', excerpt: 'Safety, police, photos, boarding up and insurers: a calm order of things for a bad morning.' },
  { slug: 'what-is-lps-1175-security-rating', img: 'blog-2.webp', category: 'Security', date: '10 Apr 2025', title: 'LPS 1175 Explained for Shop Owners', excerpt: 'What the rating on a door or shutter means, how to read it, and how to check a certificate is real.' },
  { slug: 'fd30-vs-fd60-fire-door-commercial-premises', img: 'blog-3.webp', category: 'Fire safety', date: '1 Apr 2025', title: 'FD30 or FD60: Which Fire Door Does Your Building Need?', excerpt: 'What the numbers and the S mean, who decides the rating, and why fitting matters as much as the door.' },
  { slug: 'aluminium-shopfront-planning-permission-uk', img: 'blog-4.webp', category: 'Planning', date: '15 Mar 2025', title: 'Do You Need Planning Permission for a New Shopfront?', excerpt: 'Planning permission, advertisement consent and listed building consent, and why shutters get refused.' },
  { slug: 'how-to-maintain-commercial-roller-shutters', img: 'blog-5.webp', category: 'Maintenance', date: '10 Mar 2025', title: 'Looking After a Roller Shutter: Checks That Prevent Breakdowns', excerpt: 'Weekly, monthly and yearly checks, the warning noises, and the one job you should never try yourself.' },
];

export default function BlogIndex() {
  return (
    <div className="bg-[#F9F7F4] text-[#1A1A1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.grewalshopfrontandshutters.co.uk"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.grewalshopfrontandshutters.co.uk/blog"}]}) }} />

      {/* Page Banner */}
      <section className="relative text-center text-white" style={{ padding: '220px 0 90px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.85)]" />
        <Image
          src="/assets/blog-1.webp"
          alt=""
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,54px)] font-heading font-bold text-white mb-4">
            Guides for shop owners
          </h1>
          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[#F0D080] hover:underline">Home</Link>
            <span>/</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1380px] mx-auto px-6 grid lg:grid-cols-[2.4fr_1fr] gap-[50px] items-start">
          {/* Blog Cards */}
          <div className="grid sm:grid-cols-2 gap-[30px]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD0] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C9A84C] transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-[210px] overflow-hidden">
                  <Image
                    src={`/assets/${post.img}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#C9A84C] text-charcoal text-xs font-semibold px-3.5 py-[5px] rounded-full">
                    {post.category}
                  </span>
                </div>
                {/* Body */}
                <div className="p-6">
                  <span className="text-[#888888] text-[12.5px] mb-2.5 block">{post.date}</span>
                  <h3 className="text-[#1A1A1A] font-heading font-bold text-[19px] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-[#A8832A] font-semibold text-sm inline-flex items-center gap-1.5">
                    Read the guide
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            {/* Categories */}
            <div className="bg-[#F2EDE4] rounded-xl p-6 mb-[30px]">
              <h4 className="text-[#1A1A1A] font-heading font-bold text-lg mb-4">Topics</h4>
              <ul className="space-y-2.5">
                {['Prices', 'Design', 'Rules', 'Security', 'Advice', 'Emergencies', 'Fire safety', 'Planning', 'Maintenance'].map((cat) => (
                  <li key={cat}>
                    <Link
                      href="/blog"
                      className="text-[#4A4A4A] font-medium hover:text-[#A8832A] transition-colors text-[15px]"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block w-full text-center bg-[#C9A84C] text-charcoal font-semibold text-[15px] px-8 py-[15px] rounded-md hover:bg-[#A8832A] transition-colors"
            >
              Ask for a price
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
