import PrintButton from './PrintButton';

const COMPANY_NAME = 'GREWAL SHOPFRONT & SHUTTERS';
const COMPANY_ADDRESS = '31 Trelawney Road, Exhall, Coventry, CV7 9FB';
const COMPANY_PHONE = '07597 630000';
const COMPANY_EMAIL = 'info@grewalshopfrontandshutters.co.uk';
const COMPANY_SITE = 'www.grewalshopfrontandshutters.co.uk';
const LOGO_SRC = '/assets/grewal-icon-512.png';
const VAT_NUMBER = '506 3260 22';
const REG_NUMBER = '16710475';
const BANK = {
  accountName: 'GREWAL SHOPFRONT & SHUTTERS LTD',
  bank: 'Revolut Ltd',
  accountNumber: '64863139',
  sortCode: '23-01-20',
};

const C = {
  brand:     '#064e3b',
  brandDark: '#022c22',
  accent:    '#d97706',
  accentBg:  '#fef3c7',
  text:      '#1c1917',
  textMuted: '#78716c',
  border:    '#d6d3d1',
  borderAlt: '#e7e5e4',
  paper:     '#ffffff',
  rowAlt:    '#fafaf9',
  headerBg:  '#064e3b',
};

interface LineItem { description: string; qty: number; unitPrice: number; isOption?: boolean }
interface DocumentMeta { projectReference?: string; scope?: string; specifications?: string; leadTime?: string; photoDrawing?: string }

interface DocumentData {
  id: string; type: string; number: string;
  customerName: string; customerEmail: string | null; customerPhone: string | null; customerAddress: string | null;
  lineItems: LineItem[]; subtotal: number; vatRate: number; vatAmount: number; total: number;
  notes: string | null; meta: DocumentMeta | null; depositPercent: number | null;
  issueDate: string | Date | null; validUntil: string | Date | null; dueDate: string | Date | null;
  status: string; createdAt: string | Date;
}

function fmt(d: string | Date | null) { return d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null; }
function gbp(n: number) { return '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function SpecLines({ text }: { text: string }) {
  return (
    <div style={{ lineHeight: '1.7' }}>
      {text.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 6 }} />;
        if (t.endsWith(':')) return <p key={i} style={{ fontWeight: 700, color: C.brand, marginTop: 8 }}>{t}</p>;
        return <p key={i} style={{ paddingLeft: 18, position: 'relative' }}><span style={{ position: 'absolute', left: 4, color: C.accent }}>{'▸'}</span>{t}</p>;
      })}
    </div>
  );
}

