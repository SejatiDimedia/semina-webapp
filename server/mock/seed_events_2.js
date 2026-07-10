var organizerId = ObjectId('62cfe35e8ad11e7a5e240f26');
var talentId = ObjectId('62cfe726d8940572a095e58f');
var categoryOlahraga = ObjectId('62cfe59890e64e9e644d3fb9');
var categorySeminar = ObjectId('62cfe5bd90e64e9e644d3fbf');
var categoryKonser = ObjectId('62cfe5a790e64e9e644d3fbc');

var img1 = ObjectId();
var img2 = ObjectId();
var img3 = ObjectId();

db.images.insertMany([
  { _id: img1, public_id: 'art_event', url: 'uploads/art_event.jpg' },
  { _id: img2, public_id: 'esports_event', url: 'uploads/esports_event.jpg' },
  { _id: img3, public_id: 'food_event', url: 'uploads/food_event.jpg' },
]);

db.events.insertMany([
  {
    title: 'Renaissance & Modern Art Expo',
    date: new Date('2024-11-05T10:00:00Z'),
    about: 'Explore breathtaking collections of classical and contemporary art pieces from globally renowned artists.',
    tagline: 'Where Classic Meets Modern',
    keyPoint: ['Exclusive Exhibitions', 'Curator Tours', 'Art Auctions'],
    venueName: 'Metropolitan Art Museum',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'VIP Preview', price: 250, stock: 100, statusTicketCategories: true, expired: new Date('2024-11-01T00:00:00Z') },
      { _id: ObjectId(), type: 'General Admission', price: 40, stock: 1000, statusTicketCategories: true, expired: new Date('2024-11-01T00:00:00Z') }
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
    title: 'Global E-Sports Championship',
    date: new Date('2024-12-12T13:00:00Z'),
    about: 'Witness the ultimate battle as top tier teams compete for a $1M prize pool in intense gaming matches.',
    tagline: 'Battle for Glory',
    keyPoint: ['Live Matches', 'Pro Players Meet & Greet', 'Hardware Giveaways'],
    venueName: 'Berlin Arena',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'Premium Seating', price: 120, stock: 500, statusTicketCategories: true, expired: new Date('2024-12-05T00:00:00Z') },
      { _id: ObjectId(), type: 'Standard', price: 60, stock: 2000, statusTicketCategories: true, expired: new Date('2024-12-05T00:00:00Z') }
    ],
    image: img2,
    category: categoryOlahraga,
    talent: talentId,
    organizer: organizerId,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    title: 'World Culinary Food Festival',
    date: new Date('2024-09-30T11:00:00Z'),
    about: 'A delicious celebration of flavors from around the world. Taste cuisines crafted by top chefs.',
    tagline: 'A Delicious Celebration of Flavors',
    keyPoint: ['International Cuisines', 'Masterclass Cooking', 'Live Entertainment'],
    venueName: 'Downtown Food Square',
    statusEvent: 'Published',
    tickets: [
      { _id: ObjectId(), type: 'All-You-Can-Taste', price: 150, stock: 300, statusTicketCategories: true, expired: new Date('2024-09-25T00:00:00Z') },
      { _id: ObjectId(), type: 'Entry Only', price: 25, stock: 1500, statusTicketCategories: true, expired: new Date('2024-09-25T00:00:00Z') }
    ],
    image: img3,
    category: categoryKonser,
    talent: talentId,
    organizer: organizerId,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  }
]);
