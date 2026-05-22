import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons'; // Or other icon set

const topQuestions = [
  'How to track my order?',
  'Payment issues & refunds',
  'Can I change delivery address?',
];

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/350x200' }} // Replace with actual hero image
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Support Section */}
        <View style={styles.supportContainer}>
          <Text style={styles.supportTitle}>How can we help you?</Text>
          <Text style={styles.supportSubtitle}>Search our FAQs or chat with our team.</Text>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#9C8B82" />
            <TextInput
              placeholder="Search for help topics..."
              placeholderTextColor="#9C8B82"
              style={styles.searchInput}
            />
            <Ionicons name="options-outline" size={20} color="#9C8B82" />
          </View>

          {/* Top Questions */}
          <View style={styles.topQuestionsSection}>
            <Text style={styles.topQuestionsTitle}>TOP QUESTIONS</Text>
            {topQuestions.map((question, index) => (
              <TouchableOpacity key={index} style={styles.faqItem}>
                <Text style={styles.faqQuestion}>{question}</Text>
                <Ionicons name="chevron-forward" size={18} color="#9C8B82" />
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Chat Button */}
          <TouchableOpacity style={styles.chatButton}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#FFF" style={styles.chatIcon} />
            <Text style={styles.chatButtonText}>Chat with Support</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF7F5', // Light cream color
  },
  heroContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  supportContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  supportTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A170C', // Deep coffee
    marginBottom: 8,
  },
  supportSubtitle: {
    fontSize: 14,
    color: '#633F2E', // Brown
    marginBottom: 25,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F4F0',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    height: 50,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#2A170C',
    fontSize: 16,
  },
  topQuestionsSection: {
    marginBottom: 30,
  },
  topQuestionsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#A06E49', // Camel
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E5DE',
  },
  faqQuestion: {
    fontSize: 16,
    color: '#3B1E13',
  },
  chatButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6F3C', // Coral Orange
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  chatIcon: {
    marginRight: 10,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});