import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  const [showOverviewModal, setShowOverviewModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              North East Coast · Pwani Mchangani
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15] text-balance mb-6">
              Welcome to Ocean Paradise
            </h2>

            <div className="space-y-4 text-[15px] sm:text-base text-[#394554] leading-relaxed mb-8">
              <p>
                Situated on Zanzibar’s picturesque North East coast overlooking the turquoise
                Indian Ocean, Ocean Paradise Resort &amp; Spa is a meandering 45-minute journey from
                Zanzibar Airport through unspoilt countryside and traditional villages.
              </p>
              <p>
                Sweep down the entrance driveway into 6.5 hectares of colourful landscaped gardens,
                mature coconut palms swinging in the ocean breeze, traditional round chalets under
                pitched <em>makuti</em> roofs, a cascading waterfall feature, and one of the largest
                swimming pools in Zanzibar.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6 mb-8 border-y border-slate-200">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1f335c] tabular-nums">
                  98
                </p>
                <p className="text-xs sm:text-sm text-[#596575] mt-1">Roundhouse Chalets &amp; Suites</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1f335c] tabular-nums">
                  6.5 ha
                </p>
                <p className="text-xs sm:text-sm text-[#596575] mt-1">Coastal Tropical Gardens</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1f335c] tabular-nums">
                  45 min
                </p>
                <p className="text-xs sm:text-sm text-[#596575] mt-1">From Zanzibar Airport</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowOverviewModal(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00afc0]"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={RESORT_CONTACT.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1f335c] border border-slate-300 hover:border-[#00afc0] hover:text-[#00afc0] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>Watch Resort Film</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="/images/opr/resort-1.jpg"
                alt="Ocean Paradise Resort & Spa Zanzibar traditional makuti entrance and palm gardens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {showOverviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowOverviewModal(false)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-72">
              <ImageWithFallback
                src="/images/opr/slide-1.jpg"
                alt="Traditional makuti roof chalets surrounded by bougainvillea at Ocean Paradise Zanzibar"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close resort overview"
                onClick={() => setShowOverviewModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#00afc0] mb-2">
                Resort Heritage &amp; Architecture
              </p>
              <h3 id="about-modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[#1f335c] mb-4">
                Welcome to Ocean Paradise Resort &amp; Spa
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                <p>
                  A warm smile and the traditional Swahili greeting of “Jambo” welcome every guest
                  arriving at reception, where an elevated terrace reveals sweeping views across
                  lush gardens down to the white sandy beach and azure Indian Ocean.
                </p>
                <p>
                  Designed like a tranquil Zanzibari coastal village, our 98 circular chalets feature
                  handcrafted <em>makuti</em> thatched roofs, wide patio doors opening onto private
                  balconies or beachfront terraces, and full modern resort comforts.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={RESORT_CONTACT.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>View Official Online Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowOverviewModal(false)}
                  className="px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-200 hover:border-slate-300 rounded-sm"
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
