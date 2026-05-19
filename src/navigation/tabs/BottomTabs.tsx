import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAB_ICONS } from '../../constants/tabIcons';
import HomeScreen from '../../screens/tabs/HomeScreen';
import SearchScreen from '../../screens/tabs/SearchScreen';
import OrdersScreen from '../../screens/tabs/OrdersScreen';
import ProfileScreen from '../../screens/tabs/ProfileScreen';
import { RootTabParamList } from '../../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  const cartItemCount = 2;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          const iconSet = TAB_ICONS[route.name];

          return (
            <Ionicons
              name={focused ? iconSet.focused : iconSet.unfocused}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Search" component={SearchScreen} />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: cartItemCount > 0 ? cartItemCount : undefined,
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}