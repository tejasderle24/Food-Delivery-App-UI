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
        ListHeaderComponent={<Text style={styles.title}>Your Cart</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.restaurantName}>{item.restaurantName}</Text>
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
        <Text style={styles.totalText}>Total: Rs. {totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
  },
  list: {
    padding: 16,
    paddingBottom: 92,
    gap: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#ffffff',
  },
  restaurantName: {
    color: '#ff6b35',
    fontWeight: '700',
    marginBottom: 8,
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
    paddingVertical: 13,
    alignItems: 'center',
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
