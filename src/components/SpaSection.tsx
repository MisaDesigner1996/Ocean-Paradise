import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const SPA_HIGHLIGHTS = [
  '4 private African-themed massage treatment rooms',
  '2 relaxing Jacuzzis with hot & cold plunge tubs',
  'Traditional steam room & dry sauna',
  'Restorative massages, facials, and body, hand & foot rituals',
];

export const SpaSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="spa" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[16/10] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/spa-jacuzzi.jpg"
                alt="Hot and cold plunge Jacuzzis inside the Ocean Paradise Spa sanctuary"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/spa-lounge.jpg"
                alt="Relaxation lounge inside the Ocean Paradise African-themed spa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/spa-reception.jpg"
                alt="Tranquil reception at the Ocean Paradise Resort & Spa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Spa &amp; Wellness
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1f335c] leading-[1.15] text-balance mb-5">
              An African Sanctuary of Calm &amp; Tranquillity
            </h2>
            <p className="text-[15px] text-[#394554] leading-relaxed mb-6">
              Relax, indulge, and spoil yourself in our African-themed spa. Unwind with a luxurious
              soak in the hot tub or awaken your senses with a dip in the cold plunge—ideal after a
              day on the ocean or returning from an East African safari.
            </p>

            <ul className="space-y-3 mb-8">
              {SPA_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#394554]">
                  <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Discover More</span>
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
          aria-labelledby="spa-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-sm shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <ImageWithFallback
                src="/images/opr/spa-lounge.jpg"
                alt="Ocean Paradise Spa Sanctuary"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close spa details"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 id="spa-modal-title" className="font-display text-2xl font-medium text-[#1f335c] mb-3">
                Spa &amp; Wellness Sanctuary
              </h3>
              <p className="text-sm text-[#394554] leading-relaxed mb-5">
                Whether you need to recover from an adventure-filled safari or simply wish to be
                pampered, our therapists offer massages, holistic therapies, facials, and body,
                hand, and foot treatments alongside 4 massage rooms, 2 Jacuzzis, a steam room,
                sauna, and fitness centre.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href="https://oceanparadisezanzibar.com/health-recreation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>Official Health &amp; Spa Page</span>
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
