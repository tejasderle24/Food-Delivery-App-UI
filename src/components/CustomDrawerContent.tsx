import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import styles from '../styles/drawerStyles';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const handleLogout = () => {
    Alert.alert('Logout', 'User logged out');
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileSection}>
        <View style={styles.avatarWrap}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/120?img=12',
            }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.profileTextBlock}>
          <Text style={styles.name}>
            Tejas Kumar
          </Text>
          <Text style={styles.email}>
            tejas@foodapp.dev
          </Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.menuLabel}>
          Menu
        </Text>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footerSection}>
        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.85}
        >
          <Ionicons
            name="call-outline"
            size={18}
            color="#ff6b35"
          />
          <Text style={styles.supportText}>
            24/7 Support
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.88}
        >
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#fff"
          />
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
