> **Read `PORTFOLIO-HANDOFF.md` in this repo first.** It carries the
> cross-site state as of 1 Oct 2026: the live deploy hold, open actions,
> and the things already ruled out so they are not re-proposed.
> Evidence lives in `docs/portfolio/`.

# Grewal Shopfront & Shutters — agent notes

Next.js 16 App Router · TypeScript · Tailwind v4 · Prisma + PostgreSQL · Vercel
(auto-deploys from `main`).

**Live:** https://www.grewalshopfrontandshutters.co.uk
**Theme:** Light cream (`#F9F7F4`) with gold accent `#C9A84C`
**Phone:** 07597 630000 · **Base:** 31 Trelawney Road, Exhall, Coventry, CV7 9FB
**Instagram:** instagram.com/grewalshopfrontsuk · Trading since 2004

**Positioning:** Commercial and industrial. Installs across England; repairs within ~100 miles of Birmingham.

This file exists so an agent does not have to re-derive the same context from
the code every session. It is the shared spine plus this site's specifics —
read it before touching anything.

## Before you change anything

```bash
npm run test          # contamination + sanity + smoke
```

`npm run build` runs `prisma db push` first and needs a live `DATABASE_URL`.
To build locally without a database:

```bash
DATABASE_URL="postgresql://u:p@localhost:5432/noop" npx next build
```

Three suites, and they exist because each caught a real bug that reached
production:

| Suite | Catches |
|---|---|
| `test:contamination` | A sibling's brand, phone or asset path copied into this repo |
| `test:sanity` | Dead internal links, doubled brand suffixes, bad canonical, contrast |
| `test:smoke` | Live production checks — sitemap size, locked endpoints, own phone |

`test:smoke` hits **production**, so it reflects the deployed site, not your
working tree. A sitemap count that disagrees with your local build usually
means the deploy has not landed yet, not that you broke something.

## Hard rules

**1. Never mix this site with its siblings.** Three separate repos, three
separate brands, one shared codebase lineage:

| Repo | Brand | Domain |
|---|---|---|
| `grewal-shopfronts` | Grewal Shopfront & Shutters | grewalshopfrontandshutters.co.uk |
| `sigmashopfronts` | Sigma Shop Fronts | sigmashopfronts.com |
| `Urban-shopfronts-limited` | Urban Shopfronts | urbanshopfronts.co.uk |

Code gets copied between them, and that is how branding leaks — a file lifted
from a sibling carries its phone number, domain, asset paths and localStorage
keys. `tests/site-config.mjs` lists every marker string; keep it in sync across
all three, and only `SITE` should differ.

This applies to comments too. A sibling brand name in a code comment has
already failed this test once and required a follow-up push.

**2. Never touch the logo.** Asset paths and logo files are per-site and have
been broken by copying before.

**3. Do not add programmatic pages.** See the history section below.

**4. Do not fabricate structured data.** No `aggregateRating` without real
reviews. `sameAs` entries must be live URLs — four fabricated profile links
were found and removed in Sept 2026, including a `g.co/kgs/` link that could
never have existed, and a sibling's Google profile declared on the wrong site.
Anything you add to `sameAs` should be fetched and checked first.

**5. Small, verifiable changes.** The owner's standing instruction: *"If you
think we shouldn't make changes daily don't make them."* Traffic here is real
revenue. Prefer leaving a working site alone over an unproven improvement.

## The history that explains the code

**The duplicate cluster.** All three sites published the same
`services x cities` cross-product at the same URL paths under different
brands — 574 pages each, ~87% of each sitemap. Measured 8-gram shingle
overlap: **84% of one site's phrasing also appeared on a sibling.**

On **21 August 2026** Google delisted Sigma's entire cross-product.
Impressions went 1,091 to 43 overnight. Hand-written pages were untouched.
No manual action, no security issue — a scaled-content classifier.

This is why the constant below exists, why new services do not automatically
get city pages, and why "add 400 more location pages" is the wrong instinct
on any of these three sites.

**Diagnose from daily data, never 24-hour or 28-day totals.** The collapse was
a single-day cliff. In a 28-day average it looked like gradual decline, which
points at completely the wrong fix.

**The real constraint is backlinks, not pages.** Six external links across
eight domains, none editorial. More pages rank where the last ones did —
position 25 to 64. Content work does not move this; directories,
accreditation bodies, local press and main-contractor case studies do.

## Gotchas that have cost time

**Next.js metadata merging.** Raw `<meta>` tags in `<head>` **append**;
`metadata.other` **merges by key**. Geo tags were hardcoded in `<head>`, so
city pages shipped two conflicting locations. They live in `metadata.other`
now — keep them there.

**`title.template` does not apply to the segment that defines it.** The root
layout's `default` must spell out the brand itself.

**`dynamicParams = false`** means any path not in `generateStaticParams` is a
hard 404, not a soft fallback. Any link you add to a service/city combination
must correspond to a generated param or the sanity suite will fail.

**`grep -c` counts lines, not occurrences.** Next's RSC payload repeats strings,
so a rendered page can look wrong when it is fine. Check the actual `<meta>`.

**BSD `sed` has no `\?`.** Use `grep -oE` on macOS.

## Analytics

