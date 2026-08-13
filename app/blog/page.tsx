import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shopfront Installation Guides & Articles',
  description:
    'Expert guides on shopfront maintenance, planning permission, fire doors, security ratings, and emergency boarding from Grewal Shopfront & Shutters.',
  alternates: {
    canonical: 'https://www.grewalshopfrontandshutters.co.uk/blog',
  },
  openGraph: {
    title: 'Shopfront Guides & Articles — Grewal Shopfront & Shutters',
    description: 'Expert guides on shopfront maintenance, planning permission, fire doors, security ratings, and emergency boarding.',
    url: 'https://www.grewalshopfrontandshutters.co.uk/blog',
    siteName: 'Grewal Shopfront & Shutters',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopfront Guides & Articles — Grewal Shopfront & Shutters',
    description: 'Expert guides on shopfront maintenance, planning permission, fire doors, security ratings, and emergency boarding.',
  },
};

const posts = [
  {
    slug: 'shopfront-design-trends-uk-2026',
    img: 'blog-1.webp',
    category: 'Security',
    date: '2 Jul 2026',
    title: '5 Signs Your Roller Shutter Needs Repair',
    excerpt: 'An in-depth breakdown of the critical warning signs of roller shutter failure, structural risks, and cost-effective maintenance for UK businesses.',
  },
  {
    slug: 'commercial-security-shutters-guide-uk',
    img: 'blog-2.webp',
    category: 'Design',
    date: '10 Jul 2026',
    title: 'How Modern Aluminium Shopfronts Boost High Street Foot Traffic',
    excerpt: 'A comprehensive deep dive into how upgrading your retail facade to a premium glass and aluminium shopfront transforms brand identity and drives customer volume.',
  },
  {
    slug: 'shopfront-regulations-building-standards-uk-2026',
    img: 'blog-3.webp',
    category: 'Maintenance',
    date: '12 Jul 2026',
    title: 'Electric Roller Shutter Troubleshooting: DIY Checks vs When to Call an Engineer',
    excerpt: 'A practical guide for UK business owners on diagnosing electric roller shutter faults, identifying easy DIY fixes, and understanding when to call a certified engineer.',
  },
  {
    slug: 'how-to-maintain-commercial-roller-shutters',
    img: 'blog-4.webp',
    category: 'Security',
    date: '13 Jul 2026',
    title: 'Steel vs. Aluminium Roller Shutters: Choosing the Right Security Shield',
    excerpt: 'A detailed structural comparison of steel and aluminium roller shutters to help UK retailers, warehouse managers, and industrial operators select the perfect balance of strength and aesthetics.',
  },
  {
    slug: 'aluminium-shopfront-planning-permission-uk',
    img: 'blog-5.webp',
    category: 'Design',
    date: '14 Jul 2026',
    title: 'Understanding Shopfront Glass: Laminated, Toughened, or Double Glazing',
    excerpt: 'A guide to commercial glass standards for UK retail storefronts, detailing the structural differences between toughened glass, laminated safety glass, and energy-efficient double glazing.',
  },
  {
    slug: 'fd30-vs-fd60-fire-door-commercial-premises',
    title: 'FD30 vs FD60 Fire Doors: Which Does Your Business Need?',
    img: 'blog-1.webp',
    category: 'Safety',
    date: '15 Jul 2026',
    excerpt: 'A clear comparison of FD30 and FD60 fire resistance ratings, Building Regulations requirements, and how to choose the right door for your premises.',
  },
  {
    slug: 'what-is-lps-1175-security-rating',
    title: 'What Is the LPS 1175 Security Rating? A Business Owner\'s Guide',
    img: 'blog-2.webp',
    category: 'Security',
    date: '16 Jul 2026',
    excerpt: 'Demystifying the LPS 1175 standard — what the security rating levels mean, how they affect insurance, and which level your business should target.',
  },
  {
    slug: 'shopfront-installation-cost-uk-2026',
    title: 'Shopfront Installation Costs in the UK (2026): What to Expect',
    img: 'blog-3.webp',
    category: 'Guides',
    date: '17 Jul 2026',
    excerpt: 'A detailed breakdown of shopfront installation costs across the UK in 2026, covering aluminium shopfronts, roller shutters, security doors, and what factors affect pricing.',
  },
  {
    slug: 'best-shopfront-company-uk-how-to-choose',
    title: 'How to Choose the Best Shopfront Company in the UK',
    img: 'blog-4.webp',
    category: 'Guides',
    date: '18 Jul 2026',
    excerpt: 'A practical checklist for finding a reliable, professional shopfront installation company. What to look for, red flags to avoid, and questions to ask before signing.',
  },
  {
    slug: 'emergency-shopfront-boarding-what-to-do',
    title: 'Emergency Shopfront Boarding: What to Do When Your Shop Is Broken Into',
    img: 'blog-5.webp',
    category: 'Emergency',
    date: '19 Jul 2026',
    excerpt: 'Step-by-step advice on securing your premises after a break-in, dealing with insurers, and arranging permanent repairs quickly.',
  },
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
          alt="Blog"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 max-w-[1380px] mx-auto px-6">
          <h1 className="text-[clamp(32px,5vw,54px)] font-heading font-bold text-white mb-4">
            Blog
          </h1>
          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[#F0D080] hover:underline">Home</Link>
            <span>/</span>
            <span>Blog</span>
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
                  <span className="absolute top-3.5 left-3.5 bg-[#C9A84C] text-white text-xs font-semibold px-3.5 py-[5px] rounded-full">
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
                    Read More
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
              <h4 className="text-[#1A1A1A] font-heading font-bold text-lg mb-4">Categories</h4>
              <ul className="space-y-2.5">
                {['All', 'Security', 'Design', 'Maintenance', 'Safety', 'Guides', 'Emergency'].map((cat) => (
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
              className="block w-full text-center bg-[#C9A84C] text-white font-semibold text-[15px] px-8 py-[15px] rounded-md hover:bg-[#A8832A] transition-colors"
            >
              Get a Free Quote
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
