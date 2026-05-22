import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';

export default function CartScreen() {
  const { items, incrementItem, decrementItem } = useCart();

  const totalAmount = items.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>Cart</Text>
        <Text style={styles.subtitle}>Your selected menu items will appear here.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>Your Cart</Text>
            <Text style={styles.subtitle}>Review items before checkout</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.restaurantTag}>
              <Text style={styles.restaurantName}>{item.restaurantName}</Text>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={styles.itemName}>{item.item.name}</Text>
                <Text style={styles.itemPrice}>Rs. {item.item.price}</Text>
              </View>
              <View style={styles.qtyWrap}>
                <Pressable style={styles.qtyButton} onPress={() => decrementItem(item.item.id)}>
                  <Text style={styles.qtyButtonText}>-</Text>
                </Pressable>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <Pressable style={styles.qtyButton} onPress={() => incrementItem(item.item.id)}>
                  <Text style={styles.qtyButtonText}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalBar}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalText}>Rs. {totalAmount}</Text>
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </Pressable>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 10,
  },
  list: {
    padding: 16,
    paddingBottom: 110,
    gap: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#ffffff',
  },
  restaurantTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff4ef',
    borderWidth: 1,
    borderColor: '#ffd7c8',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  restaurantName: {
    color: '#ff6b35',
    fontWeight: '700',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  itemPrice: {
    marginTop: 4,
    color: '#4b5563',
  },
  qtyWrap: {
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
  totalBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#9ca3af',
    fontSize: 12,
    fontWeight: '600',
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  checkoutButton: {
    backgroundColor: '#ff6b35',
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
});
