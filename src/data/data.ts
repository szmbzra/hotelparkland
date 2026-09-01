// Homepage content — the fallback/demo data layer (see config/site.ts header
// comment). No CMS is wired up yet, so every home section reads straight from
// here. Copy is sourced from the live hotelparkland.com.np site and verified
// TripAdvisor data; imagery is curated stock standing in for a future
// photoshoot (the property is repositioning to 5-star).

import type {
  NavItem,
  RoomType,
  ActivityItem,
  NearbyItem,
  Testimonial,
  AmenityItem,
  FacilityItem,
  GalleryItem,
  FaqItem,
  DiningVenue,
  MeetingSpace,
  BlogPost,
  OfferItem,
  ExperienceItem,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Accommodation",
    href: "/accommodations",
    // Mirrors the room types in `rooms` below — keep the two lists in step.
    children: [
      { label: "Deluxe Room", href: "/accommodations/deluxe-room" },
      { label: "Suite Room", href: "/accommodations/suite-room" },
      { label: "Presidential Room", href: "/accommodations/presidential-room" },
    ],
  },
  { label: "Dining & Bar", href: "/dining-bar" },
  { label: "Meeting and Events", href: "/meetings-events" },
  { label: "Experiences & Destination", href: "/experiences-destination" },
  { label: "Offers & Packages", href: "/offers" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const hero = {
  eyebrow: "Sauraha · Chitwan National Park, Nepal",
  title: "A Five-Star Sanctuary\non the Edge of the Wild",
  subtitle:
    "Currently welcoming guests with 32 thoughtfully designed rooms as a 4-star hotel, we are expanding our vision with an upcoming 120-room destination, bringing together elevated comfort, modern hospitality, and the natural charm of Chitwan.",
  image: "/img/hero.jpg",
};

export const about = {
  eyebrow: "Welcome To Hotel Parkland",
  title: "Where Jungle Tranquility\nMeets Refined Comfort",
  paragraphs: [
    "Welcome to Hotel Parkland, a premium destination in Sauraha designed for guests seeking comfort, sophistication and authentic Chitwan experiences.From elegantly appointed accommodations and exceptional dining to leisure facilities and curated wildlife adventures, every element is thoughtfully designed to make your stay memorable.Whether you are travelling for leisure, a family escape, a romantic getaway, a corporate retreat or an adventure into the wild, Hotel Parkland brings together the best of contemporary hospitality and the natural charm of Chitwan.",
  ],
  image: "/img/parkland-img.jpg",
  stats: [
    { value: "32", label: "Rooms on Operation" },
    { value: "120", label: "Rooms & Suites" },
    { value: "10 Min", label: "To Sauraha Centre" },
  ],
};

/**
 * /about page content. Kept separate from `about` (the homepage teaser) so the
 * two can say different things — the homepage introduces the property, this
 * page tells the longer story.
 */
export const aboutPage = {
  header: {
    eyebrow: "About Us",
    title: "THE PARKLAND EXPERIENCE",
  },
  intro: {
    eyebrow: "About Us",
    title: "A Five-Star Sanctuary on the Edge of the Wild",
    paragraphs: [
      "Welcome to Hotel Parkland, where traditional hospitality meets the calm of the jungle in the heart of Chitwan. Since 1987 we have been dedicated to giving our guests an exceptional stay, blending modern comfort with the sylvan character that defines this corner of Sauraha.",
      "Our magnificent, mature gardens shelter rare indigenous trees, shrubs and flowers that draw birds and butterflies year-round. Rooms and suites open onto that greenery, ensuring a restful retreat whether you are here for the safari, for business, or simply for the quiet.",
    ],
    signature: "Hotel Parkland",
    signatureRole: "The Parkland Family",
    image: "/img/parkland-img.jpg",
    imageOverlap: "/img/activities/elephant-bathing.jpg",
  },
  facilities: {
    eyebrow: "Facilities",
    title: "Hotel Facilities",
    image: "/img/rooms/room-premier.jpg",
    items: [
      {
        title: "Luxurious Stay",
        description:
          "Deluxe garden rooms to Presidential suites, thoughtfully appointed with premium finishes for a refined, peaceful retreat after exploring Chitwan.",
        icon: "bed",
      },
      {
        title: "Event Destination",
        description:
          "Equipped halls with modern AV technology and dedicated support, tailored for seamless conferences, corporate retreats, and private celebrations.",
        icon: "Landmark",
      },
      {
        title: "Wellness & Leisure",
        description:
          "An outdoor garden pool, spa, sauna, and steam room offer a serene counterpoint to the jungle, just steps away.",
        icon: "HeartPulse",
      },
      {
        title: "Dine & Wine",
        description:
          "Indoor and open-air terrace dining, daily buffet spreads, and a garden bar serving authentic Nepalese and international flavors.",
        icon: "ChefHat",
      },
    ] as FacilityItem[],
  },
};

export const rooms: RoomType[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    image: "/img/rooms/deluxe.jpg",
    images: ["/img/rooms/room-deluxe.jpg", "/img/garden.jpg", "/img/pool.jpg"],
    description:
      "A tranquil garden retreat with natural timber accents and a private balcony overlooking lush greenery. Premium bedding and a spa-inspired bathroom make every stay effortlessly restful.",
    longDescription: [
      "Surrounded by lush greenery, the Deluxe Garden Room provides an intimate, tranquil retreat with warm natural light and elegant finishes. Crafted with natural timber accents and subtle earth tones, the space connects you directly to Sauraha's peaceful natural landscape.",
      "Step out onto your private balcony to take in gentle garden views and fresh jungle breezes. Inside, premium bedding, high-speed Wi-Fi, and a spa-inspired bathroom ensure every moment is centered on deep rest and modern convenience.",
    ],
    pricePerNight: 85,
    size: "28 Sq.m",
    adults: "2 + 1",
    beds: "1 Queen Bed",
    rating: 4.3,
    features: [
      "wifi",
      "tv",
      "ac",
      "shower",
      "toiletries",
      "hairdryer",
      "coffee-tea",
      "towels",
      "balcony",
    ],
  },
  {
    slug: "suite-room",
    name: "Suite Room",
    image: "/img/rooms/suite.jpg",
    images: ["/img/rooms/room-premier.jpg", "/img/garden.jpg", "/img/dining.jpg"],
    description:
      "Spacious and refined, with a separate living lounge and a private terrace overlooking the resort grounds. A soaking tub and rain shower add a touch of everyday indulgence.",
    longDescription: [
      "Designed for guests seeking expansive space and quiet refinement, the Suite Room features a distinct living lounge separate from the main bedroom. Soft lighting, rich upholstery, and contemporary design elements create an inviting setting for work, relaxation, or intimate gatherings.",
      "Relax on your spacious private terrace overlooking the resort grounds, or recharge in an upgraded en-suite bathroom featuring a deep soaking tub and rain shower. Every detail is curated to deliver an elevated, stress-free stay.",
    ],
    pricePerNight: 120,
    size: "34 Sq.m",
    adults: "2 + 1",
    beds: "1 King Bed",
    rating: 4.6,
    featured: true,
    features: [
      "wifi",
      "tv",
      "ac",
      "bath",
      "toiletries",
      "hairdryer",
      "coffee-tea",
      "towels",
      "balcony",
    ],
  },
  {
    slug: "presidential-room",
    name: "Presidential Room",
    image: "/img/rooms/presidential-hp.jpg",
    images: ["/img/rooms/room-villa.jpg", "/img/pool.jpg", "/img/garden.jpg"],
    description:
      "Hotel Parkland's Presidential suite, offering panoramic wilderness views and a private sun deck. A marble bathroom and custom furnishings complete this ultimate sanctuary.",
    longDescription: [
      "The pinnacle of luxury at Hotel Parkland, the Presidential Suite offers an expansive architectural footprint with sweeping panoramic views of the surrounding wilderness. Featuring a grand living area, custom furniture, and bespoke artwork, this Presidential suite redefines high-end hospitality in Chitwan.",
      "Enjoy complete seclusion on your broad private sun deck, complemented by an oversized marble bathroom with deluxe fixtures and exclusive amenities. It is an extraordinary sanctuary crafted for ultimate comfort, privacy, and distinction.",
    ],
    pricePerNight: 180,
    size: "46 Sq.m",
    adults: "2 + 1",
    beds: "1 KingBed",
    rating: 4.9,
    featured: true,
    features: [
      "wifi",
      "tv",
      "ac",
      "bath",
      "toiletries",
      "hairdryer",
      "coffee-tea",
      "towels",
      "balcony",
    ],
  },
];

