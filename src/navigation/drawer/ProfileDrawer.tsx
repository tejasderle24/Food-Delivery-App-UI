// import React from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerContentComponentProps,
// } from '@react-navigation/drawer';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ProfileDrawerParamList } from '../../types/navigation';

// const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

// function DrawerScreenTemplate({ title }: { title: string }) {
//   return (
//     <SafeAreaView style={styles.screenContainer}>
//       <Text style={styles.screenTitle}>{title}</Text>
//     </SafeAreaView>
//   );
// }

// function MyOrdersScreen() {
//   return <DrawerScreenTemplate title="My Orders" />;
// }

// function SettingsScreen() {
//   return <DrawerScreenTemplate title="Settings" />;
// }

// function HelpScreen() {
//   return <DrawerScreenTemplate title="Help" />;
// }

// function LogoutScreen() {
//   return <DrawerScreenTemplate title="Logout" />;
// }

// function CustomDrawerContent(props: DrawerContentComponentProps) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.profileSection}>
//         <Image
//           source={{ uri: 'https://i.pravatar.cc/120?img=12' }}
//           style={styles.avatar}
//         />
//         <Text style={styles.name}>Tejas Kumar</Text>
//       </View>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// export default function ProfileDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerTitleAlign: 'center',
//       }}
//     >
//       <Drawer.Screen name="My Orders" component={MyOrdersScreen} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Help" component={HelpScreen} />
//       <Drawer.Screen name="Logout" component={LogoutScreen} />
//     </Drawer.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   profileSection: {
//     alignItems: 'center',
//     marginBottom: 24,
//     paddingHorizontal: 16,
//     paddingTop: 12,
//   },
//   avatar: {
//     width: 72,
//     height: 72,
//     borderRadius: 36,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   screenContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   screenTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//   },
// });




import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';



import CustomDrawerContent from '../../components/CustomDrawerContent';

import { ProfileDrawerParamList } from '../../types/navigation';
import MyOrdersScreen from '../../screens/drawer/MyOrdersScreen';
import SettingsScreen from '../../screens/drawer/SettingsScreen';
import HelpScreen from '../../screens/drawer/HelpScreen';
import ProfileScreen from '../../screens/drawer/ProfileScreen';

const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

export default function ProfileDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ff6b35',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 17,
        },
        drawerActiveBackgroundColor: '#fff4ef',
        drawerActiveTintColor: '#ff6b35',
        drawerInactiveTintColor: '#374151',
        drawerLabelStyle: {
          marginLeft: -12,
          fontSize: 15,
          fontWeight: '600',
        },
        drawerItemStyle: {
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 2,
          paddingHorizontal: 6,
        },
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrdersScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help & Support"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
