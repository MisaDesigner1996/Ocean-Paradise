import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { DINING_VENUES, RESORT_LOGO, ROOM_CATEGORIES } from '../data/resortData';

interface EditorialNavbarProps {
  onSelectRoom: (roomId: string) => void;
  onSelectDining: (venueId: string) => void;
}

interface NavDropdownLink {
  label: string;
  href: string;
  action?: () => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({
  onSelectRoom,
  onSelectDining,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dropdowns: Record<string, NavDropdownLink[]> = {
    'The Resort': [
      { label: '01 · Welcome to Ocean Paradise', href: '#opt2-about' },
      { label: '06 · Special Offers', href: '#opt2-offers' },
      { label: '07 · Community Project', href: '#opt2-community' },
      { label: '08 · Photo Gallery', href: '#opt2-gallery' },
      { label: '09 · Location & Map', href: '#opt2-location' },
    ],
    Accommodation: [
      { label: 'All Room Categories', href: '#opt2-accommodation' },
      ...ROOM_CATEGORIES.map((room) => ({
        label: room.name,
        href: '#opt2-accommodation',
        action: () => onSelectRoom(room.id),
      })),
    ],
    Dining: [
      { label: 'All Restaurants & Bars', href: '#opt2-dining' },
      ...DINING_VENUES.map((venue) => ({
        label: venue.name,
        href: '#opt2-dining',
        action: () => onSelectDining(venue.id),
      })),
    ],
    Experiences: [
      { label: 'Spa & Wellness', href: '#opt2-experiences' },
      { label: 'Sports & Recreation', href: '#opt2-experiences' },
      { label: 'Excursions & Activities', href: '#opt2-experiences' },
      { label: 'Weddings & Honeymoons', href: '#opt2-experiences' },
      { label: 'Conference & Incentives', href: '#opt2-experiences' },
    ],
  };

  const scrollTo = (href: string, action?: () => void) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (action) {
      setTimeout(action, 220);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md border-slate-200'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-[76px] flex items-center justify-between gap-4">
        <a
          href="#opt2-hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#opt2-hero');
          }}
          className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00afc0]"
          aria-label="Ocean Paradise Resort & Spa Zanzibar Home"
        >
          <img
            src={RESORT_LOGO}
            alt="Ocean Paradise Resort & Spa Zanzibar"
            width={180}
            height={70}
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-[13px] xl:text-sm font-medium text-[#1f335c]"
        >
          <a
            href="#opt2-hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#opt2-hero');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors"
          >
            Home
          </a>

          {(['The Resort', 'Accommodation', 'Dining', 'Experiences'] as const).map((item) => {
            const isOpen = openDropdown === item;
            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : item)}
                  className="whitespace-nowrap shrink-0 py-2 inline-flex items-center gap-1 hover:text-[#00afc0] transition-colors"
                >
                  <span>{item}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#00afc0]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`absolute left-0 top-full pt-2 w-60 transition-all duration-150 ${
                    isOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="bg-white border border-slate-200 shadow-lg py-2">
                    {dropdowns[item].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(link.href, link.action);
                        }}
                        className="block px-4 py-2.5 text-[13px] text-[#1e293b] hover:bg-[#f7fafb] hover:text-[#00afc0] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <a
            href="#opt2-zanzibar"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#opt2-zanzibar');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors"
          >
            Explore Zanzibar
          </a>

          <a
            href="#opt2-offers"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#opt2-offers');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors"
          >
            Special Offers
          </a>

          <a
            href="#opt2-location"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#opt2-location');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#opt2-booking"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#opt2-booking');
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-[#1f335c] border border-[#1f335c] hover:bg-[#00afc0] hover:border-[#00afc0] hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#1f335c] hover:text-[#00afc0]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            <a
              href="#opt2-hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#opt2-hero');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Home
            </a>

            {(['The Resort', 'Accommodation', 'Dining', 'Experiences'] as const).map((group) => {
              const expanded = mobileGroup === group;
              return (
                <div key={group} className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(expanded ? null : group)}
                    className="w-full py-3 flex items-center justify-between text-sm font-medium text-[#1f335c]"
                  >
                    <span>{group}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expanded ? 'rotate-180 text-[#00afc0]' : ''
                      }`}
                    />
                  </button>
                  {expanded && (
                    <div className="pb-3 pl-3 space-y-1.5">
                      {dropdowns[group].map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo(link.href, link.action);
                          }}
                          className="block py-1.5 text-sm text-[#596575] hover:text-[#00afc0]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href="#opt2-zanzibar"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#opt2-zanzibar');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Explore Zanzibar
            </a>
            <a
              href="#opt2-offers"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#opt2-offers');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Special Offers
            </a>
            <a
              href="#opt2-location"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#opt2-location');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Contact Us
            </a>

            <div className="pt-4 pb-2">
              <a
                href="#opt2-booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#opt2-booking');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#00afc0]"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
