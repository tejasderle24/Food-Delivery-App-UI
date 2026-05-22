import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Switch, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen() {
  // State for the switches
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* PREFERENCES SECTION */}
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <View style={styles.groupedContainer}>
          {/* Dark Mode Row */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="moon-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Dark Mode</Text>
            </View>
            <Switch
              trackColor={{ false: '#e9e9eb', true: '#f27e43' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="#e9e9eb"
              onValueChange={() => setIsDarkMode(previousState => !previousState)}
              value={isDarkMode}
            />
          </View>

          <View style={styles.separator} />

          {/* Push Notifications Row */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="notifications-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Push Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: '#e9e9eb', true: '#f27e43' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="#e9e9eb"
              onValueChange={() => setIsNotificationsEnabled(previousState => !previousState)}
              value={isNotificationsEnabled}
            />
          </View>

          <View style={styles.separator} />

          {/* Location Access Row */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="location-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Location Access</Text>
            </View>
            <Switch
              trackColor={{ false: '#e9e9eb', true: '#f27e43' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="#e9e9eb"
              onValueChange={() => setIsLocationEnabled(previousState => !previousState)}
              value={isLocationEnabled}
            />
          </View>
        </View>

        {/* SUPPORT & LEGAL SECTION */}
        <Text style={styles.sectionHeader}>SUPPORT & LEGAL</Text>
        <View style={styles.groupedContainer}>
          {/* Help Center */}
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="help-circle-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#c7c7cc" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Privacy Policy */}
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="shield-checkmark-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#c7c7cc" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Terms of Service */}
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="document-text-outline" size={22} color="#a07a5f" style={styles.iconGap} />
              <Text style={styles.rowText}>Terms of Service</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#c7c7cc" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#c44d4d" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF6F0', // Off-white/Cream background matching your template
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#a08a75',
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 4,
  },
  groupedContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 16,
    // Soft subtle shadow for modern card look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGap: {
    marginRight: 14,
  },
  rowText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#261c14',
  },
  separator: {
    height: 1,
    backgroundColor: '#F5ECE3',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCEAEA', // Muted red highlight background
    borderRadius: 20,
    paddingVertical: 16,
    marginTop: 35,
    marginBottom: 20,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c44d4d',
  },
});