export const dining = {
  eyebrow: "Dining & Bar",
  title: "Flavours Under the Sauraha Sky",
  paragraph:
    "From authentic Nepalese flavours to international favourites, discover dining experiences crafted to delight every palate.\n\nOur culinary spaces offer sophisticated settings, quality ingredients and attentive service—from relaxed breakfasts to memorable dinners and evening gatherings.",
  features: [
{title:"Outdoor Dining", description:"Al fresco dining surrounded by the beauty of Sauraha."},
{title:"Buffet Dining", description:"A generous selection of fresh flavours for every palate."},
{title:"Restaurant", description:"Contemporary dining featuring local and international cuisine."},
{title:"Bar", description:"Unwind with signature drinks and a relaxed evening ambience."},
  ],
  image: "/img/hp-dining2.jpg",
};

export const leisure = {
  eyebrow: "Leisure & Wellness",
  title: "Serenity Beneath the Chitwan Sky",
  paragraphs: [
    "Spend an unhurried afternoon by the swimming pool or wander through our lush gardens, surrounded by indigenous trees, flowering shrubs, and the gentle presence of birds and butterflies.",
    "A tranquil retreat from the excitement of Chitwan, where nature invites you to slow down, reconnect, and simply be.",
  ],
  image: "/img/pool-hp.jpg",
};

export const activities: ActivityItem[] = [
  {
    title: "Elephant Bathing",
    subtitle: "Join the mahouts at the riverbank",
    image: "/img/activities/elephant-bathing.jpg",
    featured: true,
  },
  { title: "Dugout Canoe Ride", image: "/img/activities/canoe.jpg" },
  { title: "Jungle Jeep Drive", image: "/img/activities/jungle-drive.jpg" },
  { title: "Cultural Dance Tour", image: "/img/activities/cultural.jpg" },
  { title: "Guided Nature Walk", image: "/img/activities/nature-walk.jpg" },
  // { title: "Bird Watching", image: "/img/activities/birdwatching.jpg" },
  // {
  //   title: "Elephant Breeding Center",
  //   image: "/img/activities/elephant-breeding.jpg",
  // },
];

/**
 * Distances are approximate road distances from the hotel in Sauraha and are
 * shown to guests as a rough guide — confirm them before print use.
 */
