import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const ZANZIBAR_HIGHLIGHTS = [
  'Historic Stone Town — UNESCO-recognized winding alleys, bazaars, and Arab merchant houses',
  'Spice Island Tours — fragrant plantations of cloves, nutmeg, cinnamon, and vanilla',
  'Jozani Chwaka Bay Forest — encounter Zanzibar’s rare endemic Red Colobus Monkeys',
  'Fringing Coral Reefs & Powder Sands — 25 miles off the Tanzanian coast in the Indian Ocean',
];

export const ExploreZanzibarSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="zanzibar" className="py-20 lg:py-28 bg-[#1f335c] text-white">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[16/10] overflow-hidden rounded-sm bg-[#162647]">
              <ImageWithFallback
                src="/images/opr/activities-1.jpg"
                alt="Traditional sailing waters off Zanzibar's North East coast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#162647]">
              <ImageWithFallback
                src="/images/opr/beach-1.jpg"
                alt="Powder-white sand and coral reef horizon in Pwani Mchangani, Zanzibar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#162647]">
              <ImageWithFallback
                src="/images/opr/activities-4.jpg"
                alt="Zanzibar marine excursions and coastal dhow views"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#5ee0ec] mb-3">
              Explore Zanzibar
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-white leading-[1.15] text-balance mb-5">
              Discover the Magic of the Spice Island
            </h2>
            <p className="text-[15px] text-white/85 leading-relaxed mb-6">
              Located 25 miles off the Tanzanian coast and 6° south of the equator, the Zanzibar
              archipelago blends Swahili, Arab, and coastal African heritage with extraordinary
              beaches and fringing coral reefs. Our resort Tour Office curates private island
              excursions directly from reception.
            </p>

            <ul className="space-y-3 mb-8">
              {ZANZIBAR_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#5ee0ec] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#1f335c] bg-white hover:bg-[#00afc0] hover:text-white transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Discover Zanzibar</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zanzibar-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white text-[#1e293b] max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-slate-100">
              <ImageWithFallback
                src="/images/opr/zanzibar-about.jpg"
                alt="Zanzibar archipelago coastline"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close Zanzibar guide"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 id="zanzibar-modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[#1f335c] mb-3">
                About Zanzibar &amp; Island Excursions
              </h3>
              <p className="text-sm text-[#394554] leading-relaxed mb-4">
                Unguja Island (known internationally as Zanzibar) measures 60 miles long by 20
                miles wide and is home to Stone Town—East Africa’s living ancient coastal city,
                virtually unchanged over two centuries of spice trade history.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#f7fafb] border border-slate-200 rounded-sm text-sm mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#596575]">Time Zone</p>
                  <p className="font-medium text-[#1f335c] mt-0.5 tabular-nums">GMT + 3</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#596575]">Currency</p>
                  <p className="font-medium text-[#1f335c] mt-0.5">
                    Tanzanian Shilling (TSh) · USD (2006+), EUR &amp; polymer GBP accepted
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href="https://oceanparadisezanzibar.com/about-zanzibar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>Full Zanzibar Travel Guide</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-200 rounded-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
