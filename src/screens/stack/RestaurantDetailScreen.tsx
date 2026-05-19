import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'>;

export default function RestaurantDetailScreen({ navigation, route }: Props) {
  const { restaurantName, deliveryPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{restaurantName}</Text>
      <Text style={styles.price}>Delivery fee: ₹{deliveryPrice}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.buttonText}>Go to Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 24,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#ff6b35',
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
