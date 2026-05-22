export type Restaurant = {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  price: string;
  image: string;
  offer: string;
  isFreeDelivery: boolean;
  menu: MenuItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const restaurants: Restaurant[] = [
  {
    id: '101',
    name: "La Pino'z Pizza",
    category: 'Pizza',
    rating: 4.5,
    deliveryTime: '20-30 min',
    price: '$12 for one',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    offer: '50% OFF',
    isFreeDelivery: true,
    menu: [
      { id: '101-1', name: 'Margherita Pizza', description: 'Classic cheese pizza', price: 249 },
      { id: '101-2', name: 'Farmhouse Pizza', description: 'Loaded with fresh veggies', price: 349 },
      { id: '101-3', name: 'Garlic Bread', description: 'Buttery garlic bread sticks', price: 149 },
    ],
  },
  {
    id: '102',
    name: 'Burger Hub',
    category: 'Burger',
    rating: 4.3,
    deliveryTime: '15-25 min',
    price: '$10 for one',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    offer: 'Buy 1 Get 1',
    isFreeDelivery: false,
    menu: [
      { id: '102-1', name: 'Veg Burger', description: 'Crispy patty with fresh lettuce', price: 179 },
      { id: '102-2', name: 'Chicken Burger', description: 'Grilled chicken patty', price: 229 },
      { id: '102-3', name: 'French Fries', description: 'Salted crispy fries', price: 129 },
    ],
  },
  {
    id: '103',
    name: 'Sushi World',
    category: 'Sushi',
    rating: 4.7,
    deliveryTime: '25-35 min',
    price: '$18 for one',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    offer: '20% OFF',
    isFreeDelivery: true,
    menu: [
      { id: '103-1', name: 'Salmon Roll', description: 'Fresh salmon sushi roll', price: 399 },
      { id: '103-2', name: 'California Roll', description: 'Crab and avocado roll', price: 329 },
      { id: '103-3', name: 'Miso Soup', description: 'Warm and comforting soup', price: 119 },
    ],
  },
  {
    id: '104',
    name: 'Taco Fiesta',
    category: 'Mexican',
    rating: 4.4,
    deliveryTime: '20-25 min',
    price: '$14 for one',
    image:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85',
    offer: 'Free Coke',
    isFreeDelivery: true,
    menu: [
      { id: '104-1', name: 'Chicken Taco', description: 'Soft taco with chicken filling', price: 199 },
      { id: '104-2', name: 'Nachos', description: 'Cheesy loaded nachos', price: 189 },
      { id: '104-3', name: 'Burrito Bowl', description: 'Rice, beans and salsa bowl', price: 279 },
    ],
  },
  {
    id: '105',
    name: 'Spicy Biryani',
    category: 'Biryani',
    rating: 4.6,
    deliveryTime: '30-40 min',
    price: '$16 for one',
    image:
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0',
    offer: '40% OFF',
    isFreeDelivery: false,
    menu: [
      { id: '105-1', name: 'Chicken Biryani', description: 'Aromatic dum biryani', price: 299 },
      { id: '105-2', name: 'Mutton Biryani', description: 'Slow-cooked mutton biryani', price: 379 },
      { id: '105-3', name: 'Raita', description: 'Cool yogurt dip', price: 69 },
    ],
  },
];
