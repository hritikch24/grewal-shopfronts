/**
 * Google Ads conversion tracking for this site.
 *
 * This site's campaigns run in their own Ads account (495-972-2943), but the
 * tag here was AW-16801337867 -- a different account, which does not advertise
 * this site and is currently suspended. The labels fired alongside it belonged
 * to that other account too. So the account paying for these clicks had no
 * measurement on the site at all, and every conversion action in it read
 * "Awaiting conversions" with a lifetime total of zero.
 *
 * Both actions below are website conversions in the correct account, created
 * for this domain. Keeping the id and labels in one place is the point: three
 * separate components were each carrying their own copy of the wrong pair.
 */
export const ADS_ID = 'AW-18391927258';

export const ADS_CONVERSIONS = {
  /** "Website - Phone tap" — Contact goal. Phone, WhatsApp and email taps. */
  contact: `${ADS_ID}/q19lCK7e9_gcENqT-sFE`,
  /** "Website - Quote form submit" — Submit lead form goal. */
  lead: `${ADS_ID}/LaEUCJm_8vgcENqT-sFE`,
} as const;

/** Fires one conversion, and does nothing if gtag has not loaded. */
export function reportAdsConversion(kind: keyof typeof ADS_CONVERSIONS) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'conversion', { send_to: ADS_CONVERSIONS[kind] });
}
