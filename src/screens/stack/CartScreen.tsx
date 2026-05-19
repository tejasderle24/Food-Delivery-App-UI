import { StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text style={styles.subtitle}>Your selected items will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#6b7280',
  },
});
