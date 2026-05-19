export type Restaurant = {
  id: string;
  restaurantName: string;
  cuisine: string;
  deliveryPrice: number;
  rating: number;
  eta: string;
};

export const restaurants: Restaurant[] = [
  {
    id: '101',
    restaurantName: 'Urban Bites',
    cuisine: 'Burgers, Fries',
    deliveryPrice: 29,
    rating: 4.7,
    eta: '20-30 min',
  },
  {
    id: '102',
    restaurantName: 'Spice Route',
    cuisine: 'Indian, Curry',
    deliveryPrice: 19,
    rating: 4.5,
    eta: '25-35 min',
  },
  {
    id: '123',
    restaurantName: 'Sushi House',
    cuisine: 'Japanese, Sushi',
    deliveryPrice: 49,
    rating: 4.8,
    eta: '30-40 min',
  },
  {
    id: '104',
    restaurantName: 'Green Bowl',
    cuisine: 'Healthy, Salads',
    deliveryPrice: 15,
    rating: 4.4,
    eta: '18-25 min',
  },
];

export const getRestaurantById = (id: string) => restaurants.find((r) => r.id === id);
