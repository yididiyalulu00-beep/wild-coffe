import { CoffeeItem, FeatureItem, GalleryItem, Testimonial } from '../types';

export const COFFEE_MENU: CoffeeItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    tagline: 'Pure & Intense',
    description: 'Double shot of rich, full-bodied espresso with a thick golden crema. Extracted at 9 bars of pressure from single-origin Ethiopian Yirgacheffe beans.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80',
    category: 'espresso',
    roastLevel: 'Medium-Dark',
    origin: 'Yirgacheffe, Ethiopia',
    flavorNotes: ['Dark Chocolate', 'Bergamot', 'Caramel'],
    isPopular: true,
    calories: 5,
    preparationTime: '2 mins'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    tagline: 'Velvety Classic',
    description: 'Equal harmony of bold espresso, velvety steamed milk, and a dense, cloud-like layer of microfoam dusted with organic cocoa powder.',
    price: 4.85,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    category: 'espresso',
    roastLevel: 'Medium',
    origin: 'Antioquia, Colombia',
    flavorNotes: ['Toasted Hazelnut', 'Cocoa', 'Sweet Cream'],
    isPopular: true,
    calories: 140,
    preparationTime: '3 mins'
  },
  {
    id: 'latte',
    name: 'Latte',
    tagline: 'Smooth & Silky',
    description: 'Rich artisan espresso harmonized with silky micro-steamed milk, crowned with delicate free-pour rosette latte art.',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    category: 'espresso',
    roastLevel: 'Medium',
    origin: 'Tarrazú, Costa Rica',
    flavorNotes: ['Vanilla Bean', 'Butterscotch', 'Malt'],
    isPopular: true,
    calories: 190,
    preparationTime: '3 mins'
  },
  {
    id: 'americano',
    name: 'Americano',
    tagline: 'Clean & Bold',
    description: 'Freshly pulled double shot of specialty espresso diluted with hot mineral water, preserving the intricate aroma and smooth flavor profile.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    category: 'espresso',
    roastLevel: 'Medium-Dark',
    origin: 'Huehuetenango, Guatemala',
    flavorNotes: ['Roasted Almond', 'Brown Sugar', 'Cacao Nibs'],
    calories: 10,
    preparationTime: '2 mins'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    tagline: 'Decadent Indulgence',
    description: 'Artisanal espresso melted into 70% single-origin Valrhona dark chocolate and steamed whole milk, topped with whipped vanilla cream.',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    category: 'specialty',
    roastLevel: 'Medium',
    origin: 'Chiapas, Mexico',
    flavorNotes: ['Fudge', 'Cinnamon', 'Black Cherry'],
    isPopular: true,
    calories: 290,
    preparationTime: '4 mins'
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    tagline: 'Crisp & Refreshing',
    description: 'Flash-brewed specialty blend poured over crystal-clear artisan ice spheres, delivering immediate refreshment with bright citrus and caramel tones.',
    price: 4.60,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    category: 'iced',
    roastLevel: 'Light',
    origin: 'Sidama, Ethiopia & Huila, Colombia',
    flavorNotes: ['Meyer Lemon', 'Wild Honey', 'Apricot'],
    isPopular: true,
    calories: 15,
    preparationTime: '2 mins'
  },
  {
    id: 'nitro-cold-brew',
    name: 'Wild Nitro Cold Brew',
    tagline: 'Cascading Velvet',
    description: 'Slow-steeped for 24 hours in cold spring water and infused with pure food-grade nitrogen for a creamy, stout-like texture and naturally sweet finish.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    category: 'iced',
    roastLevel: 'Medium-Dark',
    origin: 'Cerrado Mineiro, Brazil',
    flavorNotes: ['Dark Toffee', 'Nutmeg', 'Smoked Oak'],
    isSeasonal: true,
    calories: 5,
    preparationTime: '1 min'
  },
  {
    id: 'pistachio-rose-latte',
    name: 'Pistachio Cardamom Latte',
    tagline: 'Signature Creation',
    description: 'House-made Sicilian pistachio butter infused with crushed green cardamom pods, espresso, and silky oat milk.',
    price: 6.25,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    category: 'specialty',
    roastLevel: 'Light-Medium',
    origin: 'Bourbon Estate, Rwanda',
    flavorNotes: ['Roasted Pistachio', 'Green Cardamom', 'Orange Blossom'],
    isSeasonal: true,
    calories: 240,
    preparationTime: '4 mins'
  },
  {
    id: 'almond-croissant',
    name: 'Flaky Almond Croissant',
    tagline: 'Artisan Oven Baked',
    description: 'Double-baked French butter croissant filled with fragrant almond frangipane cream and toasted sliced almonds.',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    flavorNotes: ['Normandy Butter', 'Almond Cream', 'Powdered Vanilla'],
    isPopular: true,
    calories: 360,
    preparationTime: 'Ready to serve'
  },
  {
    id: 'basque-cheesecake',
    name: 'Burnt Basque Cheesecake',
    tagline: 'House Specialty Slice',
    description: 'Caramelized crust with a luscious, melt-in-your-mouth center infused with Madagascar vanilla bean. Pairs extraordinarily with espresso.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    category: 'bakery',
    flavorNotes: ['Caramelized Sugar', 'Cream Cheese', 'Bourbon Vanilla'],
    calories: 420,
    preparationTime: 'Ready to serve'
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'beans',
    title: 'Premium Coffee Beans',
    description: 'Directly traded, ethically sourced 100% Arabica beans harvested from high-elevation volcanic micro-lots around the world.',
    iconName: 'Sparkles',
    highlight: 'Single-Origin Grade 1'
  },
  {
    id: 'brewed',
    title: 'Freshly Brewed',
    description: 'Ground seconds before extraction on precision flat burr grinders and pulled with calibrated PID thermal stability.',
    iconName: 'Flame',
    highlight: 'Roasted Weekly In-House'
  },
  {
    id: 'cozy',
    title: 'Cozy Atmosphere',
    description: 'Warm oak interiors, acoustic jazz ambient background, high-speed fiber Wi-Fi, and plush leather booths crafted for comfort.',
    iconName: 'Coffee',
    highlight: 'Designed for Focus & Fellowship'
  },
  {
    id: 'service',
    title: 'Fast Service',
    description: 'Order in-app or at the bar with our streamlined double-group workflow, ensuring your artisanal cup is ready in under 3 minutes.',
    iconName: 'Zap',
    highlight: 'Under 3-Min Handcrafted Speed'
  },
  {
    id: 'passion',
    title: 'Made With Passion',
    description: 'Every cup is shaped by certified Q-graders and dedicated baristas who view coffee brewing as both art and culinary science.',
    iconName: 'HeartHandshake',
    highlight: 'Certified Master Baristas'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Artisan Latte Art Pour',
    category: 'barista',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    description: 'Microfoam poured into a delicate tulip design over a fresh double espresso base.'
  },
  {
    id: 'gal-2',
    title: 'Cozy Sunlit Lounge & Seating',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Natural oak wood tables, exposed brick walls, and soft warm lighting for relaxing or working.'
  },
  {
    id: 'gal-3',
    title: 'Fresh Butter Pastries & Croissants',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Golden, flaky pastries baked fresh every morning by our artisan pastry chef.'
  },
  {
    id: 'gal-4',
    title: 'Signature Ceramic Coffee Cups',
    category: 'cups',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted stoneware ceramic mugs retaining optimal brewing temperature.'
  },
  {
    id: 'gal-5',
    title: 'Friends Sharing Coffee Moments',
    category: 'moments',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    description: 'Warm conversations and joyful reunions over afternoon brews.'
  },
  {
    id: 'gal-6',
    title: 'Barista Dialing In the Extraction',
    category: 'barista',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    description: 'Measuring yield and flow rate on our customized Synesso MVP espresso machine.'
  },
  {
    id: 'gal-7',
    title: 'The Brew Bar & Roastery Window',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80',
    description: 'Watch the small-batch Loring roast master in action while enjoying your pour-over.'
  },
  {
    id: 'gal-8',
    title: 'Nitro Cold Brew Tap Tower',
    category: 'cups',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    description: 'Double-walled chilled crystal glasses serving our velvety cascade nitro brew.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Creative Director & Coffee Connoisseur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Wild Coffee has completely elevated my morning ritual. The Ethiopian single-origin espresso has floral notes I have never experienced anywhere else in the city. The interior ambiance is pure tranquility.',
    favoriteDrink: 'Double Espresso & Almond Croissant',
    date: '2 days ago'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Tech Founder & Remote Worker',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'The perfect balance of aesthetic charm and serious coffee craft. Fast Wi-Fi, comfortable seating, and baristas who genuinely remember your name and brew preferences. Wild Coffee is my second home.',
    favoriteDrink: 'Wild Nitro Cold Brew',
    date: '1 week ago'
  },
  {
    id: 'test-3',
    name: 'Sophia Chen',
    role: 'Food & Lifestyle Journalist',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'From the velvety steamed milk texture in their flat white to the burnt Basque cheesecake slice, every element reflects meticulous devotion to quality. A true benchmark for modern specialty coffee.',
    favoriteDrink: 'Pistachio Cardamom Latte',
    date: '2 weeks ago'
  }
];

export const STORE_INFO = {
  name: 'Wild Coffee House & Roastery',
  tagline: 'Coffee. Comfort. Wild Moments.',
  phone: '+1 (555) 742-9453',
  email: 'hello@wildcoffeehouse.com',
  address: '428 Timberland Way, Arts & Coffee District, Portland, OR 97209',
  hours: [
    { days: 'Monday – Friday', time: '6:30 AM – 8:30 PM', isCurrentDay: true },
    { days: 'Saturday', time: '7:30 AM – 9:30 PM', isCurrentDay: false },
    { days: 'Sunday', time: '8:00 AM – 7:00 PM', isCurrentDay: false }
  ],
  socials: [
    { name: 'Instagram', handle: '@wildcoffee.house', url: 'https://instagram.com' },
    { name: 'Facebook', handle: 'Wild Coffee House', url: 'https://facebook.com' },
    { name: 'Twitter/X', handle: '@wildcoffeepdx', url: 'https://x.com' },
    { name: 'TikTok', handle: '@wildcoffeebar', url: 'https://tiktok.com' }
  ]
};
