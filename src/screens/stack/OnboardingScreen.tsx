import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageBackground, Pressable, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 1. Background Food Image */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* 2. Dark Overlay to ensure high text contrast and legibility */}
        <View style={styles.overlay} />

        {/* 3. Header Logo Area */}
        <View style={styles.headerContainer}>
          <Text style={styles.logoIcon}>🍴</Text>
          <Text style={styles.logoText}>BiteFast</Text>
        </View>

        {/* 4. Bottom Content Card */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Delicious food{'\n'}delivered fast</Text>
          
          <Text style={styles.subtitle}>
            Explore the best restaurants in your city and get food delivered to your doorstep.
          </Text>

          {/* Primary CTA Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed
            ]}
            onPress={() => navigation.replace('HomeTabs')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>

          {/* Inline Secondary Log In Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable onPress={() => { /* Handle Navigation to Log In */ }}>
              <Text style={styles.loginLink}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // Soft vignette/dark overlay so white text pops over the food photography
    backgroundColor: 'rgba(0, 0, 0, 0.45)', 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60, // Safe padding for notch/status bars
  },
  logoIcon: {
    fontSize: 24,
    marginRight: 6,
    // If using an actual image/vector asset later, replace this with an <Image /> component
  },
  logoText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  contentContainer: {
    marginBottom: 40, // Keeps content comfortably above the home indicator
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 38,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 15,
    color: '#e5e7eb', // Light gray text for description text
    lineHeight: 22,
    fontWeight: '400',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#ff6b35', // Vibrant brand orange matching the reference
    borderRadius: 30, // Fully pill-shaped button
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff6b35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4, 
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  loginText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  loginLink: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});