export const nearby: NearbyItem[] = [
  {
    title: "Chitwan National Park Gate",
    distance: "1.3 Km",
    query: "Chitwan National Park Entrance Gate, Sauraha, Nepal",
    image: "/img/nearby/park-gate.jpg",
    description:
      "Minutes from our door — the gateway to Nepal's first national park and a UNESCO World Heritage site.",
  },
  {
    title: "The Rapti River",
    distance: "400 m",
    query: "Rapti River, Sauraha, Chitwan, Nepal",
    image: "/img/nearby/rapti-river.jpg",
    description:
      "The river that separates Sauraha from the wild — rhinos are often spotted grazing along its banks.",
  },
  {
    title: "Elephant Breeding Centre",
    distance: "3.2 Km",
    query: "Elephant Breeding Centre, Sauraha, Chitwan, Nepal",
    description:
      "Home to the calves of Chitwan's government elephant stables, and an easy morning cycle from the hotel.",
  },
  {
    title: "Tharu Cultural Museum",
    distance: "2.5 Km",
    query: "Tharu Cultural Museum, Bachhauli, Chitwan, Nepal",
    image: "/img/nearby/tharu-museum.jpg",
    description:
      "Textiles, tools and traditions of the indigenous Tharu community, Chitwan's original inhabitants.",
  },
  {
    title: "Bishazari Tal",
    distance: "10 Km",
    query: "Bishazari Tal, Chitwan, Nepal",
    image: "/img/nearby/bishazari-tal.jpg",
    description:
      '"Twenty Thousand Lakes" — a Ramsar-listed wetland and one of the region\'s best birdwatching spots.',
  },
  {
    title: "Gharial Breeding Centre",
    distance: "26 Km",
    query: "Gharial Breeding Center, Kasara, Chitwan, Nepal",
    description:
      "A conservation centre at Kasara raising the critically endangered gharial crocodile for release into the Rapti.",
  },
  {
    title: "Bharatpur Airport",
    distance: "22 Km",
    query: "Bharatpur Airport, Chitwan, Nepal",
    description:
      "Twenty-five-minute flights from Kathmandu land here; we can arrange a car to meet you on arrival.",
  },
];

