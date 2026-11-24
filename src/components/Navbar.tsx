import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { RESORT_LOGO, ROOM_CATEGORIES, DINING_VENUES } from '../data/resortData';

interface NavbarProps {
  onSelectRoom: (roomId: string) => void;
  onSelectDining: (venueId: string) => void;
}

interface DropdownItem {
  label: string;
  href: string;
  action?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectRoom, onSelectDining }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resortItems: DropdownItem[] = [
    { label: 'Welcome to Ocean Paradise', href: '#about' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Community Project', href: '#community' },
    { label: 'Location & Directions', href: '#location' },
  ];

  const accommodationItems: DropdownItem[] = [
    { label: 'All Room Categories', href: '#accommodation' },
    ...ROOM_CATEGORIES.map((room) => ({
      label: room.name,
      href: '#accommodation',
      action: () => onSelectRoom(room.id),
    })),
  ];

  const diningItems: DropdownItem[] = [
    { label: 'All Dining & Bars', href: '#dining' },
    ...DINING_VENUES.map((venue) => ({
      label: venue.name,
      href: '#dining',
      action: () => onSelectDining(venue.id),
    })),
  ];

  const experienceItems: DropdownItem[] = [
    { label: 'Spa & Wellness', href: '#spa' },
    { label: 'Sports & Recreation', href: '#recreation' },
    { label: 'Weddings & Honeymoons', href: '#weddings' },
    { label: 'Community Project', href: '#community' },
  ];

  const dropdownGroups: Record<string, DropdownItem[]> = {
    'The Resort': resortItems,
    Accommodation: accommodationItems,
    Dining: diningItems,
    Experiences: experienceItems,
  };

  const scrollToTarget = (href: string, action?: () => void) => {
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
          ? 'bg-white/97 backdrop-blur-md border-slate-200 shadow-sm'
          : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[76px] flex items-center justify-between gap-4 xl:gap-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget('#hero');
          }}
          className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00afc0]"
          aria-label="Ocean Paradise Resort & Spa Zanzibar Home"
        >
          <img
            src={RESORT_LOGO}
            alt="Ocean Paradise Resort & Spa Zanzibar"
            width={180}
            height={70}
            className="h-11 lg:h-12 w-auto object-contain"
          />
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-[13px] xl:text-sm font-medium text-[#1f335c]"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#hero');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#00afc0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Home
          </a>

          {(['The Resort', 'Accommodation', 'Dining', 'Experiences'] as const).map((label) => {
            const isOpen = openDropdown === label;
            return (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : label)}
                  className="whitespace-nowrap shrink-0 py-2 inline-flex items-center gap-1 hover:text-[#00afc0] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00afc0]"
                >
                  <span>{label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00afc0]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`absolute left-0 top-full pt-1.5 w-60 transition-all duration-150 ${
                    isOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="bg-white border border-slate-200 shadow-lg py-2 rounded-sm">
                    {dropdownGroups[label].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget(item.href, item.action);
                        }}
                        className="block px-4 py-2.5 text-[13px] text-[#1e293b] hover:bg-[#f7fafb] hover:text-[#00afc0] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <a
            href="#zanzibar"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#zanzibar');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#00afc0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Explore Zanzibar
          </a>

          <a
            href="#offers"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#offers');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#00afc0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Special Offers
          </a>

          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#location');
            }}
            className="whitespace-nowrap shrink-0 py-2 hover:text-[#00afc0] transition-colors relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#00afc0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#booking');
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f335c]"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#1f335c] hover:text-[#00afc0] transition-colors focus-visible:outline-2 focus-visible:outline-[#00afc0]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#hero');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Home
            </a>

            {(['The Resort', 'Accommodation', 'Dining', 'Experiences'] as const).map((group) => {
              const expanded = mobileExpanded === group;
              return (
                <div key={group} className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(expanded ? null : group)}
                    className="w-full py-3 flex items-center justify-between text-sm font-medium text-[#1f335c]"
                  >
                    <span>{group}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180 text-[#00afc0]' : ''}`}
                    />
                  </button>
                  {expanded && (
                    <div className="pb-3 pl-3 space-y-1">
                      {dropdownGroups[group].map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToTarget(item.href, item.action);
                          }}
                          className="block py-2 text-sm text-[#596575] hover:text-[#00afc0]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href="#zanzibar"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#zanzibar');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Explore Zanzibar
            </a>
            <a
              href="#offers"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#offers');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Special Offers
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#location');
              }}
              className="block py-3 text-sm font-medium text-[#1f335c] border-b border-slate-100"
            >
              Contact Us
            </a>

            <div className="pt-4 pb-2">
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#booking');
                }}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
