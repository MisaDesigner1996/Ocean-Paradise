import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ExternalLink, X } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ExperienceItem {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  ctaLabel: string;
  officialUrl: string;
  opensEnquiry?: boolean;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    num: '01',
    id: 'spa',
    title: 'Spa & Wellness',
    subtitle: 'African Sanctuary of Calm & Tranquillity',
    description:
      'Recover after a Tanzanian safari or unwind beside the Indian Ocean inside our tranquil African-themed spa with hot and cold plunge Jacuzzis, steam room, and sauna.',
    highlights: [
      '4 private massage rooms offering massages, facials & body rituals',
      '2 Jacuzzis with contrasting hot and cold plunge tubs',
      'Traditional steam room, dry sauna & light fitness centre',
    ],
    image: '/images/opr/spa-jacuzzi.jpg',
    ctaLabel: 'Explore Spa & Wellness',
    officialUrl: 'https://oceanparadisezanzibar.com/health-recreation/',
  },
  {
    num: '02',
    id: 'recreation',
    title: 'Sports & Recreation',
    subtitle: 'PADI Diving, Water Sports & Coastal Pool',
    description:
      'Home to one of Zanzibar’s largest swimming pools and an on-site PADI-accredited dive centre (One Ocean), plus sailing, windsurfing, kayaking, and beach volleyball.',
    highlights: [
      'On-site One Ocean PADI dive team with certification courses',
      'Windsurfing, sailing, sea kayaking, billiards & table tennis',
      'Beach volleyball & daily resort animation tournaments',
    ],
    image: '/images/opr/rec-1.jpg',
    ctaLabel: 'Explore Activities',
    officialUrl: 'https://oceanparadisezanzibar.com/health-recreation/',
  },
  {
    num: '03',
    id: 'excursions',
    title: 'Excursions & Activities',
    subtitle: 'Guided Island Discoveries from Reception',
    description:
      'Our dedicated Guest Relations and Tour Office arranges curated Zanzibar excursions, dolphin tours, boat trips, and cultural visits across the archipelago.',
    highlights: [
      'Guided Spice Island plantation tours & historic Stone Town walks',
      'Jozani Forest Reserve to spot endemic Red Colobus Monkeys',
      'Dolphin safaris and coastal reef boat excursions',
    ],
    image: '/images/opr/rec-4.jpg',
    ctaLabel: 'View Excursions',
    officialUrl: 'https://oceanparadisezanzibar.com/health-recreation/',
  },
  {
    num: '04',
    id: 'weddings',
    title: 'Weddings & Honeymoons',
    subtitle: 'Romantic Beachfront Ceremonies & Honeymoon Extras',
    description:
      'Say “I do” on white coral sand with the Indian Ocean behind you while our sales team coordinates every ceremony and celebration detail.',
    highlights: [
      'Fruit & flower basket in room on arrival + bottle of bubbly',
      'Romantic candlelit lobster dinner on the beach',
      'Complimentary couples foot ritual massage',
    ],
    image: '/images/opr/weddings-1.jpg',
    ctaLabel: 'Enquire About Celebrations',
    officialUrl: 'https://oceanparadisezanzibar.com/weddings-honeymoons/',
    opensEnquiry: true,
  },
  {
    num: '05',
    id: 'conference',
    title: 'Conference & Incentive Groups',
    subtitle: '415 m² Round Conference Hall & Private Boardroom',
    description:
      'Combine productive island retreats with tailored social events in our fully air-conditioned 145-seat conference room and 25-seat executive boardroom.',
    highlights: [
      '415 m² circular conference venue (145 theater / 110 dining / 100 classroom)',
      '42 m² executive boardroom seating up to 25 guests',
      'Built-in screen, projector & dedicated AV technical support',
    ],
    image: '/images/opr/conference-1.jpg',
    ctaLabel: 'Enquire for Groups',
    officialUrl: 'https://oceanparadisezanzibar.com/conference-incentive-groups/',
    opensEnquiry: true,
  },
];

