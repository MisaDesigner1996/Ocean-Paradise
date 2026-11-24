import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { ROOM_CATEGORIES, RoomCategory } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface EditorialAccommodationProps {
  selectedRoomId: string | null;
  onSelectRoom: (roomId: string | null) => void;
}

export const EditorialAccommodation: React.FC<EditorialAccommodationProps> = ({
  selectedRoomId,
  onSelectRoom,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeRoom: RoomCategory | undefined = ROOM_CATEGORIES.find(
    (r) => r.id === selectedRoomId
  );

  const slideCards = (direction: 'prev' | 'next') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = el.clientWidth > 768 ? 460 : 320;
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    onSelectRoom(null);
    const el = document.querySelector('#opt2-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="opt2-accommodation" className="bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left editorial index column matching Altufan Ulu PRACTICE AREAS */}
          <div className="lg:col-span-4 px-6 sm:px-10 lg:px-12 py-14 lg:py-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0] mb-4">
                02 · Accommodation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1f335c] leading-[1.12] mb-4">
                Stay in
                <br />
                Paradise
              </h2>
              <p className="font-sans text-sm font-semibold tracking-[0.08em] uppercase text-[#1f335c]/75 mb-6">
                98 Chalets &amp; Suites
              </p>
              <p className="text-sm text-[#596575] leading-relaxed">
                Six distinct roundhouse categories set across elevated garden terraces and direct
                seafront sands.
              </p>
            </div>

            <div className="flex items-center justify-between pt-10 mt-10 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => slideCards('prev')}
                  aria-label="Scroll accommodation left"
                  className="w-10 h-10 border border-slate-200 hover:border-[#00afc0] hover:text-[#00afc0] text-[#1f335c] flex items-center justify-center transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => slideCards('next')}
                  aria-label="Scroll accommodation right"
                  className="w-10 h-10 border border-slate-200 hover:border-[#00afc0] hover:text-[#00afc0] text-[#1f335c] flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs font-medium text-[#596575] tabular-nums">
                6 Categories
              </span>
            </div>
          </div>

          {/* Right horizontal hairline-divided room cards */}
          <div className="lg:col-span-8">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory divide-x divide-slate-200"
            >
              {ROOM_CATEGORIES.map((room, index) => (
                <article
                  key={room.id}
                  className="snap-start shrink-0 w-[86%] sm:w-[440px] lg:w-[460px] flex flex-col justify-between p-6 sm:p-10 bg-white hover:bg-[#f7fafb] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#596575] mb-4 tabular-nums">
                      <span className="font-semibold text-[#00afc0]">
                        0{index + 1} · {room.roomSize}
                      </span>
                      <span>{room.roomCount}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-[26px] font-normal text-[#1f335c] mb-5">
                      {room.name}
                    </h3>

                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-6">
                      <ImageWithFallback
                        src={room.image}
                        alt={`${room.name} at Ocean Paradise Resort & Spa Zanzibar`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {room.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room.id)}
                      className="inline-flex items-center gap-2.5 text-sm font-medium text-[#1f335c] hover:text-[#00afc0] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="text-xs text-[#596575]">{room.view}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeRoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-room-modal-title"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => onSelectRoom(null)}
        >
          <div
            className="bg-white max-w-3xl w-full shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
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
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 text-[#1f335c] hover:bg-[#00afc0] hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00afc0] mb-2 tabular-nums">
                {activeRoom.roomSize} · {activeRoom.roomCount} · {activeRoom.maxOccupancy}
              </p>
              <h3 id="opt2-room-modal-title" className="font-display text-2xl sm:text-3xl text-[#1f335c] mb-4">
                {activeRoom.name}
              </h3>
              <p className="text-sm sm:text-base text-[#394554] leading-relaxed mb-6">
                {activeRoom.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#f7fafb] border border-slate-200 mb-6 text-sm">
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase">Bed Type</p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.bedType}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase">Location</p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase">Outdoor Space</p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.outdoorSpace}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#596575] uppercase">Interconnecting</p>
                  <p className="text-[#1f335c] font-medium mt-0.5">{activeRoom.interconnecting}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                {activeRoom.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-[#394554]">
                    <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={activeRoom.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#1f335c] border border-slate-200 hover:border-[#00afc0]"
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
