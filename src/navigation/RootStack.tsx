import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './tabs/BottomTabs';

import OnboardingScreen from '../screens/stack/OnboardingScreen';
import RestaurantDetailScreen from '../screens/stack/RestaurantDetailScreen';
import CartScreen from '../screens/stack/CartScreen';

import { RootStackParamList } from '../types/navigation';

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6b35',
        },

        headerTintColor: '#ffffff',

        headerTitleStyle: {
          fontWeight: '700',
        },

        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: 'Restaurant Detail',
          headerBackTitle: 'Home',
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          headerBackTitle: 'Details',
        }}
      />
    </Stack.Navigator>
  );
}