A metrics dashboard aggregating all three sites lives at
`~/Projects/shopfront-metrics` (`npm start`, localhost:8787). Zero
dependencies. It reads each site's `/api/metrics` with the site's
`ADMIN_API_KEY`.

### Site-specific notes

- Title qualifier is `' | Commercial'`. The brand suffix is 20 characters —
  the length check uses the numeric constant `BRAND_SUFFIX_LENGTH`, not a
  repeated string literal, because a doubled literal slipped through once.
- Still carries the full 574-page service x city cross-product. It has **not**
  been retired here. Grewal is the weakest of the three on position (54.4) but
  the owner's instruction is explicit: *"I am getting good traffic on grewal so
  I won't mind leaving it as it is rather than getting it fucked up."*
  **Do not retire these pages without being asked.**
- GSC reported 41 pages "Duplicate without user-selected canonical" — that is
  Google overruling a canonical that is present, not a missing tag.
- Google Ads conversion tracking lives in `lib/ads-conversions.ts`
  (`AW-18391927258`). Performance Max cannot take a max-CPC cap; only Manual
  CPC or Maximise Clicks can.

## Current state

- 14 services in `data/services.ts`, 41 cities in `data/cities.ts`
- Deploys on push to `main`; Vercel builds run `prisma db push`, so nullable
  schema columns apply automatically
- Repo is **public** on GitHub

## Open work across all three sites

- Body-copy rewrite per specialism — the real fix for the remaining
  duplication, and the one thing that would let all three rank independently
- Backlink building — the binding constraint, and nothing else moves it
- ~20 byte-identical photographs are shared across all three domains

---

# Update — 1 October 2026

Everything below was established after this file was first written and is not
reflected above. Supporting detail lives in `~/Projects/seo-plan/`.

## The August delisting has a confirmed cause

**Google's August 2026 spam update completed on 21 August 2026** — the exact
day Sigma's cross-product was delisted. It targeted **scaled content abuse**:
programmatic pages, AI-generated pages at scale, pages built mainly to rank.
A SpamBrain enforcement pass on existing policy, global, all languages.

574 templated city x service pages with 84% shared phrasing across three
domains is a textbook match. The diagnosis is no longer inference from a
traffic shape; the date and the target both line up.

## A spam update is rolling right now

**September 2026 spam update: started 24 September, roughly two weeks**, so it
lands around 8 October. Google has not said what it targets.

**Hold every deploy until the Search Status Dashboard marks it complete** —
not a fixed date, the dashboard. Shipping mid-rollout means any movement is
unattributable. Draft on a branch; do not push.

## Search Console review found no cross-site duplication

Read-only review of all three properties, 27-28 September
(`seo-plan/gsc-review.md`):

| | Pages in any duplicate bucket |
|---|---|
| Urban | 0 |
| Sigma | 0 |
| Grewal | 0 city pages (its 41 are legacy `.php`) |

Top-10 query lists across the three share exactly one term ("shopfronts").
The sites are **not** cannibalising each other. The problem is position
(26 / 32 / 52), not suppression — and a 301 carries the ranking assessment
with it, so **moving URLs does not reset anything**. A URL restructure was
proposed and dropped on this evidence.

Competitor check: `/services/{service}` is the industry-standard pattern —
shopfrontsbirmingham.co.uk uses the same shape. The URL structure is normal.
What no competitor does is a 574-page city x service cross-product.

## The portfolio is now five sites, not three

`~/Projects/seo-plan/portfolio-registry.json` is the authority, and
`PORTFOLIO-RULES.md` governs additions. Added since this file was written:
`safe-and-secure-shopfront-shutters` and `highstreet-shopfronts`. Check any
new site against every registry entry before launch.

## Grewal-specific — Google Ads and the legacy URLs

**Ads account 495-972-2943 (RajKumar), er.hritik.24@gmail.com.** Campaign
"Grewal Shopfronts - Search Leads". Full review in
`seo-plan/grewal-ads-review.md`.

The account's core defect: **one responsive search ad whose Final URL is the
bare domain — the homepage — serving all 42 keywords**, including
"emergency shutter repair near me". Repair-intent traffic lands on a general
company page and bounces. The competitor ranking for those terms runs a
dedicated emergency repair page.

Changes made 1 Oct: max CPC bid limit ₹80 -> ₹100 (the bid strategy report
read "100% of spend is limited by your max. bid limit", and the campaign was
spending ₹104/day against a ₹500 budget). Keep the strategy on **Maximise
clicks** — Google recommends Maximise conversions, which does not support a
CPC cap at all and would remove the ceiling.

Impressions went from ~17/day to 86 the same day. The throttle release worked.

**The 41 "Duplicate without user-selected canonical" pages are legacy `.php`
URLs from the old site**, not city pages — `/service-detail.php?slug=...`,
`/contact.php`, `/terms.php`, counted per host variant. All already 308 to the
correct pages. Validation submitted in GSC on 28 September.

**Grewal's GSC property only holds data from 13 August 2026** (verification
date; GSC does not backfill). The August drop cannot be assessed here and that
history is unrecoverable. 56 clicks in six weeks is what the property holds —
if the owner reports better, it is likely Google Business Profile calls, not
the website.

**Do not retire Grewal's 574 city x service pages without being asked.** The
owner's instruction stands.
