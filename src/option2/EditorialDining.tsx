import React from 'react';
import { ArrowRight, Clock, ExternalLink, MapPin, Phone, X } from 'lucide-react';
import { DINING_VENUES, DiningVenue, RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface EditorialDiningProps {
  selectedDiningId: string | null;
  onSelectDining: (venueId: string | null) => void;
}

export const EditorialDining: React.FC<EditorialDiningProps> = ({
  selectedDiningId,
  onSelectDining,
}) => {
  const activeVenue: DiningVenue | undefined = DINING_VENUES.find(
    (v) => v.id === selectedDiningId
  );

  return (
    <section id="opt2-dining" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0]">
              03 · Dining &amp; Bars
            </p>
          </div>
          <div className="lg:col-span-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1f335c] leading-[1.15]">
              A Taste of Zanzibar
            </h2>
            <p className="text-sm sm:text-[15px] text-[#596575] max-w-md leading-relaxed">
              Five distinct restaurants and bars uniting panoramic Indian Ocean views, wood-fired
              pizzas by the pool, and Swahili seafood dining on the beach.
            </p>
          </div>
        </div>

        {/* Hairline-ruled editorial list & image showcase for all 5 venues */}
        <div className="border-t border-slate-200 divide-y divide-slate-200">
          {DINING_VENUES.map((venue, index) => (
            <article
              key={venue.id}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-1 text-xs font-semibold tracking-[0.14em] text-[#00afc0] tabular-nums">
                0{index + 1}
              </div>

              <div className="lg:col-span-4">
                <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-xs text-[#596575] mb-2">
                  <span>{venue.tag}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{venue.timing}</span>
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1f335c] mb-3">
                  {venue.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {venue.shortDescription}
                </p>
              </div>

              <div className="lg:col-span-2 flex lg:justify-end">
                <button
                  type="button"
                  onClick={() => onSelectDining(venue.id)}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-[#1f335c] border border-slate-300 bg-white hover:border-[#00afc0] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVenue && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-dining-modal-title"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => onSelectDining(null)}
        >
          <div
            className="bg-white max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              <ImageWithFallback
                src={activeVenue.image}
                alt={activeVenue.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close dining venue details"
                onClick={() => onSelectDining(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 text-[#1f335c] hover:bg-[#00afc0] hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00afc0] mb-2">
                {activeVenue.tag}
              </p>
              <h3 id="opt2-dining-modal-title" className="font-display text-2xl sm:text-3xl text-[#1f335c] mb-4">
                {activeVenue.name}
              </h3>
              <p className="text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                {activeVenue.fullDescription}
              </p>

              <div className="space-y-3 p-4 bg-[#f7fafb] border border-slate-200 text-sm mb-6">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#00afc0] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[#1f335c]">Hours: </strong>
                    {activeVenue.timing}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00afc0] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[#1f335c]">Location: </strong>
                    {activeVenue.location}
                  </span>
                </div>
                <div>
                  <strong className="text-[#1f335c]">Cuisine: </strong>
                  {activeVenue.cuisine}
                </div>
                <div>
                  <strong className="text-[#1f335c]">Dress Code: </strong>
                  {activeVenue.dressCode}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <a
                  href={`tel:${RESORT_CONTACT.reservationsPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1f335c] hover:text-[#00afc0]"
                >
                  <Phone className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                  <span>{RESORT_CONTACT.reservationsPhone}</span>
                </a>
                <a
                  href={activeVenue.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  <span>Official Venue Page</span>
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
