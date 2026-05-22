import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      
     <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* AVATAR & USER PROFILE */}
        <View style={styles.profileImageContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }} 
            style={styles.mainAvatar}
          />
          <TouchableOpacity style={styles.editBadge}>
            <MaterialIcons name="edit" size={14} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Tejas Derle</Text>
        <Text style={styles.userEmail}>tejas.derle@gmail.com</Text>

        {/* PREMIUM TAG */}
        <View style={styles.premiumBadgeContainer}>
          <View style={styles.premiumBadge}>
            <FontAwesome5 name="star" size={12} color="#A75A24" solid style={styles.premiumIcon} />
            <Text style={styles.premiumText}>Premium Member</Text>
          </View>
        </View>

        {/* ACCOUNT SETTINGS SECTION */}
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <View style={styles.listContainer}>
          {/* Manage Addresses */}
          <TouchableOpacity style={styles.listItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#FFF0E6' }]}>
              <Ionicons name="location-outline" size={22} color="#D47C43" />
            </View>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemTitle}>Manage Addresses</Text>
              <Text style={styles.listItemSubtitle}>2 saved locations</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
          </TouchableOpacity>

          {/* Payment Methods */}
          <TouchableOpacity style={styles.listItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#FFF0E6' }]}>
              <Ionicons name="card-outline" size={22} color="#D47C43" />
            </View>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemTitle}>Payment Methods</Text>
              <Text style={styles.listItemSubtitle}>Visa ending in 4242</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
          </TouchableOpacity>

          {/* Refer a Friend */}
          <TouchableOpacity style={styles.listItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#FFF0E6' }]}>
              <Ionicons name="gift-outline" size={22} color="#D47C43" />
            </View>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemTitle}>Refer a Friend</Text>
              <Text style={styles.listItemSubtitle}>Get $10 for each friend</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
          </TouchableOpacity>
        </View>

        {/* OPEN MENU BUTTON */}
        {/* <TouchableOpacity style={styles.openMenuButton}>
          <Ionicons name="menu" size={20} color="#FFFFFF" style={styles.menuIcon} />
          <Text style={styles.openMenuText}>Open Menu</Text>
        </TouchableOpacity> */}

        {/* PROMO CARD BANNER */}
        <View style={styles.promoBannerContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80' }} 
            style={styles.promoImage}
          />
          <View style={styles.promoOverlay}>
            <Text style={styles.promoText}>Invite & Save</Text>
          </View>
        </View>

      </ScrollView>

     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF6F0', // Match warm image background
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 6,
  },
  locationText: {
    fontSize: 16,
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
    paddingBottom: 100, // Leave space for bottom tab bar
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 15,
    position: 'relative',
  },
  mainAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  editBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#FF6F3C', // Accent vibrant orange
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#261C14',
    textAlign: 'center',
    marginTop: 12,
  },
  userEmail: {
    fontSize: 14,
    color: '#8E837A',
    textAlign: 'center',
    marginTop: 2,
  },
  premiumBadgeContainer: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 25,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCEFE7',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  premiumIcon: {
    marginRight: 6,
  },
  premiumText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A75A24',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E837A',
    marginBottom: 12,
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5ECE3',
  },
  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#261C14',
  },
  listItemSubtitle: {
    fontSize: 13,
    color: '#8E837A',
    marginTop: 1,
  },
  openMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A83B00', // Terracotta/Brown-Red accent color
    borderRadius: 16,
    paddingVertical: 15,
    marginBottom: 20,
  },
  menuIcon: {
    marginRight: 8,
  },
  openMenuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  promoBannerContainer: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  promoImage: {
    width: '100%',
    height: '100%',
  },
  promoOverlay: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  promoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
 
});