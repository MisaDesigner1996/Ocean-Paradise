export interface RoomCategory {
  id: string;
  name: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  roomCount: string;
  roomSize: string;
  bedType: string;
  view: string;
  location: string;
  maxOccupancy: string;
  outdoorSpace: string;
  interconnecting: string;
  features: string[];
  officialUrl: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  cuisine: string;
  dressCode: string;
  location: string;
  timing: string;
  officialUrl: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  summary: string;
  image: string;
  validity: string;
  highlights: string[];
  terms: string[];
  officialUrl: string;
}

export interface GalleryItem {
  id: string;
  category:
    | 'Resort'
    | 'Accommodation'
    | 'Swimming Pool'
    | 'Beach'
    | 'Dining'
    | 'Spa'
    | 'Zanzibar';
  title: string;
  image: string;
}

export const RESORT_LOGO = '/images/opr/opr-logo-new.png';

export const HERO_SLIDES = [
  {
    id: 'pool-bridge',
    image: '/images/opr/hero-1.jpg',
    alt: 'Ocean Paradise Resort & Spa Zanzibar swimming pool, wooden bridge, makuti roof pavilion, and turquoise Indian Ocean',
    caption: 'Pwani Mchangani · North East Coast, Zanzibar',
  },
  {
    id: 'white-beach',
    image: '/images/opr/hero-2.jpg',
    alt: 'White sandy beach lined with coconut palms and traditional makuti sun umbrellas at Ocean Paradise Zanzibar',
    caption: 'Private White Sandy Beach · Indian Ocean',
  },
  {
    id: 'coastal-panorama',
    image: '/images/opr/hero-3.jpg',
    alt: 'Oceanfront view across the lush tropical grounds and azure ocean at Ocean Paradise Zanzibar',
    caption: '6.5 Hectares of Landscaped Tropical Gardens',
  },
  {
    id: 'resort-chalets',
    image: '/images/opr/slide-1.jpg',
    alt: 'Traditional African roundhouse chalets with pitched makuti roofs surrounded by palms',
    caption: 'Traditional Roundhouse Chalets · Makuti Architecture',
  },
];

export const RESORT_CONTACT = {
  name: 'Ocean Paradise Resort & Spa Zanzibar',
  address: 'Kiwengwa Road, Pwani Mchangani, North East Coast, Zanzibar, Tanzania',
  gpsDecimal: '-5.936632, 39.360688',
  gpsFormatted: '5°56′11.88″S · 39°21′38.48″E',
  phone: '+255 24 550 4000',
  reservationsPhone: '+255 774 440990',
  email: 'info@oceanparadisezanzibar.com',
  reservationsEmail: 'reservations@oceanparadisezanzibar.com',
  whatsapp: 'https://wa.me/255774440990',
  instagram: 'https://www.instagram.com/oceanparadisezanzibar/',
  facebook: 'https://www.facebook.com/oceanparadisezanzibar',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-5.936632,39.360688',
  mapEmbedUrl: 'https://maps.google.com/maps?q=-5.936632,39.360688&z=14&output=embed',
  videoUrl: 'https://www.youtube.com/watch?v=ZxZlbvhimP0',
  brochureUrl: 'https://oceanparadisezanzibar.com/view-our-online-brochure/',
};

export function buildOfficialBookingUrl(params: {
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  childAges: number[];
  rooms?: number;
}): string {
  const { checkInDate, checkOutDate, adults, children, childAges, rooms = 1 } = params;
  const roomEntries: string[] = [];
  for (let r = 1; r <= rooms; r++) {
    let entry = `ac${r}=${adults},cc${r}=${r === 1 ? children : 0}`;
    if (r === 1 && children > 0) {
      const ages = Array.from({ length: children }, (_, i) => childAges[i] ?? 5);
      entry += `,ca${r}=[${ages.join(',')}]`;
    }
    roomEntries.push(entry);
  }
  const guest = `[${roomEntries.join('],[')}]`;
  return (
    'https://oceanparadiseresort.securedreservations.com/reservation' +
    '?desttype=2' +
    `&checkInDate=${encodeURIComponent(checkInDate)}` +
    `&checkOutDate=${encodeURIComponent(checkOutDate)}` +
    `&guest=${encodeURIComponent(guest)}` +
    '&destid=b1db78f5-aef0-4466-85e4-6e8c0e88501f' +
    '&propCode=UI-0480660'
  );
}

