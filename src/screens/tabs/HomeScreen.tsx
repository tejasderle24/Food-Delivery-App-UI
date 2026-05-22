import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Restaurant, restaurants } from '../../data/restaurants';
import { RootStackParamList } from '../../types/navigation';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type RestaurantCardProps = {
  item: Restaurant;
  onPress: () => void;
};

function RestaurantCard({ item, onPress }: RestaurantCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.rating}>* {item.rating}</Text>
        </View>
        <Text style={styles.meta}>
          {item.category} - {item.deliveryTime}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.row}>
          <Text style={styles.offer}>{item.offer}</Text>
          <Text style={styles.delivery}>
            {item.isFreeDelivery ? 'Free delivery' : 'Delivery charges apply'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

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
          <RestaurantCard
            item={item}
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurantId: item.id,
              })
            }
          />
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
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffd7c8',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardBody: {
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { fontSize: 17, fontWeight: '700', color: '#1b1b1b' },
  rating: { fontSize: 14, color: '#1f2937', fontWeight: '600' },
  meta: { marginTop: 4, color: '#4b5563' },
  price: { marginTop: 8, color: '#ff6b35', fontWeight: '600' },
  offer: { marginTop: 8, color: '#047857', fontWeight: '700' },
  delivery: { marginTop: 8, color: '#6b7280', fontSize: 12 },
});
