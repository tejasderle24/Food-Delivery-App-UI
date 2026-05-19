import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styles from '../../styles/drawerStyles';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>
        Settings
      </Text>
    </SafeAreaView>
  );
}