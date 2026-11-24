import React, { useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const CommunitySection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="community" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#17a84b] mb-3">
              Community Project · Since 2004
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1f335c] leading-[1.15] text-balance mb-5">
              Supporting Pwani Mchangani Village
            </h2>
            <div className="space-y-4 text-[15px] text-[#394554] leading-relaxed mb-8">
              <p>
                Since opening in 2004, Ocean Paradise has worked hand in hand with the{' '}
                <em>Sheha</em> (Village Elder) of neighbouring Pwani Mchangani—building the village
                mosque, a local school, and a joint community dispensary serving nearly 6,000
                residents across Pwani Mchangani and Khandvi.
              </p>
              <p>
                Through ongoing maternal health initiatives and complimentary guided village tours
                for our guests, every stay helps strengthen local education, healthcare, and
                cultural exchange.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[340px] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/community-1.jpg"
                alt="Ocean Paradise community support project in Pwani Mchangani village"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[340px] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/community-2.jpg"
                alt="Local village school and community partnership in Pwani Mchangani, Zanzibar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="community-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#17a84b] mb-1">
                  Pwani Mchangani &amp; Khandvi
                </p>
                <h3 id="community-modal-title" className="font-display text-2xl font-medium text-[#1f335c]">
                  Ocean Paradise Community Initiatives
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close community project details"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 bg-slate-100 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#394554] leading-relaxed mb-6">
              <p>
                During construction of the resort ahead of its 2004 opening, Ocean Paradise’s
                owners built lasting ties with the village of Pwani Mchangani. Working alongside the
                Sheha, the resort first funded the village mosque, followed by a local school and
                the Pwani Mchangani Dispensary.
              </p>
              <p>
                Serving just under 6,000 residents from Pwani Mchangani and Khandvi, the
                dispensary provides vital primary and maternal health support so expectant mothers
                no longer have to travel long distances for safe care. Guests are warmly invited to
                join complimentary village tours to experience authentic Zanzibari daily life.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <a
                href="https://oceanparadisezanzibar.com/community-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
              >
                <span>Official Community Project Page</span>
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
      )}
    </section>
  );
};
