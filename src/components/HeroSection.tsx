import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[78vh] min-h-[540px] max-h-[860px] overflow-hidden bg-[#1f335c]"
    >
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d192e]/85 via-[#0d192e]/35 to-[#0d192e]/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#7fe3ee] mb-3">
            {currentSlide.caption}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-medium text-white leading-[1.08] tracking-tight text-balance mb-5">
            A Dream Is Closer Than You Think
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-8">
            Impressive, intimate, and instantly inviting. Discover traditional makuti roundhouse
            chalets, 6.5 hectares of swaying coconut palms, and the turquoise waters of Zanzibar’s
            North East coast.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#booking');
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/60 hover:bg-white/10 transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Discover the Resort</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2 absolute right-8 bottom-24 z-10">
        <button
          type="button"
          aria-label="Previous hero photograph"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          className="w-10 h-10 flex items-center justify-center bg-[#0d192e]/50 hover:bg-[#00afc0] text-white border border-white/25 transition-colors rounded-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero photograph"
          onClick={() => setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="w-10 h-10 flex items-center justify-center bg-[#0d192e]/50 hover:bg-[#00afc0] text-white border border-white/25 transition-colors rounded-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
