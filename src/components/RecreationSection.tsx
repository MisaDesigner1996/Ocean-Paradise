import React, { useState } from 'react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const RECREATION_ACTIVITIES = [
  {
    title: 'PADI Scuba Diving & Snorkelling',
    detail:
      'On-site PADI-accredited dive centre (One Ocean) offering reef dives around Mnemba Atoll and full beginner certification courses.',
    image: '/images/opr/rec-1.jpg',
  },
  {
    title: 'Windsurfing, Sailing & Kayaking',
    detail:
      'Explore the calm turquoise lagoon on catamarans, windsurfers, and sea kayaks launched directly from our beachfront.',
    image: '/images/opr/rec-2.jpg',
  },
  {
    title: 'One of Zanzibar’s Largest Swimming Pools',
    detail:
      'Spanning the heart of the lower terrace with a wooden footbridge, waterfall backdrop, and shaded swim-up pool bar.',
    image: '/images/opr/rec-3.jpg',
  },
  {
    title: 'Fitness Centre, Beach Volleyball & Games',
    detail:
      'Equipped gym (light exercise & weights up to 14 kg), beach volleyball, billiards, table tennis, and daily animation team tournaments.',
    image: '/images/opr/rec-4.jpg',
  },
];

export const RecreationSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="recreation" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Sports &amp; Recreation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15] text-balance">
              Adventure Across Reef &amp; Shore
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-[15px] text-[#596575] max-w-md lg:text-right leading-relaxed">
              From world-class Indian Ocean diving with our on-site PADI dive team to sailing,
              beach volleyball, and poolside leisure.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0"
            >
              <span>Explore Activities</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECREATION_ACTIVITIES.map((item) => (
            <article
              key={item.title}
              className="group border border-slate-200/90 rounded-sm overflow-hidden bg-white flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-[#1f335c] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="recreation-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00afc0] mb-1">
                  Sports, Water Sports &amp; Excursions
                </p>
                <h3 id="recreation-modal-title" className="font-display text-2xl font-medium text-[#1f335c]">
                  Resort Activities &amp; PADI Diving
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close activities overview"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 bg-slate-100 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#394554] leading-relaxed mb-6">
              <p>
                Zanzibar is renowned for some of the finest diving in the world. Ocean Paradise
                partners with an on-site PADI-accredited dive company, <strong>One Ocean</strong>,
                offering guided reef dives and full certification courses for beginners.
              </p>
              <p>
                Water sports also include windsurfing, sailing, kayaking, dolphin tours, and
                traditional boat trips. On land, enjoy our fitness centre, beach volleyball,
                billiards, table tennis, and bespoke island excursions arranged through our Guest
                Relations &amp; Tour Office.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <a
                href="https://oceanparadisezanzibar.com/health-recreation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
              >
                <span>Official Recreation Guide</span>
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
