import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { RESORT_CONTACT, RESORT_LOGO } from '../data/resortData';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-[#394554]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={RESORT_LOGO}
              alt="Ocean Paradise Resort & Spa Zanzibar"
              width={180}
              height={70}
              className="h-14 w-auto object-contain"
            />
            <p className="text-sm text-[#596575] leading-relaxed max-w-sm">
              Set across 6.5 hectares of lush coastal gardens along Zanzibar’s North East coast,
              Ocean Paradise Resort &amp; Spa blends traditional roundhouse chalets with Indian Ocean
              tranquillity.
            </p>
            <p className="text-xs text-[#596575]">
              Partially Owned and Managed by Gulf Hotels Group
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#1f335c] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  About the Resort
                </a>
              </li>
              <li>
                <a
                  href="#accommodation"
                  onClick={(e) => scrollToSection(e, '#accommodation')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#dining"
                  onClick={(e) => scrollToSection(e, '#dining')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="#recreation"
                  onClick={(e) => scrollToSection(e, '#recreation')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#zanzibar"
                  onClick={(e) => scrollToSection(e, '#zanzibar')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Explore Zanzibar
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#1f335c] mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#offers"
                  onClick={(e) => scrollToSection(e, '#offers')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, '#gallery')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => scrollToSection(e, '#community')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Community Project
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, '#location')}
                  className="hover:text-[#00afc0] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, '#booking')}
                  className="font-semibold text-[#00afc0] hover:text-[#1f335c] transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#1f335c] mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-[#596575]">
              <li>{RESORT_CONTACT.address}</li>
              <li>
                <a
                  href={`tel:${RESORT_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#00afc0] transition-colors tabular-nums"
                >
                  {RESORT_CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESORT_CONTACT.email}`}
                  className="hover:text-[#00afc0] transition-colors break-all"
                >
                  {RESORT_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Follow Us */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#1f335c] mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={RESORT_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#394554] hover:text-[#00afc0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href={RESORT_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#394554] hover:text-[#00afc0] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#00afc0]" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-[#f7fafb]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#596575]">
          <p>© {new Date().getFullYear()} Ocean Paradise Resort &amp; Spa Zanzibar. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://oceanparadisezanzibar.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00afc0] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://oceanparadisezanzibar.com/terms-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00afc0] transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="https://oceanparadisezanzibar.com/sitemap/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00afc0] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
