import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, X } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryItem } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS.slice(0, 9);
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f7fafb] border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Visual Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1f335c] leading-[1.15]">
              Resort Photo Gallery
            </h2>
          </div>

          <a
            href="https://oceanparadisezanzibar.com/photo-gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f335c] hover:text-[#00afc0] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View All Photos</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div
          role="tablist"
          aria-label="Gallery categories"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'All'}
            onClick={() => {
              setActiveCategory('All');
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'All'
                ? 'bg-[#1f335c] text-white'
                : 'bg-white text-[#475569] border border-slate-200 hover:border-[#00afc0] hover:text-[#00afc0]'
            }`}
          >
            Featured
          </button>

          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === category
                  ? 'bg-[#1f335c] text-white'
                  : 'bg-white text-[#475569] border border-slate-200 hover:border-[#00afc0] hover:text-[#00afc0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden rounded-sm bg-slate-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00afc0] ${
                idx === 0 && filteredItems.length >= 4 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0d192e]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-5"
                aria-hidden="true"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7fe3ee]">
                    {item.category}
                  </p>
                  <p className="text-sm font-medium text-white mt-0.5">{item.title}</p>
                </div>
                <Maximize2 className="w-4 h-4 text-white shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          className="fixed inset-0 z-50 bg-[#08101e]/92 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close photo lightbox"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
                }}
                className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center rounded-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
                }}
                className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-[#00afc0] text-white flex items-center justify-center rounded-sm"
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
              src={currentLightboxItem.image}
              alt={currentLightboxItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[76vh] w-auto object-contain rounded-sm"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-xs uppercase tracking-widest text-[#7fe3ee]">
                {currentLightboxItem.category}
              </p>
              <p className="text-base font-medium mt-1">{currentLightboxItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
