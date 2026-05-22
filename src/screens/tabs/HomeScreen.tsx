import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Restaurant, restaurants } from '../../data/restaurants';
import { RootStackParamList } from '../../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <View style={styles.ratingWrap}>
            <Ionicons name="star" size={12} color="#f59e0b" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.meta}>
          {item.category}  |  {item.deliveryTime}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.delivery}>
            {item.isFreeDelivery ? 'Free Delivery' : 'Paid Delivery'}
          </Text>
        </View>
        <Text style={styles.offer}>{item.offer}</Text>
      </View>
    </Pressable>
  );
}

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Discover Restaurants</Text>
        <Text style={styles.subheading}>Fast delivery, top-rated places near you</Text>
      </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', paddingTop: 8 },
  header: { paddingHorizontal: 16, marginBottom: 8 },
  heading: { fontSize: 26, fontWeight: '800', color: '#111827' },
  subheading: { marginTop: 4, fontSize: 13, color: '#6b7280' },
  list: { padding: 16, paddingBottom: 120, gap: 12 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { flex: 1, fontSize: 17, fontWeight: '700', color: '#1b1b1b' },
  ratingWrap: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  rating: { fontSize: 13, color: '#1f2937', fontWeight: '700' },
  meta: { marginTop: 5, color: '#6b7280', fontSize: 13 },
  price: { marginTop: 8, color: '#111827', fontWeight: '700', fontSize: 13 },
  offer: { marginTop: 8, color: '#ff6b35', fontWeight: '700', fontSize: 12 },
  delivery: { marginTop: 8, color: '#059669', fontSize: 12, fontWeight: '600' },
});
