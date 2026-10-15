'use client';

import { reportAdsConversion } from '@/lib/ads-conversions';

import { useState, FormEvent } from 'react';
import { getSessionId } from '@/lib/session';

const cities = [
  'Coventry', 'Birmingham', 'Leicester', 'Wolverhampton', 'Northampton',
  'Nottingham', 'Derby', 'Manchester', 'Sheffield', 'Bristol', 'London', 'Other',
];

// Mirrors data/services.ts — a visitor must not be able to enquire
// about something we do not offer.
const serviceOptions = [
  'Emergency Callout', 'Shutter Repair', 'Shopfront Repairs', 'Glass Replacement',
  'Aluminium Shopfronts', 'Glass Shopfronts', 'Roller Shutters', 'Security Doors',
  'Fire Doors', 'Automatic Doors', 'Aluminium Doors', 'Bi-Fold Doors',
  'Aluminium Windows', 'Curtain Walling', 'Other',
];

// Shown only when the page passes `garage` (the garage door pages, once live).
const garageServices = ['Garage Door Repair', 'New Garage Door'];
const garageKinds = ['Roller', 'Sectional', 'Up-and-over', 'Side-hinged', 'Don’t know'];
const timescales = ['Urgent', 'In the next few weeks', 'No fixed date yet'];
const POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

const hearAboutOptions = [
  'Recommended by someone', 'Google Search', 'Returning customer', 'Google Maps',
  'Social Media', 'Other',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  locationOther: string;
  service: string;
  message: string;
  hearAbout: string;
  postcode: string;
  timescale: string;
  garageKind: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  locationOther?: string;
  service?: string;
  postcode?: string;
}

interface ContactFormProps {
  defaultCity?: string;
  /** Chooses the service up front. */
  presetService?: string;
  /** Lists the garage door services. */
  garage?: boolean;
}

export default function ContactForm({ defaultCity, presetService, garage = false }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: defaultCity || '',
    locationOther: '',
    service: presetService || '',
    message: '',
    hearAbout: '',
    postcode: '',
    timescale: '',
    garageKind: '',
  });
  const services = garage ? [...serviceOptions.filter((o) => o !== 'Other'), ...garageServices, 'Other'] : serviceOptions;
  const garageJob = garageServices.includes(form.service);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^[\d\s\+\-\(\)]{7,}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number.';
    }
    if (!form.location) e.location = 'Please select your location.';
    if (form.location === 'Other' && !form.locationOther.trim()) {
      e.locationOther = 'Please specify your location.';
    }
    if (!form.service) e.service = 'Please select a service.';
    if (form.postcode.trim() && !POSTCODE.test(form.postcode.trim())) e.postcode = 'That doesn’t look like a UK postcode — check it or leave it empty.';
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          location: form.location === 'Other' ? form.locationOther : form.location,
          service: form.service,
          message: form.message || undefined,
          source: form.hearAbout || undefined,
          sessionId: getSessionId(),
          postcode: form.postcode.trim() || undefined,
          timescale: form.timescale || undefined,
          garageKind: garageJob ? form.garageKind || undefined : undefined,
          // Path only; a query string could carry something personal.
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      // GTM hook: service and page only, nothing the visitor typed.
      (window as unknown as { dataLayer?: object[] }).dataLayer?.push({ event: 'contact_form_sent', service: form.service, page: window.location.pathname });
      reportAdsConversion('lead');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try calling us on 07597 630000.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">Request Sent!</h3>
        <p className="text-grey-600 mb-1">Thanks. We usually reply the same working day.</p>
        <p className="text-grey-500 text-sm">
          For urgent enquiries call{' '}
          <a href="tel:07597630000" className="text-gold font-semibold hover:underline">
            07597 630000
          </a>
        </p>
      </div>
    );
  }

  const optionalSelect =
    'w-full px-4 py-3 rounded-lg border border-grey-200 hover:border-grey-300 text-sm font-body bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors cursor-pointer';

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body bg-white text-charcoal placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
      errors[field] ? 'border-red-400' : 'border-grey-200 hover:border-grey-300'
    }`;

  const selectClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors appearance-none cursor-pointer ${
      errors[field] ? 'border-red-400' : 'border-grey-200 hover:border-grey-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-1.5">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass('fullName')}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass('phone')}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-navy mb-1.5">
            Town or city <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className={selectClass('location')}
              aria-describedby={errors.location ? 'location-error' : undefined}
            >
              <option value="">Choose a town</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          {errors.location && (
            <p id="location-error" className="mt-1 text-xs text-red-500">{errors.location}</p>
          )}
        </div>
      </div>

      {form.location === 'Other' && (
        <div>
          <label htmlFor="locationOther" className="block text-sm font-semibold text-navy mb-1.5">
            Specify Location <span className="text-red-500">*</span>
          </label>
          <input
            id="locationOther"
            name="locationOther"
            type="text"
            placeholder="Your town or city"
            value={form.locationOther}
            onChange={handleChange}
            className={inputClass('locationOther')}
            aria-describedby={errors.locationOther ? 'locationOther-error' : undefined}
          />
          {errors.locationOther && (
            <p id="locationOther-error" className="mt-1 text-xs text-red-500">{errors.locationOther}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1.5">
          What do you need? <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={selectClass('service')}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Choose one</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 4l4 4 4-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {errors.service && (
          <p id="service-error" className="mt-1 text-xs text-red-500">{errors.service}</p>
        )}
      </div>

      {garageJob && (
        <div>
          <label htmlFor="garageKind" className="block text-sm font-semibold text-navy mb-1.5">
            Garage door type <span className="text-grey-400 font-normal">(optional)</span>
          </label>
          <select id="garageKind" name="garageKind" value={form.garageKind} onChange={handleChange} className={optionalSelect}>
            <option value="">Select...</option>
            {garageKinds.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="postcode" className="block text-sm font-semibold text-navy mb-1.5">
            Postcode <span className="text-grey-400 font-normal">(optional)</span>
          </label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            placeholder="CV7 9FB"
            value={form.postcode}
            onChange={handleChange}
            className={inputClass('postcode')}
            aria-describedby={errors.postcode ? 'postcode-error' : undefined}
          />
          {errors.postcode && (
            <p id="postcode-error" className="mt-1 text-xs text-red-500">{errors.postcode}</p>
          )}
        </div>
        <div>
          <label htmlFor="timescale" className="block text-sm font-semibold text-navy mb-1.5">
            When do you need it? <span className="text-grey-400 font-normal">(optional)</span>
          </label>
          <select id="timescale" name="timescale" value={form.timescale} onChange={handleChange} className={optionalSelect}>
            <option value="">Select...</option>
            {timescales.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Anything else? <span className="text-grey-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Size, what is wrong, when you need it…"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-grey-200 hover:border-grey-300 text-sm font-body bg-white text-charcoal placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
        />
      </div>

      <div>
        <label htmlFor="hearAbout" className="block text-sm font-semibold text-navy mb-1.5">
          Where did you find us? <span className="text-grey-400 font-normal">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="hearAbout"
            name="hearAbout"
            value={form.hearAbout}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-grey-200 hover:border-grey-300 text-sm font-body bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select...</option>
            {hearAboutOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 4l4 4 4-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-navy font-heading font-bold py-3.5 px-6 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send'
        )}
      </button>

      <p className="text-sm text-green-600 font-medium text-center">
        We usually reply the same working day
      </p>

      <p className="text-center text-xs text-grey-400">
        Or call us directly:{' '}
        <a href="tel:07597630000" className="text-gold font-semibold hover:underline">
          07597 630000
        </a>
      </p>
    </form>
  );
}
