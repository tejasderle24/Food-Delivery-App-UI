import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
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
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/120?img=12',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Tejas Kumar
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
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