import React, { useMemo, useState } from 'react';
import { ArrowRight, Calendar, ExternalLink, Users, BedDouble } from 'lucide-react';
import { HERO_SLIDES, buildOfficialBookingUrl } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

function formatIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(y, m - 1, d + days);
  return formatIsoDate(dt);
}

export const EditorialHero: React.FC = () => {
  const todayIso = useMemo(() => formatIsoDate(new Date()), []);
  const [checkIn, setCheckIn] = useState(() => addDays(todayIso, 14));
  const [checkOut, setCheckOut] = useState(() => addDays(todayIso, 19));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState<number[]>([6, 8, 10]);
  const [rooms, setRooms] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const nights = useMemo(() => {
    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Number.isFinite(diff) && diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const bookingUrl = useMemo(() => {
    if (!checkIn || !checkOut || nights <= 0) return '#opt2-booking';
    return buildOfficialBookingUrl({
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adults,
      children,
      childAges,
      rooms,
    });
  }, [checkIn, checkOut, nights, adults, children, childAges, rooms]);

  const handleCheckInChange = (val: string) => {
    setErrorMessage(null);
    setCheckIn(val);
    if (val && checkOut && val >= checkOut) {
      setCheckOut(addDays(val, 1));
    }
  };

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Editorial Asymmetric Hero inspired by Altufan Ulu */}
      <section
        id="opt2-hero"
        className="relative w-full h-[78vh] min-h-[540px] max-h-[820px] overflow-hidden bg-[#132645]"
      >
        <ImageWithFallback
          src={HERO_SLIDES[1].image}
          alt={HERO_SLIDES[1].alt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#09152b]/88 via-[#09152b]/38 to-[#09152b]/20 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 sm:px-10 lg:px-12 pb-14 sm:pb-16 lg:pb-20 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#6ce6f2] mb-4">
                Pwani Mchangani · North East Coast, Zanzibar
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-normal text-white leading-[1.06] tracking-[-0.01em] text-balance">
                Serene, palm-fringed, and unmistakably Zanzibar.
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start gap-5 lg:pb-1">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo('#opt2-booking')}
                  className="inline-flex items-center gap-4 px-6 py-3.5 text-sm font-medium text-white border border-white/75 hover:bg-[#00afc0] hover:border-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Book Your Stay</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('#opt2-about')}
                  className="text-sm font-medium text-white/85 hover:text-[#6ce6f2] transition-colors py-2 whitespace-nowrap shrink-0"
                >
                  Explore the Resort
                </button>
              </div>
              <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed max-w-md">
                Discover 98 traditional <em>makuti</em> roundhouse chalets across 6.5 hectares of
                coastal gardens beside the turquoise Indian Ocean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Hairline Booking Bar */}
      <section
        id="opt2-booking"
        aria-label="Reservation availability bar"
        className="bg-white border-b border-slate-200"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f335c]">
              Direct Resort Reservations
            </span>
            <span className="text-xs text-[#596575] tabular-nums">
              {nights > 0 ? `${nights} ${nights === 1 ? 'Night' : 'Nights'} · Best Direct Rate Guarantee` : 'Select stay dates'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="p-3.5">
              <label
                htmlFor="opt2-checkin"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#596575] mb-1"
              >
                <Calendar className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
                <span>Check-in</span>
              </label>
              <input
                id="opt2-checkin"
                type="date"
                min={todayIso}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full text-sm font-medium text-[#1f335c] bg-transparent tabular-nums focus:outline-none"
              />
            </div>

            <div className="p-3.5">
              <label
                htmlFor="opt2-checkout"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#596575] mb-1"
              >
                <Calendar className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
                <span>Check-out</span>
              </label>
              <input
                id="opt2-checkout"
                type="date"
                min={addDays(checkIn || todayIso, 1)}
                value={checkOut}
                onChange={(e) => {
                  setErrorMessage(null);
                  setCheckOut(e.target.value);
                }}
                className="w-full text-sm font-medium text-[#1f335c] bg-transparent tabular-nums focus:outline-none"
              />
            </div>

            <div className="p-3.5">
              <label
                htmlFor="opt2-adults"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#596575] mb-1"
              >
                <Users className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
                <span>Adults</span>
              </label>
              <select
                id="opt2-adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full text-sm font-medium text-[#1f335c] bg-transparent tabular-nums focus:outline-none"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3.5">
              <label
                htmlFor="opt2-children"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#596575] mb-1"
              >
                <Users className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
                <span>Children</span>
              </label>
              <select
                id="opt2-children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full text-sm font-medium text-[#1f335c] bg-transparent tabular-nums focus:outline-none"
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Child' : 'Children'}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3.5">
              <label
                htmlFor="opt2-rooms"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#596575] mb-1"
              >
                <BedDouble className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
                <span>Rooms</span>
              </label>
              <select
                id="opt2-rooms"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full text-sm font-medium text-[#1f335c] bg-transparent tabular-nums focus:outline-none"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex">
              <a
                href={bookingUrl}
                target={nights > 0 ? '_blank' : undefined}
                rel={nights > 0 ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!checkIn || !checkOut || nights <= 0) {
                    e.preventDefault();
                    setErrorMessage('Please choose a check-out date after check-in.');
                  }
                }}
                className="w-full h-full min-h-[54px] px-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors whitespace-nowrap"
              >
                <span>Check Availability</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {children > 0 && (
            <div className="mt-3 pt-3 flex flex-wrap items-center gap-4 text-xs text-[#596575]">
              <span>Child ages at check-in:</span>
              {Array.from({ length: children }, (_, idx) => (
                <label key={idx} className="inline-flex items-center gap-1.5">
                  <span className="font-medium text-[#1f335c]">Child {idx + 1}</span>
                  <select
                    value={childAges[idx] ?? 5}
                    onChange={(e) => {
                      const updated = [...childAges];
                      updated[idx] = Number(e.target.value);
                      setChildAges(updated);
                    }}
                    className="border border-slate-200 px-2 py-1 text-xs text-[#1f335c] bg-white tabular-nums"
                  >
                    {Array.from({ length: 18 }, (_, age) => (
                      <option key={age} value={age}>
                        {age === 0 ? '0 yr' : age === 1 ? '1 yr' : `${age} yrs`}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          )}

          {errorMessage && (
            <p role="alert" className="mt-2 text-xs text-[#a92c3c] font-medium">
              {errorMessage}
            </p>
          )}
        </div>
      </section>
    </>
  );
};
