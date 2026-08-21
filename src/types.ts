export interface CoffeeItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: 'espresso' | 'iced' | 'specialty' | 'bakery';
  roastLevel?: 'Light' | 'Light-Medium' | 'Medium' | 'Medium-Dark' | 'Dark';
  origin?: string;
  flavorNotes?: string[];
  isPopular?: boolean;
  isSeasonal?: boolean;
  calories?: number;
  preparationTime?: string;
}

export interface CartItem {
  cartId: string;
  item: CoffeeItem;
  quantity: number;
  size: 'Regular (12oz)' | 'Large (16oz)' | 'Grand (20oz)';
  milk: 'Whole Milk' | 'Oat Milk (+ $0.75)' | 'Almond Milk (+ $0.75)' | 'Soy Milk (+ $0.50)' | 'None / Black';
  sweetness: '100% Standard' | '70% Less Sweet' | '30% Subtle' | 'Unsweetened';
  extraShots: number;
  specialInstructions?: string;
  unitPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteDrink: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cups' | 'barista' | 'interior' | 'pastries' | 'moments';
  image: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}
