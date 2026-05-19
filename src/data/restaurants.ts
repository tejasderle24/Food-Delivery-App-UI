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
  },
];