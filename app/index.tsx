// app/index.tsx
// Landing screen (HS Market Place) converted from Builder.io
// and updated to use expo-linear-gradient for the background.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// We have two main roles in the app.
// For this screen we don't need to store it yet, just route to the right area.
type Role = 'client' | 'worker';

export default function LandingScreen() {
  const router = useRouter();

  // Navigate to the client flow when user chooses "Book service"
  const handleBookService = () => {
    router.push('/client');
  };

  // Navigate to the worker flow when user chooses "Provide service"
  const handleProvideService = () => {
    router.push('/worker');
  };

  return (
    // Root container fills the entire screen
    <View style={styles.root}>
      {/* Background gradient behind everything */}
      <LinearGradient
        // Colors approximating your original CSS gradient:
        // linear-gradient(180deg, #FFD36B 0%, #FFD36B 50%, rgba(255, 211, 107, 0.3) 80%, rgba(217, 217, 217, 0) 100%)
        colors={[
          '#FFD36B',
          '#FFD36B',
          'rgba(255, 211, 107, 0.3)',
          'rgba(217, 217, 217, 0)',
        ]}
        locations={[0, 0.5, 0.8, 1]}
        style={styles.backgroundBlock}
      />

      {/* Foreground content */}
      <View style={styles.contentWrapper}>
        {/* Main vertical stack, centered horizontally */}
        <View style={styles.card}>
          {/* Logo section: big HS + "Market Place" */}
          <View style={styles.logoSection}>
            <Text style={styles.logoText}>HS</Text>
            <Text style={styles.logoSubtitle}>Market Place</Text>
          </View>

          {/* Two main action buttons */}
          <View style={styles.buttonsContainer}>
            {/* Book service (client path) */}
            <TouchableOpacity
              style={styles.bookButton}
              onPress={handleBookService}
              activeOpacity={0.8}
            >
              <Text style={styles.bookButtonText}>Book service</Text>
              <Text
                style={styles.bookButtonEmoji}
                accessibilityLabel="service"
              >
                👨‍💼
              </Text>
            </TouchableOpacity>

            {/* Provide service (worker path) */}
            <TouchableOpacity
              style={styles.provideButton}
              onPress={handleProvideService}
              activeOpacity={0.8}
            >
              <Text style={styles.provideButtonText}>Provide service</Text>
              {/* Simple placeholder icon (X). We can swap this for a vector icon later. */}
              <Text style={styles.provideButtonIcon}>🛠️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

// Styles: tuned to approximate the Tailwind-based web design
// and your Figma, but you can adjust colors, sizes and spacing as needed.
const styles = StyleSheet.create({
  // Full-screen container
  root: {
    flex: 1,
  },
  // Gradient background fills the screen behind everything
  backgroundBlock: {
    ...StyleSheet.absoluteFillObject,
  },
  // Wrapper that centers content and mimics max-width on mobile
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Central column
  card: {
    width: '100%',
    maxWidth: 380, // similar to max-w-md
    alignItems: 'center',
    paddingVertical: 32,
  },
  // Logo area
  logoSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  // Big HS text
  logoText: {
    fontSize: 120, // approximates clamp(120px, 28vw, 175px) on phones
    fontWeight: '900',
    letterSpacing: -6, // negative tracking
    color: '#0B1437', // brand navy – adjust to exact Figma hex if needed
    lineHeight: 120,
  },
  // "Market Place" subtitle
  logoSubtitle: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: '400',
    color: '#0B1437',
  },
  // Buttons container
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 24, // similar to gap-10
  },
  // "Book service" button: transparent with navy border
  bookButton: {
    borderWidth: 2,
    borderColor: '#0B1437',
    borderRadius: 999, // full rounded
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 12,
    backgroundColor: 'transparent',
  },
  bookButtonText: {
    color: '#0B1437',
    fontSize: 18,
    fontWeight: '700',
  },
  bookButtonEmoji: {
    fontSize: 22,
  },
  // "Provide service" button: solid navy with white text
  provideButton: {
    borderRadius: 999,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 12,
    backgroundColor: '#0B1437',
  },
  provideButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  provideButtonIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

