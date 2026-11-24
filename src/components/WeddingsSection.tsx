import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, X } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

const HONEYMOON_HIGHLIGHTS = [
  'Fresh fruit & flower basket awaiting in your chalet on arrival',
  'Complimentary bottle of bubbly during your stay',
  'Romantic candlelit lobster dinner right on the beach',
  'Relaxing couples foot ritual massage at our sanctuary spa',
];

export const WeddingsSection: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('Beachfront Wedding');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@')) {
      setFormError('Please provide your name and a valid email address.');
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  return (
    <section id="weddings" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Weddings &amp; Honeymoons
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1f335c] leading-[1.15] text-balance mb-5">
              Romantic Celebrations by the Indian Ocean
            </h2>
            <p className="text-[15px] text-[#394554] leading-relaxed mb-6">
              Ocean Paradise is one of the most romantic settings in East Africa for an intimate
              beachfront wedding or unforgettable honeymoon. Tie the knot on powder-white sand
              with the turquoise Indian Ocean as your backdrop while our dedicated events team
              handles every detail.
            </p>

            <ul className="space-y-3 mb-8">
              {HONEYMOON_HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-[#394554]">
                  <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#596575] mb-6">
              Honeymoon verification requires an official marriage certificate issued within 6 months
              of arrival.
            </p>

            <div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setEnquiryOpen(true);
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[16/10] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/weddings-1.jpg"
                alt="Beachfront wedding ceremony setup at Ocean Paradise Resort & Spa Zanzibar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-2 aspect-[16/9] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/weddings-2.jpg"
                alt="Romantic Indian Ocean celebration at Ocean Paradise Zanzibar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {enquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wedding-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-sm shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00afc0] mb-1">
                  Weddings &amp; Honeymoons Desk
                </p>
                <h3 id="wedding-modal-title" className="font-display text-2xl font-medium text-[#1f335c]">
                  Plan Your Zanzibar Celebration
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close wedding enquiry form"
                onClick={() => setEnquiryOpen(false)}
                className="w-9 h-9 bg-slate-100 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-11 h-11 text-[#17a84b] mx-auto" aria-hidden="true" />
                <h4 className="font-display text-xl font-medium text-[#1f335c]">
                  Enquiry Prepared for Our Events Team
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Thank you, {name}. You can send your details directly via email to{' '}
                  <a
                    href={`mailto:${RESORT_CONTACT.reservationsEmail}?subject=${encodeURIComponent(
                      `${occasion} Enquiry — ${name}`
                    )}&body=${encodeURIComponent(notes || `Enquiry regarding ${occasion}.`)}`}
                    className="text-[#00afc0] font-semibold underline"
                  >
                    {RESORT_CONTACT.reservationsEmail}
                  </a>{' '}
                  or call {RESORT_CONTACT.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(false)}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#1f335c] rounded-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="wed-name" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Full Name
                  </label>
                  <input
                    id="wed-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full h-11 px-3 text-sm bg-[#f7fafb] border border-slate-200 rounded-sm focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                <div>
                  <label htmlFor="wed-email" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Email Address
                  </label>
                  <input
                    id="wed-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-11 px-3 text-sm bg-[#f7fafb] border border-slate-200 rounded-sm focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                <div>
                  <label htmlFor="wed-type" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Celebration Type
                  </label>
                  <select
                    id="wed-type"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full h-11 px-3 text-sm bg-[#f7fafb] border border-slate-200 rounded-sm focus:outline-none focus:border-[#00afc0]"
                  >
                    <option value="Beachfront Wedding">Beachfront Wedding</option>
                    <option value="Honeymoon Stay">Honeymoon Stay</option>
                    <option value="Renewal of Vows">Renewal of Vows</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="wed-notes" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Preferred Dates &amp; Guest Count
                  </label>
                  <textarea
                    id="wed-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your preferred travel dates or ceremony wishes"
                    className="w-full p-3 text-sm bg-[#f7fafb] border border-slate-200 rounded-sm focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                {formError && <p className="text-xs text-[#a92c3c] font-medium">{formError}</p>}
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  Submit Celebration Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
