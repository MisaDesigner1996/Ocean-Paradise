import React from 'react';
import { Compass, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { RESORT_CONTACT } from '../data/resortData';
import { ImageWithFallback } from './ImageWithFallback';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1220px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00afc0] mb-3">
              Location &amp; Arrival
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1f335c] leading-[1.15] text-balance mb-5">
              On Zanzibar’s North East Coast
            </h2>
            <p className="text-[15px] text-[#394554] leading-relaxed mb-8">
              Set along Kiwengwa Road in Pwani Mchangani, Ocean Paradise Resort &amp; Spa lies a
              scenic 45-minute drive from Abeid Amani Karume International Airport (ZNZ) and historic
              Stone Town.
            </p>

            <div className="space-y-4 py-6 border-y border-slate-200 mb-8 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00afc0] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1f335c]">Official Address</p>
                  <p className="text-[#475569]">{RESORT_CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#00afc0] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1f335c]">GPS Coordinates</p>
                  <p className="text-[#475569] tabular-nums">
                    {RESORT_CONTACT.gpsFormatted} ({RESORT_CONTACT.gpsDecimal})
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00afc0] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1f335c]">24/7 Reception &amp; Reservations</p>
                  <p className="text-[#475569] tabular-nums">{RESORT_CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00afc0] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1f335c]">Email</p>
                  <p className="text-[#475569]">{RESORT_CONTACT.email}</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href={RESORT_CONTACT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#00afc0] hover:bg-[#008e9c] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="aspect-[16/9] overflow-hidden rounded-sm bg-slate-100">
              <ImageWithFallback
                src="/images/opr/resort-3.jpg"
                alt="Landscaped beachfront grounds at Ocean Paradise Resort & Spa in Pwani Mchangani"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[260px] sm:h-[300px] w-full overflow-hidden rounded-sm border border-slate-200 bg-slate-100">
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
  );
};
