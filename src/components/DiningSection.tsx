import React from 'react';
import { ArrowRight, Clock, ExternalLink, MapPin, Phone, X } from 'lucide-react';
import { DINING_VENUES, DiningVenue, RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

interface DiningSectionProps {
  selectedDiningId: string | null;
  onSelectDining: (venueId: string | null) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({
  selectedDiningId,
  onSelectDining,
}) => {
  const activeVenue: DiningVenue | undefined = DINING_VENUES.find(
    (v) => v.id === selectedDiningId
  );

  const featuredVenues = DINING_VENUES.slice(0, 2);
  const secondaryVenues = DINING_VENUES.slice(2);

  return (
    <section id="dining" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Restaurants &amp; Bars
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15] text-balance">
              A Taste of Zanzibar
            </h2>
          </div>
          <p className="text-[15px] text-[#596575] max-w-md leading-relaxed">
            From panoramic sunrise breakfasts two floors above the palms to wood-fired poolside
            pizzas and candlelit Swahili seafood dinners right on the sand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featuredVenues.map((venue) => (
            <article
              key={venue.id}
              className="group border border-slate-200/90 rounded-sm overflow-hidden bg-white flex flex-col transition-shadow duration-200 hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs text-[#596575] mb-2">
                  <span>{venue.tag}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{venue.location}</span>
                </p>
                <h3 className="font-display text-2xl sm:text-[26px] font-medium text-[#1f335c] mb-3">
                  {venue.name}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-6 flex-1">
                  {venue.shortDescription}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectDining(venue.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00afc0] hover:text-[#1f335c] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#596575] truncate max-w-[200px]">
                    {venue.timing}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryVenues.map((venue) => (
            <article
              key={venue.id}
              className="group border border-slate-200/90 rounded-sm overflow-hidden bg-white flex flex-col transition-shadow duration-200 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-[#596575] mb-2">{venue.tag}</p>
                <h3 className="font-display text-2xl font-medium text-[#1f335c] mb-3">
                  {venue.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                  {venue.shortDescription}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectDining(venue.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00afc0] hover:text-[#1f335c] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVenue && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dining-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => onSelectDining(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
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
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00afc0] mb-2">
                {activeVenue.tag}
              </p>
              <h3
                id="dining-modal-title"
                className="font-display text-2xl sm:text-3xl font-medium text-[#1f335c] mb-4"
              >
                {activeVenue.name}
              </h3>
              <p className="text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                {activeVenue.fullDescription}
              </p>

              <div className="space-y-3 p-4 bg-[#f7fafb] border border-slate-200/80 rounded-sm text-sm mb-6">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#00afc0] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#1f335c]">Hours: </span>
                    <span className="text-[#394554]">{activeVenue.timing}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00afc0] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#1f335c]">Location: </span>
                    <span className="text-[#394554]">{activeVenue.location}</span>
                  </div>
                </div>
                <div className="text-[#394554]">
                  <span className="font-semibold text-[#1f335c]">Cuisine: </span>
                  <span>{activeVenue.cuisine}</span>
                </div>
                <div className="text-[#394554]">
                  <span className="font-semibold text-[#1f335c]">Dress Code: </span>
                  <span>{activeVenue.dressCode}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${RESORT_CONTACT.reservationsPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1f335c] hover:text-[#00afc0]"
                >
                  <Phone className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                  <span>Reservations: {RESORT_CONTACT.reservationsPhone}</span>
                </a>
                <a
                  href={activeVenue.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>Full Venue Page</span>
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
