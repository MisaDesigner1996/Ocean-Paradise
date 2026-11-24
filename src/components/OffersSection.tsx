import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

export const OffersSection: React.FC = () => {
  const [activeOffer, setActiveOffer] = useState<SpecialOffer | null>(null);

  const scrollToBooking = () => {
    setActiveOffer(null);
    const el = document.querySelector('#booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="offers" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Official Resort Offers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15] text-balance">
              Special Offers &amp; Stay Privileges
            </h2>
          </div>
          <p className="text-[15px] text-[#596575] max-w-md leading-relaxed">
            All year long, Ocean Paradise guarantees the best available rates when reserving
            directly through our official website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <article
              key={offer.id}
              className="group border border-slate-200/90 rounded-sm overflow-hidden bg-white flex flex-col transition-shadow duration-200 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-[#596575] mb-2 tabular-nums line-clamp-1">
                  {offer.validity}
                </p>
                <h3 className="font-display text-2xl font-medium text-[#1f335c] mb-3">
                  {offer.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                  {offer.summary}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveOffer(offer)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f335c] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>View Offer</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <a
                    href="#booking"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToBooking();
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeOffer && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveOffer(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] max-h-64 w-full bg-slate-100">
              <ImageWithFallback
                src={activeOffer.image}
                alt={activeOffer.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close offer details"
                onClick={() => setActiveOffer(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold text-[#00afc0] mb-2 tabular-nums">
                {activeOffer.validity}
              </p>
              <h3
                id="offer-modal-title"
                className="font-display text-2xl sm:text-3xl font-medium text-[#1f335c] mb-3"
              >
                {activeOffer.title}
              </h3>
              <p className="text-sm sm:text-base text-[#394554] leading-relaxed mb-5">
                {activeOffer.summary}
              </p>

              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-2.5">
                  Offer Highlights
                </h4>
                <ul className="space-y-2">
                  {activeOffer.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#394554]">
                      <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#f7fafb] border border-slate-200/80 rounded-sm mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#596575] mb-2">
                  Terms &amp; Conditions
                </h4>
                <ul className="space-y-1.5 text-xs text-[#475569] leading-relaxed">
                  {activeOffer.terms.map((term) => (
                    <li key={term}>• {term}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={activeOffer.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1f335c] border border-slate-200 hover:border-[#00afc0] rounded-sm"
                >
                  <span>Official Offer Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
