import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { restaurants } from '../../data/restaurants';
import { RootStackParamList } from '../../types/navigation';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a restaurant</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurantName: item.restaurantName,
                deliveryPrice: item.deliveryPrice,
              })
            }
          >
            <Text style={styles.name}>{item.restaurantName}</Text>
            <Text style={styles.meta}>{item.cuisine}</Text>
            <Text style={styles.price}>Delivery: Rs. {item.deliveryPrice}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 16 },
  heading: { fontSize: 22, fontWeight: '700', paddingHorizontal: 16, marginBottom: 8 },
  list: { padding: 16, gap: 12 },
  card: {
    backgroundColor: '#fff4ef',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffd7c8',
    padding: 14,
  },
  name: { fontSize: 17, fontWeight: '700', color: '#1b1b1b' },
  meta: { marginTop: 4, color: '#4b5563' },
  price: { marginTop: 8, color: '#ff6b35', fontWeight: '600' },
});
