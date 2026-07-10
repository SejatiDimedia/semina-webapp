var organizerId = ObjectId('62cfe35e8ad11e7a5e240f26');
var talentId = ObjectId('62cfe726d8940572a095e58f');
var categoryKonser = ObjectId('62cfe5a790e64e9e644d3fbc');
var categorySeminar = ObjectId('62cfe5bd90e64e9e644d3fbf');

var img1 = ObjectId();
var img2 = ObjectId();
var img3 = ObjectId();

db.images.insertMany([
  { _id: img1, public_id: 'tech_event', url: 'uploads/tech_event.jpg' },
  { _id: img2, public_id: 'music_event', url: 'uploads/music_event.jpg' },
  { _id: img3, public_id: 'startup_event', url: 'uploads/startup_event.jpg' },
]);

db.events.insertMany([
  {
    title: 'FutureTech Global 2024',
    date: new Date('2024-10-14T09:00:00Z'),
    about: 'Join the biggest tech conference exploring AI, Web3, and the future of technology.',
    tagline: 'Innovate. Disrupt. Transform.',
    keyPoint: ['Keynote Speakers', 'Global Networking', 'Cutting-edge Workshops'],
    venueName: 'San Francisco Innovation Hub',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'VVIP', price: 1500, stock: 50, statusTicketCategories: true, expired: new Date('2024-10-10T00:00:00Z') },
      { _id: ObjectId(), type: 'Regular', price: 300, stock: 500, statusTicketCategories: true, expired: new Date('2024-10-10T00:00:00Z') }
    ],
    image: img1,
    category: categorySeminar,
    talent: talentId,
    organizer: organizerId,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    title: 'Summer Rhythms Music Fest',
    date: new Date('2024-08-24T15:00:00Z'),
    about: 'Experience the ultimate summer party with top DJs and live bands.',
    tagline: 'The Ultimate Summer Party',
    keyPoint: ['Live Bands', 'Food Trucks', 'Art Installations'],
    venueName: 'Centrum Park',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'VIP', price: 800, stock: 100, statusTicketCategories: true, expired: new Date('2024-08-20T00:00:00Z') },
      { _id: ObjectId(), type: 'General', price: 150, stock: 2000, statusTicketCategories: true, expired: new Date('2024-08-20T00:00:00Z') }
    ],
    image: img2,
    category: categoryKonser,
    talent: talentId,
    organizer: organizerId,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    title: 'Startup Pitch Competition',
    date: new Date('2024-10-24T09:00:00Z'),
    about: 'Watch emerging startups pitch their ideas to a panel of top investors.',
    tagline: 'Innovate. Present. Win.',
    keyPoint: ['Investor Panel', 'Huge Prize Fund', 'Networking Sessions'],
    venueName: 'Innovation Hub, San Francisco',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'Investor Pass', price: 500, stock: 100, statusTicketCategories: true, expired: new Date('2024-10-20T00:00:00Z') },
      { _id: ObjectId(), type: 'Observer Pass', price: 50, stock: 300, statusTicketCategories: true, expired: new Date('2024-10-20T00:00:00Z') }
    ],
    image: img3,
    category: categorySeminar,
    talent: talentId,
    organizer: organizerId,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  }
]);
