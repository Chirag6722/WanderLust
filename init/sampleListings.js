const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    category: "pools", // mapped from 'beach'
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    category: "rooms", // mapped from 'city'
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Farmhouse Retreat",
    category: "farms",
    description:
      "Experience the charm of countryside living in this rustic farmhouse surrounded by greenery and peace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Tropical Island Villa",
    category: "domes", // mapped from 'island'
    description:
      "Live your dream in this luxurious villa on a private tropical island with clear waters and palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Ski Chalet in the Alps",
    category: "mountains", // corrected from 'mountain'
    description:
      "Hit the slopes and return to comfort in this cozy ski chalet with mountain views and a fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154207-0cdd03c34b2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    category: "castles", // mapped from 'historic'
    description:
      "Stay in a beautifully restored villa with vineyards and cobbled paths in the heart of Italy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Bohemian Bungalow",
    category: "farms", // mapped from 'countryside'
    description:
      "This artistic bohemian-style bungalow offers a peaceful escape with character and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572120360610-d971b9c7b165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Goa",
    country: "India",
  },
  {
    title: "Lakeview Wooden Cabin",
    category: "boats", // mapped from 'lake'
    description:
      "Cozy up in this wooden cabin overlooking a serene lake, perfect for couples or solo getaways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1536687834997-d9b6f1f7c78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Desert Camp Adventure",
    category: "camping", // mapped from 'desert'
    description:
      "Live under the stars in a luxury desert camp surrounded by dunes and traditional Rajasthani culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1603302576835-8fbbd1fa16de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Desert Oasis in Dubai",
    category: "pools", // luxurious, private pool
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    category: "mountains", // natural, forest
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?...",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    category: "trending", // popular destination
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?...",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    category: "camping", // nature escape
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?...",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    category: "iconic", // historic appeal
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?...",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    category: "rooms", // city apartment
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?...",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    category: "domes", // close to nature, cozy
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?...",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    category: "pools", // overwater villa
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?...",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    category: "mountains", // ski & mountain
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?...",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    category: "boats", // beach/coastline feel
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  }

];

module.exports = sampleListings;
