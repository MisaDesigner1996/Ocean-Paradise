import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

const RESORT_PILLARS = [
  {
    num: '01',
    title: 'Traditional Makuti Architecture',
    desc: '98 circular African chalets crowned with hand-woven pitched makuti roofs and private seafront or garden terraces.',
    image: '/images/opr/slide-1.jpg',
  },
  {
    num: '02',
    title: '6.5 Hectares of Coastal Gardens',
    desc: 'Mature coconut palms, vibrant bougainvillea, and a cascading waterfall framing one of Zanzibar’s largest pools.',
    image: '/images/opr/hero-1.jpg',
  },
  {
    num: '03',
    title: 'Warm Swahili Hospitality',
    desc: 'Forty-five minutes from Zanzibar Airport along scenic coastal villages, beginning with a heartfelt “Jambo” welcome.',
    image: '/images/opr/beach-3.jpg',
  },
];

export const EditorialAbout: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* 01 – Welcome to Ocean Paradise */}
      <section id="opt2-about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0]">
                01 · Welcome to Ocean Paradise
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1f335c] leading-[1.16] text-balance mb-6">
                A meandering journey from Zanzibar Airport brings you to an unrivalled coastal
                sanctuary overlooking the Indian Ocean.
              </h2>
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-300 hover:border-[#00afc0] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={RESORT_CONTACT.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#596575] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span>Watch Resort Film</span>
                </a>
              </div>
            </div>
          </div>

          {/* Altufan Ulu-inspired 3 numbered portrait editorial photography cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESORT_PILLARS.map((pillar) => (
              <article
                key={pillar.num}
                className="group relative aspect-[4/5] overflow-hidden bg-[#1f335c]"
              >
                <ImageWithFallback
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#09152b]/90 via-[#09152b]/25 to-[#09152b]/15 pointer-events-none"
                  aria-hidden="true"
                />
                <span className="absolute top-6 right-7 font-sans text-5xl sm:text-6xl font-light text-white/45 tabular-nums select-none">
                  {pillar.num}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl font-normal text-white leading-snug mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Navy Architectural Metrics + Large Visual Band matching Altufan Ulu Section 2 */}
      <section className="py-20 lg:py-28 bg-[#0b1b3a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6ce6f2]">
                At A Glance · Pwani Mchangani
              </p>
            </div>
            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-normal text-white leading-[1.2] text-balance">
                Designed as a peaceful coastal village where landscaped gardens meet white coral sand
                and turquoise tides.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4 space-y-10">
              <div className="pt-4 border-t border-white/25 flex items-baseline justify-between gap-4">
                <span className="font-sans text-4xl sm:text-5xl font-light tabular-nums">98</span>
                <span className="text-xs sm:text-sm font-medium text-white/80 text-right">
                  Roundhouse Chalets &amp; Suites
                </span>
              </div>
              <div className="pt-4 border-t border-white/25 flex items-baseline justify-between gap-4">
                <span className="font-sans text-4xl sm:text-5xl font-light tabular-nums">6.5 ha</span>
                <span className="text-xs sm:text-sm font-medium text-white/80 text-right">
                  Landscaped Tropical Gardens
                </span>
              </div>
              <div className="pt-4 border-t border-white/25 flex items-baseline justify-between gap-4">
                <span className="font-sans text-4xl sm:text-5xl font-light tabular-nums">5</span>
                <span className="text-xs sm:text-sm font-medium text-white/80 text-right">
                  Restaurants &amp; Coastal Bars
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="aspect-[16/9] overflow-hidden bg-[#162b54]">
                <ImageWithFallback
                  src="/images/opr/resort-1.jpg"
                  alt="Ocean Paradise Resort & Spa Zanzibar landscaped palm gardens and makuti chalets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-about-modal-title"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60">
              <ImageWithFallback
                src="/images/opr/resort-1.jpg"
                alt="Welcome to Ocean Paradise Resort & Spa Zanzibar"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close resort overview"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 text-[#1f335c] hover:bg-[#00afc0] hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-2">
                01 · Welcome to Ocean Paradise
              </p>
              <h3 id="opt2-about-modal-title" className="font-display text-2xl sm:text-3xl text-[#1f335c] mb-4">
                Ocean Paradise Resort &amp; Spa Zanzibar
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                <p>
                  Situated on Zanzibar’s North East coast, Ocean Paradise welcomes guests with a
                  blaze of colour as you sweep down the entrance driveway into reception—revealing
                  immediate views over tropical palms and the azure Indian Ocean.
                </p>
                <p>
                  Explore a private white sandy beach, traditional circular chalets under pitched
                  <em> makuti</em> roofs, a tranquil waterfall feature, and one of the largest
                  swimming pools in Zanzibar.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <a
                  href={RESORT_CONTACT.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  <span>View Official Online Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
