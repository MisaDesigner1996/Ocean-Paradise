import React from 'react';
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { ROOM_CATEGORIES, RoomCategory } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

interface AccommodationSectionProps {
  selectedRoomId: string | null;
  onSelectRoom: (roomId: string | null) => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  selectedRoomId,
  onSelectRoom,
}) => {
  const activeRoom: RoomCategory | undefined = ROOM_CATEGORIES.find(
    (r) => r.id === selectedRoomId
  );

  const scrollToBooking = () => {
    onSelectRoom(null);
    const el = document.querySelector('#booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="accommodation" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              98 Traditional Roundhouse Chalets &amp; Suites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15] text-balance">
              Stay in Paradise
            </h2>
          </div>
          <p className="text-[15px] text-[#596575] max-w-md leading-relaxed">
            Designed as traditional African roundhouses under pitched <em>makuti</em> roofs, every
            chalet opens onto a private balcony or seafront terrace amidst coastal gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {ROOM_CATEGORIES.map((room) => (
            <article
              key={room.id}
              className="group bg-white border border-slate-200/90 rounded-sm overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={room.image}
                  alt={`${room.name} at Ocean Paradise Resort & Spa Zanzibar`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#596575] mb-2.5 tabular-nums">
                  <span>{room.roomSize}</span>
                  <span aria-hidden="true">·</span>
                  <span>{room.view}</span>
                </div>

                <h3 className="font-display text-2xl font-medium text-[#1f335c] mb-3">
                  {room.name}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
                  {room.shortDescription}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectRoom(room.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00afc0] hover:text-[#1f335c] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#00afc0]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#596575] tabular-nums">{room.roomCount}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeRoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="room-modal-title"
          className="fixed inset-0 z-50 bg-[#0d192e]/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => onSelectRoom(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-sm shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] max-h-[340px] w-full bg-slate-100">
              <ImageWithFallback
                src={activeRoom.image}
                alt={activeRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close room details"
                onClick={() => onSelectRoom(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center rounded-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#00afc0] font-semibold uppercase tracking-wider mb-2 tabular-nums">
                <span>{activeRoom.roomSize}</span>
                <span aria-hidden="true">·</span>
                <span>{activeRoom.roomCount}</span>
                <span aria-hidden="true">·</span>
                <span>{activeRoom.maxOccupancy}</span>
              </div>

              <h3
                id="room-modal-title"
                className="font-display text-2xl sm:text-3xl font-medium text-[#1f335c] mb-4"
              >
                {activeRoom.name}
              </h3>

              <p className="text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                {activeRoom.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#f7fafb] border border-slate-200/80 rounded-sm mb-6 text-sm">
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase tracking-wide">
                    Bed Configuration
                  </p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.bedType}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase tracking-wide">
                    Outdoor Space
                  </p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.outdoorSpace}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase tracking-wide">
                    Interconnecting
                  </p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.interconnecting}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-3">
                  In-Room Facilities &amp; Comforts
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeRoom.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-[#394554]">
                      <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={activeRoom.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1f335c] border border-slate-200 hover:border-[#00afc0] transition-colors rounded-sm"
                >
                  <span>Official Room Page</span>
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
