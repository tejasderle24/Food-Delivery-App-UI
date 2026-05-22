import React, { useMemo, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OrderStatus = 'Preparing' | 'On the way' | 'Delivered';

type Order = {
  id: string;
  restaurant: string;
  items: string;
  amount: string;
  eta: string;
  status: OrderStatus;
};

const activeOrders: Order[] = [
  {
    id: '#FD-4021',
    restaurant: 'Luigi Pizzeria',
    items: '2x Margherita, 1x Garlic Bread',
    amount: 'Rs. 849',
    eta: '18 min',
    status: 'On the way',
  },
];

const pastOrders: Order[] = [
  {
    id: '#FD-3988',
    restaurant: 'Bombay Bites',
    items: '1x Paneer Wrap, 1x Cold Coffee',
    amount: 'Rs. 412',
    eta: 'Delivered',
    status: 'Delivered',
  },
  {
    id: '#FD-3944',
    restaurant: 'Sushi Station',
    items: '1x Veg Sushi Box',
    amount: 'Rs. 699',
    eta: 'Delivered',
    status: 'Delivered',
  },
];

const statusSteps: OrderStatus[] = ['Preparing', 'On the way', 'Delivered'];

export default function OrdersScreen() {
  const [tab, setTab] = useState<'active' | 'past'>('active');
  const orders = useMemo(() => (tab === 'active' ? activeOrders : pastOrders), [tab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.subtitle}>Track your current and previous orders</Text>
      </View>

      <View style={styles.segmented}>
        <Pressable
          style={[styles.segmentBtn, tab === 'active' && styles.segmentBtnActive]}
          onPress={() => setTab('active')}
        >
          <Text style={[styles.segmentText, tab === 'active' && styles.segmentTextActive]}>
            Active
          </Text>
        </Pressable>
        <Pressable
          style={[styles.segmentBtn, tab === 'past' && styles.segmentBtnActive]}
          onPress={() => setTab('past')}
        >
          <Text style={[styles.segmentText, tab === 'past' && styles.segmentTextActive]}>
            Past
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {orders.map((order) => {
          const currentStep = statusSteps.indexOf(order.status);
          return (
            <View key={order.id} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.orderMeta}>
                  <Text style={styles.restaurant}>{order.restaurant}</Text>
                  <Text style={styles.orderId}>{order.id}</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{order.status}</Text>
                </View>
              </View>

              <Text style={styles.items}>{order.items}</Text>

              <View style={styles.summaryRow}>
                <View style={styles.summaryPill}>
                  <Ionicons name="wallet-outline" size={14} color="#374151" />
                  <Text style={styles.summaryText}>{order.amount}</Text>
                </View>
                <View style={styles.summaryPill}>
                  <Ionicons name="time-outline" size={14} color="#374151" />
                  <Text style={styles.summaryText}>{order.eta}</Text>
                </View>
              </View>

              {tab === 'active' && (
                <View style={styles.timelineWrap}>
                  {statusSteps.map((step, index) => {
                    const isDone = index <= currentStep;
                    return (
                      <View key={step} style={styles.stepWrap}>
                        <View style={[styles.dot, isDone && styles.dotDone]} />
                        <Text style={[styles.stepLabel, isDone && styles.stepLabelDone]}>{step}</Text>
                      </View>
                    );
                  })}
                </View>
              )}

              <View style={styles.actions}>
                <Pressable style={styles.primaryBtn}>
                  <Text style={styles.primaryBtnText}>
                    {tab === 'active' ? 'Track Order' : 'Reorder'}
                  </Text>
                </Pressable>
                <Pressable style={styles.ghostBtn}>
                  <Ionicons name="chatbubble-ellipses-outline" size={18} color="#ff6b35" />
                </Pressable>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 10 },
  title: { fontSize: 26, fontWeight: '800', color: '#111827' },
  subtitle: { marginTop: 4, fontSize: 13, color: '#6b7280' },
  segmented: {
    marginHorizontal: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    padding: 4,
    flexDirection: 'row',
  },
  segmentBtn: { flex: 1, borderRadius: 8, paddingVertical: 10, alignItems: 'center' },
  segmentBtnActive: { backgroundColor: '#ffffff' },
  segmentText: { fontSize: 14, fontWeight: '600', color: '#6b7280' },
  segmentTextActive: { color: '#ff6b35' },
  list: { padding: 16, paddingBottom: 120, gap: 12 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 14,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 },
  orderMeta: { flex: 1 },
  restaurant: { fontSize: 17, fontWeight: '700', color: '#111827' },
  orderId: { marginTop: 3, fontSize: 12, color: '#6b7280' },
  badge: { backgroundColor: '#fff4ef', borderWidth: 1, borderColor: '#ffd7c8', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 12, fontWeight: '600', color: '#ff6b35' },
  items: { marginTop: 10, fontSize: 13, color: '#4b5563' },
  summaryRow: { marginTop: 12, flexDirection: 'row', gap: 8 },
  summaryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  summaryText: { fontSize: 12, fontWeight: '600', color: '#374151' },
  timelineWrap: { marginTop: 14, flexDirection: 'row', justifyContent: 'space-between' },
  stepWrap: { alignItems: 'center', flex: 1 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#d1d5db', marginBottom: 6 },
  dotDone: { backgroundColor: '#ff6b35' },
  stepLabel: { fontSize: 11, color: '#9ca3af', textAlign: 'center' },
  stepLabelDone: { color: '#374151', fontWeight: '600' },
  actions: { marginTop: 14, flexDirection: 'row', gap: 8 },
  primaryBtn: { flex: 1, backgroundColor: '#111827', borderRadius: 10, alignItems: 'center', paddingVertical: 11 },
  primaryBtnText: { color: '#ffffff', fontWeight: '700', fontSize: 14 },
  ghostBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffd7c8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