export const STANDARD_ROOM_FEATURES = [
  'Private en-suite bathroom with shower',
  'Air conditioning & ceiling fan',
  'Minibar fridge & tea/coffee facilities',
  'Mosquito net over beds',
  'In-room electronic safe',
  'Flat-screen satellite TV & Wi-Fi',
  'Hairdryer & shaver plug point',
  'Private balcony or terrace with seating',
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'standard-garden',
    name: 'Standard Garden',
    shortDescription:
      'Traditional African roundhouse rooms set on the higher-level terrace amidst serene gardens, close to Bahari Bar and Reception.',
    fullDescription:
      'Traditional African roundhouse rooms with ground and upper level options. Built on the higher level terrace of the resort in close proximity to the Bahari Bar, Internet Café, Boardroom, and Reception area. Each room features a private balcony with seating and views over the landscaped gardens and resort.',
    image: '/images/opr/room-std.jpg',
    roomCount: '32 Rooms',
    roomSize: '49 m²',
    bedType: '1 European King (Double) or 2 Continental Single Beds (Twin)',
    view: 'Garden & Resort View',
    location: 'Approx. 250m from the beach and pool',
    maxOccupancy: 'Max 3 guests (3rd guest on extra bed)',
    outdoorSpace: 'Private balcony with seating',
    interconnecting: 'Family interconnecting options available on request',
    features: STANDARD_ROOM_FEATURES,
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/standard-garden/',
  },
  {
    id: 'superior-garden',
    name: 'Superior Garden',
    shortDescription:
      'Elevated second-level terrace chalets with pitched makuti roofs and balconies overlooking mature palms and coastal gardens.',
    fullDescription:
      'Traditional African roundhouse rooms with ground and upper level rooms, built on the second level terrace near the Bahari Bar, Boardroom, and Reception. Each room opens via large patio doors onto a shaded balcony overlooking the colorful resort gardens.',
    image: '/images/opr/room-sup-garden.jpg',
    roomCount: '24 Rooms',
    roomSize: '49 m²',
    bedType: '1 European King (Double) or 2 Continental Single Beds (Twin)',
    view: 'Garden & Resort View',
    location: 'Approx. 200–230m from the beach and pool',
    maxOccupancy: 'Max 3 guests (3rd guest on extra bed)',
    outdoorSpace: 'Private balcony with seating',
    interconnecting: 'Available as interconnecting family rooms on request',
    features: STANDARD_ROOM_FEATURES,
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/superior-garden/',
  },
  {
    id: 'superior-garden-family',
    name: 'Superior Garden Family Unit',
    shortDescription:
      'Two inter-leading 49 m² roundhouse chalets combining a King bedroom with a Twin bedroom for effortless family stays.',
    fullDescription:
      'Designed for families seeking spacious privacy, this unit comprises two inter-leading traditional African roundhouse rooms (49 m² each, 98 m² combined) connecting a European King bedroom to a Twin room with two single beds. Bookings with children under 13 are accommodated on ground floor units.',
    image: '/images/opr/room-family.jpg',
    roomCount: 'Family Units',
    roomSize: '98 m² (2 × 49 m²)',
    bedType: '1 King bedroom inter-leading to 1 Twin bedroom (2 single beds)',
    view: 'Garden & Resort View',
    location: 'Second level terrace, approx. 200–230m from beach',
    maxOccupancy: 'Up to 4 guests + extra child bed on request',
    outdoorSpace: 'Dual terraces / balconies with seating',
    interconnecting: 'Guaranteed inter-leading family configuration',
    features: STANDARD_ROOM_FEATURES,
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/superior-garden-family/',
  },
  {
    id: 'superior-deluxe',
    name: 'Superior Deluxe',
    shortDescription:
      'Ground-level chalets on the lower terrace placing you steps from the lagoon swimming pool, Jahazi Restaurant, and sandy shore.',
    fullDescription:
      'Traditional African roundhouse chalets on ground level built on the lower terrace of the resort in closer proximity to the beach, lagoon swimming pool, Jahazi Restaurant, and Pool Bar. Each chalet opens onto a private terrace with seating overlooking the gardens.',
    image: '/images/opr/room-deluxe.jpg',
    roomCount: 'Lower Terrace Chalets',
    roomSize: '49 m²',
    bedType: '1 European King (Double) or 2 Continental Single Beds (Twin)',
    view: 'Lower Garden & Resort View',
    location: 'Approx. 50–130m from the beach and pool',
    maxOccupancy: 'Max 3 guests (3rd guest on extra bed)',
    outdoorSpace: 'Ground-level terrace with seating',
    interconnecting: 'Family interconnecting rooms available on request',
    features: STANDARD_ROOM_FEATURES,
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/superior/',
  },
  {
    id: 'superior-deluxe-seafront',
    name: 'Superior Deluxe Seafront',
    shortDescription:
      'Front-row roundhouse chalets positioned just 5 to 10 metres from the private white sandy beach and turquoise Indian Ocean.',
    fullDescription:
      'Set on the lower terrace right beside the private beach, these ground-level traditional roundhouse chalets offer uninterrupted proximity to the ocean. Step straight from your private seated terrace onto white sand just 5–10 metres away.',
    image: '/images/opr/room-seafront.jpg',
    roomCount: 'Seafront Chalets',
    roomSize: '49 m²',
    bedType: '1 European King (Double) or 2 Continental Single Beds (Twin)',
    view: 'Direct Ocean & Beach View',
    location: '5–10m from the private white sandy beach',
    maxOccupancy: 'Max 3 guests (3rd guest on extra bed)',
    outdoorSpace: 'Beachfront terrace with seating',
    interconnecting: 'Family interconnecting rooms available on request',
    features: STANDARD_ROOM_FEATURES,
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/superior-seafront/',
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    shortDescription:
      'Expansive 98 m² dual-chalet sanctuary pairing an en-suite King bedroom with a separate lounge, guest bath, and ocean views.',
    fullDescription:
      'Two exclusive 98 m² suites crafted from two inter-leading roundhouse chalets on the lower terrace, 20–40m from the beach. Features a main European King bedroom with en-suite bathroom, an interconnecting lounge chalet with guest bathroom, flat-screen TVs in both rooms, separate entrance doors, and a terrace with limited ocean and garden views.',
    image: '/images/opr/room-junior.jpg',
    roomCount: '2 Exclusive Suites',
    roomSize: '98 m²',
    bedType: '1 European King (Double) + Separate Lounge Chalet',
    view: 'Limited Ocean & Lush Garden View',
    location: 'Approx. 20–40m from the beach',
    maxOccupancy: 'Max 3 guests',
    outdoorSpace: 'Private terrace with seating',
    interconnecting: 'Private main bedroom + interconnecting lounge',
    features: [
      ...STANDARD_ROOM_FEATURES,
      'Separate lounge chalet with guest bathroom',
      'Flat-screen TV in both bedroom and lounge',
    ],
    officialUrl: 'https://oceanparadisezanzibar.com/rooms-suites/junior-suite/',
  },
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'ocean-restaurant',
    name: 'Ocean Restaurant',
    tag: 'Panoramic Breakfast Dining',
    shortDescription:
      'Perched two floors up with sweeping vistas over the gardens and Indian Ocean, serving generous buffet breakfasts each morning.',
    fullDescription:
      'Ocean Restaurant sits two floors up with panoramic views across the entire resort and the turquoise Indian Ocean beyond. Start every morning with a sumptuous buffet breakfast featuring freshly baked breads, croissants and Danish pastries, fresh squeezed tropical juices, local fruits, cold cuts, cheeses, and hot dishes cooked to order.',
    image: '/images/opr/dining-ocean.jpg',
    cuisine: 'International & Zanzibari Buffet Breakfast',
    dressCode: 'Casual (resort attire)',
    location: 'Upper level overlooking the resort and Indian Ocean',
    timing: 'Daily Breakfast · 07:00 – 10:00',
    officialUrl: 'https://oceanparadisezanzibar.com/dining/ocean-restaurant/',
  },
  {
    id: 'jahazi-restaurant',
    name: 'Jahazi Restaurant',
    tag: 'Poolside & Starlit Dining',
    shortDescription:
      'Set beside the lagoon pool serving Zanzibar’s finest wood-fired pizzas and à la carte lunches by day, and themed buffets with live local bands by night.',
    fullDescription:
      'Down beside the swimming pool, Jahazi Restaurant serves light poolside snacks, wood-fired pizzas, and an à la carte selection of international and authentic Zanzibari cuisine for lunch. Late afternoons bring complimentary tea, coffee, snacks, and daily happy hour specials before transforming under the African stars for themed dinner buffets with live local entertainment.',
    image: '/images/opr/dining-jahazi.jpg',
    cuisine: 'Wood-Fired Pizzas, À La Carte Lunch & Themed Dinner Buffets',
    dressCode: 'Casual by day · Smart casual in the evening',
    location: 'Poolside terrace',
    timing: 'Lunch 12:30 – 15:00 · Afternoon Tea & Dinner 19:00 – 22:00',
    officialUrl: 'https://oceanparadisezanzibar.com/dining/jahazi-restaurant/',
  },
  {
    id: 'mawimbi-restaurant',
    name: 'Mawimbi Restaurant',
    tag: 'Beachfront Seafood & Swahili Fusion',
    shortDescription:
      'An intimate beachfront dining pavilion pairing freshly caught Indian Ocean seafood with Swahili spice-infused culinary craft.',
    fullDescription:
      'Set on a stunning beachfront location steps from the water’s edge, Mawimbi Restaurant serves sumptuous Zanzibar seafood and Swahili fusion creations incorporating traditional island spices with Western culinary influences for lunch, and transforms into a romantic candlelit venue by night (available at a small supplement).',
    image: '/images/opr/dining-mawimbi.jpg',
    cuisine: 'Fresh Zanzibar Seafood & Traditional Swahili Fusion',
    dressCode: 'Casual by day · Smart casual for dinner',
    location: 'Beachfront',
    timing: 'Lunch & Romantic Candlelit Dinner (advance reservation recommended)',
    officialUrl: 'https://oceanparadisezanzibar.com/dining/mawimbi-restaurant/',
  },
  {
    id: 'bahari-bar',
    name: 'Bahari Bar & Lounge',
    tag: 'Waterfall Terrace Lounge',
    shortDescription:
      'Elevated reception-level lounge beside a tranquil waterfall feature with panoramic views over the palms and sea.',
    fullDescription:
      'Relax at the Bahari Bar & Lounge with sweeping views over the resort gardens and Indian Ocean beside the soothing sound of our waterfall feature. In the evenings, unwind with nightly screenings, major sporting events, occasional karaoke, and complimentary Wi-Fi hotspot access.',
    image: '/images/opr/dining-bahari.jpg',
    cuisine: 'Cocktails, Fine Spirits, Refreshments & Lounge Drinks',
    dressCode: 'Casual',
    location: 'Reception level beside the waterfall feature',
    timing: 'Daily · 09:00 – 00:00 (Midnight)',
    officialUrl: 'https://oceanparadisezanzibar.com/dining/bahari-bar-lounge/',
  },
  {
    id: 'pool-bar',
    name: 'Pool Bar',
    tag: 'Shaded Swim-Up Bar',
    shortDescription:
      'Cool off in one of Zanzibar’s largest swimming pools and sip tropical cocktails directly at our shaded swim-up counter.',
    fullDescription:
      'Relax at the Pool Bar overlooking the lagoon pool, or stay cool in the water and enjoy freshly mixed tropical cocktails and chilled refreshments right at the shaded swim-up bar. Complimentary Wi-Fi hotspot available.',
    image: '/images/opr/restaurant-2.jpg',
    cuisine: 'Tropical Cocktails, Fresh Juices & Poolside Refreshments',
    dressCode: 'Casual / Swimwear by pool',
    location: 'Poolside & Swim-up counter',
    timing: 'Daily 09:00 – 23:00 · Swim-up Bar 09:00 – 18:00',
    officialUrl: 'https://oceanparadisezanzibar.com/dining/pool-bar/',
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'direct-booking-discount',
    title: '10% Discount on Direct Website Bookings',
    summary:
      'Qualify for an exclusive 10% reduction on your accommodation rate when booking directly through the official Ocean Paradise website.',
    image: '/images/opr/resort-7.jpg',
    validity:
      'Valid for stays: 1 Jun 2026 – 15 Jul 2026 · 21 Aug 2026 – 22 Dec 2026 · 10 Jan 2027 – 31 Mar 2027',
    highlights: [
      '10% discount across all available room categories',
      'Best rate guarantee on direct official website reservations',
      'Instant confirmation via the official booking portal',
    ],
    terms: [
      'Valid only for direct online bookings via the official Ocean Paradise website.',
      'Not applicable to Full Board or All-Inclusive meal plan upgrade supplements or holiday supplements.',
      'Offer is subject to availability at the time of booking.',
      'Discount applies only on qualifying seasonal stay nights.',
    ],
    officialUrl:
      'https://oceanparadisezanzibar.com/specials/10-discount-on-direct-website-bookings/',
  },
  {
    id: 'all-inclusive-offer',
    title: 'All-Inclusive Package Upgrade',
    summary:
      'Elevate your Half Board stay into a seamless All-Inclusive island escape with unlimited meals, selected beverages, and poolside treats.',
    image: '/images/opr/beach-5.jpg',
    validity: 'Valid from 6 January 2026 to 5 January 2028',
    highlights: [
      'Adult supplement rate: USD 46 per person, per night',
      'Child supplement rate (ages 3–12): USD 23 per child, per night',
      'Infants aged 0–2 years stay complimentary',
    ],
    terms: [
      'Available as an additional supplement rate on top of the Half Board accommodation rate.',
      'Valid across stays between 6 January 2026 and 5 January 2028.',
      'Includes daily breakfast, lunch, afternoon tea/snacks, dinner, and selected beverages.',
    ],
    officialUrl: 'https://oceanparadisezanzibar.com/specials/all-inclusive-offer/',
  },
  {
    id: 'long-stay-offer',
    title: 'Long Stay Offer — Up to 19% Off',
    summary:
      'Stay 7 nights or longer in paradise and enjoy up to 19% savings on direct online bookings across seasonal dates.',
    image: '/images/opr/hero-2.jpg',
    validity:
      'Valid for stays of 7+ nights: 1 Jun 2026 – 15 Jul 2026 · 21 Aug 2026 – 22 Dec 2026 · 10 Jan 2027 – 31 Mar 2027',
    highlights: [
      'Up to 19% discount when booking 7 consecutive nights or more',
      'Ideal for extended island retreats, diving holidays, and honeymoons',
      'Applies directly when searching 7+ nights on the booking engine',
    ],
    terms: [
      'Offer is valid only for direct online bookings via our official website.',
      'Minimum stay of 7 nights required during qualifying seasonal periods.',
      'Subject to room category availability at the time of booking.',
    ],
    officialUrl: 'https://oceanparadisezanzibar.com/specials/longstay_offer/',
  },
];