export const exploreLinks = [
  { label: "Rooms & Suites", href: "#" },
  { label: "Dining & Bar", href: "#" },
  { label: "Wellness & Leisure", href: "#" },
  { label: "Experiences", href: "#" },
];
export const quickLinks = [
  { label: "Book Your Stay", href: "#" },
  { label: "Special Offers", href: "#" },
  { label: "Getting Here", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export const amenities: AmenityItem[] = [
  { label: "Swimming Pool", icon: "waves" },
  { label: "Free Wi-Fi", icon: "wifi" },
  { label: "Room Service", icon: "bell" },
  { label: "24/7 Security", icon: "shield-check" },
  { label: "Private Parking", icon: "car" },
  { label: "Bicycle Rental", icon: "bike" },
  { label: "Currency Exchange", icon: "banknote" },
  { label: "Live Music Evenings", icon: "music" },
  { label: "Conference Hall", icon: "users" },
];

export const trustBadges = [
  { name: "TripAdvisor", image: "/img/trust/trip.png" , link:"https://www.tripadvisor.com/Hotel_Review-g1367591-d1896438-Reviews-Hotel_Parkland-Sauraha_Chitwan_District_Narayani_Zone_Central_Region.html"},
  { name: "Booking.com", image: "/img/trust/bo.png", link:"https://www.booking.com/hotel/np/parkland-chitwan.html" },
  { name: "Agoda", image: "/img/trust/ag.png", link:"https://www.agoda.com/hotel-parkland/hotel/chitwan-np.html?cid=-218" },
  { name: "Expedia", image: "/img/trust/ex.png", link:"https://www.expedia.com/Sauraha-Hotels-Hotel-Parkland.h22518607.Hotel-Information?regionId=11702&langid=1033&semcid=US.UB.GOOGLE.PT-c-EN.HOTEL&semdtl=a1625600556.b127830482108.r1.g1dsa-287861008464.i145058999560.d1270356234835.e1c.j11011034.k19070016.f11t1.n1.l1g.h1b.m1" },
  { name: "Goibibo", image: "/img/trust/goibibo.png", link:"https://www.goibibo.com/hotels/parkland-hotel-in-chitwan-6035664439464244233/" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "While visiting Chitwan National Park we stayed at the Parkland Hotel. The grounds a quite spacious and pretty. The rooms are OK. There is an indoor dining room and an outdoor patio. We had one meal at a table just out in the grassy , treed area....very nich. There is also a fairly large swimming pool with a waterfall. The food was OK..generally typical Nepali fare.",
    author: "Herb_Silverman",
    source: "Los Angeles, California",
  },
  {
    quote:
      "This hotel was a good 3 night stay for me (middle night in a Jungle Tower).  It is a pleasant facility down a lane off the main road (but walkable to town) with rooms with outdoor corridors situated around a large courtyard.  I am a solo traveler and felt comfortable and safe.  My room was on the second floor (top) and was quiet and beds were comfortably firm and clean.",
    author: "Joanne A",
    source: "Upstate New York, New York",
  },
  {
    quote:
      "Calm and wonderful ambience here. Away from the hustle and bustle of the city, and only ten minutes walk to the national park. The staff is very eager to please their guests and very engaged in the wildlife that surrounds them. Especially our guide, Babu, did an excellent job. He was extremely interested in showing us every little detail of our surroundings and had an interest in teaching us about animal/bird names (in both English, Nepalese and Latin). It was clear to see that for Babu, this is not just a job, but a great interest for him to spread his knowledge to others, but also to learn more himself for every tour. We were lucky to have him.",
    author: "Birgit S",
    source: "Hvidovre, Denmark",
  },
  {
    quote:
      "We recently went on the 2 nights, 3 days Chitwan Safari package. Given that the price includes all transport, accommodation, food and activities it is excellent value! Plus the grounds of the hotel are beautiful and the staff are exceptionally helpful.The best part of our stay was our guide, Babu. Not only is Babu extremely knowledgeable about the area and the wildlife, he was a passion for his work that is infectious. Plus he is absolutely hilarious. If you are planning to do the Chitwan Safari, make sure you ask for Babu as your guide!",
    author: "Daniel",
    source: "Sydney, Australia",
  },
];

export const gallery = [
  { src: "/img/gallery-hp3.jpg", alt: "Mature gardens at Hotel Parkland" },
  { src: "/img/gallery-hp1.jpg", alt: "Swimming pool surrounded by gardens" },
  { src: "/img/gallery-hp2.jpg", alt: "Outdoor dining terrace" },
  { src: "/img/gallery-hp.jpg", alt: "Elephant bathing in the river" },
  { src: "/img/gallery-hp4.jpg", alt: "Deluxe Garden Room interior" },
  { src: "/img/gallery-hp5.jpg", alt: "Dugout canoe ride on the river" },
];

/**
 * /gallery page content — the filterable Isotope + lightGallery showcase.
 * Separate from `gallery` (the homepage teaser strip) so the full page can
 * carry more photos and category metadata without touching the teaser.
 */
export const galleryPage = {
  header: {
    eyebrow: "Gallery",
    title: "A Glimpse of Parkland",
  },
  categories: [
    { key: "all", label: "All" },
    { key: "hotel", label: "Hotel" },
    { key: "rooms", label: "Rooms" },
    { key: "dining", label: "Dining" },
    { key: "wellness", label: "Wellness" },
    { key: "experiences", label: "Experiences" },
  ],
  items: [
    { src: "/img/hero.jpg", alt: "Hotel Parkland at dusk", category: "hotel" },
    { src: "/img/garden.jpg", alt: "Mature gardens at Hotel Parkland", category: "hotel" },
    { src: "/img/rooms/room-deluxe.jpg", alt: "Deluxe Garden Room interior", category: "rooms" },
    { src: "/img/rooms/room-premier.jpg", alt: "Suite Room interior", category: "rooms" },
    { src: "/img/rooms/room-villa.jpg", alt: "Presidential Room interior", category: "rooms" },
    { src: "/img/dining.jpg", alt: "Outdoor dining terrace", category: "dining" },
    { src: "/img/pool.jpg", alt: "Swimming pool surrounded by gardens", category: "wellness" },
    {
      src: "/img/activities/elephant-bathing.jpg",
      alt: "Elephant bathing in the river",
      category: "experiences",
    },
    { src: "/img/activities/canoe.jpg", alt: "Dugout canoe ride on the river", category: "experiences" },
    {
      src: "/img/activities/jungle-drive.jpg",
      alt: "Jungle jeep drive through Chitwan",
      category: "experiences",
    },
    {
      src: "/img/activities/cultural.jpg",
      alt: "Tharu cultural dance performance",
      category: "experiences",
    },
    {
      src: "/img/activities/nature-walk.jpg",
      alt: "Guided nature walk in Chitwan National Park",
      category: "experiences",
    },
  ] as GalleryItem[],
};

/** /faq page content. */
export const faqPage = {
  header: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
  },
  items: [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in is from 02:00 PM and check-out is by 12:00 PM. Let us know your arrival time in advance and we'll do our best to accommodate an early check-in or late check-out, subject to availability.",
    },
    {
      question: "How do I book a room, and do you take online bookings?",
      answer:
        "We don't yet have a live online booking engine — reservations are confirmed over phone, WhatsApp or email through our Kathmandu or Chitwan offices. Call or WhatsApp us at +977-9841229970, or email parkland@mail.com.np and our team will confirm availability and rates.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation terms depend on the season and package booked, and are confirmed in writing when your reservation is made. Please contact our reservations team directly for the terms attached to your specific booking.",
    },
    {
      question: "Are jungle safaris and activities included in the room rate?",
      answer:
        "Room rates cover accommodation only. Elephant bathing, canoe rides, jungle jeep drives, guided nature walks and cultural performances can all be arranged through the hotel and are booked separately — ask our front desk or reservations team to put together an itinerary.",
    },
    {
      question: "What amenities does the hotel offer?",
      answer:
        "Hotel Parkland has a swimming pool, restaurant and bar, free WiFi, gardens, a conference hall, room service, bicycle rental and 24-hour security across our 120 rooms.",
    },
    {
      question: "Is Hotel Parkland suitable for families and children?",
      answer:
        "Yes — our gardens, pool and easy access to Chitwan National Park make it a popular choice for families. Let us know the ages of any children travelling when you book so we can suggest suitable rooms and activities.",
    },
    {
      question: "Do you arrange airport or bus park transfers?",
      answer:
        "Yes, we can arrange transfers from Bharatpur Airport or the Sauraha bus park. Share your arrival details with our reservations team in advance so a vehicle is ready when you arrive.",
    },
    {
      question: "What languages does your staff speak?",
      answer: "Our team is comfortable communicating in English, Nepali and Hindi.",
    },
  ] as FaqItem[],
};

/** /accommodations page header. Room data itself lives in `rooms` above. */
export const accommodationsPage = {
  header: {
    eyebrow: "Accommodation",
    title: "Restful Spaces, Reimagined",
  },
  intro:
    "One hundred and twenty rooms and suites across three categories, each pairing warm, natural materials with the quiet of the garden beyond the window.",
};

