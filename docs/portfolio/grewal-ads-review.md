# Grewal Google Ads review — 1 October 2026

Account 495-972-2943 (RajKumar), er.hritik.24@gmail.com. Read-only.
**No settings were changed.**

## The answer: you are not short of clicks, you are throttled

Google's own bid strategy report says it outright:

> **Limited (bid limits)** — "Maximum and/or minimum bid limits are being met
> by multiple keywords or targeting methods using this bid strategy."
> **"100% of spend is limited by your max. bid limit"**

Budget is not the constraint. The campaign has **₹500/day** available and spent
**₹3,122.50 in 30 days — about ₹104/day, 21% of what is allowed.** The other
79% is unspent because the bid cap keeps the ads out of auctions.

Campaign status confirms it: **Eligible (Limited) — Bid setting limited.**

## Account

| Campaign | Type | Status | Budget | Bid strategy | Impr | Clicks | Conv |
|---|---|---|---|---|---|---|---|
| Grewal Shopfront & Shutters | Performance Max | **Paused** | ₹591/day | Maximise conversions | 128 | 5 | **0** |
| Grewal Shopfronts – Search Leads | Search | Eligible (Limited) | ₹500/day | Maximise clicks | 528 | 51 | 3 |

Pausing the Performance Max campaign was right — 128 impressions, zero
conversions. Note it still holds a ₹591/day budget if anyone un-pauses it.

## Search campaign, last 30 days

| | |
|---|---|
| Spend | ₹3,122.50 |
| Impressions | 528 |
| Clicks | 51 |
| **CTR** | **9.66%** |
| Avg CPC | ₹61.23 |
| Conversions | 3 |
| Cost per conversion | ₹1,040.83 |

Bid strategy switched to Maximise clicks on **15 September 2026**, so only
about half this window is comparable.

**CTR of 9.66% is good.** The ads are working. The problem is that 528
impressions in 30 days is roughly 17 a day — there is almost no volume to
convert.

## Where the three conversions came from

| Keyword | Impr | CTR | Clicks | Conv | Cost/conv |
|---|---|---|---|---|---|
| **"emergency shutter repair near me"** | 8 | **25.00%** | 2 | 1 | **₹154.25** |
| "roller shutter repairs" | 59 | 15.25% | 9 | 1 | ₹607.49 |
| "roller shutter" | 147 | 9.52% | 14 | 1 | ₹707.07 |

**"emergency shutter repair near me" converts at nearly 5x the efficiency of
anything else** — ₹154 per conversion against ₹607 and ₹707 — and it was shown
only 8 times in a month.

This matches the organic data exactly: shutter-repair pages are Urban's best
performers, and emergency repair intent is what converts. Someone whose
shutter has failed buys today. Someone researching a new shopfront does not.

## Keywords being suppressed

Two keywords are **"Eligible (Limited) — Rarely shown (low Quality Score)"**:

- **"roller shutter repairs"** — 15.25% CTR and one conversion, throttled anyway
- **"aluminium shopfronts"** — 2 impressions

The first is the problem worth fixing. Low Quality Score on a keyword that
converts usually means landing page relevance: the ad sends repair traffic to
a page that is not specifically about shutter repair.

## Dead weight — 42 keywords, most producing nothing

**Not eligible (Low search volume):** "toughened glass shopfront installation",
"24/7 shopfront repair", "cheap shopfronts", "affordable shopfronts",
"shopfront companies near me", "shop front shutters costshopfront installation"

**Zero impressions in 30 days:** "commercial window repair", "shopfront repair",
"emergency shopfront repair", "glass shopfront installation", "storefront repair
service", "emergency glass repair near me", "board up service near me",
"shopfront glass replacement", "roller shutters repairs near me", "shopfront
installers near me", "shopfront cost UK", "Free On-Site Quotes"