export const GALLERY_CATEGORIES: Array<GalleryItem['category']> = [
  'Resort',
  'Accommodation',
  'Swimming Pool',
  'Beach',
  'Dining',
  'Spa',
  'Zanzibar',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-r1', category: 'Resort', title: 'Makuti Roof Reception & Palm Drive', image: '/images/opr/resort-1.jpg' },
  { id: 'gal-r2', category: 'Resort', title: 'Lush 6.5-Hectare Tropical Gardens', image: '/images/opr/resort-3.jpg' },
  { id: 'gal-r3', category: 'Resort', title: 'Evening Lanterns Over the Gardens', image: '/images/opr/resort-7.jpg' },
  { id: 'gal-a1', category: 'Accommodation', title: 'Traditional Roundhouse Chalet', image: '/images/opr/rooms-3.jpg' },
  { id: 'gal-a2', category: 'Accommodation', title: 'Zanzibari Four-Poster Suite Interior', image: '/images/opr/rooms-5.jpg' },
  { id: 'gal-a3', category: 'Accommodation', title: 'Seafront Chalet Terrace', image: '/images/opr/room-seafront.jpg' },
  { id: 'gal-p1', category: 'Swimming Pool', title: 'Lagoon Pool & Wooden Bridge', image: '/images/opr/hero-1.jpg' },
  { id: 'gal-p2', category: 'Swimming Pool', title: 'Palm-Fringed Poolside Terrace', image: '/images/opr/slide-1.jpg' },
  { id: 'gal-b1', category: 'Beach', title: 'Pwani Mchangani White Sandy Shore', image: '/images/opr/beach-1.jpg' },
  { id: 'gal-b2', category: 'Beach', title: 'Makuti Parasols Along the Reef', image: '/images/opr/beach-3.jpg' },
  { id: 'gal-b3', category: 'Beach', title: 'Morning Tide on the North East Coast', image: '/images/opr/beach-5.jpg' },
  { id: 'gal-d1', category: 'Dining', title: 'Ocean Restaurant Panoramic Terrace', image: '/images/opr/dining-ocean.jpg' },
  { id: 'gal-d2', category: 'Dining', title: 'Mawimbi Beachfront Candlelit Setting', image: '/images/opr/dining-mawimbi.jpg' },
  { id: 'gal-d3', category: 'Dining', title: 'Jahazi Poolside Dining & Bar', image: '/images/opr/restaurant-4.jpg' },
  { id: 'gal-s1', category: 'Spa', title: 'Hot & Cold Plunge Jacuzzis', image: '/images/opr/spa-jacuzzi.jpg' },
  { id: 'gal-s2', category: 'Spa', title: 'African Sanctuary Spa Lounge', image: '/images/opr/spa-lounge.jpg' },
  { id: 'gal-s3', category: 'Spa', title: 'Tranquil Spa Reception', image: '/images/opr/spa-reception.jpg' },
  { id: 'gal-z1', category: 'Zanzibar', title: 'Indian Ocean Sailing & Dhow Waters', image: '/images/opr/activities-1.jpg' },
  { id: 'gal-z2', category: 'Zanzibar', title: 'Coral Reef & Lagoon Excursions', image: '/images/opr/activities-4.jpg' },
];