/** /offers page content. */
export const offersPage = {
  header: {
    eyebrow: "Offers & Packages",
    title: "Seasonal Offers at Parkland",
  },
  intro:
    "Curated dining events and stay packages, running for a limited time — tap any offer for details and to reserve.",
  items: [
    {
      slug: "monsoon-garden-dinner",
      name: "Monsoon Garden Dinner",
      image: "/img/dining.jpg",
      images: ["/img/dining.jpg", "/img/garden.jpg"],
      excerpt:
        "A five-course set dinner served on the Garden Terrace as the monsoon rains settle over Sauraha — Nepalese and continental plates, paired with the garden's evening quiet.",
      price: "NPR 2,200 per person",
      unitPrice: 2200,
      currency: "NPR",
      expiryDate: "2026-09-30",
    },
    {
      slug: "full-board-wildlife-package",
      name: "Full Board Wildlife Package",
      image: "/img/activities/elephant-bathing.jpg",
      images: [
        "/img/activities/elephant-bathing.jpg",
        "/img/activities/jungle-drive.jpg",
        "/img/activities/canoe.jpg",
      ],
      excerpt:
        "Two nights, full board, with a guided jungle jeep drive, canoe ride and elephant bathing session included — our most complete way to see Chitwan.",
      price: "NPR 18,500 per couple",
      unitPrice: 18500,
      currency: "NPR",
      expiryDate: "2026-10-15",
    },
    {
      slug: "poolside-weekend-brunch",
      name: "Poolside Weekend Brunch",
      image: "/img/pool.jpg",
      images: ["/img/pool.jpg", "/img/dining.jpg"],
      excerpt:
        "An unlimited Saturday brunch spread by the pool — live counters, fresh juices and a relaxed midday sitting for the whole family.",
      price: "NPR 1,500 per person",
      unitPrice: 1500,
      currency: "NPR",
      expiryDate: "2026-09-05",
    },
  ] as OfferItem[],
};

/** /dining-bar page content. */
export const diningPage = {
  header: {
    eyebrow: "Dining & Bar",
    title: "Flavours Under the Sauraha Sky",
  },
  intro: dining.paragraph,
  venues: [
    {
      slug: "sauraha-restaurant",
      name: "Sauraha Restaurant",
      category: "restaurant",
      image: "/img/dining.jpg",
      images: ["/img/dining.jpg", "/img/garden.jpg"],
      excerpt: "All-day dining for up to 200 guests, serving Nepalese and international favourites from morning to night.",
      description: [
        "Sauraha Restaurant is Hotel Parkland's largest dining venue, seating up to 200 guests across a full day of service. Open from early morning through late evening, it's built to accommodate everything from a quick breakfast before an early jungle safari to a full group dinner after a long day of activities. The menu spans Nepalese classics and international favourites, making it equally suited to solo travellers, families, and larger groups looking to dine together in one setting.",
        "",
      ],
      hours: "7:00 AM – 11:00 PM",
      features: [
        "À la carte menu",
        "Nepali, Indian & continental cuisine",
        "Garden views",
        "Vegetarian options",
        "Daily breakfast service",
        "Indoor air-conditioned seating",
      ],
    },
    {
      slug: "garden-terrace",
      name: "Garden Terrace",
      category: "restaurant",
      image: "/img/garden.jpg",
      images: ["/img/garden.jpg", "/img/dining.jpg"],
      excerpt: "Al fresco dining beneath open skies, where every meal comes with a view of Sauraha's gardens.",
      description: [
        "Set among the mature gardens that give Hotel Parkland its character, the Garden Terrace is our open-air dining space — shaded by the property's indigenous trees and open to birdsong through the day.",
        "A natural choice for breakfast or a long, easy lunch between morning and evening safaris, weather permitting.",
      ],
      hours: "7:00 AM – 10:00 PM (weather permitting)",
      features: [
        "Open-air seating",
        "Shaded by mature gardens",
        "À la carte & light bites",
        "Family friendly",
        "Fresh juices and refreshments",
        "Weather-dependent evening dining",
      ],
    },
    // {
    //   slug: "buffet-hall",
    //   name: "Buffet Hall",
    //   category: "restaurant",
    //   image: "/img/dining.jpg",
    //   images: ["/img/dining.jpg", "/img/garden.jpg"],
    //   excerpt: "A generous spread of local and global dishes, freshly prepared for breakfast and dinner.",
    //   description: [
    //     "For guests on full board or simply after variety, the Buffet Hall lays out a generous daily spread — a rotating mix of Nepalese, Indian and international dishes prepared fresh each service.",
    //     "Sittings are timed around the day's safari and activity schedule, so there's always a hot meal waiting whichever excursion you've just returned from.",
    //   ],
    //   hours: "Breakfast 7:00 – 10:00 AM · Dinner 7:00 – 9:30 PM",
    //   features: [
    //     "Daily rotating buffet",
    //     "Nepali, Indian & international dishes",
    //     "Group & full-board friendly",
    //     "Indoor seating",
    //     "Fresh salads and desserts",
    //     "Safari-friendly meal timings",
    //   ],
    // },
    {
      slug: "parkland-bar",
      name: "Parkland Bar",
      category: "bar",
      image: "/img/pool.jpg",
      images: ["/img/pool.jpg", "/img/garden.jpg"],
      excerpt: "Handcrafted drinks and easy evenings, the perfect way to unwind after a day in the jungle.",
      description: [
        "The Parkland Bar keeps the evening easy — a garden-set bar pouring signature cocktails, local spirits and a well-stocked selection of wine and beer.",
        "Live music evenings turn it into the natural gathering point after a day in the jungle, with seating that spills out toward the pool.",
      ],
      hours: "4:00 PM – 11:00 PM",
      features: [
        "Signature cocktails",
        "Local & international spirits",
        "Live music evenings",
        "Poolside seating",
        "Wine, beer and soft drinks",
        "Garden evening ambience",
      ],
    },
  ] as DiningVenue[],
};

