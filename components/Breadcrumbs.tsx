import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /**
   * Set on the three pages that render breadcrumbs over the cream page
   * background rather than a dark hero. The other 21 call sites sit on
   * bg-navy or bg-gradient-dark, so dark is the default.
   */
  onLight?: boolean;
}

export default function Breadcrumbs({ items, onLight = false }: BreadcrumbsProps) {
  // The trail and the current page were both fixed dark, which is right on
  // cream and invisible on the navy heroes — the current page rendered at
  // 1.00:1 there.
  const trail = onLight ? 'text-grey-500' : 'text-grey-300';
  const separator = onLight ? 'text-grey-300' : 'text-grey-500';
  const current = onLight ? 'text-navy' : 'text-white';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://www.grewalshopfrontandshutters.co.uk${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${trail}`}>
          {items.map((item, index) => (
            <li key={index} className={index > 0 ? 'flex items-center gap-1.5' : undefined}>
              {index > 0 && (
                <span aria-hidden="true" className={`${separator} select-none`}>&rsaquo;</span>
              )}
              {item.href ? (
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={`${current} font-medium`} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
