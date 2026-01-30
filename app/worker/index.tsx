// app/worker/index.tsx
/*import { useRouter } from 'expo-router';
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
});*/

// app/index.tsx
// Redesigned landing screen based on your detailed spec:
//
// - Top 65%: yellow gradient
// - Bottom 35%: cream background
// - Curved divider between them with subtle shadow
// - Centered HS + "Market Place" branding in top section
// - Two pill buttons in bottom section: "Book service" (outline) and "Provide service" (filled)

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Colors based on your description
const COLORS = {
  yellowTop: '#FFD560',
  yellowSoft: '#FFE099',
  cream: '#FFFDF5',
  navy: '#103046',
  white: '#FFFFFF',
};

export default function LandingScreen() {
  const router = useRouter();

  const handleBookService = () => {
    router.push('../client/home');
  };

  const handleProvideService = () => {
    router.push('/worker');
  };

  return (
    <View style={styles.root}>
      {/* Top yellow gradient section */}
      <LinearGradient
        colors={[COLORS.yellowTop, COLORS.yellowSoft]}
        locations={[0, 1]}
        style={styles.topSection}
      >
        {/* Branding centered in top section */}
        <View style={styles.brandContainer}>
          <Text style={styles.logoText}>HS</Text>
          <Text style={styles.subtitleText}>Market Place</Text>
        </View>
      </LinearGradient>

      {/* Curved divider between yellow and cream sections */}
      <View style={styles.curveWrapper}>
        <View style={styles.curveShadow} />
        <View style={styles.curve} />
      </View>

      {/* Bottom cream section with buttons */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonsContainer}>
          {/* Secondary button: Book service (outline) */}
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={handleBookService}
          >
            <Text style={styles.secondaryButtonText}>Book service</Text>
            <Text style={styles.secondaryButtonIcon} accessibilityLabel="worker">
              👷
            </Text>
          </TouchableOpacity>

          {/* Primary button: Provide service (filled) */}
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={handleProvideService}
          >
            <Text style={styles.primaryButtonText}>Provide service</Text>
            {/* Simple tools icon approximation using characters.
               We can later replace with a vector icon pack. */}
            <Text
              style={styles.primaryButtonIcon}
              accessibilityLabel="tools"
            >
              🛠️
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const TOP_SECTION_RATIO = 0.65;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  topSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * TOP_SECTION_RATIO,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandContainer: {
    alignItems: 'center',
  },
  logoText: {
    // Large, heavy-weight sans serif approximation
    fontSize: 120,
    fontWeight: '900',
    letterSpacing: -4, // tight kerning
    color: COLORS.navy,
    lineHeight: 120,
  },
  subtitleText: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.navy,
  },
  // Wrapper holding the curved divider and its shadow
  curveWrapper: {
    position: 'absolute',
    top: SCREEN_HEIGHT * TOP_SECTION_RATIO - 40, // slightly overlapping
    left: 0,
    right: 0,
    // Height provides room for curve + shadow
    height: 120,
    alignItems: 'stretch',
  },
  // Subtle diffuse shadow under the curve
  curveShadow: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#00000020',
    // Big blur-like effect via shadow + opacity
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    opacity: 0.3,
  },
  // The curved cream shape
  curve: {
    flex: 1,
    backgroundColor: COLORS.cream,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 160, // asymmetric to swoop lower on the right
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    rowGap: 16,
  },
  // Secondary button (outline)
  secondaryButton: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: COLORS.navy,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // very faint background
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
  },
  secondaryButtonIcon: {
    fontSize: 24,
  },
  // Primary button (filled)
  primaryButton: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: COLORS.navy,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
  primaryButtonIcon: {
    fontSize: 22,
    color: COLORS.white,
  },
});
