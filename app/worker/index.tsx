// app/worker/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WorkerEntryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker Area</Text>
      <Text style={styles.subtitle}>
        Here the worker can manage profile, availability and bookings.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/worker')}
      >
        <Text style={styles.buttonText}>Go to Worker Home (tabs)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