export const EditorialExperiences: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enquiryItem, setEnquiryItem] = useState<ExperienceItem | null>(null);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const current = EXPERIENCE_ITEMS[activeIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section id="opt2-experiences" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0]">
              04 · Experiences
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1f335c] leading-[1.15] text-balance">
              Wellness, ocean adventure, and bespoke island gatherings.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Numbered editorial selector list */}
          <div className="lg:col-span-5 border-t border-slate-200 divide-y divide-slate-200">
            {EXPERIENCE_ITEMS.map((item, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left py-5 px-4 transition-colors flex items-baseline justify-between gap-4 cursor-pointer ${
                    active ? 'bg-[#f7fafb]' : 'bg-white hover:bg-[#f7fafb]/60'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-xs font-semibold tabular-nums ${
                        active ? 'text-[#00afc0]' : 'text-[#596575]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <div>
                      <p
                        className={`font-display text-xl sm:text-2xl ${
                          active ? 'text-[#1f335c]' : 'text-[#475569]'
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-[#596575] mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      active ? 'text-[#00afc0] translate-x-1' : 'text-slate-300'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Active experience visual & highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#f7fafb] border border-slate-200">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <ImageWithFallback
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-2 tabular-nums">
                {current.num} · {current.subtitle}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1f335c] mb-3">
                {current.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#394554] leading-relaxed mb-5">
                {current.description}
              </p>

              <ul className="space-y-2.5 mb-7">
                {current.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#394554]">
                    <Check className="w-4 h-4 text-[#17a84b] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
                {current.opensEnquiry ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setEnquiryItem(current);
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{current.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={current.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#1f335c] hover:bg-[#00afc0] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{current.ctaLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={current.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#596575] hover:text-[#00afc0] transition-colors"
                >
                  Official Resort Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {enquiryItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="opt2-exp-modal-title"
          className="fixed inset-0 z-50 bg-[#09152b]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setEnquiryItem(null)}
        >
          <div
            className="bg-white max-w-lg w-full shadow-2xl p-7 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00afc0] mb-1">
                  {enquiryItem.title}
                </p>
                <h3 id="opt2-exp-modal-title" className="font-display text-2xl text-[#1f335c]">
                  Event &amp; Celebration Enquiry
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close enquiry dialog"
                onClick={() => setEnquiryItem(null)}
                className="w-9 h-9 bg-slate-100 hover:bg-[#00afc0] hover:text-white text-[#1f335c] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-5 text-center space-y-4">
                <CheckCircle2 className="w-11 h-11 text-[#17a84b] mx-auto" aria-hidden="true" />
                <p className="text-sm text-[#394554] leading-relaxed">
                  Thank you, {guestName}. Please send your prepared enquiry directly to{' '}
                  <a
                    href={`mailto:${RESORT_CONTACT.reservationsEmail}?subject=${encodeURIComponent(
                      `${enquiryItem.title} Enquiry — ${guestName}`
                    )}&body=${encodeURIComponent(notes)}`}
                    className="font-semibold text-[#00afc0] underline"
                  >
                    {RESORT_CONTACT.reservationsEmail}
                  </a>{' '}
                  or call {RESORT_CONTACT.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquiryItem(null)}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-[#1f335c]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="exp-name" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Full Name
                  </label>
                  <input
                    id="exp-name"
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full h-11 px-3 text-sm bg-[#f7fafb] border border-slate-200 focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                <div>
                  <label htmlFor="exp-email" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Email Address
                  </label>
                  <input
                    id="exp-email"
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full h-11 px-3 text-sm bg-[#f7fafb] border border-slate-200 focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                <div>
                  <label htmlFor="exp-notes" className="block text-xs font-semibold text-[#1f335c] mb-1">
                    Preferred Dates &amp; Group Size
                  </label>
                  <textarea
                    id="exp-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 text-sm bg-[#f7fafb] border border-slate-200 focus:outline-none focus:border-[#00afc0]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
