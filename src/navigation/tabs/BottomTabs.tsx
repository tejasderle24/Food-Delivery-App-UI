import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAB_ICONS } from '../../constants/tabIcons';
import HomeScreen from '../../screens/tabs/HomeScreen';
import SearchScreen from '../../screens/tabs/SearchScreen';
import OrdersScreen from '../../screens/tabs/OrdersScreen';
import ProfileScreen from '../../screens/tabs/ProfileScreen';
import { useCart } from '../../context/CartContext';
import { RootTabParamList } from '../../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  const { totalItems } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff6b35',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          position: 'absolute',
          left: 14,
          right: 14,
          bottom: 14,
          height: 66,
          borderRadius: 14,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#111827',
          shadowOpacity: 0.08,
          shadowRadius: 12,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        },

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
          tabBarBadge: totalItems > 0 ? totalItems : undefined,
          tabBarBadgeStyle: {
            backgroundColor: '#111827',
            color: '#ffffff',
            fontWeight: '700',
          },
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