**Impressions but zero clicks:** "shop front roller shutter" (5), "shopfront
repairs" (4), "glass shop front" (3), "shop front replacement" (8),
"commercial shutter installation" (3), "automatic doors installation" (2),
"storefront window replacement near me" (2), "shopfront fitters near me" (2)

Two of these are outright mistakes:

- **"shop front shutters costshopfront installation"** — two keywords typed
  into one field with no separator. It can never match anything.
- **"Free On-Site Quotes"** — that is ad copy, a selling point. Nobody types it
  into Google. It belongs in the ad, not the keyword list.

## What I would change, in order

1. **Raise or remove the max CPC bid limit.** This is the single blocker —
   100% of spend is limited by it. Nothing else matters until it moves.
2. **Split out emergency repair into its own ad group** with its own landing
   page. It is the only keyword converting efficiently and it was shown 8
   times in a month.
3. **Fix "roller shutter repairs" Quality Score** by pointing it at a shutter
   repair page rather than a general page.
4. **Delete the ~20 keywords with no impressions**, both typos included. They
   dilute the ad group's relevance and make Quality Score worse for the ones
   that work.
5. **Leave Performance Max paused.** Consider removing its ₹591/day budget so
   it cannot restart by accident.

## Also noticed

The account shows **"Balance is running low"**. If the bid limit is raised,
spend will rise toward ₹500/day and the account may run dry mid-flight.

---

# Changes applied — 1 October 2026

Campaign: **Grewal Shopfronts – Search Leads** (24154127703), account
495-972-2943 RajKumar.

## ✅ 1. Maximum CPC bid limit: ₹80.00 → ₹100.00

Verified twice — set, panel closed, panel reopened, value persisted.

**Why ₹80 was there:** set earlier at the owner's explicit request after a
single click cost ₹600 and returned nothing. It did its job — avg CPC settled
at ₹61.23 and nothing approached ₹600 again. What changed is 30 days of data
showing the side effect: Google's bid strategy report read *"100% of spend is
limited by your max. bid limit"*, and the campaign was spending ₹104/day
against a ₹500/day budget. The cap had become the binding constraint on
volume, not on waste.

**Bid strategy deliberately left as Maximise clicks.** Google actively
recommends switching to Maximise conversions; that strategy does not support a
max CPC cap at all, so switching would have removed the ₹100 ceiling entirely.
The requirement was a hard cap, so the strategy stays.

## ✅ 2. Daily budget: ₹500.00 → ₹250.00

Verified — both the summary line and the Budget row read ₹250.00/day.

Raising the bid cap without this would have let spend climb from ₹104/day
toward ₹500/day, roughly 5x, on an account already warning *"Balance is
running low"*. ₹250 roughly doubles headroom instead, caps exposure at about
₹7,500/month, and still gives a readable test in 30 days.

## ⚠️ 3. Keyword cleanup — NOT applied, state uncertain on one keyword

A filter of `Impr. = 0` over the last 30 days returns exactly **21 keywords**,
together producing 0 impressions, 0 clicks and ₹0.00 cost. Pausing them costs
nothing and removes the dilution dragging Quality Score.

Bulk pause was attempted on all 21 and **did not apply** — confirmed by
reloading: all 21 still show Enabled/Eligible. A second attempt via the
per-row status menu was made on **"commercial window repair"** only, and the
page hung mid-action, so that single keyword's state is unknown. Everything
else is definitely unchanged.

Two of the 21 are outright mistakes worth deleting rather than pausing:

  "shop front shutters costshopfront installation"   two keywords, no separator
  "Free On-Site Quotes"                              ad copy, not a search term

## ❌ 4. Emergency repair ad group — not started

Intended: move "emergency shutter repair near me" into its own ad group
pointing at **/services/shutter-repair**, which is live and already relevant.
That page choice avoids any site change during the September spam rollout and
also addresses the low Quality Score on "roller shutter repairs".

Rationale: "emergency shutter repair near me" converted at **₹154 per
conversion** against ₹607 and ₹707 for the other two converting keywords —
roughly 5x more efficient — on 8 impressions in a month.

