import React, { useMemo, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { restaurants } from '../../data/restaurants';
import { RootStackParamList } from '../../types/navigation';

type StackNav = NativeStackNavigationProp<RootStackParamList>;

const categories = ['All', ...new Set(restaurants.map((r) => r.category))];

export default function SearchScreen() {
  const navigation = useNavigation<StackNav>();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRestaurants = useMemo(() => {
    const cleanedQuery = query.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const matchesCategory =
        activeCategory === 'All' || restaurant.category === activeCategory;

      const inRestaurantName = restaurant.name.toLowerCase().includes(cleanedQuery);
      const inCategory = restaurant.category.toLowerCase().includes(cleanedQuery);
      const inMenu = restaurant.menu.some((item) =>
        item.name.toLowerCase().includes(cleanedQuery)
      );

      const matchesQuery =
        cleanedQuery.length === 0 || inRestaurantName || inCategory || inMenu;

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <Text style={styles.subtitle}>Find restaurants, cuisines, or menu items</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color="#6b7280" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search food or restaurant"
          placeholderTextColor="#9ca3af"
          style={styles.searchInput}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color="#9ca3af" />
          </Pressable>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsWrap}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <Pressable
              key={category}
              style={[styles.chip, isActive && styles.chipActive]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{category}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {filteredRestaurants.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="search" size={22} color="#9ca3af" />
            <Text style={styles.emptyTitle}>No matches found</Text>
            <Text style={styles.emptyText}>Try another keyword or change category</Text>
          </View>
        )}

        {filteredRestaurants.map((restaurant) => (
          <Pressable
            key={restaurant.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurantId: restaurant.id })
            }
          >
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <View style={styles.cardBody}>
              <View style={styles.cardTop}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
              </View>

              <Text style={styles.meta}>
                {restaurant.category}  |  {restaurant.deliveryTime}  |  {restaurant.price}
              </Text>
              <Text style={styles.offer}>{restaurant.offer}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 10 },
  title: { fontSize: 26, fontWeight: '800', color: '#111827' },
  subtitle: { marginTop: 4, fontSize: 13, color: '#6b7280' },
  searchBox: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#111827' },
  chipsWrap: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4, gap: 8 },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chipActive: { backgroundColor: '#ff6b35', borderColor: '#ff6b35' },
  chipText: { fontSize: 13, color: '#374151', fontWeight: '600' },
  chipTextActive: { color: '#fff' },
  list: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 120, gap: 10 },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 132, backgroundColor: '#e5e7eb' },
  cardBody: { padding: 12 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  name: { flex: 1, fontSize: 16, fontWeight: '700', color: '#111827' },
  rating: { fontSize: 13, fontWeight: '600', color: '#111827' },
  meta: { marginTop: 6, fontSize: 12, color: '#6b7280' },
  offer: { marginTop: 8, fontSize: 12, fontWeight: '700', color: '#ff6b35' },
  emptyState: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 24,
    alignItems: 'center',
  },
  emptyTitle: { marginTop: 8, fontSize: 15, fontWeight: '700', color: '#111827' },
  emptyText: { marginTop: 4, fontSize: 12, color: '#6b7280' },
});
