import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

const SITE = 'https://www.grewalshopfrontandshutters.co.uk';

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

export interface ArticleProps {
  slug: string;
  title: string;
  /** Shorter title for search results, where the heading is too long. */
  seoTitle?: string;
  description: string;
  crumb: string;
  published: string;
  modified: string;
  intro: string[];
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
}

/**
 * One layout for every guide on the blog, so each post is just its words.
 * Article and FAQ structured data are built from the same text the reader sees.
 */
export default function Article(props: ArticleProps) {
  const url = `${SITE}/blog/${props.slug}`;
  return (
    <>
      {props.faqs.length > 0 && (
        <SchemaMarkup
          type="FAQPage"
          data={{
            mainEntity: props.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: props.title,
            description: props.description,
            url,
            datePublished: props.published,
            dateModified: props.modified,
            author: { '@type': 'Organization', name: 'Grewal Shopfront & Shutters', url: SITE },
            publisher: {
              '@type': 'Organization',
              name: 'Grewal Shopfront & Shutters',
              url: SITE,
              logo: { '@type': 'ImageObject', url: `${SITE}/assets/grewal-logo.png` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          }),
        }}
      />

      <article className="section-padding bg-grey-50">
        <div className="container-max max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/blog' },
              { label: props.crumb },
            ]}
          />

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-4 mb-6">{props.title}</h1>

          {props.intro.map((p, i) => (
            <p key={i} className="text-charcoal leading-relaxed mb-6">
              {p}
            </p>
          ))}

          {props.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-heading text-2xl font-semibold text-navy mt-10 mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="text-charcoal leading-relaxed mb-6">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="list-disc pl-6 text-charcoal leading-relaxed mb-6 space-y-2">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p, i) => (
                <p key={i} className="text-charcoal leading-relaxed mb-6">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {props.related.length > 0 && (
            <aside className="mt-10 mb-10 rounded-xl border border-grey-200 p-6">
              <p className="font-heading font-semibold text-navy mb-3">Related pages</p>
              <ul className="space-y-2">
                {props.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-gold font-medium hover:underline">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {props.faqs.length > 0 && (
            <section className="border-t border-grey-200 pt-10">
              <h2 className="font-heading text-2xl font-semibold text-navy mb-6">Quick answers</h2>
              <div className="space-y-6">
                {props.faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="font-heading text-lg font-medium text-navy mb-2">{f.question}</h3>
                    <p className="text-charcoal leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