/** /meetings-events page content. */
export const meetingsPage = {
  header: {
    eyebrow: "Meetings & Events",
    title: "Gather, Celebrate, Connect",
  },
  intro:
    "From boardroom strategy sessions to garden celebrations, Hotel Parkland's function spaces bring together attentive service and the calm of Sauraha.",
  spaces: [
    {
      slug: "chitwan-hall",
      name: "Chitwan Hall",
      image: "/img/dining.jpg",
      images: ["/img/dining.jpg", "/img/garden.jpg"],
      excerpt: "A versatile venue equipped with projector, PA system and LED display, ideal for conferences and corporate gatherings.",
      description: [
        "Chitwan Hall is Hotel Parkland's primary venue for conferences, corporate meetings, and larger gatherings, equipped with a projector, PA system with microphone, and LED display to support presentations of any scale. Its flexible layout adapts to a range of formats, from structured training sessions to open-floor discussions, making it a dependable choice for organizations hosting single-day meetings or multi-day retreats. Paired with on-site dining and accommodation, Chitwan Hall lets groups keep their entire event under one roof, minutes from the gates of Chitwan National Park.",
      ],
      capacity: "Up to 120 guests, theatre-style",
      size: "150 Sq.m",
      features: ["Projector, PA System with microphone", "AV equipment included", "High-speed wi-fi", "LED display for presentations", "Video conferencing", "Flexible half/full-day booking"],
      setupStyles: [
        { style: "U-Shape Style", pax: 40 },
        { style: "Classroom Style", pax: 60 },
        { style: "Theatre Style", pax: 120 },
        { style: "Banquet Style", pax: 70 },
        { style: "Cluster Style", pax: 60 },
        { style: "Cocktail Style", pax: 150 },
      ],
    },
    // {
    //   slug: "garden-pavilion",
    //   name: "Garden Pavilion",
    //   image: "/img/garden.jpg",
    //   images: ["/img/garden.jpg", "/img/pool.jpg"],
    //   excerpt: "An open-air setting among the gardens, built for weddings and celebrations.",
    //   description: [
    //     "Set beneath Hotel Parkland's mature trees, the Garden Pavilion is our open-air venue for weddings, receptions and milestone celebrations — string lighting and lawn seating included.",
    //     "The space pairs easily with the adjoining Garden Terrace for cocktail hours and evening dining, and our events team can help shape a full-day itinerary around it.",
    //   ],
    //   capacity: "Up to 200 guests, reception-style",
    //   size: "300 Sq.m open lawn",
    //   features: ["Open-air garden setting", "Wedding & reception ready", "String lighting", "Dedicated events team"],
    //   setupStyles: [
    //     { style: "U-Shape Style", pax: 60 },
    //     { style: "Classroom Style", pax: 90 },
    //     { style: "Theatre Style", pax: 180 },
    //     { style: "Banquet Style", pax: 150 },
    //     { style: "Cluster Style", pax: 120 },
    //     { style: "Cocktail Style", pax: 200 },
    //   ],
    // },
    {
      slug: "sauraha-hall",
      name: "Sauraha Hall",
      image: "/img/rooms/room-premier.jpg",
      images: ["/img/rooms/room-premier.jpg", "/img/dining.jpg"],
      excerpt: "A flexible meeting space with full AV support, suited to trainings, celebrations and smaller group events.",
      description: [
        "Sauraha Hall offers a second dedicated meeting space at Hotel Parkland, fitted with the same essential AV setup projector, PA system with microphone, and LED display for smaller gatherings, breakout sessions, or events running alongside a larger conference in Chitwan Hall. Its scale makes it well suited to team workshops, private celebrations, or trainings that call for a more intimate setting. Like Chitwan Hall, it benefits from the hotel's on-site dining and accommodation, keeping logistics simple for organizers.",
      ],
      capacity: "Up to 12 guests, boardroom-style",
      size: "40 Sq.m",
      features: ["Projector", "PA System with microphone", "LED Display", "High-speed wi-fi", "Video conferencing", "Stationery & whiteboard"],
          setupStyles: [
        { style: "U-Shape Style", pax: 20 },
        { style: "Classroom Style", pax: 30 },
        { style: "Theatre Style", pax: 60 },
        { style: "Banquet Style", pax: 40 },
        { style: "Cluster Style", pax: 30 },
        { style: "Cocktail Style", pax: 80 },
      ],
    },
  ] as MeetingSpace[],
};

/** /experiences-destination page content. */
export const experiencesPage = {
  header: {
    eyebrow: "Experiences & Destination",
    title: "Moments Made in Chitwan",
  },
  intro:
    "From an unhurried morning by the pool to a golden-hour drink on the terrace, and the wild landscape of Chitwan just beyond our gates — here is how a stay at Parkland unfolds.",
  experiences: [
    {
      eyebrow: "Recreation",
      title: "Swimming Pool & Yoga",
      description:
        "The swimming pool is more than a spot to cool off — it's a tranquil escape where leisure meets comfort, set within the mature gardens that have grown since 1987. Whether you're basking in the morning sun, easing into a sunrise yoga session, or sharing an unhurried afternoon with family, the pool strikes the balance between relaxation and recreation, just steps from your room.",
      image: "/img/pool.jpg",
      imageAlt: "Swimming pool surrounded by gardens at dusk",
    },
    {
      eyebrow: "Sundowner",
      title: "Golden Hours, Endless Memories",
      description:
        "As the sun dips below the tree line, the garden turns into Sauraha's best-kept secret — a quiet corner for a drink in hand and the day's safari stories still fresh. The sky blushes amber and rose over the palms, and the evening settles into the easy rhythm that Chitwan is known for.",
      image: "/img/garden.jpg",
      imageAlt: "Palm-shaded gardens at golden hour",
    },
    {
      eyebrow: "Wildlife",
      title: "Elephant Bathing at the Riverbank",
      description:
        "Join the mahouts at the Rapti River for one of Sauraha's most joyful traditions — wading in alongside the elephants for a mid-morning wash. It's a hands-on, genuinely warm hour, and one of the experiences guests remember longest after they've left Chitwan.",
      image: "/img/activities/elephant-bathing.jpg",
      imageAlt: "Elephant bathing in the Rapti River",
    },
    {
      eyebrow: "Culture",
      title: "An Evening of Tharu Dance",
      description:
        "Chitwan's indigenous Tharu community has shaped this land for centuries, and their stick dance — rhythmic, high-energy, performed to drums under the open sky — is the liveliest way to encounter it. A short walk from the hotel brings you to an evening performance that closes the day on a very different note from the quiet of the jungle.",
      image: "/img/activities/cultural.jpg",
      imageAlt: "Tharu cultural dance performance",
    },
  ] as ExperienceItem[],
  destination: {
    eyebrow: "Destination",
    title: "What Lies Beyond Our Gates",
    intro:
      "At the gateway to Chitwan's wilderness, some of the region's most remarkable landmarks are just moments away — here's what's worth the short trip from Parkland.",
  },
};

