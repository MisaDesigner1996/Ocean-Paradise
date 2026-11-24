import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const FinalCtaSection: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#1f335c]">
      <ImageWithFallback
        src="/images/opr/hero-2.jpg"
        alt="White sandy beach, makuti umbrellas, and turquoise Indian Ocean at Ocean Paradise Zanzibar"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[#0d192e]/65"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#7fe3ee] mb-3">
          Ocean Paradise Resort &amp; Spa
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-medium text-white leading-[1.12] text-balance mb-5">
          Your Zanzibar Paradise Awaits
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Reserve your roundhouse chalet or seafront suite directly for guaranteed official rates,
          direct-booking savings, and warm Zanzibari hospitality.
        </p>

        <a
          href="#booking"
          onClick={scrollToBooking}
          className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span>Book Your Stay</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