## Net effect now live

Bid ceiling ₹100 (hard), daily budget ₹250. The throttle is released and
exposure is capped. Expect CPC to rise toward ₹100 and daily spend to rise
from ~₹104 toward ₹250 as the campaign starts winning auctions it previously
could not enter.

Worth watching: the account balance warning, and whether the extra volume
converts at anything near the ₹1,040 blended cost per conversion.

---

# Session 2 — 1 October 2026, evening

## The real cause of "clicks but no leads"

**There is one ad in the ad group, and its Final URL is the bare domain —
the homepage.** All 42 keywords point at it, including "emergency shutter
repair near me", "roller shutter repairs" and "roller shutter door repairs".

Someone whose shutter has just failed searches, clicks, lands on a general
company homepage, and has to go hunting. That is the leak.

For contrast, the competitor ranking for these terms —
sandkshopfronts.co.uk — runs a dedicated page at
`/emergency-roller-shutter-repairs.html`. Same searcher, they get their exact
problem; Grewal gives them a homepage.

Ad strength is only "Average", and there is no second ad to test against.

## Competitor URL structures — Grewal's is normal

| Site | Pattern |
|---|---|
| shopfrontsbirmingham.co.uk | `/services/{service}` — identical to Grewal |
| sandkshopfronts.co.uk | flat `.html`, keyword-in-filename |
| shopfrontcompany.co.uk | `/near-me/{county}/` — ~48 counties |

`/services/{service}` is the industry-standard pattern and a direct Birmingham
competitor uses exactly it. There is no "copied product style" problem and
nothing to gain from changing the URL shape.

What no competitor does is a 574-page city x service cross-product. The
closest is county-level at ~48 pages. That, not the URL shape, is the unusual
part of the setup.

## Is Grewal suppressed by Urban? No

Zero pages in any duplicate bucket on any of the three properties, and the
top-10 query lists share exactly one term ("shopfronts"). Grewal surfaces for
Wolverhampton, Acocks Green and Quinton; Urban for London. They are not
competing for the same searches. Grewal's problem is position 52, not
suppression — and a 301 carries the ranking assessment with it, so moving URLs
would not reset anything.

## Status of the four changes

| # | Change | Status |
|---|---|---|
| 1 | Max CPC ₹80 → ₹100 | **done**, confirmed in change history 15:51 |
| 2 | Budget ₹500 → ₹250 | **done**, confirmed in change history 15:58 |
| 3 | Pause 21 zero-impression keywords | **1 of 21 done** (19:45). 20 remain |
| 4 | Emergency repair ad group | not built |

Change history for 1 Oct shows exactly three entries, all manual, all from
this session. **Auto-apply recommendations is OFF** (0 of 7 and 0 of 14
selected), so nothing is silently rewriting settings.

## Unresolved — check this

The Ad groups page header displayed **"Budget: ₹550.00/day"** while change
history records the decrease to ₹250 and no later increase. ₹550 is also
exactly the figure on Google's "Get 1 more click a week" recommendation card,
which is too close to be coincidence. The browser disconnected before this
could be confirmed either way.

**Open the campaign and read the budget field.** If it says ₹550, set it back
to ₹250; if ₹250, the header was a stale display.

Today's spend of ₹400.54 is consistent with a ₹250 budget — Google permits up
to 2x the daily average on any given day (₹500 ceiling).

## The bid change is already working

Today: **86 impressions, 8 clicks, ₹400.54, avg CPC ₹50.07**, 0 conversions.

The 30-day average before today was roughly 17 impressions a day. 86 in one
day is about a 5x increase. Releasing the bid throttle did what it was meant
to. Avg CPC is ₹50.07, still well under the ₹100 ceiling.

Zero conversions today means nothing yet — the change went live the same day.

## Also found

A second ad group exists: **"Ad group 2", type Dynamic, Paused**, 0
impressions. Dynamic Search Ads generate landing pages automatically from the
site. Leave it paused.
