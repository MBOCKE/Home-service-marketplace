// app/index.tsx
// Refined landing screen with:
// - Same 4-stop yellow gradient as before
// - Clear separation between top (logo) and bottom (buttons)
// - HS and "Market Place" tightly grouped

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

const COLORS = {
  yellowTop: '#FFD36B',
  yellowSoft: 'rgba(255, 211, 107, 0.3)',
  yellowFade: 'rgba(217, 217, 217, 0)',
  cream: '#FFFDF5',
  navy: '#103046',
  white: '#FFFFFF',
};

export default function LandingScreen() {
  const router = useRouter();

  const handleBookService = () => {
    router.push('/client/home');
  };

  const handleProvideService = () => {
    router.push('/worker/home');
  };

  return (
    <View style={styles.root}>
      {/* Top gradient background (about 65% of screen) */}
      <LinearGradient
        colors={[
          COLORS.yellowTop,
          COLORS.yellowTop,
          COLORS.yellowSoft,
          COLORS.yellowFade,
        ]}
        locations={[0, 0.5, 0.8, 1]}
        style={styles.topSection}
      >
        {/* Branding perfectly centered in the gradient area */}
        <View style={styles.brandContainer}>
          <Text style={styles.logoText}>HS</Text>
          <Text style={styles.subtitleText}>Market Place</Text>
        </View>
      </LinearGradient>

      {/* Curved transition into cream section */}
      <View style={styles.curveWrapper}>
        <View style={styles.curveShadow} />
        <View style={styles.curve} />
      </View>

      {/* Bottom cream section with buttons pinned lower */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonsContainer}>
          {/* Secondary: Book service */}
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

          {/* Primary: Provide service */}
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={handleProvideService}
          >
            <Text style={styles.primaryButtonText}>Provide service</Text>
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
    // Very small vertical gap between HS and Market Place
    marginBottom: 0,
  },
  logoText: {
    fontSize: 120,
    fontWeight: '900',
    letterSpacing: -4,
    color: COLORS.navy,
    lineHeight: 118, // slightly less than font size to pull subtitle closer
  },
  subtitleText: {
    marginTop: 2, // very tight separation
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.navy,
  },
  curveWrapper: {
    position: 'absolute',
    top: SCREEN_HEIGHT * TOP_SECTION_RATIO - 40,
    left: 0,
    right: 0,
    height: 120,
    alignItems: 'stretch',
  },
  curveShadow: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: '#00000020',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    opacity: 0.25,
  },
  curve: {
    flex: 1,
    backgroundColor: COLORS.cream,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 160,
  },
  bottomSection: {
    flex: 1,
    // Place content in lower part of cream section
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 56,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    rowGap: 16,
  },
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
  },
  secondaryButtonIcon: {
    fontSize: 24,
  },
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