export default function DocumentView({ doc }: { doc: DocumentData }) {
  const isInvoice = doc.type === 'invoice';
  const meta = doc.meta || {};
  const title = isInvoice ? 'INVOICE' : 'QUOTATION';
  const vat = doc.vatRate > 0;
  const deposit = isInvoice && doc.depositPercent && doc.depositPercent > 0 ? (doc.total * doc.depositPercent) / 100 : null;
  const balance = deposit !== null ? doc.total - deposit : null;

  // Option lines are alternatives to each other, not additions. They stay out
  // of the subtotal and are priced individually below, so a customer choosing
  // between single and double glazing is never shown the sum of both.
  const optionItems = doc.lineItems.filter((li) => li.isOption);
  const baseItems = doc.lineItems.filter((li) => !li.isOption);
  const hasOptions = optionItems.length > 0;
  const optionLetter = (i: number) => String.fromCharCode(65 + i);
  const optionTotal = (li: LineItem) => {
    const net = doc.subtotal + li.qty * li.unitPrice;
    const tax = net * (doc.vatRate / 100);
    return { net, tax, gross: net + tax };
  };
  // With options there is no single VAT figure — each option carries its own,
  // so the aggregate Subtotal/VAT rows are suppressed and VAT is shown against
  // each option instead. The shared-items row only appears if there are any.
  const hasSharedItems = baseItems.length > 0;
  const displayDate = doc.issueDate || doc.createdAt;
  const validityDays = doc.validUntil
    ? Math.max(1, Math.round((new Date(doc.validUntil).getTime() - new Date(displayDate).getTime()) / 86400000))
    : null;

  const intro = isInvoice
    ? 'Thank you for choosing Grewal Shopfront & Shutters. Please find your invoice for the completed works below.'
    : 'We appreciate your enquiry and are delighted to present our quotation for the supply and installation works as discussed.';

  const terms: string[] = isInvoice
    ? [
        vat ? 'All prices include 20% VAT.' : 'No VAT applied.',
        deposit !== null ? `${doc.depositPercent}% deposit required to confirm.` : 'Payment due on completion unless agreed otherwise.',
        'Reference the invoice number for all payments.',
        'Works carried out by certified professionals with premium materials.',
      ]
    : [
        vat ? 'Prices include 20% VAT.' : 'Prices shown are final.',
        'Any additional works will be quoted separately.',
        validityDays ? `This quote is valid for ${validityDays} days.` : 'Valid for 15 days from issue.',
        'Payment on completion unless agreed otherwise.',
        'All works by certified engineers using premium-grade materials.',
      ];

  return (
    <div className="min-h-screen py-10 px-4 print:bg-white print:py-0 print:px-0" style={{ background: 'linear-gradient(160deg, #0a1f18 0%, #0d2818 40%, #071210 100%)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
      <div style={{ maxWidth: '210mm', margin: '0 auto' }}>
        <div className="no-print flex items-center justify-between mb-5">
          <p style={{ color: '#6ee7b7', fontSize: 13, fontFamily: 'var(--font-heading)', opacity: 0.7 }}>
            {isInvoice ? 'Invoice' : 'Quotation'} &middot; {doc.number}
          </p>
          <PrintButton />
        </div>

        <div style={{ background: C.paper, fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', fontSize: '14px', lineHeight: 1.6, color: C.text, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', borderRadius: 6, overflow: 'hidden' }} className="print:shadow-none print:rounded-none">

          {/* Full-width dark green header */}
          <div style={{ background: C.headerBg, padding: '36px 44px 32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${C.accent}, ${C.accent}88, transparent)` }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_SRC} alt="" style={{ width: 64, height: 64, borderRadius: 12, border: '2px solid rgba(255,255,255,0.15)' }} />
                <div>
                  <h1 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', letterSpacing: '1px', margin: 0, lineHeight: 1.2 }}>{COMPANY_NAME}</h1>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>
                    {COMPANY_ADDRESS}
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                    {COMPANY_PHONE} &nbsp;|&nbsp; {COMPANY_SITE}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 11, color: C.accent, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>{title}</p>
                <p style={{ fontSize: 32, fontWeight: 900, color: '#ffffff', margin: '4px 0 0', letterSpacing: '-0.5px' }}>{doc.number}</p>
              </div>
            </div>
          </div>

          <div style={{ padding: '32px 44px 44px' }}>
            {/* Date bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '12px 18px', background: C.accentBg, borderRadius: 8, marginBottom: 28, fontSize: 13 }}>
              <span><strong style={{ color: C.brand }}>Date:</strong> {fmt(displayDate)}</span>
              {!isInvoice && doc.validUntil && <span><strong style={{ color: C.brand }}>Valid Until:</strong> {fmt(doc.validUntil)}</span>}
              {isInvoice && doc.dueDate && <span><strong style={{ color: C.brand }}>Payment Due:</strong> {fmt(doc.dueDate)}</span>}
              {meta.projectReference && <span><strong style={{ color: C.brand }}>Ref:</strong> {meta.projectReference}</span>}
              <span><strong style={{ color: C.brand }}>VAT:</strong> {VAT_NUMBER}</span>
              <span><strong style={{ color: C.brand }}>Reg:</strong> {REG_NUMBER}</span>
            </div>

            {/* Customer card */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: C.accent, marginBottom: 10 }}>
                {isInvoice ? 'Billed To' : 'Prepared For'}
              </p>
              <div style={{ padding: '16px 20px', border: `2px solid ${C.brand}`, borderRadius: 10, background: '#f0fdf4' }}>
                <p style={{ fontWeight: 800, color: C.brand, fontSize: 17, marginBottom: 4 }}>{doc.customerName}</p>
                {doc.customerAddress && <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>{doc.customerAddress}</p>}
                <div style={{ display: 'flex', gap: 20, marginTop: 4, fontSize: 13, color: C.textMuted }}>
                  {doc.customerPhone && <span>{doc.customerPhone}</span>}
                  {doc.customerEmail && <span>{doc.customerEmail}</span>}
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 28, lineHeight: 1.8, borderLeft: `3px solid ${C.accent}`, paddingLeft: 16 }}>{intro}</p>

            {/* Scope */}
            {!isInvoice && meta.scope && (
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontWeight: 700, color: C.brand, fontSize: 13, marginBottom: 8, letterSpacing: '0.5px' }}>SCOPE OF WORK</p>
                <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.9 }}>
                  {meta.scope.split('\n').filter((l) => l.trim()).map((l, i) => <li key={i} style={{ fontSize: 13, color: C.text }}>{l.trim()}</li>)}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {!isInvoice && meta.specifications && (
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontWeight: 700, color: C.brand, fontSize: 13, marginBottom: 8, letterSpacing: '0.5px' }}>SPECIFICATIONS</p>
                <SpecLines text={meta.specifications} />
              </div>
            )}

            {!isInvoice && meta.photoDrawing && (
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontWeight: 700, color: C.brand, fontSize: 13, marginBottom: 8, letterSpacing: '0.5px' }}>PHOTO / DRAWING</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={meta.photoDrawing} alt="Photo / Drawing" style={{ maxWidth: '100%', maxHeight: 400, borderRadius: 8, border: `1px solid ${C.border}` }} />
              </div>
            )}

            {/* Line items — rounded table */}
            <div style={{ borderRadius: 10, overflow: 'hidden', border: `1px solid ${C.border}`, marginBottom: 8 }}>
              <table className="doc-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: C.brand }}>
                    <th style={{ color: '#fff', padding: '11px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 44 }}>#</th>
                    <th style={{ color: '#fff', padding: '11px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Description</th>
                    <th style={{ color: '#fff', padding: '11px 16px', textAlign: 'center', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 56 }}>Qty</th>
                    <th style={{ color: '#fff', padding: '11px 16px', textAlign: 'right', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 100 }}>Rate</th>
                    <th style={{ color: '#fff', padding: '11px 16px', textAlign: 'right', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 110 }}>{vat ? 'Amount' : 'Total'}</th>
                  </tr>
                </thead>
                <tbody>
                  {baseItems.map((li, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? C.paper : C.rowAlt, borderBottom: `1px solid ${C.borderAlt}` }}>
                      <td style={{ padding: '14px 16px', fontWeight: 600, color: C.accent, fontSize: 13 }}>{String(idx + 1).padStart(2, '0')}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <p style={{ fontWeight: 600, color: C.text, fontSize: 14, margin: 0 }}>{li.description}</p>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'center', color: C.textMuted, fontSize: 13 }}>{li.qty}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'right', color: C.textMuted, fontSize: 13 }}>{gbp(li.unitPrice)}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 700, color: C.brand, fontSize: 15 }}>{gbp(li.qty * li.unitPrice)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {hasOptions && (
              <div className="doc-keep" style={{ marginTop: 18, marginBottom: 4 }}>
                <p className="doc-heading" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: C.brand, marginBottom: 2 }}>
                  Choose one option
                </p>
                <p style={{ fontSize: 12, color: C.textMuted, marginTop: 0, marginBottom: 10 }}>
                  These are alternatives — the price below is the full cost for that choice, not an addition.
                </p>
                <table className="doc-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {optionItems.map((li, i) => {
                      const t = optionTotal(li);
                      return (
                        <tr key={i} style={{ borderBottom: `1px solid ${C.borderAlt}` }}>
                          <td style={{ padding: '12px 14px', width: 44, verticalAlign: 'top' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 13, background: C.brand, color: '#fff', fontSize: 13, fontWeight: 700 }}>
                              {optionLetter(i)}
                            </span>
                          </td>
                          <td style={{ padding: '12px 14px' }}>
                            <p style={{ fontWeight: 600, color: C.brand, fontSize: 14, margin: 0 }}>{li.description}</p>
                            {li.qty > 1 && (
                              <p style={{ fontSize: 12, color: C.textMuted, margin: '2px 0 0' }}>{li.qty} × {gbp(li.unitPrice)}</p>
                            )}
                          </td>
                          <td style={{ padding: '12px 14px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>{gbp(t.net)}{vat ? ` + ${gbp(t.tax)} VAT` : ''}</p>
                            <p style={{ fontSize: 17, fontWeight: 800, color: C.brand, margin: '2px 0 0' }}>{gbp(t.gross)}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Lead time */}
            {!isInvoice && meta.leadTime && (
              <p style={{ margin: '16px 0 24px', fontWeight: 600, color: C.brand, fontSize: 13 }}>
                Estimated Lead Time: <span style={{ fontWeight: 400, color: C.text }}>{meta.leadTime}</span>
              </p>
            )}

            {/* Totals — right aligned, full width row */}
            <div style={{ marginTop: 24, marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: 300 }}>
                  {(!hasOptions || hasSharedItems) && (
                  <div className="doc-keep" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.borderAlt}` }}>
                    <span style={{ fontSize: 13, color: C.textMuted }}>{hasOptions ? 'Included in every option' : 'Subtotal'}</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{gbp(doc.subtotal)}</span>
                  </div>
                  )}
                  {vat && !hasOptions && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.borderAlt}` }}>
                      <span style={{ fontSize: 13, color: C.textMuted }}>VAT ({doc.vatRate}%)</span>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{gbp(doc.vatAmount)}</span>
                    </div>
                  )}
                  {hasOptions ? (
                    <>
                      {optionItems.map((li, oi) => {
                        const t = optionTotal(li);
                        return (
                          <div key={oi} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 18px', background: C.brand, borderRadius: 8, marginBottom: 6, alignItems: 'center' }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}>Option {optionLetter(oi)} {vat ? '(Inc. VAT)' : ''}</span>
                            <span style={{ fontSize: 19, fontWeight: 900, color: '#fff' }}>{gbp(t.gross)}</span>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', background: C.brand, borderRadius: 8, marginTop: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}>Total {vat ? '(Inc. VAT)' : ''}</span>
                    <span style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>{gbp(doc.total)}</span>
                  </div>
                  )}
                  {deposit !== null && balance !== null && (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 18px', background: C.accentBg, borderRadius: '0 0 8px 8px', marginTop: 2 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: C.brand }}>{doc.depositPercent}% Deposit</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: C.accent }}>{gbp(deposit)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 18px' }}>
                        <span style={{ fontSize: 13, color: C.textMuted }}>Balance Due</span>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{gbp(balance)}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Bank details */}
            <div className="doc-keep" style={{ padding: '14px 20px', background: '#f0fdf4', border: `1px solid #bbf7d0`, borderRadius: 8, marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: C.brand, marginBottom: 8, textTransform: 'uppercase' }}>Payment Details</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px', fontSize: 13 }}>
                <p><span style={{ fontWeight: 600, color: C.brand }}>Account:</span> {BANK.accountName}</p>
                <p><span style={{ fontWeight: 600, color: C.brand }}>Bank:</span> {BANK.bank}</p>
                <p><span style={{ fontWeight: 600, color: C.brand }}>Sort Code:</span> {BANK.sortCode}</p>
                <p><span style={{ fontWeight: 600, color: C.brand }}>Account No:</span> {BANK.accountNumber}</p>
              </div>
            </div>

            {/* Terms */}
            <div style={{ marginBottom: 28 }}>
              <p className="doc-heading" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: C.brand, marginBottom: 8, textTransform: 'uppercase' }}>Terms &amp; Conditions</p>
              <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.9 }}>
                {terms.map((t, i) => <p key={i} style={{ margin: '2px 0', paddingLeft: 16, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: C.accent, fontWeight: 700 }}>{i + 1}.</span>{t}</p>)}
              </div>
              {doc.notes && (
                <div style={{ marginTop: 12, padding: '12px 16px', background: C.accentBg, borderRadius: 8, borderLeft: `3px solid ${C.accent}`, fontSize: 12 }}>
                  <p style={{ fontWeight: 700, color: C.brand, marginBottom: 4 }}>Notes</p>
                  <p style={{ color: C.text, whiteSpace: 'pre-wrap' }}>{doc.notes}</p>
                </div>
              )}
            </div>

            {/* Closing */}
            <div style={{ textAlign: 'center', padding: '20px 0 8px', borderTop: `1px solid ${C.borderAlt}` }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: C.brand, marginBottom: 2 }}>
                {isInvoice ? 'Thank you for your business.' : 'Thank you for considering Grewal Shopfront & Shutters.'}
              </p>
              <p style={{ fontSize: 12, color: C.textMuted }}>We look forward to working with you.</p>
            </div>
          </div>

          {/* Footer — thin accent line + centered text */}
          <div style={{ borderTop: `3px solid ${C.accent}`, padding: '12px 44px', textAlign: 'center', background: '#fafaf9' }}>
            <p style={{ fontSize: 11, color: C.textMuted, margin: 0 }}>
              {COMPANY_NAME} &nbsp;&middot;&nbsp; Reg. {REG_NUMBER} &nbsp;&middot;&nbsp; {COMPANY_ADDRESS}
            </p>
            <p style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>
              {COMPANY_PHONE} &nbsp;&middot;&nbsp; {COMPANY_EMAIL} &nbsp;&middot;&nbsp; {COMPANY_SITE}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
