import Ionicons from '@expo/vector-icons/Ionicons';

type TabIconName = React.ComponentProps<typeof Ionicons>['name'];

export const TAB_ICONS: Record<
  string,
  {
    focused: TabIconName;
    unfocused: TabIconName;
  }
> = {
  Home: {
    focused: 'home',
    unfocused: 'home-outline',
  },

  Search: {
    focused: 'search',
    unfocused: 'search-outline',
  },

  Orders: {
    focused: 'receipt',
    unfocused: 'receipt-outline',
  },

  Profile: {
    focused: 'person',
    unfocused: 'person-outline',
  },
};