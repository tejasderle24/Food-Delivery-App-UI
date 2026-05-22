import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const history = [
  {
    id: '#FD-3910',
    restaurant: 'Taco Town',
    date: '21 May 2026',
    amount: 'Rs. 525',
    status: 'Delivered',
  },
  {
    id: '#FD-3882',
    restaurant: 'Spice Route',
    date: '18 May 2026',
    amount: 'Rs. 730',
    status: 'Delivered',
  },
  {
    id: '#FD-3799',
    restaurant: 'Green Bowl',
    date: '12 May 2026',
    amount: 'Rs. 360',
    status: 'Cancelled',
  },
];

export default function MyOrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>36</Text>
            <Text style={styles.summaryLabel}>Total Orders</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>Rs. 12,480</Text>
            <Text style={styles.summaryLabel}>Total Spend</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Orders</Text>
        {history.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.rowTop}>
              <Text style={styles.restaurant}>{order.restaurant}</Text>
              <View
                style={[
                  styles.statusBadge,
                  order.status === 'Cancelled' && styles.statusBadgeCancelled,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    order.status === 'Cancelled' && styles.statusTextCancelled,
                  ]}
                >
                  {order.status}
                </Text>
              </View>
            </View>

            <Text style={styles.meta}>
              {order.id}  |  {order.date}
            </Text>

            <View style={styles.bottomRow}>
              <Text style={styles.amount}>{order.amount}</Text>
              <Pressable style={styles.detailsBtn}>
                <Ionicons name="receipt-outline" size={15} color="#ff6b35" />
                <Text style={styles.detailsText}>View Details</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 16, paddingBottom: 30 },
  summaryCard: {
    backgroundColor: '#111827',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryItem: { flex: 1 },
  divider: { width: 1, height: 36, backgroundColor: '#374151' },
  summaryValue: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  summaryLabel: { color: '#d1d5db', marginTop: 3, fontSize: 12 },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  orderCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  restaurant: { fontSize: 16, fontWeight: '700', color: '#111827', flex: 1 },
  statusBadge: {
    backgroundColor: '#dcfce7',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusBadgeCancelled: {
    backgroundColor: '#fee2e2',
  },
  statusText: { color: '#166534', fontSize: 11, fontWeight: '700' },
  statusTextCancelled: { color: '#b91c1c' },
  meta: { marginTop: 6, fontSize: 12, color: '#6b7280' },
  bottomRow: { marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  amount: { fontSize: 15, fontWeight: '700', color: '#111827' },
  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: '#ffd7c8',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#fff4ef',
  },
  detailsText: { fontSize: 12, fontWeight: '700', color: '#ff6b35' },
});
