import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function OrdersScreen() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <SafeAreaView style={styles.screenContainer}>
      
      {/* HEADER SECTION */}
      <View style={styles.headerContainer}>
        <View style={styles.titleWrapper}>
          <Ionicons name="location-outline" size={20} color="#A75A24" style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Orders</Text>
        </View>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }}
          style={styles.headerAvatar}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* SEGMENTED TAB SELECTOR */}
        <View style={styles.tabBarContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'active' && styles.tabButtonActive]}
            onPress={() => setActiveTab('active')}
          >
            <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>
              Active Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'past' && styles.tabButtonActive]}
            onPress={() => setActiveTab('past')}
          >
            <Text style={[styles.tabText, activeTab === 'past' && styles.tabTextActive]}>
              Past Orders
            </Text>
          </TouchableOpacity>
        </View>

        {/* ACTIVE ORDER CARD */}
        <View style={styles.orderCard}>
          
          {/* Restaurant Details Head */}
          <View style={styles.restaurantRow}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80' }} 
              style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
              <View style={styles.titleBadgeRow}>
                <Text style={styles.restaurantName}>Luigi's Pizzeria</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusBadgeText}>Preparing</Text>
                </View>
              </View>
              <Text style={styles.orderMetaText}>3 Items  •  $42.50</Text>
            </View>
          </View>

          {/* TIMELINE TRACKING STEP BAR */}
          <View style={styles.timelineContainer}>
            <View style={styles.progressLineContainer}>
              <View style={[styles.lineSegment, styles.lineActive]} />
              <View style={[styles.lineSegment, styles.lineInactive]} />
              <View style={[styles.lineSegment, styles.lineInactive]} />
            </View>

            <View style={styles.nodesOverlayRow}>
              {/* Confirmed Node */}
              <View style={styles.nodeWrapper}>
                <View style={[styles.nodeCircle, styles.nodeCircleDone]}>
                  <Ionicons name="checkmark" size={10} color="#FFFFFF" />
                </View>
                <Text style={[styles.nodeLabel, styles.nodeLabelActive]}>Confirmed</Text>
              </View>

              {/* Preparing Node */}
              <View style={styles.nodeWrapper}>
                <View style={[styles.nodeCircle, styles.nodeCircleCurrent]}>
                  <View style={styles.innerDotCurrent} />
                </View>
                <Text style={[styles.nodeLabel, styles.nodeLabelActive, { fontWeight: '700' }]}>Preparing</Text>
              </View>

              {/* On the way Node */}
              <View style={styles.nodeWrapper}>
                <View style={[styles.nodeCircle, styles.nodeCircleTodo]} />
                <Text style={styles.nodeLabel}>On the way</Text>
              </View>

              {/* Delivered Node */}
              <View style={styles.nodeWrapper}>
                <View style={[styles.nodeCircle, styles.nodeCircleTodo]} />
                <Text style={styles.nodeLabel}>Delivered</Text>
              </View>
            </View>
          </View>

          {/* BUTTON ACTIONS FLOOR */}
          <View style={styles.cardActionsRow}>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackButtonText}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatIconButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#5C5C5C" />
            </TouchableOpacity>
          </View>

        </View>

        {/* FREE DELIVERY ADS CHIP BANNER */}
        <View style={styles.promoBanner}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>Free Delivery</Text>
            <Text style={styles.promoSubtitle}>On your next 3 orders</Text>
          </View>
          <MaterialCommunityIcons name="gift-open-outline" size={32} color="#006677" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF6F0', // Off-white warm canvas wrap background
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#261C14',
  },
  headerAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3E9E1', // Soft muted pastel background container
    borderRadius: 14,
    padding: 4,
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabButtonActive: {
    backgroundColor: '#FFFFFF', // Selected tab spotlight white card
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E837A',
  },
  tabTextActive: {
    color: '#A84E14', // Terracotta orange active text focus color
    fontWeight: '700',
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#EAEAEA',
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 14,
  },
  titleBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#261C14',
  },
  statusBadge: {
    backgroundColor: '#FCEFE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A85A24',
  },
  orderMetaText: {
    fontSize: 14,
    color: '#8E837A',
    marginTop: 4,
  },
  timelineContainer: {
    marginVertical: 30,
    position: 'relative',
    justifyContent: 'center',
    height: 50,
  },
  progressLineContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    height: 2,
    flexDirection: 'row',
    zIndex: 1,
  },
  lineSegment: {
    flex: 1,
    height: 2,
  },
  lineActive: {
    backgroundColor: '#A84E14',
  },
  lineInactive: {
    backgroundColor: '#E3D8CE',
  },
  nodesOverlayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  nodeWrapper: {
    alignItems: 'center',
    width: 68,
  },
  nodeCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  nodeCircleDone: {
    backgroundColor: '#A84E14',
  },
  nodeCircleCurrent: {
    borderWidth: 2,
    borderColor: '#A84E14',
  },
  innerDotCurrent: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#A84E14',
  },
  nodeCircleTodo: {
    backgroundColor: '#E3D8CE',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  nodeLabel: {
    fontSize: 11,
    color: '#8E837A',
    textAlign: 'center',
  },
  nodeLabelActive: {
    color: '#261C14',
  },
  cardActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F7EFE9',
    paddingTop: 16,
  },
  trackButton: {
    flex: 1,
    backgroundColor: '#A83B00', // Crimson rust button base matching design
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trackButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  chatIconButton: {
    width: 48,
    height: 48,
    backgroundColor: '#EAE5DF', // Muted clean gray square icon backdrop
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E1F0F3', // Dynamic sky pastel background
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#CBE2E7',
  },
  promoTextContainer: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#005566',
  },
  promoSubtitle: {
    fontSize: 13,
    color: '#4C8895',
    marginTop: 2,
  },
});