/** /blog page content. */
export const blogPage = {
  header: {
    eyebrow: "Blog",
    title: "Stories from Sauraha",
  },
  intro:
    "Notes on the wildlife, culture and everyday life of Chitwan — from our team on the ground in Sauraha.",
  posts: [
    {
      slug: "chitwan-national-park-safari-guide",
      title: "Chitwan National Park Safari Guide: What to Expect on Your Jeep Drive",
      excerpt:
        "A first-timer's guide to Chitwan National Park jeep safaris, what to expect, when to go, and how to make the most of your jungle drive.",
      content: [
        "A jungle jeep safari is the fastest way to cover ground inside Chitwan National Park, and for many first-time visitors, it's also the most thrilling. Unlike a walking safari, a jeep drive lets you travel deeper into the park's grasslands and forest tracks within a few hours, increasing your chances of spotting wildlife that rarely comes close to the park's edges. Sightings can include the one-horned rhinoceros, spotted deer, wild boar, and for the fortunate few a glimpse of a Bengal tiger. Even without a big sighting, the ride itself is memorable: dense sal forest opening into wide floodplains along the Rapti River, with birdlife constantly overhead.",
        "Most Chitwan safaris run in two windows, early morning and late afternoon, timed around when animals are most active and temperatures are cooler. Mornings tend to be quieter and often reward guests with better visibility, especially in winter when mist settles over the grasslands. Afternoon drives, by contrast, catch the golden light that makes for better photography, along with a different rhythm of animal movement as the park cools toward evening.",
        "Every safari is led by a licensed park guide and naturalist, which matters more than most first-timers expect. Guides don't just spot wildlife, they read tracks, interpret alarm calls from deer and birds, and know which sections of the park have had recent activity. This local expertise is often the difference between a quiet drive and an unforgettable one.",
        "Comfort matters too, and it's easy to overlook when planning a safari day. Light, breathable clothing in neutral tones works best, along with a hat, sunscreen, and a reusable water bottle. Even in cooler months, dust and sun exposure add up over a multi-hour drive, so pack accordingly and bring a camera with a reasonable zoom, since most wildlife keeps a respectful distance.",
        "Staying close to the park makes a meaningful difference to the safari experience. Guests based at Hotel Parkland are just minutes from the park gate, meaning less time commuting and more time in the field during the prime early-morning and late-afternoon windows. After the drive, the hotel's gardens and pool offer an easy place to unwind before dinner at Sauraha Restaurant.",
        "A Chitwan jeep safari isn't just a checklist activity it's often the single experience visitors remember most from their trip to Nepal's Terai region. Whether it's a rhino grazing at dusk or the quiet thrill of watching the jungle come alive, a well-timed jeep drive captures the wild, unscripted side of Chitwan that draws travelers back again and again.",
      ],
      image: "/img/activities/jungle-drive.jpg",
      date: "2026-05-14",
      author: "Hotel Parkland Team",
      category: "Wildlife",
    },
    {
      slug: "elephant-bathing-in-sauraha",
      title: "Elephant Bathing in Sauraha: A Guide to This Unmissable Experience",
      excerpt:
        "Everything to know about elephant bathing in Sauraha, Chitwan — what happens, where to do it responsibly, and why it's a highlight for visitors.",
      content: [
        "Elephant bathing in Sauraha is one of the most talked-about experiences along the edge of Chitwan National Park, and it's easy to see why. Set along the banks of the Rapti River, the activity brings visitors close to these gentle giants in a way few other wildlife encounters allow — wading alongside them, helping scrub their thick hides, and watching as they spray water joyfully into the air. For many travelers, it becomes one of the defining images of their entire Nepal trip.",
        "The experience typically takes place in the morning, when elephants are led down to the riverbank as part of their daily routine. Visitors are invited to join in, often getting just as wet as the elephants themselves. It's playful and unscripted, and no two sessions look quite the same — some elephants seem to genuinely enjoy the attention, rolling and splashing with visible delight.",
        "Responsible tourism has become an increasingly important part of how elephant experiences are run in Sauraha. Visitors are encouraged to choose operators and facilities that prioritize the animals' welfare, with reasonable interaction times, proper veterinary care, and retirement plans for older elephants. Asking a few questions before booking — how the elephants are cared for, whether they work reasonable hours — goes a long way toward supporting ethical tourism in the region.",
        "Beyond the bathing itself, the setting adds to the appeal. The Rapti River corridor is a haven for birdlife, and it's common to spot kingfishers, egrets, and the occasional gharial crocodile basking nearby while elephants bathe just meters away. Morning light on the river makes it a favorite spot for photography as well, whether or not you choose to get in the water yourself.",
        "For guests staying nearby, timing an elephant bathing session alongside a jungle jeep safari or a Tharu cultural visit makes for a well-rounded day exploring Sauraha's most distinctive experiences. Hotel Parkland's location close to the river and park gate makes it easy to fit this activity into a morning itinerary without a long commute.",
        "Elephant bathing isn't just a photo opportunity — it's a genuine, joyful interaction with one of Nepal's most iconic animals, set against the backdrop of the Chitwan jungle. For many visitors, it's the moment their Sauraha trip goes from nice vacation to trip of a lifetime.",
      ],
      image: "/img/activities/elephant-bathing.jpg",
      date: "2026-04-22",
      author: "Hotel Parkland Team",
      category: "Wildlife",
    },
    {
      slug: "tharu-culture-in-sauraha",
      title: "Beyond the Safari: Tharu Culture in Sauraha",
      excerpt:
        "Chitwan's indigenous Tharu community has called this land home for centuries. Here's where to encounter their culture beyond the wildlife itinerary.",
      content: [
        "It's easy for a Chitwan trip to become entirely about wildlife — but the Tharu people, the indigenous community of the region, have shaped this landscape for centuries, and their culture is very much worth a detour.",
        "The Tharu Cultural Museum in nearby Bachhauli houses textiles, tools and household objects that trace daily Tharu life, and is a short, easy visit from the hotel.",
        "In the evenings, look out for a Tharu stick dance performance — a rhythmic, high-energy dance performed to drums, often staged in Sauraha village for visitors. It's a livelier, more communal counterpart to a day spent quietly watching wildlife.",
        "If you have time, a short walk through the older parts of Sauraha village, past traditional mud-and-thatch Tharu houses, tells you as much about Chitwan as any safari does.",
      ],
      image: "/img/activities/cultural.jpg",
      date: "2026-03-30",
      author: "Hotel Parkland Team",
      category: "Culture",
    },
    {
      slug: "best-time-to-visit-chitwan",
      title: "The Best Time to Visit Chitwan National Park",
      excerpt:
        "Chitwan rewards visitors year-round, but the season you choose changes what you'll see. ",
      content: [
        "Chitwan National Park is open, and rewarding, in every season — but the experience shifts considerably depending on when you visit.",
        "October to February brings cool, dry weather and the clearest visibility, making it the most popular window and the easiest for wildlife spotting as the tall grasses are cut back after the monsoon.",
        "March to May is hot and dry, with grasses still low from the winter cut — visibility for tiger and rhino sightings is often at its best, if you can handle the daytime heat.",
        "June to September is monsoon season: lush, green and quiet, with fewer visitors and lower rates, though some activities may pause around heavy rainfall. It's a good fit for travellers more interested in birdlife and the park's greener side than peak wildlife odds.",
      ],
      image: "/img/nearby/bishazari-tal.jpg",
      date: "2026-02-18",
      author: "Hotel Parkland Team",
      category: "Travel Tips",
    },
    {
      slug: "a-morning-in-the-parkland-gardens",
      title: "A Morning in the Parkland Gardens",
      excerpt:
        "Before the day's safari begins, our gardens are worth slowing down for — a short walk through what makes Hotel Parkland's grounds distinctive.",
      content: [
        "Guests often move straight from breakfast to their first safari of the day, and it's easy to miss what's right outside the restaurant door: gardens that have been growing since 1987, sheltering rare indigenous trees, flowering shrubs and a steady population of birds and butterflies.",
        "Early morning, before the heat sets in, is the best time to walk them — you'll hear more birdsong in twenty minutes here than most of the day's jeep drive.",
        "The gardens also frame most of our rooms, which is deliberate: after a day spent looking for wildlife at a distance, we wanted the walk back to your room to feel like an extension of it, not a return to the ordinary.",
      ],
      image: "/img/garden.jpg",
      date: "2026-01-25",
      author: "Hotel Parkland Team",
      category: "Hotel News",
    },
    {
      slug: "planning-a-family-trip-to-chitwan",
      title: "Planning a Family Trip to Chitwan",
      excerpt:
        "Planning a family trip to Chitwan National Park? Here's what to know about activities, safety, and accommodation for traveling with kids.",
      content: [
        "Chitwan National Park makes for a memorable family trip, combining hands-on wildlife experiences with a manageable pace that works well for children and adults alike. With some planning around activities and timing, families can make the most of Sauraha without overloading younger travelers.",
        "Jungle jeep safaris are generally well suited to families, offering an exciting but relatively low-effort way for kids to see wildlife up close without long walks. Morning drives tend to work best for families with younger children, avoiding the heat of midday and aligning with typical family sleep schedules.",
        "Elephant bathing is often a highlight for kids in particular, offering a playful, hands-on experience that differs from the more observational nature of a safari drive. It's worth checking activity length and water depth in advance for families with very young children, and choosing operators known for responsible elephant care.",
        "Cultural experiences like the Tharu stick dance performance tend to captivate children with their rhythm and energy, while also giving parents an easy, low-intensity evening activity after a day of more physically demanding excursions. The Tharu Cultural Museum offers a shorter, more flexible stop that works well if attention spans are running low.",
        "Accommodation choices matter for family comfort, particularly access to a pool for downtime between activities and flexible dining options for varying tastes. Hotel Parkland's gardens, swimming pool, and buffet-style dining at Sauraha Restaurant give families an easy way to relax between excursions without needing to venture far from the property.",
        "Building rest days or lighter afternoons into a family itinerary — rather than scheduling back-to-back activities — tends to make for a smoother trip overall. Chitwan's highlights are memorable enough that families don't need to rush through everything in one or two days, and a slightly slower pace often makes for a more enjoyable experience for everyone.",,
      ],
      image: "/img/pool.jpg",
      date: "2025-12-10",
      author: "Hotel Parkland Team",
      category: "Travel Tips",
    },
  ] as BlogPost[],
};
