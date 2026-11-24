import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const EditorialZanzibarOffersCommunity: React.FC = () => {
  const [zanzibarOpen, setZanzibarOpen] = useState(false);
  const [activeOffer, setActiveOffer] = useState<SpecialOffer | null>(null);
  const [communityOpen, setCommunityOpen] = useState(false);

  const scrollToBooking = () => {
    setActiveOffer(null);
    const el = document.querySelector('#opt2-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 05 – Explore Zanzibar */}
      <section id="opt2-zanzibar" className="py-20 lg:py-28 bg-[#0b1b3a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6ce6f2] mb-4">
                05 · Explore Zanzibar
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-normal text-white leading-[1.14] text-balance mb-5">
                Culture, Coral Reefs &amp; the Spice Island
              </h2>
              <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed mb-6">
                Resting 25 miles off the Tanzanian coast and 6° south of the equator, Zanzibar
                captivates with historic Stone Town’s winding alleys, fragrant spice plantations,
                Jozani Forest’s Red Colobus Monkeys, and powder-white beaches framed by coral reefs.
              </p>

              <button
                type="button"
                onClick={() => setZanzibarOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-[#1f335c] bg-white hover:bg-[#00afc0] hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>Discover Zanzibar</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 aspect-[16/9] overflow-hidden bg-[#162b54]">
                <ImageWithFallback
                  src="/images/opr/activities-1.jpg"
                  alt="Indian Ocean waters and traditional sailing along Zanzibar's coast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#162b54]">
                <ImageWithFallback
                  src="/images/opr/beach-1.jpg"
                  alt="White sandy coastline in Pwani Mchangani, Zanzibar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#162b54]">
                <ImageWithFallback
                  src="/images/opr/activities-4.jpg"
                  alt="Zanzibar reef excursions and island exploration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 – Special Offers */}
      <section id="opt2-offers" className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0]">
                06 · Special Offers
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1f335c] leading-[1.15]">
                Verified Direct Stay Privileges
              </h2>
              <p className="text-sm text-[#596575] max-w-md leading-relaxed">
                All year long, Ocean Paradise guarantees the best available rates when reserving
                directly through our official portal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {SPECIAL_OFFERS.map((offer, index) => (
              <article key={offer.id} className="p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <span className="block text-xs font-semibold text-[#00afc0] mb-4 tabular-nums">
                    0{index + 1}
                  </span>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-6">
                    <ImageWithFallback
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-normal text-[#1f335c] mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#596575] mb-3 tabular-nums">{offer.validity}</p>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">{offer.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveOffer(offer)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1f335c] hover:text-[#00afc0] transition-colors"
                  >
                    <span>View Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollToBooking}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 – Community Project */}
      <section id="opt2-community" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="/images/opr/community-1.jpg"
                  alt="Ocean Paradise community project in Pwani Mchangani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="/images/opr/community-2.jpg"
                  alt="Pwani Mchangani school and local community partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#17a84b] mb-3">
                07 · Community Project
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1f335c] leading-[1.15] text-balance mb-5">
                Partnering with Pwani Mchangani Since 2004
              </h2>
              <p className="text-sm sm:text-[15px] text-[#394554] leading-relaxed mb-6">
                Working alongside the village elder (<em>Sheha</em>) since opening in 2004, Ocean
                Paradise helped establish the village mosque, local school, and Pwani Mchangani
                Dispensary serving nearly 6,000 residents across Pwani Mchangani and Khandvi, with
                maternal healthcare support and complimentary cultural village tours.
              </p>
              <button
                type="button"
                onClick={() => setCommunityOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-[#1f335c] border border-slate-300 bg-white hover:border-[#00afc0] hover:text-[#00afc0] transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {zanzibarOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-zanzibar-modal"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setZanzibarOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-slate-100">
              <ImageWithFallback
                src="/images/opr/zanzibar-about.jpg"
                alt="Zanzibar archipelago"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close Zanzibar guide"
                onClick={() => setZanzibarOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 text-[#1f335c] hover:bg-[#00afc0] hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7 sm:p-9">
              <h3 id="opt2-zanzibar-modal" className="font-display text-2xl sm:text-3xl text-[#1f335c] mb-3">
                Explore Zanzibar Island
              </h3>
              <p className="text-sm text-[#394554] leading-relaxed mb-5">
                Zanzibar (Unguja) is East Africa’s fabled Spice Island—famous for Stone Town’s
                centuries-old architecture, fragrant spice farms, Jozani Forest, and fringing Indian
                Ocean coral reefs. Time Zone: GMT + 3. Currency: Tanzanian Shilling (TSh) alongside
                USD (2006+), EUR, and polymer GBP notes.
              </p>
              <a
                href="https://oceanparadisezanzibar.com/about-zanzibar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
              >
                <span>Official About Zanzibar Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {activeOffer && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-offer-modal"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveOffer(null)}
        >
          <div
            className="bg-white max-w-xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-slate-100">
              <ImageWithFallback
                src={activeOffer.image}
                alt={activeOffer.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close offer details"
                onClick={() => setActiveOffer(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 text-[#1f335c] hover:bg-[#00afc0] hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-xs font-semibold text-[#00afc0] mb-2 tabular-nums">
                {activeOffer.validity}
              </p>
              <h3 id="opt2-offer-modal" className="font-display text-2xl text-[#1f335c] mb-3">
                {activeOffer.title}
              </h3>
              <ul className="space-y-2 mb-5">
                {activeOffer.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#394554]">
                    <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 text-xs text-[#596575] p-4 bg-[#f7fafb] border border-slate-200 mb-6">
                {activeOffer.terms.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  Book Now
                </button>
                <a
                  href={activeOffer.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-200"
                >
                  <span>Official Offer Terms</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {communityOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-community-modal"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setCommunityOpen(false)}
        >
          <div
            className="bg-white max-w-xl w-full shadow-2xl p-7 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 id="opt2-community-modal" className="font-display text-2xl text-[#1f335c]">
                Pwani Mchangani Community Project
              </h3>
              <button
                type="button"
                aria-label="Close community details"
                onClick={() => setCommunityOpen(false)}
                className="w-9 h-9 bg-slate-100 text-[#1f335c] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-[#394554] leading-relaxed mb-5">
              Since 2004, Ocean Paradise has partnered directly with the Village Elder (Sheha) to
              build the Pwani Mchangani mosque, school, and community dispensary serving nearly
              6,000 residents across Pwani Mchangani and Khandvi, including expanded maternal
              healthcare facilities and complimentary guided village tours for resort guests.
            </p>
            <a
              href="https://oceanparadisezanzibar.com/community-project/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#00afc0]"
            >
              <span>Official Community Project Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
