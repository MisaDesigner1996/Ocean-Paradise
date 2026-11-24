import React, { useMemo, useState } from 'react';
import { Calendar, ExternalLink, Users, BedDouble } from 'lucide-react';
import { buildOfficialBookingUrl } from '../data/resortData';

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

export const BookingEngine: React.FC = () => {
  const todayIso = useMemo(() => formatIsoDate(new Date()), []);
  const defaultCheckIn = useMemo(() => addDays(todayIso, 14), [todayIso]);
  const defaultCheckOut = useMemo(() => addDays(todayIso, 19), [todayIso]);

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
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
    if (!checkIn || !checkOut || nights <= 0) return '#booking';
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

  const handleCheckOutChange = (val: string) => {
    setErrorMessage(null);
    setCheckOut(val);
  };

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!checkIn || !checkOut || nights <= 0) {
      e.preventDefault();
      setErrorMessage('Please select a check-out date after your check-in date.');
    }
  };

  return (
    <section id="booking" aria-label="Check Room Availability" className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14">
      <div className="max-w-[1220px] mx-auto bg-white border border-slate-200 shadow-lg rounded-sm p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-medium text-[#1f335c]">
              Reserve Your Stay in Zanzibar
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#596575] tabular-nums">
            {nights > 0 ? `${nights} ${nights === 1 ? 'Night' : 'Nights'} · Direct Official Rates` : 'Select stay dates'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
          <div>
            <label
              htmlFor="opr-checkin"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1f335c] mb-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
              <span>Check-in</span>
            </label>
            <input
              id="opr-checkin"
              type="date"
              min={todayIso}
              value={checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full h-11 px-3 text-sm text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0] focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="opr-checkout"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1f335c] mb-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
              <span>Check-out</span>
            </label>
            <input
              id="opr-checkout"
              type="date"
              min={addDays(checkIn || todayIso, 1)}
              value={checkOut}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              className="w-full h-11 px-3 text-sm text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0] focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="opr-adults"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1f335c] mb-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
              <span>Adults</span>
            </label>
            <select
              id="opr-adults"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0] focus:bg-white"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Adult' : 'Adults'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="opr-children"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1f335c] mb-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
              <span>Children</span>
            </label>
            <select
              id="opr-children"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0] focus:bg-white"
            >
              {[0, 1, 2, 3].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Child' : 'Children'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="opr-rooms"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1f335c] mb-1.5"
            >
              <BedDouble className="w-3.5 h-3.5 text-[#00afc0]" aria-hidden="true" />
              <span>Rooms</span>
            </label>
            <select
              id="opr-rooms"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0] focus:bg-white"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Room' : 'Rooms'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <a
              href={bookingUrl}
              target={nights > 0 ? '_blank' : undefined}
              rel={nights > 0 ? 'noopener noreferrer' : undefined}
              onClick={handleBookingClick}
              className="w-full h-11 px-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f335c]"
            >
              <span>Check Availability</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {children > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <span className="text-xs font-medium text-[#596575]">
              Child ages at check-in (required for family rates):
            </span>
            {Array.from({ length: children }, (_, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <label htmlFor={`child-age-${idx}`} className="text-xs text-[#1f335c] font-medium">
                  Child {idx + 1}
                </label>
                <select
                  id={`child-age-${idx}`}
                  value={childAges[idx] ?? 5}
                  onChange={(e) => {
                    const updated = [...childAges];
                    updated[idx] = Number(e.target.value);
                    setChildAges(updated);
                  }}
                  className="h-9 px-2.5 text-xs text-[#1e293b] bg-[#f7fafb] border border-slate-200 rounded-sm tabular-nums focus:outline-none focus:border-[#00afc0]"
                >
                  {Array.from({ length: 18 }, (_, age) => (
                    <option key={age} value={age}>
                      {age === 0 ? 'Under 1 yr' : age === 1 ? '1 yr' : `${age} yrs`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {errorMessage && (
          <p role="alert" className="mt-3 text-xs font-medium text-[#a92c3c]">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
};
