export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  HomeTabs: undefined;
  RestaurantDetail: {
    restaurantId: string;
  };
  Cart: undefined;
};

export type ProfileDrawerParamList = {
  Profile: undefined;
  'My Orders': undefined;
  Settings: undefined;
  'Help & Support': undefined;
  Logout: undefined;
};
