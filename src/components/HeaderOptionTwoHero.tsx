import React, { useEffect, useState } from 'react';
import { ChevronDown, Plane, X } from 'lucide-react';
import {
  DINING_VENUES,
  HERO_SLIDES,
  RESORT_CONTACT,
  RESORT_LOGO,
  ROOM_CATEGORIES,
} from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeaderOptionTwoHeroProps {
  onSelectRoom: (roomId: string) => void;
  onSelectDining: (venueId: string) => void;
}

export const HeaderOptionTwoHero: React.FC<HeaderOptionTwoHeroProps> = ({
  onSelectRoom,
  onSelectDining,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>('Accommodation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTarget = (selector: string, callback?: () => void) => {
    setMenuOpen(false);
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (callback) {
      setTimeout(callback, 220);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] min-h-[620px] max-h-[920px] overflow-hidden bg-[#133548]"
    >
      {/* Full-bleed background photography */}
      <ImageWithFallback
        src={HERO_SLIDES[0].image}
        alt={HERO_SLIDES[0].alt}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Balanced ambient scrim so white condensed type & turquoise script pop cleanly */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0b2333]/50 via-[#0b2333]/30 to-[#0b2333]/65 pointer-events-none"
        aria-hidden="true"
      />

      {/* Option 2 Header — 100% matching reference layout: Left MENU pill · Center Logo · Right BOOK pill */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[#0f2c3d]/90 backdrop-blur-md py-3 shadow-md'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Left MENU capsule */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#165b70]/85 hover:bg-[#00afc0] backdrop-blur-sm text-white transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {/* Wavy triple-line menu icon matching screenshot */}
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 3C3.5 1 6 1 8.5 3C11 5 13.5 5 16 3C18.5 1 21 1 23 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M1 8C3.5 6 6 6 8.5 8C11 10 13.5 10 16 8C18.5 6 21 6 23 8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M1 12.5C3.5 10.5 6 10.5 8.5 12.5C11 14 13.5 14 16 12.5C18.5 10.5 21 10.5 23 12.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-['Barlow_Condensed',sans-serif] text-[15px] sm:text-base font-medium tracking-[0.12em] uppercase whitespace-nowrap">
              Menu
            </span>
          </button>

          {/* Center Original Ocean Paradise Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#hero');
            }}
            aria-label="Ocean Paradise Resort & Spa Zanzibar Home"
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00afc0]"
          >
            <img
              src={RESORT_LOGO}
              alt="Ocean Paradise Resort & Spa Zanzibar"
              width={180}
              height={70}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Right BOOK capsule */}
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#booking');
            }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#165b70]/85 hover:bg-[#00afc0] backdrop-blur-sm text-white transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="font-['Barlow_Condensed',sans-serif] text-[15px] sm:text-base font-medium tracking-[0.12em] uppercase whitespace-nowrap">
              Book
            </span>
            <Plane className="w-4 h-4 -rotate-12" aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Center Editorial Display Lockup matching screenshot */}
      <div className="relative z-10 h-full max-w-[1160px] mx-auto px-6 flex flex-col items-center justify-center text-center pt-10 pb-20">
        <h1 className="font-['Barlow_Condensed',sans-serif] font-normal uppercase text-white text-4xl sm:text-6xl lg:text-[74px] leading-[0.94] tracking-[0.03em] text-balance drop-shadow-sm">
          For The Best
          <br />
          Zanzibar Experience...
        </h1>

        <p className="font-['Dancing_Script',cursive] text-[#6ce6f2] text-5xl sm:text-7xl lg:text-[86px] leading-none -mt-2 sm:-mt-4 mb-6 drop-shadow-sm select-none">
          Ocean Paradise
        </p>

        <p className="text-sm sm:text-base font-medium text-white/95 max-w-md leading-relaxed drop-shadow-xs">
          Traditional roundhouse chalets and 6.5 hectares of coastal gardens
          to ensure your stay in Zanzibar is unforgettable.
        </p>
      </div>

      {/* Bottom-Left Affiliation Mark matching screenshot */}
      <div className="hidden sm:flex items-center gap-3 absolute left-8 bottom-8 z-10 text-white">
        <div className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center font-display text-sm font-semibold">
          OP
        </div>
        <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.08em] uppercase leading-tight text-white/90 max-w-[130px]">
          Partially Owned &amp; Managed By Gulf Hotels Group
        </p>
      </div>

      {/* Bottom-Center Scroll To Discover Circular Control */}
      <button
        type="button"
        onClick={() => scrollToTarget('#booking')}
        aria-label="Scroll to discover Ocean Paradise"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24 text-white/90 group-hover:text-[#6ce6f2] transition-colors"
            aria-hidden="true"
          >
            <defs>
              <path
                id="scrollCirclePath"
                d="M 50, 50 m -33, 0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
              />
            </defs>
            <text
              fill="currentColor"
              fontSize="8.5"
              fontFamily="Barlow Condensed, sans-serif"
              letterSpacing="1.8"
            >
              <textPath href="#scrollCirclePath" startOffset="9%">
                SCROLL TO DISCOVER
              </textPath>
            </text>
          </svg>
          <span className="absolute w-11 h-11 rounded-full border border-white/65 group-hover:border-[#6ce6f2] transition-colors flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full border border-white group-hover:bg-[#6ce6f2]" />
          </span>
        </div>
      </button>

      {/* Bottom-Right Official WhatsApp Floating Button */}
      <a
        href={RESORT_CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ocean Paradise on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-[#1a99a8] hover:bg-[#00afc0] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f335c]"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.34.638 4.53 1.748 6.41L3 29l7.27-2.207A12.44 12.44 0 0 0 16.001 28C22.906 28 28.5 22.404 28.5 15.5S22.906 3 16.001 3Zm0 22.7c-1.996 0-3.85-.57-5.42-1.55l-.389-.24-4.318 1.31 1.334-4.21-.254-.398A10.15 10.15 0 0 1 5.8 15.5c0-5.633 4.568-10.2 10.201-10.2 5.633 0 10.199 4.567 10.199 10.2 0 5.633-4.566 10.2-10.199 10.2Zm5.593-7.646c-.306-.153-1.81-.892-2.09-.994-.28-.102-.484-.153-.688.153-.204.306-.789.994-.968 1.198-.178.204-.357.23-.663.077-.306-.153-1.292-.476-2.462-1.518-.91-.812-1.524-1.814-1.702-2.12-.178-.306-.019-.472.134-.624.138-.137.306-.357.459-.535.153-.178.204-.306.306-.51.102-.204.051-.383-.026-.536-.077-.153-.688-1.658-.943-2.27-.248-.596-.5-.516-.688-.526l-.586-.01c-.204 0-.535.077-.815.383-.28.306-1.068 1.044-1.068 2.548 0 1.504 1.093 2.957 1.245 3.161.153.204 2.15 3.283 5.208 4.604.728.314 1.295.502 1.738.642.73.232 1.394.199 1.92.121.586-.088 1.81-.74 2.065-1.454.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357Z" />
        </svg>
      </a>

      {/* Slide-out Navigation Drawer opened by MENU pill */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resort Navigation Menu"
          className="fixed inset-0 z-50 bg-[#081523]/70 backdrop-blur-xs flex"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0f2c3d] text-white h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/15">
                <div className="bg-white px-3.5 py-1.5 rounded-full">
                  <img
                    src={RESORT_LOGO}
                    alt="Ocean Paradise Resort & Spa Zanzibar"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00afc0] flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#hero');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#about');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  The Resort
                </a>

                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedGroup(expandedGroup === 'Accommodation' ? null : 'Accommodation')
                    }
                    className="w-full py-3 flex items-center justify-between text-base font-medium hover:text-[#6ce6f2]"
                  >
                    <span>Accommodation</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedGroup === 'Accommodation' ? 'rotate-180 text-[#6ce6f2]' : ''
                      }`}
                    />
                  </button>
                  {expandedGroup === 'Accommodation' && (
                    <div className="pb-3 pl-4 space-y-2 text-sm text-white/80">
                      {ROOM_CATEGORIES.map((room) => (
                        <a
                          key={room.id}
                          href="#accommodation"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToTarget('#accommodation', () => onSelectRoom(room.id));
                          }}
                          className="block py-1 hover:text-[#6ce6f2]"
                        >
                          {room.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setExpandedGroup(expandedGroup === 'Dining' ? null : 'Dining')}
                    className="w-full py-3 flex items-center justify-between text-base font-medium hover:text-[#6ce6f2]"
                  >
                    <span>Dining</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedGroup === 'Dining' ? 'rotate-180 text-[#6ce6f2]' : ''
                      }`}
                    />
                  </button>
                  {expandedGroup === 'Dining' && (
                    <div className="pb-3 pl-4 space-y-2 text-sm text-white/80">
                      {DINING_VENUES.map((venue) => (
                        <a
                          key={venue.id}
                          href="#dining"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToTarget('#dining', () => onSelectDining(venue.id));
                          }}
                          className="block py-1 hover:text-[#6ce6f2]"
                        >
                          {venue.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedGroup(expandedGroup === 'Experiences' ? null : 'Experiences')
                    }
                    className="w-full py-3 flex items-center justify-between text-base font-medium hover:text-[#6ce6f2]"
                  >
                    <span>Experiences</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedGroup === 'Experiences' ? 'rotate-180 text-[#6ce6f2]' : ''
                      }`}
                    />
                  </button>
                  {expandedGroup === 'Experiences' && (
                    <div className="pb-3 pl-4 space-y-2 text-sm text-white/80">
                      <a
                        href="#spa"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget('#spa');
                        }}
                        className="block py-1 hover:text-[#6ce6f2]"
                      >
                        Spa &amp; Wellness
                      </a>
                      <a
                        href="#recreation"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget('#recreation');
                        }}
                        className="block py-1 hover:text-[#6ce6f2]"
                      >
                        Sports &amp; Recreation
                      </a>
                      <a
                        href="#weddings"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget('#weddings');
                        }}
                        className="block py-1 hover:text-[#6ce6f2]"
                      >
                        Weddings &amp; Honeymoons
                      </a>
                      <a
                        href="#community"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget('#community');
                        }}
                        className="block py-1 hover:text-[#6ce6f2]"
                      >
                        Community Project
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#zanzibar"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#zanzibar');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  Explore Zanzibar
                </a>
                <a
                  href="#offers"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#offers');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  Special Offers
                </a>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#gallery');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  Photo Gallery
                </a>
                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#location');
                  }}
                  className="block py-3 text-base font-medium border-b border-white/10 hover:text-[#6ce6f2]"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="pt-8 space-y-4">
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#booking');
                }}
                className="w-full py-3.5 rounded-full bg-[#00afc0] hover:bg-[#0092a1] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Book Your Stay</span>
                <Plane className="w-4 h-4 -rotate-12" />
              </a>
              <p className="text-xs text-white/70 text-center tabular-nums">
                {RESORT_CONTACT.phone} · {RESORT_CONTACT.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
