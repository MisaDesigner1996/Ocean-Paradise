/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeaderOptionTwoHero } from './components/HeaderOptionTwoHero';
import { BookingEngine } from './components/BookingEngine';
import { AboutSection } from './components/AboutSection';
import { AccommodationSection } from './components/AccommodationSection';
import { DiningSection } from './components/DiningSection';
import { SpaSection } from './components/SpaSection';
import { RecreationSection } from './components/RecreationSection';
import { WeddingsSection } from './components/WeddingsSection';
import { OffersSection } from './components/OffersSection';
import { ExploreZanzibarSection } from './components/ExploreZanzibarSection';
import { CommunitySection } from './components/CommunitySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

import { EditorialNavbar } from './option2/EditorialNavbar';
import { EditorialHero } from './option2/EditorialHero';
import { EditorialAbout } from './option2/EditorialAbout';
import { EditorialAccommodation } from './option2/EditorialAccommodation';
import { EditorialDining } from './option2/EditorialDining';
import { EditorialExperiences } from './option2/EditorialExperiences';
import { EditorialZanzibarOffersCommunity } from './option2/EditorialZanzibarOffersCommunity';
import { EditorialGalleryLocationFooter } from './option2/EditorialGalleryLocationFooter';

type DesignConcept = 'editorial2' | 'classic1' | 'overlay1';

export default function App() {
  const [designConcept, setDesignConcept] = useState<DesignConcept>('editorial2');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [selectedDiningId, setSelectedDiningId] = useState<string | null>(null);

  const switchConcept = (concept: DesignConcept) => {
    setDesignConcept(concept);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1e293b]">
      {designConcept === 'editorial2' ? (
        <>
          <EditorialNavbar
            onSelectRoom={(roomId) => setSelectedRoomId(roomId)}
            onSelectDining={(venueId) => setSelectedDiningId(venueId)}
          />
          <main className="flex-1">
            <EditorialHero />
            <EditorialAbout />
            <EditorialAccommodation
              selectedRoomId={selectedRoomId}
              onSelectRoom={setSelectedRoomId}
            />
            <EditorialDining
              selectedDiningId={selectedDiningId}
              onSelectDining={setSelectedDiningId}
            />
            <EditorialExperiences />
            <EditorialZanzibarOffersCommunity />
            <EditorialGalleryLocationFooter
              onSelectRoom={(roomId) => setSelectedRoomId(roomId)}
              onSelectDining={(venueId) => setSelectedDiningId(venueId)}
            />
          </main>
        </>
      ) : (
        <>
          {designConcept === 'classic1' && (
            <Navbar
              onSelectRoom={(roomId) => setSelectedRoomId(roomId)}
              onSelectDining={(venueId) => setSelectedDiningId(venueId)}
            />
          )}

          <main className="flex-1">
            {designConcept === 'classic1' ? (
              <HeroSection />
            ) : (
              <HeaderOptionTwoHero
                onSelectRoom={(roomId) => setSelectedRoomId(roomId)}
                onSelectDining={(venueId) => setSelectedDiningId(venueId)}
              />
            )}
            <BookingEngine />
            <AboutSection />
            <AccommodationSection
              selectedRoomId={selectedRoomId}
              onSelectRoom={setSelectedRoomId}
            />
            <DiningSection
              selectedDiningId={selectedDiningId}
              onSelectDining={setSelectedDiningId}
            />
            <SpaSection />
            <RecreationSection />
            <WeddingsSection />
            <OffersSection />
            <ExploreZanzibarSection />
            <CommunitySection />
            <GallerySection />
            <LocationSection />
            <FinalCtaSection />
          </main>

          <Footer />
        </>
      )}

      {/* Discreet Design Option Switcher */}
      <div
        role="group"
        aria-label="Homepage design concept switcher"
        className={`fixed bottom-5 z-40 inline-flex items-center p-1 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-full text-xs ${
          designConcept === 'overlay1' ? 'right-22' : 'right-5'
        }`}
      >
        <button
          type="button"
          onClick={() => switchConcept('editorial2')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
            designConcept === 'editorial2'
              ? 'bg-[#1f335c] text-white'
              : 'text-[#475569] hover:text-[#1f335c]'
          }`}
        >
          Option 2 · Editorial
        </button>
        <button
          type="button"
          onClick={() => switchConcept('classic1')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
            designConcept === 'classic1'
              ? 'bg-[#00afc0] text-white'
              : 'text-[#475569] hover:text-[#1f335c]'
          }`}
        >
          Option 1 · Classic
        </button>
        <button
          type="button"
          onClick={() => switchConcept('overlay1')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
            designConcept === 'overlay1'
              ? 'bg-[#00afc0] text-white'
              : 'text-[#475569] hover:text-[#1f335c]'
          }`}
        >
          Option 1 · Overlay
        </button>
      </div>
    </div>
  );
}
