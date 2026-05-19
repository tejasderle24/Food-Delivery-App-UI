import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Delivered Fast</Text>
      <Text style={styles.subtitle}>Discover local favorites and order in minutes.</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.replace('HomeTabs')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#111827',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
    color: '#6b7280',
  },
  button: {
    marginTop: 28,
    backgroundColor: '#ff6b35',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
