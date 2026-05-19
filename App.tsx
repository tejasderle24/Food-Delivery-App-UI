import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/tabs/BottomTabs';
import OnboardingScreen from './src/screens/stack/OnboardingScreen';
import RestaurantDetailScreen from './src/screens/stack/RestaurantDetailScreen';
import CartScreen from './src/screens/stack/CartScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: { backgroundColor: '#ff6b35' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '700' },
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="HomeTabs" component={BottomTabs} options={{ title: 'Home' }} />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
          options={{ title: 'Restaurant Detail', headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Cart', headerBackTitle: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
