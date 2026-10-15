'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { useExitIntent, useModalChrome } from '@/lib/exit-intent';

/**
 * Re-engagement banner. It leads with plain facts about the firm rather than a
 * quote: customer words are never written by us, and no review text has been
 * supplied to show here. The trigger logic lives in lib/exit-intent.ts.
 */

const FACTS = [
  { value: '2004', label: 'Trading since' },
  { value: 'Free', label: 'Surveys and written prices' },
  { value: '24/7', label: 'Emergency line, local area' },
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

        <div className="px-7 pt-9 pb-6">
          <h2 id="exit-banner-title" className="font-heading text-[1.35rem] font-bold leading-snug text-[#1A1A1A]">
            Before you go: want a rough price for your job?
          </h2>
          <p className="mt-3 text-sm text-[#4A4A4A]">
            Shopfronts, shutters and commercial doors, made and fitted from our base in Exhall, Coventry.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px border-y border-[#E5DDD0] bg-[#E5DDD0]">
          {FACTS.map((s) => (
            <div key={s.label} className="bg-[#F9F7F4] px-3 py-4 text-center">
              <p className="font-heading text-2xl font-extrabold text-[#C9A84C]">{s.value}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-[#4A4A4A]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="px-7 py-6">
          <p className="mb-4 text-sm leading-relaxed text-[#4A4A4A]">
            The estimator gives you a guide figure in about a minute. If it looks right, a survey and
            written price cost nothing and commit you to nothing.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/instant-quote"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3.5 font-heading text-sm font-bold text-[#1A1A1A] no-underline transition-colors hover:bg-[#F0D080]"
            >
              Try the estimator
            </Link>
            <a
              href="tel:07597630000"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#1A1A1A] px-6 py-3.5 font-heading text-sm font-bold text-[#1A1A1A] no-underline transition-colors hover:bg-[#1A1A1A] hover:text-white"
            >
              Call 07597 630000
            </a>
          </div>
          <p className="mt-3.5 text-center text-[0.72rem] leading-snug text-[#6B6B6B]">
            Your figure appears on screen straight away, with a copy by email.
          </p>
          <button
            onClick={onClose}
            className="mt-3 w-full text-center text-xs text-[#888888] underline-offset-2 hover:underline"
          >
            Not now, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
