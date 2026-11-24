import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Facebook,
  Instagram,
  Maximize2,
  X,
} from 'lucide-react';
import {
  DINING_VENUES,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryItem,
  RESORT_CONTACT,
  RESORT_LOGO,
  ROOM_CATEGORIES,
} from '../data/resortData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface EditorialGalleryLocationFooterProps {
  onSelectRoom: (roomId: string) => void;
  onSelectDining: (venueId: string) => void;
}

export const EditorialGalleryLocationFooter: React.FC<EditorialGalleryLocationFooterProps> = ({
  onSelectRoom,
  onSelectDining,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const visibleGallery = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS.slice(0, 7);
    return GALLERY_ITEMS.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  const currentLightbox =
    lightboxIdx !== null && visibleGallery[lightboxIdx] ? visibleGallery[lightboxIdx] : null;

  const scrollTo = (selector: string, cb?: () => void) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (cb) setTimeout(cb, 220);
  };

  return (
    <>
      {/* 08 – Gallery */}
      <section id="opt2-gallery" className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0] mb-3">
                08 · Gallery
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1f335c] leading-[1.15]">
                Life Across the Resort
              </h2>
            </div>

            <a
              href="https://oceanparadisezanzibar.com/photo-gallery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1f335c] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Photos</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-slate-200"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'All'}
              onClick={() => {
                setActiveCategory('All');
                setLightboxIdx(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'All'
                  ? 'bg-[#1f335c] text-white'
                  : 'bg-[#f7fafb] text-[#475569] hover:text-[#00afc0]'
              }`}
            >
              All Highlights
            </button>
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIdx(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? 'bg-[#1f335c] text-white'
                    : 'bg-[#f7fafb] text-[#475569] hover:text-[#00afc0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleGallery.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className={`group relative overflow-hidden bg-slate-100 text-left ${
                  idx === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3]' : 'aspect-[4/3]'
                }`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#09152b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4"
                  aria-hidden="true"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#6ce6f2]">
                      {item.category}
                    </p>
                    <p className="text-sm text-white font-medium">{item.title}</p>
                  </div>
                  <Maximize2 className="w-4 h-4 text-white shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 09 – Location */}
      <section id="opt2-location" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#00afc0] mb-4">
                  09 · Location
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1f335c] leading-[1.15] mb-5">
                  Kiwengwa Road, Pwani Mchangani
                </h2>
                <p className="text-sm sm:text-[15px] text-[#394554] leading-relaxed mb-8">
                  Set along Zanzibar’s unspoilt North East coastline, 45 minutes from Abeid Amani
                  Karume International Airport (ZNZ).
                </p>

                <div className="divide-y divide-slate-200 border-y border-slate-200 text-sm mb-8">
                  <div className="py-3.5 flex justify-between gap-4">
                    <span className="text-[#596575]">Address</span>
                    <span className="text-right font-medium text-[#1f335c]">
                      {RESORT_CONTACT.address}
                    </span>
                  </div>
                  <div className="py-3.5 flex justify-between gap-4">
                    <span className="text-[#596575]">GPS</span>
                    <span className="text-right font-medium text-[#1f335c] tabular-nums">
                      {RESORT_CONTACT.gpsFormatted}
                    </span>
                  </div>
                  <div className="py-3.5 flex justify-between gap-4">
                    <span className="text-[#596575]">Telephone</span>
                    <span className="text-right font-medium text-[#1f335c] tabular-nums">
                      {RESORT_CONTACT.phone}
                    </span>
                  </div>
                  <div className="py-3.5 flex justify-between gap-4">
                    <span className="text-[#596575]">Email</span>
                    <span className="text-right font-medium text-[#1f335c]">
                      {RESORT_CONTACT.email}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={RESORT_CONTACT.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#00afc0] hover:bg-[#1f335c] transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="/images/opr/resort-3.jpg"
                  alt="Ocean Paradise Resort & Spa beachfront gardens in Pwani Mchangani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[240px] border border-slate-200 bg-white">
                <iframe
                  title="Ocean Paradise Resort & Spa Zanzibar Map"
                  src={RESORT_CONTACT.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 – Final Booking CTA inspired directly by Altufan Ulu's pre-footer split CTA */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-[#1f335c]">
        <ImageWithFallback
          src="/images/opr/hero-2.jpg"
          alt="White sand and coconut palms at Ocean Paradise Resort & Spa Zanzibar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1b3a]/72" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6ce6f2] mb-3">
              10 · Reservations
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-[1.12] text-balance">
              Your Zanzibar Paradise Awaits
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed">
              Check real-time availability directly with Ocean Paradise Resort &amp; Spa for our
              lowest official website rates and seasonal direct-booking privileges.
            </p>
            <button
              type="button"
              onClick={() => scrollTo('#opt2-booking')}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-[#1f335c] bg-white hover:bg-[#00afc0] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 11 – Minimalist Editorial Footer matching Altufan Ulu */}
      <footer className="bg-white border-t border-slate-200 text-[#394554]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Footer Top Brand & Scroll-Up Bar */}
          <div className="py-8 border-b border-slate-200 flex items-center justify-between gap-4">
            <img
              src={RESORT_LOGO}
              alt="Ocean Paradise Resort & Spa Zanzibar"
              width={180}
              height={70}
              className="h-12 w-auto object-contain"
            />
            <button
              type="button"
              aria-label="Back to top"
              onClick={() => scrollTo('#opt2-hero')}
              className="w-10 h-10 border border-slate-200 hover:border-[#00afc0] hover:text-[#00afc0] text-[#1f335c] flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Footer Middle Editorial Split */}
          <div className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-5">
              <p className="font-display text-2xl sm:text-3xl text-[#1f335c] leading-snug max-w-md">
                Impressive, intimate, and instantly inviting.
              </p>
              <div className="text-xs sm:text-sm text-[#596575] space-y-1">
                <p>{RESORT_CONTACT.address}</p>
                <p className="tabular-nums">{RESORT_CONTACT.phone}</p>
                <p>{RESORT_CONTACT.email}</p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-3">
                  Explore
                </h3>
                <ul className="space-y-2 text-[#596575]">
                  <li>
                    <a
                      href="#opt2-about"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-about');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      The Resort
                    </a>
                  </li>
                  <li>
                    <a
                      href="#opt2-zanzibar"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-zanzibar');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      Explore Zanzibar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#opt2-offers"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-offers');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      Special Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#opt2-community"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-community');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      Community Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#opt2-gallery"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-gallery');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-3">
                  Accommodation
                </h3>
                <ul className="space-y-2 text-[#596575]">
                  {ROOM_CATEGORIES.map((room) => (
                    <li key={room.id}>
                      <a
                        href="#opt2-accommodation"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo('#opt2-accommodation', () => onSelectRoom(room.id));
                        }}
                        className="hover:text-[#00afc0]"
                      >
                        {room.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-3">
                  Dining &amp; More
                </h3>
                <ul className="space-y-2 text-[#596575]">
                  {DINING_VENUES.map((venue) => (
                    <li key={venue.id}>
                      <a
                        href="#opt2-dining"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo('#opt2-dining', () => onSelectDining(venue.id));
                        }}
                        className="hover:text-[#00afc0]"
                      >
                        {venue.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#opt2-experiences"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#opt2-experiences');
                      }}
                      className="hover:text-[#00afc0]"
                    >
                      Spa &amp; Experiences
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1f335c] mb-3">
                  Follow Us
                </h3>
                <div className="space-y-2.5 text-[#596575]">
                  <a
                    href={RESORT_CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#00afc0]"
                  >
                    <Instagram className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={RESORT_CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#00afc0]"
                  >
                    <Facebook className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Hairline Bar */}
          <div className="py-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#596575]">
            <p>© {new Date().getFullYear()} Ocean Paradise Resort &amp; Spa Zanzibar. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://oceanparadisezanzibar.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00afc0]"
              >
                Privacy Policy
              </a>
              <a
                href="https://oceanparadisezanzibar.com/terms-conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00afc0]"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="https://oceanparadisezanzibar.com/sitemap/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00afc0]"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>

      {currentLightbox && lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightbox.title}
          className="fixed inset-0 z-50 bg-[#08101e]/92 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxIdx(null)}
            className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>

          {visibleGallery.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((lightboxIdx - 1 + visibleGallery.length) % visibleGallery.length);
                }}
                className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((lightboxIdx + 1) % visibleGallery.length);
                }}
                className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="max-w-5xl w-full max-h-[86vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightbox.image}
              alt={currentLightbox.title}
              referrerPolicy="no-referrer"
              className="max-h-[76vh] w-auto object-contain"
            />
            <p className="mt-4 text-sm text-white">
              <span className="text-[#6ce6f2] mr-2">{currentLightbox.category}</span>·{' '}
              <span className="ml-2">{currentLightbox.title}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
