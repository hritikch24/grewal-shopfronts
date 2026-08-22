'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { useExitIntent, useModalChrome } from '@/lib/exit-intent';

/**
 * Grewal's re-engagement banner leads with proof rather than a discount:
 * this is a twenty-year-old installer whose strongest card is the work it has
 * already done, so the panel opens on a real customer, backs it with the
 * headline numbers, and only then mentions the survey offer.
 *
 * Sigma runs a deliberately different treatment — see that repo's copy of
 * this component. The trigger logic in lib/exit-intent.ts is shared verbatim.
 */

const REVIEW = {
  text:
    'After a break-in, Grewal fitted new security shutters and a reinforced entrance door within 48 hours. Their emergency response was outstanding.',
  name: 'David Hughes',
  location: 'Cardiff',
};

const STATS = [
  { value: '500+', label: 'Projects completed' },
  { value: '20+', label: 'Years installing' },
  { value: '5.0', label: 'Average rating' },
];

export default function ExitIntentPopup() {
  const { show, dismiss } = useExitIntent();
  const onClose = useCallback(() => dismiss(), [dismiss]);
  useModalChrome(show, onClose);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-banner-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#F9F7F4] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#4A4A4A] transition-colors hover:bg-black/10"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Proof first — a real job, in the customer's words. */}
        <div className="px-7 pt-9 pb-6">
          <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <blockquote
            id="exit-banner-title"
            className="font-heading text-[1.35rem] font-bold leading-snug text-[#1A1A1A]"
          >
            &ldquo;{REVIEW.text}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-[#4A4A4A]">
            <span className="font-semibold text-[#1A1A1A]">{REVIEW.name}</span> · {REVIEW.location}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px border-y border-[#E5DDD0] bg-[#E5DDD0]">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#F9F7F4] px-3 py-4 text-center">
              <p className="font-heading text-2xl font-extrabold text-[#C9A84C]">{s.value}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-[#4A4A4A]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="px-7 py-6">
          <p className="mb-4 text-sm leading-relaxed text-[#4A4A4A]">
            Before you go — a site survey and written quotation are free, and there is no
            obligation to book. Most visitors start with an indicative price, which takes about a
            minute.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/instant-quote"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3.5 font-heading text-sm font-bold text-[#1A1A1A] no-underline transition-colors hover:bg-[#F0D080]"
            >
              Get an instant price
            </Link>
            <a
              href="tel:07597630000"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#1A1A1A] px-6 py-3.5 font-heading text-sm font-bold text-[#1A1A1A] no-underline transition-colors hover:bg-[#1A1A1A] hover:text-white"
            >
              Call 07597 630000
            </a>
          </div>
          <button
            onClick={onClose}
            className="mt-3 w-full text-center text-xs text-[#888888] underline-offset-2 hover:underline"
          >
            No thanks, I&apos;m just browsing
          </button>
        </div>
      </div>
    </div>
  );
}
