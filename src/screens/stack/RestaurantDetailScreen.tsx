import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';
import { MenuItem, restaurants } from '../../data/restaurants';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'>;

type MenuCardProps = {
  menuItem: MenuItem;
  quantity: number;
  onAdd: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

function MenuCard({ menuItem, quantity, onAdd, onIncrement, onDecrement }: MenuCardProps) {
  return (
    <View style={styles.menuCard}>
      <View style={styles.menuHeader}>
        <Text style={styles.menuName}>{menuItem.name}</Text>
        <Text style={styles.menuPrice}>Rs. {menuItem.price}</Text>
      </View>
      <Text style={styles.menuDescription}>{menuItem.description}</Text>
      <View style={styles.menuMetaRow}>
        <Text style={styles.menuMetaText}>Freshly prepared</Text>
        <Text style={styles.menuMetaText}>~20 min</Text>
      </View>

      {quantity === 0 ? (
        <Pressable style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </Pressable>
      ) : (
        <View style={styles.quantityWrap}>
          <Pressable style={styles.qtyButton} onPress={onDecrement}>
            <Text style={styles.qtyButtonText}>-</Text>
          </Pressable>
          <Text style={styles.qtyText}>{quantity}</Text>
          <Pressable style={styles.qtyButton} onPress={onIncrement}>
            <Text style={styles.qtyButtonText}>+</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default function RestaurantDetailScreen({ navigation, route }: Props) {
  const { restaurantId } = route.params;
  const restaurant = restaurants.find((item) => item.id === restaurantId);
  const { addItem, incrementItem, decrementItem, getItemQuantity, totalItems } = useCart();

  if (!restaurant) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.name}>Restaurant not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant.menu}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.headerCard}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.meta}>
              {restaurant.category} | {restaurant.deliveryTime}
            </Text>
            <View style={styles.badgeRow}>
              <View style={styles.offerBadge}>
                <Text style={styles.offerText}>{restaurant.offer}</Text>
              </View>
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color="#f59e0b" />
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) => {
          const quantity = getItemQuantity(item.id);
          return (
            <MenuCard
              menuItem={item}
              quantity={quantity}
              onAdd={() => addItem(restaurant.id, restaurant.name, item)}
              onIncrement={() => incrementItem(item.id)}
              onDecrement={() => decrementItem(item.id)}
            />
          );
        }}
      />

      <Pressable style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButtonText}>Go to Cart ({totalItems})</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  list: {
    padding: 16,
    paddingBottom: 92,
    gap: 12,
  },
  headerCard: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  meta: {
    marginTop: 6,
    fontSize: 13,
    color: '#6b7280',
  },
  badgeRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  offerBadge: {
    backgroundColor: '#fff4ef',
    borderWidth: 1,
    borderColor: '#ffd7c8',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  offerText: {
    color: '#ff6b35',
    fontWeight: '700',
    fontSize: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#f3f4f6',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ratingText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 12,
  },
  menuCard: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#ffffff',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  menuName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ff6b35',
  },
  menuDescription: {
    marginTop: 6,
    fontSize: 13,
    color: '#4b5563',
  },
  menuMetaRow: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 8,
  },
  menuMetaText: {
    fontSize: 11,
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  addButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#ff6b35',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  quantityWrap: {
    marginTop: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff4ef',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6b35',
  },
  qtyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
  },
  qtyText: {
    minWidth: 16,
    textAlign: 'center',
    fontWeight: '700',
    color: '#111827',
  },
  cartButton: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
