// Seed content for the CMS. This is the ONLY source of truth on first load —
// after that, everything lives in localStorage (see context/DataContext.jsx)
// and is edited through /admin.
//
// Project data below mirrors the real ATH_PROJECTS table from the production
// asset-tree-homes-site/assets/site.js (names, locations, stats, amenities,
// nearby connectivity, media links) — not invented placeholder content.

export const seedProjects = [
  {
    id: 'feathers',
    slug: 'ath-feathers',
    name: 'ATH Feathers',
    category: 'villa',
    status: 'ongoing',
    location: 'Kundrathur, Chennai',
    configs: '3 & 4 BHK Independent Villas',
    priceFrom: 14000000,
    priceLabel: '₹1.40 Cr onwards',
    tagline: 'The Address Few Can Own',
    badge: 'Only gated villa community in Kundrathur',
    description:
      'The only gated community villas in Kundrathur — ultra luxury 3 & 4 BHK independent villas, 5 minutes to ORR, 20 minutes to the airport. 100% freehold land and villa ownership, in your name.',
    heroImages: ['/assets/slide-entrance.jpg', '/assets/slide-clubhouse.jpg', '/assets/slide-street.jpg', '/assets/slide-villa.jpg'],
    coverImage: '/assets/feathers-gate.jpg',
    logo: '/assets/logos/feathers-logo.png', logoAlt: 'ATH Feathers logo',
    amenities: ['Modern gym', 'Yoga hut', "Children's play area", 'Clubhouse', 'Landscaped gardens', '24x7 security'],
    gallery: ['/assets/feathers-elevation.jpg', '/assets/feathers-gate.jpg', '/assets/slide-entrance.jpg', '/assets/slide-clubhouse.jpg'],
    faqs: [
      { q: 'Where is ATH Feathers located?', a: 'ATH Feathers is in Kundrathur, Chennai — 5 minutes to ORR and the Kundrathur bus depot, 15 minutes to Porur, and 20 minutes to the airport and major IT parks.' },
      { q: 'What is the price of villas at ATH Feathers?', a: 'Ultra luxury 3 BHK villas start from ₹1.40 Crore and 4 BHK villas from ₹1.63 Crore.' },
    ],
    price: [{ v: '₹1.40 Cr', l: '3 BHK onwards*' }, { v: '₹1.63 Cr', l: '4 BHK onwards*' }],
    published: true,
  },
  {
    id: 'merlion-villa',
    slug: 'merlion-villa',
    name: 'ATH Merlion Villa',
    category: 'villa',
    status: 'ongoing',
    location: 'Kundrathur, Chennai',
    configs: '3 & 4 BHK Villas',
    priceFrom: 12000000,
    priceLabel: '₹1.20 Cr onwards',
    tagline: 'A True Independent Lifestyle Beyond Luxury',
    description: 'A gated villa community in Kundrathur, part of the larger Merlion master-plan — 3 & 4 BHK independent villas with landscaped open spaces and a lavish clubhouse.',
    heroImages: ['/assets/project-merlion-villa.jpg'],
    coverImage: '/assets/project-merlion-villa.jpg',
    amenities: ['Dedicated car parking', 'Gated community', 'Landscaped open spaces', "Children's play zones", 'Clubhouse', 'Earthquake-resistant structure'],
    gallery: ['/assets/project-merlion-villa.jpg'],
    faqs: [],
    nearby: [{ n: 'Kundrathur Murugan Temple', t: '5 mins' }, { n: 'Poonamallee', t: '10 mins' }, { n: 'Chennai Bypass & ORR', t: '10 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/VEZ13qPirbU?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', hometour: 'https://mindwox.com/360assettreehomes/ATH_MERLION', routemap: 'https://www.youtube.com/embed/uZxIsbsS-7s?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/dJL8WdUCCeXhDPhB9', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/floorplan-BLOCK-1-APARTMENT-1A-2A-3A-4A-east-facing-2bhk.png'] },
    stats: [{ v: '15', l: 'Villas' }, { v: '3 & 4', l: 'BHK' }, { v: '1407–1852', l: 'Sq. Ft.' }, { v: 'G+1', l: 'Floors' }, { v: '₹1.20 Cr', l: 'Starting Price*' }],
    logo: '/assets/logos/merlion-logo.png', logoAlt: 'ATH Merlion logo',
    published: true,
  },
  {
    id: 'nilavanam',
    slug: 'ath-nilavanam',
    name: 'ATH Nilavanam',
    category: 'villa',
    status: 'ongoing',
    location: 'East Tambaram (Thiruvanchery), Chennai',
    configs: '2, 3 & 4 BHK Villas',
    priceFrom: 15600000,
    priceLabel: '₹1.56 Cr onwards',
    tagline: 'In Harmony With Nature',
    description: 'Each villa is designed to harmonize with nature, featuring modern architecture, large open spaces, and private gardens within a serene, gated community.',
    heroImages: ['/assets/project-ananterra.jpg'],
    coverImage: '/assets/project-ananterra.jpg',
    amenities: ['Dedicated Car Parking for Each Villa', 'Well Planned Gated Community', 'Landscaped Green Zones', "Children's Play Areas", 'Gym', 'Clubhouse', 'Jogging Track'],
    gallery: ['/assets/project-ananterra.jpg'],
    faqs: [
      { q: 'Where is ATH Nilavanam located?', a: 'ATH Nilavanam is located in East Tambaram, Thiruvanchery — a fast-growing residential area with access to IT corridors, schools, hospitals and major roadways.' },
      { q: 'What makes Nilavanam special?', a: 'Each villa is designed to harmonize with nature, featuring modern architecture, large open spaces and private gardens within a serene gated community.' },
      { q: 'What villa types are available?', a: 'Nilavanam offers spacious 2, 3 and 4 BHK independent villas ranging from 1344 to 2016 sq. ft. with a G+1 structure.' },
      { q: 'Are there community amenities?', a: 'The project information lists landscaped green zones, children\'s play areas, a gym, clubhouse and jogging tracks.' },
      { q: 'How do I book a villa?', a: 'Schedule a site visit or contact the sales team directly at +91 89398 56789 to explore availability and booking details.' },
    ],
    nearby: [{ n: 'Sri Chaitanya Techno School', t: '1 min' }, { n: 'Alwin Memorial Public School', t: '2 mins' }, { n: 'Zion International Public School', t: '2 mins' }, { n: 'Bharath University', t: '3 mins' }, { n: 'Kendriya Vidyalaya School', t: '3 mins' }, { n: 'Camp Road Junction', t: '5 mins' }, { n: 'MCC College', t: '10 mins' }, { n: 'Tambaram Railway Station', t: '10 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/SlaJCMRJEZg?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', hometour: 'https://mindwox.com/360assettreehomes/ATH_ANANTERRA', routemap: 'https://www.youtube.com/embed/weJ2oi2g_fk?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/uc7UMLdYktVmKfaAA' },
    stats: [{ v: '38', l: 'Villas' }, { v: '2, 3 & 4', l: 'BHK' }, { v: '1344–2016', l: 'Sq. Ft.' }, { v: 'G+1', l: 'Floors' }, { v: '₹1.56 Cr', l: 'Starting Price*' }],
    logo: '/assets/logos/nilavanam-logo.png', logoAlt: 'ATH Nilavanam logo',
    published: true,
  },
  {
    id: 'aura-ville',
    slug: 'aura-ville',
    name: 'ATH Aura Ville',
    category: 'villa',
    status: 'ongoing',
    location: 'Padur, Chennai',
    configs: '3 BHK Villas',
    priceFrom: 18000000,
    priceLabel: '₹1.80 Cr onwards',
    tagline: 'Designed For Refined Living',
    description: 'A limited-edition gated community in Padur — 3 BHK independent villas designed for privacy, spaciousness and elegant architecture.',
    heroImages: ['/assets/project-auraville.jpg'],
    coverImage: '/assets/project-auraville.jpg',
    amenities: ['Dedicated car parking', 'Gated community', 'Common clubhouse', 'Landscaped gardens', 'Split AC provision', 'Black granite kitchen platforms'],
    gallery: ['/assets/project-auraville.jpg'],
    faqs: [],
    nearby: [{ n: 'Euro Kids International Preschool', t: '1 min' }, { n: 'Hindustan International School', t: '1 min' }, { n: 'OMR Junction', t: '2 mins' }, { n: 'Hindustan Institute of Technology & Science', t: '4 mins' }, { n: 'Upcoming Metro Station', t: '5 mins' }, { n: 'Siruseri SIPCOT', t: '5 mins' }],
    media: { walkthrough: 'https://www.youtube-nocookie.com/embed/flcRD_eeMkI?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', routemap: 'https://www.youtube.com/embed/NcWarpGDMjU?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/dqn4E69yWGWgHd7S9' },
    stats: [{ v: '29', l: 'Villas' }, { v: '3', l: 'BHK' }, { v: '1650–2323', l: 'Sq. Ft.' }, { v: 'G+1', l: 'Floors' }, { v: '₹1.80 Cr', l: 'Starting Price*' }],
    logo: '/assets/logos/aura-ville-logo.png', logoAlt: 'ATH Aura Ville logo',
    published: true,
  },
  {
    id: 'merlion-apartments',
    slug: 'merlion-apartments',
    name: 'ATH Merlion',
    category: 'apartment',
    status: 'ongoing',
    location: 'Kundrathur, Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 6600000,
    priceLabel: '₹66 Lakhs onwards',
    tagline: 'Stylish Living Rises Gracefully',
    description: 'A mixed-use gated community in Kundrathur where stylish 2 & 3 BHK apartments rise alongside grand villas, with a lavish clubhouse and 20+ lifestyle amenities.',
    heroImages: ['/assets/project-merlion-apartments.jpg'],
    coverImage: '/assets/project-merlion-apartments.jpg',
    amenities: ['24/7 CCTV surveillance', 'Gym & yoga zone', 'Common clubhouse', "Children's play area", 'Crèche & kids zone', 'EV charging points'],
    gallery: ['/assets/project-merlion-apartments.jpg'],
    faqs: [],
    nearby: [{ n: 'Kundrathur Murugan Temple', t: '5 mins' }, { n: 'Poonamallee', t: '10 mins' }, { n: 'Chennai Bypass & ORR', t: '10 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/VEZ13qPirbU?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', routemap: 'https://www.youtube.com/embed/uZxIsbsS-7s?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/y11661hth8KqAaiU7', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/floorplan-BLOCK-1-APARTMENT-1A-2A-3A-4A-east-facing-2bhk.png'] },
    stats: [{ v: '58', l: 'Units' }, { v: '2 & 3', l: 'BHK' }, { v: '842–1191', l: 'Sq. Ft.' }, { v: 'S+5', l: 'Floors' }, { v: '₹66 Lakhs', l: 'Starting Price*' }],
    logo: '/assets/logos/merlion-logo.png', logoAlt: 'ATH Merlion logo',
    published: true,
  },
  {
    id: 'meadows',
    slug: 'ath-meadows',
    name: 'ATH Meadows',
    category: 'apartment',
    status: 'ongoing',
    location: 'Madambakkam, Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 9500000,
    priceLabel: '₹95 Lakhs onwards',
    tagline: 'Where Beauty, Serenity And Comfort Belongs',
    description: 'Meadows Apartments at Madambakkam — 2 & 3 BHK homes bathed in golden light, blending beauty with refined, comfortable living.',
    heroImages: ['/assets/project-meadows.jpg'],
    coverImage: '/assets/project-meadows.jpg',
    amenities: ['Yoga hut', 'Gym', "Rooftop children's play area", 'EV charging point', '100% Vastu compliance', 'Solar power for common areas'],
    gallery: ['/assets/project-meadows.jpg'],
    faqs: [],
    nearby: [{ n: 'Trileaves Group of Schools', t: '1 min' }, { n: 'Alwin Memorial Public School', t: '2 mins' }, { n: 'Zion Matriculation Hr. Sec. School', t: '3 mins' }, { n: 'Bharath University', t: '3 mins' }, { n: 'Kendriya Vidyalaya School', t: '3 mins' }, { n: 'Camp Road Junction', t: '5 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/Asl9mY4RGso?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', hometour: 'https://mindwox.com/360assettreehomes/ATH_MEADOWS', routemap: 'https://www.youtube.com/embed/hQBlTHXsWDc?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/yJ6E2QAuuxss1pdPA', floorplans: ['https://assettreehomes.com/wp-content/uploads/2026/02/Block-%E2%80%93-1-Car-Parking.jpg', 'https://assettreehomes.com/wp-content/uploads/2026/02/Block-%E2%80%93-1-1st-Floor.jpg', 'https://assettreehomes.com/wp-content/uploads/2026/02/Block-%E2%80%93-1-3BHK.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/floorplan-BLOCK-1-APARTMENT-1A-2A-3A-4A-east-facing-2bhk-1.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Block-2-car-parking.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Block-2-1st-5th-floor-plan.png', 'https://assettreehomes.com/wp-content/uploads/2026/02/Block-%E2%80%93-2-2BHK.jpg', 'https://assettreehomes.com/wp-content/uploads/2026/02/Block-%E2%80%93-2-3BHK.jpg'] },
    stats: [{ v: '49', l: 'Units' }, { v: '2 & 3', l: 'BHK' }, { v: '990–1520', l: 'Sq. Ft.' }, { v: 'G+5', l: 'Floors' }, { v: '₹95 Lakhs', l: 'Starting Price*' }],
    logo: '/assets/logos/meadows-logo.png', logoAlt: 'ATH Meadows logo',
    published: true,
  },
  {
    id: 'crown',
    slug: 'ath-crown',
    name: 'ATH Crown',
    category: 'apartment',
    status: 'ongoing',
    location: 'Chromepet, Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 9000000,
    priceLabel: '₹90 Lakhs onwards',
    tagline: 'Luxury Crowned With Nature And Sophistication',
    description: 'Luxury crowned with nature — 2 & 3 BHK apartments in Chrompet offering a posh lifestyle and elevated everyday comfort.',
    heroImages: [],
    coverImage: '',
    amenities: ['Yoga hut', 'Gymnasium', 'Leisure area', 'EV charging point', 'Sewage treatment plant', '100% Vastu compliance'],
    gallery: [],
    faqs: [],
    nearby: [{ n: 'New Gandhi Park', t: '2 mins' }, { n: 'JS Hospitals', t: '3 mins' }, { n: 'Loyola Mat. Hr. Sec School', t: '6 mins' }, { n: 'Rogers Super Market', t: '6 mins' }, { n: 'ICICI Bank', t: '6 mins' }, { n: 'Punjab National Bank', t: '6 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/4omt6xg9zOA?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/ztjD7sxwTpGmfqHg9', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/floor-plan-crown-1234.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/floor-plan-crown-5.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/2bhk-crown-floor-plan.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/floor-plan-2bhk-crown.jpg'] },
    stats: [{ v: '68', l: 'Units' }, { v: '2 & 3', l: 'BHK' }, { v: '921–1480', l: 'Sq. Ft.' }, { v: 'S+5', l: 'Floors' }, { v: '₹90 Lakhs', l: 'Starting Price*' }],
    logo: '/assets/logos/crown-logo.png', logoAlt: 'ATH Crown logo',
    published: true,
  },
  {
    id: 'royal-queen',
    slug: 'ath-royal-queen',
    name: 'ATH Royal Queen',
    category: 'apartment',
    status: 'ongoing',
    location: 'Pammal (Shankar Nagar), Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 8100000,
    priceLabel: '₹81 Lakhs onwards',
    tagline: '',
    description: '2 & 3 BHK apartments in Pammal on an earthquake-resistant structure, with premium teak wood doors and designer sanitaryware.',
    heroImages: [],
    coverImage: '',
    amenities: ['Yoga hut', 'Gym', 'Terrace sitout', 'EV charging point', '100% Vastu compliance', 'Covered car parking'],
    gallery: [],
    faqs: [],
    nearby: [{ n: 'VKK Ammani Ammal Matric School', t: '2 mins' }, { n: 'Meenakshi Krishnan Polytechnic', t: '2 mins' }, { n: 'Day 2 Day Needs', t: '3 mins' }, { n: 'Sri Sankara Global School', t: '4 mins' }, { n: 'BP Jain Hospital', t: '4 mins' }, { n: 'Ayyanar Supermarket', t: '5 mins' }, { n: 'Apoorva Super Market', t: '5 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/fvA7feNEGoI?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', gmap: 'https://maps.app.goo.gl/B8PJcyNtrwofzABS8', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/Stilt-floor-1.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Typical-plan-1st2nd3rd-floor-1.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/fourth-floor-paln-1.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/fifth-floor-plan-1.png'] },
    stats: [{ v: '32', l: 'Units' }, { v: '2 & 3', l: 'BHK' }, { v: '914–1348', l: 'Sq. Ft.' }, { v: 'S+5', l: 'Floors' }, { v: '₹81 Lakhs', l: 'Starting Price*' }],
    logo: '/assets/logos/royal-queen-logo.png', logoAlt: 'ATH Royal Queen logo',
    published: true,
  },
  {
    id: 'valencia',
    slug: 'ath-valencia',
    name: 'ATH Valencia',
    category: 'apartment',
    status: 'ongoing',
    location: 'Ekkaduthangal (Defence Colony), Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 16200000,
    priceLabel: '₹1.62 Cr onwards',
    tagline: '',
    description: "15 exclusive 2 & 3 BHK residences in Ekkaduthangal's Defence Colony — 6 minutes from the metro, with rooftop gardens and a gated community feel.",
    heroImages: [],
    coverImage: '',
    amenities: ['Rooftop gardens', 'Yoga & meditation zone', 'CCTV security', 'EV charging', 'Dedicated car parking', 'Gated community'],
    gallery: [],
    faqs: [],
    nearby: [{ n: 'Metro Station', t: '6 mins' }, { n: 'Jawahar Vidyalaya', t: '8 mins' }, { n: 'Guindy Industrial Estate', t: '9 mins' }],
    media: { walkthrough: 'https://www.youtube.com/embed/oz_j7wfBwjo?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', hometour: 'https://my.matterport.com/show/?m=e2LvhkoMSLG', gmap: 'https://maps.app.goo.gl/Bf6uTfQiPcMiFpQ49' },
    stats: [{ v: '15', l: 'Units' }, { v: '2 & 3', l: 'BHK' }, { v: '1026–1413', l: 'Sq. Ft.' }, { v: 'S+5', l: 'Floors' }, { v: '₹1.62 Cr', l: 'Starting Price*' }],
    logo: '/assets/logos/valencia-logo.png', logoAlt: 'ATH Valencia logo',
    published: true,
  },
  {
    id: 'paladium',
    slug: 'ath-paladium',
    name: 'ATH Paladium',
    category: 'apartment',
    status: 'ongoing',
    location: 'Ekkaduthangal, Chennai',
    configs: '3 & 4 BHK Apartments',
    priceFrom: 22900000,
    priceLabel: '₹2.29 Cr onwards',
    tagline: 'Luxury Rises Above Everyday',
    description: '10 exclusive 3 & 4 BHK residences in Ekkaduthangal where luxury rises above the everyday, with a rooftop rejuvenation space and barbeque counter.',
    heroImages: [],
    coverImage: '',
    amenities: ['Rooftop rejuvenation space', 'Yoga & meditation hut', 'Barbeque counter', 'Godrej digital lock', 'Security cabin', "Driver's restroom"],
    gallery: [],
    faqs: [],
    nearby: [{ n: 'Metro Station', t: '6–10 mins' }, { n: 'Olympia Tech Park', t: '7–10 mins' }, { n: 'Chennai Airport', t: '19–20 mins' }],
    media: { gmap: 'https://maps.app.goo.gl/CJyLbRZQ7FH6ET7j9', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/Floorplan-carparking.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Layout-plan.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Floor-paln-Area-2158-Sq.Ft-3BHK-East-facing-1B-2B-3B-4B-5B.png', 'https://assettreehomes.com/wp-content/uploads/2025/12/Floor-paln-Area-2158-Sq.Ft-4BHK-East-facing-1A-2A-3A-4A-5A.png'] },
    stats: [{ v: '10', l: 'Units' }, { v: '3 & 4', l: 'BHK' }, { v: '1467–2158', l: 'Sq. Ft.' }, { v: 'G+1', l: 'Floors' }, { v: '₹2.29 Cr', l: 'Starting Price*' }],
    logo: '/assets/logos/paladium-logo.png', logoAlt: 'ATH Paladium logo',
    published: true,
  },
  {
    id: 'classic',
    slug: 'ath-classic',
    name: 'ATH Classic',
    category: 'apartment',
    status: 'completed',
    location: 'East Tambaram, Chennai',
    configs: '2 & 3 BHK Apartments',
    priceFrom: 9200000,
    priceLabel: '₹92 Lakhs onwards',
    tagline: 'Elegant Architecture, Modern Living',
    description: 'A refined community in East Tambaram — thoughtful planning, elegant architecture and modern convenience across 5 blocks of 2 & 3 BHK homes.',
    heroImages: ['/assets/project-classic.jpg'],
    coverImage: '/assets/project-classic.jpg',
    amenities: ['Video door phone', 'Covered car parking', 'CCTV surveillance', 'Lift facility', '100% Vastu compliance', 'Potable drinking water'],
    gallery: ['/assets/project-classic.jpg'],
    faqs: [],
    nearby: [{ n: 'Annai Arul Matriculation School', t: '5 mins' }, { n: 'Tambaram Girls Hr. Sec.', t: '5 mins' }, { n: 'St. Thomas Nursery & Primary School', t: '5 mins' }, { n: 'Narayani Devi Garodia National Primary School', t: '5 mins' }, { n: 'B S Hospital', t: '5 mins' }, { n: 'COSH Hospital', t: '5 mins' }, { n: 'Madras Christian College', t: '5 mins' }, { n: 'Vivekananda Senior College', t: '5 mins' }],
    media: { hometour: 'https://mindwox.com/360assettreehomes/ATH_CLASSIC', routemap: 'https://www.youtube.com/embed/z2i0EDJkaKc?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1', floorplans: ['https://assettreehomes.com/wp-content/uploads/2025/12/layout-plan-car-parking.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/typical-floor-f1-s1-t1.jpg', 'https://assettreehomes.com/wp-content/uploads/2025/12/typical-floor-f2-s2-t2.jpg'] },
    stats: [{ v: '5', l: 'Blocks' }, { v: '2 & 3', l: 'BHK' }, { v: '905–1764', l: 'Sq. Ft.' }, { v: 'S+5', l: 'Floors' }, { v: '₹92 Lakhs', l: 'Starting Price*' }],
    logo: '/assets/logos/classic-logo.png', logoAlt: 'ATH Classic logo',
    published: true,
  },
];

export const seedPages = [
  {
    slug: 'about',
    title: 'Homes built on trust',
    subtitle: 'Asset Tree Homes has spent 20+ years turning "your imagination" into homes families actually live in — one gated community, one villa, one apartment at a time.',
    sections: [
      { heading: 'Communities that thrive', body: 'Discover the essence of living at Asset Tree Homes — a name that has come to mean careful planning, honest construction and homes designed around how people actually live, not just how they look in a brochure. Over 20+ years, that approach has taken shape across 100+ completed projects and found its way into more than 1000 happy homes.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Prime Locations', body: 'Sites chosen for real connectivity, not just a map pin.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Smart Design', body: 'Ventilation, light and layout planned around real family life.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'CREDAI Membership', body: 'Held to an industry standard of accountability and ethics.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: '1000+ Customers', body: 'A track record built one satisfied homeowner at a time.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'why-ath',
    title: 'Dreams. Communities. Trust.',
    subtitle: 'Asset Tree Homes is a name synonymous with homes built on trust — every project designed around the way families actually live.',
    sections: [
      { heading: 'Dreams', body: 'Homes designed to match the way you imagine your future — from independent villas to well-planned apartments.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Communities', body: 'Gated, well-planned neighbourhoods that thrive — built for connection, security and everyday convenience.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Trust', body: '20+ years of expertise and 1000+ happy customers — a CREDAI member developer with a track record you can verify.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'nri',
    title: 'Invest in Chennai, from anywhere',
    subtitle: 'A dedicated point of contact for NRI buyers — virtual site tours, documentation support and a single window through the entire process.',
    placeholderNote: 'Placeholder page — specific program details needed. Share the real process details (documentation checklist, power-of-attorney process, repatriation rules) and this page can be filled in precisely — for accuracy, a qualified advisor should review anything stated about FEMA/RBI/tax rules before publishing.',
    sections: [
      { heading: 'Verified Track Record', body: '20+ years of expertise and a CREDAI membership you can verify from anywhere.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: '100% Freehold', body: 'Freehold ownership on villa projects — land and home, in your name.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'One Point of Contact', body: 'A single point of contact to coordinate site visits, paperwork and updates.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'channel-partner',
    title: 'Grow with a trusted developer',
    subtitle: 'Partner with Asset Tree Homes to bring your clients ultra luxury villas and well-planned apartments, backed by 20+ years of delivery.',
    placeholderNote: 'Portal confirmed — program terms still needed. Existing partners sign in through the real partner portal below. Commission structure, payout timelines and registration requirements for new partners were not available to pull.',
    portalUrl: 'https://iris.assettreehomes.com/users/sign_in?locale=en',
    sections: [
      { heading: 'CREDAI Credibility', body: 'A member developer track record your clients can verify.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: '100+ Delivered Projects', body: '20+ years of on-ground delivery to back every conversation.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Dedicated Support', body: 'A direct line to our sales team for every client you bring.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'careers',
    title: 'Build homes, build a career',
    subtitle: 'Join a CREDAI member developer with 20+ years of on-ground delivery across Chennai.',
    placeholderNote: "No open roles listed. This section exists in the real site's navigation, but specific job openings weren't available to pull. Share current vacancies and this page will list real roles instead.",
    sections: [
      { heading: 'CREDAI Member', body: 'Work within an industry-recognised standard of practice.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: '20+ Years, Growing', body: 'An established developer with multiple ongoing projects.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Real Impact', body: 'Work that shows up as an actual home someone lives in.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'testimonials',
    title: 'Communities that speak for themselves',
    subtitle: 'Real families, real homes — the trust that 20+ years of delivery is built on.',
    placeholderNote: "No names or written quotes available. The videos below are the real homeowner testimonials from Asset Tree Homes' testimonials page — it doesn't attach names, quotes or which project each one is about, so none are invented here either. Press play to watch.",
    sections: [
      { heading: 'CREDAI Member', body: 'Held to an industry standard buyers can independently verify.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: '20+ Years', body: "Two decades of delivery across Chennai's growth corridors.", image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Real Communities', body: 'Homeowners across multiple ongoing and delivered projects.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'news-events',
    title: "What's happening",
    subtitle: 'Launches, milestones and site-visit events across our projects.',
    placeholderNote: "No specific articles available yet. This section exists in the real site's navigation, but individual news items and event dates weren't available to pull. Share the current announcements and this page will list them with real dates instead.",
    sections: [
      { heading: 'Stay Updated', body: 'In the meantime, the fastest way to hear about new projects and events is directly from our team.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Not a real policy yet',
    subtitle: '',
    placeholderNote: 'Deliberately left unwritten — do not publish as-is. A privacy policy is a legal commitment about what data this site actually collects (the enquiry forms here, the CRM it feeds, analytics/ads pixels, cookies) and how it\'s handled — writing plausible-sounding legal text without knowing those specifics would misrepresent real practices to site visitors. Before this goes live, either link to the existing policy at assettreehomes.com/privacy-policy, or have counsel draft one that accurately reflects this site\'s actual data flows.',
    sections: [],
  },
  {
    slug: 'contact',
    title: 'Contact Us',
    subtitle: '',
    sections: [],
  },
  {
    // "Why a Villa" — real section from the live villas.html page.
    slug: 'villas',
    title: 'Independent villas, your rules',
    subtitle: '',
    sections: [
      { heading: '100% Freehold', body: 'The land and the villa, both registered in your name.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Your Own Sky', body: 'Independent homes with your own rooftop and open space.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Freedom to Modify', body: 'Personalise your home the way your family actually lives.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Built for Generations', body: 'Quality construction that lasts, and grows with your family.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
  {
    // "What to Expect" + the real RERA placeholder note — both from apartments.html.
    slug: 'apartments',
    title: 'Apartment communities, smartly designed',
    subtitle: '',
    placeholderNote: "RERA numbers still needed. Unit counts, sizes and starting prices below are sourced from Asset Tree Homes' current listings. RERA registration numbers weren't available to pull for these — get those from the sales team before this goes live, since RERA disclosure is a legal requirement for project marketing in Tamil Nadu.",
    sections: [
      { heading: 'Prime Locations', body: "Sites selected for connectivity to Chennai's growth corridors.", image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'Everyday Amenities', body: 'Gyms, play areas and community spaces thoughtfully curated.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
      { heading: 'CREDAI Assurance', body: 'Built by a member developer held to industry standards.', image: '', imageAlt: '', bg: '', text: '', format: 'card', button: { label: '', url: '', color: '' }, imageMobile: '', hideOnMobile: false, hideOnDesktop: false },
    ],
  },
];

export const seedTestimonials = [
  { id: 't1', name: 'Homeowner Testimonial 1', project: '', quote: '', rating: 5, videoId: 'gmjt2bn7rsM' },
  { id: 't2', name: 'Homeowner Testimonial 2', project: '', quote: '', rating: 5, videoId: 'gArygN6rztY' },
  { id: 't3', name: 'Homeowner Testimonial 3', project: '', quote: '', rating: 5, videoId: '9L48W25hBVM' },
  { id: 't4', name: 'Homeowner Testimonial 4', project: '', quote: '', rating: 5, videoId: 'NfzcsNmt57Q' },
  { id: 't5', name: 'Homeowner Testimonial 5', project: '', quote: '', rating: 5, videoId: 'U25wLPwS1SQ' },
  { id: 't6', name: 'Homeowner Testimonial 6', project: '', quote: '', rating: 5, videoId: 'eJlS6TPAeOY' },
  { id: 't7', name: 'Homeowner Testimonial 7', project: '', quote: '', rating: 5, videoId: '-VkpEq3YhPU' },
  { id: 't8', name: 'Homeowner Testimonial 8', project: '', quote: '', rating: 5, videoId: 'kWcTP8ISXvQ' },
];

export const seedNewsEvents = [];

export const seedJobOpenings = [];

export const seedBlogPosts = [
  {
    id: 'blog_sample_1',
    slug: 'checklist-buying-independent-villa-chennai',
    title: '5 Things to Check Before Buying a Villa in Chennai',
    author: 'Asset Tree Homes Team',
    date: '2026-08-20',
    tags: ['Villas', 'Home Buying', 'Chennai Real Estate'],
    published: true,
    excerpt: 'Freehold title, RERA registration and three other essentials to verify before you sign — a practical checklist for first-time villa buyers in Chennai.',
    metaTitle: '5 Things to Check Before Buying a Villa in Chennai',
    metaDescription: 'Buying an independent villa in Chennai? Verify freehold title, RERA registration and these five essentials before signing — a guide from Asset Tree Homes.',
    coverImage: '/assets/project-merlion-villa.jpg',
    coverImageAlt: 'Independent villa exterior in a gated Chennai community',
    content: "Buying an independent villa is one of the biggest financial decisions most families make, and unlike an apartment, there's no builder association or resident welfare committee to catch problems for you after the fact. A little diligence upfront saves years of regret later. Here are the five things we tell every prospective buyer to check before signing anything.\n\n1. Freehold title, not leasehold or joint. Ask for the parent document chain going back at least 30 years, and have a lawyer confirm the land is freehold and registered in the seller's name with no pending litigation.\n\n2. RERA registration. Any project above the threshold size must be registered with Tamil Nadu RERA. The registration number should be printed on every brochure and marketing material — if it isn't, ask why.\n\n3. Approved layout and building plan. Match the actual construction against the plan approved by the local panchayat or municipality. Unapproved deviations can complicate resale and loans later.\n\n4. Connectivity beyond the brochure photos. Drive the actual route to work, school and the nearest hospital at peak hour, not just on a quiet Sunday morning.\n\n5. What's actually included. Clarify in writing what's part of the base price versus what's an add-on — car parking, club membership, corpus fund, and maintenance deposit are the most common surprises.\n\nA villa is a long-term home, not just a transaction. Taking an extra week to verify these five things costs you very little compared to what it protects.",
    sections: [
      {
        format: 'card', heading: 'Freehold Title', body: 'Land and structure registered in your name, verified through a 30-year document chain.',
        image: '', imageAlt: '', bg: '', text: '', style: { animation: 'fade-up' }, button: { label: '', url: '', color: '' },
      },
      {
        format: 'card', heading: 'RERA Registered', body: 'A valid Tamil Nadu RERA number should appear on every piece of marketing material.',
        image: '', imageAlt: '', bg: '', text: '', style: { animation: 'fade-up' }, button: { label: '', url: '', color: '' },
      },
      {
        format: 'card', heading: 'Approved Building Plan', body: 'The built structure should match what was actually approved by the local authority.',
        image: '', imageAlt: '', bg: '', text: '', style: { animation: 'fade-up' }, button: { label: '', url: '', color: '' },
      },
      {
        format: 'banner', heading: 'Every ATH villa ships with a clean title and RERA registration, start to finish.', body: 'We handle the paperwork so your only job is choosing which home feels right.',
        image: '', imageAlt: '', bg: '', text: '',
        style: { align: 'center', bgType: 'color', bgColor: '#1c2350', color: '#ffffff', font: 'display', animation: 'zoom-in' },
        button: { label: 'Explore ATH Villas', url: '/villas', color: 'accent' },
      },
    ],
  },
];

export const seedMedia = [];

// Standalone campaign/ad landing pages — each is a focused single-page
// design (hero + editable sections + one enquiry form) reachable at
// /lp/<slug> on this same site, and optionally also at a subdomain the
// admin points DNS for at this same deployment (see App.jsx's hostname
// match — the app can't provision the subdomain/DNS itself).
export const seedLandingPages = [];

// Custom enquiry forms. Name and phone are ALWAYS collected and are not part
// of `fields` — they're built into DynamicForm.jsx itself — `fields` only
// holds the extra questions an admin adds on top.
export const seedForms = [
  {
    id: 'form_general',
    name: 'General Enquiry',
    submitLabel: 'Request a call back',
    fields: [
      { id: 'email', label: 'Email (optional)', type: 'email', required: false },
      { id: 'interest', label: "I'm interested in", type: 'select', required: false, options: ['Villas', 'Apartments', 'NRI Enquiry', 'Channel Partnership', 'General Enquiry'] },
      { id: 'message', label: 'Message (optional)', type: 'textarea', required: false },
    ],
    crmApiUrl: '', crmSrdKey: '', utmCaptureEnabled: true,
  },
];

// Resources a role/user can be granted view/edit on. Enforcement is
// per-resource, not per-field — a reasonable middle ground given this is a
// client-only, single-browser permission system (see AuthContext.jsx).
export const PERMISSION_RESOURCES = ['projects', 'pages', 'homePage', 'landingPages', 'blog', 'testimonials', 'newsEvents', 'careers', 'forms', 'media', 'push', 'settings', 'users'];

function fullAccess() {
  return Object.fromEntries(PERMISSION_RESOURCES.map((r) => [r, { view: true, edit: true }]));
}

export const seedUsers = [
  {
    id: 'user_admin',
    username: 'admin',
    password: 'ath-admin-2026',
    role: 'Administrator',
    permissions: fullAccess(),
  },
];

export const seedSettings = {
  // ---- general / CRM fallback ----
  crmApiUrl: '',
  crmApiKey: '',
  siteName: 'Asset Tree Homes',
  contactEmail: 'sales@assettreehomes.com',
  contactPhone: '+91 89398 56789',
  logo: '/assets/ath-logo.png',
  favicon: '/assets/ath-logo.png',

  // ---- SEO defaults (used when a page/project doesn't set its own) ----
  defaultMetaTitle: 'Asset Tree Homes | Homes Built on Trust',
  defaultMetaDescription: 'Asset Tree Homes — 20+ years of expertise, 100+ completed projects and 1000+ happy customers. CREDAI member developer building villas and apartments across Chennai.',

  // ---- header menu (editable nav links) ----
  menu: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Why ATH?', path: '/why-ath' },
    { label: 'Apartments', path: '/apartments' },
    { label: 'Villas', path: '/villas' },
    { label: 'NRI', path: '/nri' },
    { label: 'Channel Partner', path: '/channel-partner' },
    { label: 'Contact Us', path: '/contact' },
  ],

  // ---- footer ----
  footer: {
    tagline: 'A CREDAI member developer with 20+ years of expertise, 100+ completed projects and 1000+ happy customers across Chennai.',
    columns: [
      { title: 'Company', links: [
        { label: 'About Us', path: '/about' },
        { label: 'Why ATH?', path: '/why-ath' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'News & Events', path: '/news-events' },
        { label: 'Blog', path: '/blog' },
        { label: 'Careers', path: '/careers' },
        { label: 'Channel Partner', path: '/channel-partner' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
      ] },
      { title: 'Projects', links: [
        { label: 'Apartments', path: '/apartments' },
        { label: 'Villas', path: '/villas' },
        { label: 'ATH Feathers', path: '/projects/ath-feathers' },
      ] },
      { title: 'For Buyers', links: [
        { label: 'NRI Corner', path: '/nri' },
        { label: 'Book a Site Visit', path: '/contact' },
      ] },
    ],
  },

  // ---- home page (fully section-based, like other CMS pages) ----
  homePage: {
    hero: {
      eyebrow: 'Asset Tree Homes · Chennai',
      headingLine1: 'Where every sunrise',
      headingAccent: 'inspires',
      headingScript: 'living',
      subheading: 'Discover your dream home with a CREDAI member developer trusted for 20+ years — villas and apartments built on precision, prime locations and smart design.',
      tag: '"Your Imagination Is Our Creation"',
      primaryCtaLabel: 'Discover Your Dream Home',
      primaryCtaUrl: '/contact',
      secondaryCtaLabel: 'Explore Villas',
      secondaryCtaUrl: '/villas',
      image: '/assets/hero-cutout.png',
      imageAlt: 'Asset Tree Homes — your imagination is our creation',
    },
    marqueePhrases: ['Designed With Care', 'Built On Trust', '20+ Years Of Expertise', 'CREDAI Member Developer'],
    sections: [
      { id: 'banner', type: 'banner', enabled: true, kicker: 'All Projects', heading: 'Discover Your Dream Home' },
      {
        id: 'stats', type: 'stats', enabled: true,
        items: [
          { value: '20+', label: 'Years of Expertise' },
          { value: '100+', label: 'Completed Projects' },
          { value: '1000+', label: 'Happy Customers' },
          { value: 'CREDAI', label: 'Member Developer' },
        ],
      },
      {
        id: 'featured', type: 'featured', enabled: true,
        kicker: 'Featured Projects', heading: 'Find your perfect home', body: 'Swipe or flip through our ongoing villas and apartments.',
        cardStyleDesktop: 'classic', cardStyleMobile: 'classic',
      },
      {
        id: 'precision', type: 'precision', enabled: true,
        kicker: 'ATH Precision', heading: 'Precision in every design', body: 'Six things every Asset Tree Homes project is built around.',
        items: [
          { title: 'Prime Locations', body: 'Every site is chosen for connectivity — proximity to growth corridors, highways and everyday infrastructure.' },
          { title: 'Smart Design', body: 'Ventilation, natural light and thoughtful layouts — homes planned around how modern families actually live.' },
          { title: 'Sustainability', body: 'An eco-conscious approach to every project, built to minimise environmental impact without compromising comfort.' },
          { title: 'Transparency', body: 'Clear communication from blueprint to handover, so you always know exactly where your home stands.' },
          { title: 'Unwavering Quality', body: 'Construction standards built for the long term — strength, safety and craftsmanship that lasts.' },
          { title: 'On-Time Delivery', body: 'We plan around your timeline and deliver on the schedule we promise, project after project.' },
        ],
      },
      {
        id: 'cta', type: 'cta', enabled: true,
        heading: 'Ready to discover your dream home?', body: "Share your details and our team will get back to you within one business day.",
        ctaLabel: 'Get in Touch', ctaUrl: '/contact',
      },
    ],
  },

  // ---- project card style (admin-selectable theme for listing cards) ----
  // Each key is 'classic' | 'flip' | 'premium' (see ath2/ProjectCard.jsx),
  // set independently per page and per device (desktop vs. mobile).
  cardStyle: {
    villas: { desktop: 'classic', mobile: 'classic' },
    apartments: { desktop: 'classic', mobile: 'classic' },
    home: { desktop: 'classic', mobile: 'classic' },
  },

  // ---- Villas/Apartments listing-grid column count, per page/device ----
  cardGrid: {
    villas: { desktop: 3, mobile: 1 },
    apartments: { desktop: 3, mobile: 1 },
  },

  // ---- Card reveal animation, per page/device — one of 'none' | 'fade-up' | 'zoom-in' | 'flip-in' ----
  cardAnimation: {
    villas: { desktop: 'fade-up', mobile: 'fade-up' },
    apartments: { desktop: 'fade-up', mobile: 'fade-up' },
  },

  // ---- WhatsApp floating button (leave number blank to hide it) ----
  whatsappNumber: '',
  whatsappMessage: "Hi! I'm interested in Asset Tree Homes projects.",

  // ---- Maya, the site mascot/voice assistant ----
  mascot: {
    enabled: true,
    name: 'Maya',
    avatar: '/assets/maya-bust.png',
    welcomeMessage: "Hey, I'm Maya. I'm here to help you find your dream home — if you need any clarification, just ask me!",
    greeting: "Hi, I'm Maya! Ask me about our villas, apartments, pricing, or how to book a site visit.",
    welcomeCooldownHours: 12,
  },

  // ---- marketing integrations (just paste the ID — snippets are injected automatically) ----
  integrations: {
    ga4Id: '',
    metaPixelId: '',
    gtmId: '',
    customHeadScript: '',
    customBodyScript: '',
  },

  // ---- popup campaign (image or form) ----
  popup: {
    enabled: false,
    type: 'image', // 'image' | 'form'
    image: '',
    imageAlt: '',
    title: '',
    body: '',
    ctaLabel: 'Learn More',
    ctaUrl: '/contact',
    delaySeconds: 4,
    frequency: 'once', // 'once' | 'everyLoad'
    formId: '',
  },

  // ---- sitewide announcement banner (the practical, backend-free stand-in
  // for "push notifications to all users without login") ----
  announcement: {
    enabled: false,
    message: '',
    ctaLabel: '',
    ctaUrl: '',
  },

  // ---- theme (drives the navy/gold CSS variables sitewide) ----
  theme: {
    primary: '#27306f',
    accent: '#f6ab1b',
    fontDisplay: 'Bebas Neue',
    fontBody: 'Poppins',
  },

  // ---- homepage "All Projects" banner carousel ----
  banner: {
    width: 320,
    height: 90,
    autoScrollSeconds: 5,
  },

  // ---- which custom form (see seedForms) the main Contact page uses ----
  contactFormId: 'form_general',

  // ---- Contact page hero + office info (editable from Live Edit) ----
  contact: {
    heading: "Let's talk about your dream home",
    subheading: "Share your details and our team will call you back within one business day.",
    officeTitle: 'Kundrathur Office',
    officeAddress: 'ATH Feathers Sales Gallery — Kundrathur, Chennai, Tamil Nadu, India.',
    phone: '+91 89398 56789',
    email: 'sales@assettreehomes.com',
  },
};
