// app/client/home/filter.tsx
// Client filter/search screen based on your detailed UI spec.
// - Yellow gradient background with layered curved shapes
// - HS / Market place header with menu icon
// - Four pill-shaped inputs
// - Center "Search" button
// - Bottom navigation bar with 5 items

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const COLORS = {
  yellow: '#FFD560',
  yellowDark: '#F4C242',
  yellowLight: '#FFE599',
  yellowBar: '#F2B93C',
  navy: '#103046',
  white: '#FFFFFF',
};

const ClientFilterScreen: React.FC = () => {
  const router = useRouter();

  const handleSearch = () => {
    // Later: trigger search with selected filters
    router.back(); // For now, just go back to home
  };

  return (
    <View style={styles.root}>
      {/* Background with gradient + layered curves */}
      <View style={styles.background}>
        {/* Base yellow gradient */}
        <LinearGradient
          colors={[
            COLORS.yellow,
            COLORS.yellow,
            'rgba(255, 213, 96, 0.4)',
            'rgba(255, 253, 245, 0)',
          ]}
          locations={[0, 0.5, 0.8, 1]}
          style={styles.baseLayer}
        />
        {/* Curved overlays for layered-paper effect */}
        <View style={styles.curveLayerOne} />
        <View style={styles.curveLayerTwo} />
      </View>

      {/* Foreground content */}
      <View style={styles.contentWrapper}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left: Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoHS}>HS</Text>
            <Text style={styles.logoSubtitle}>Market place</Text>
          </View>

          {/* Right: Hamburger menu */}
          <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </TouchableOpacity>
        </View>

        {/* Form fields */}
        <View style={styles.formContainer}>
          <FilterField label="Availability" placeholder="Select availability" />
          <FilterField label="Location" placeholder="Select location" />
          <FilterField label="Rating" placeholder="Select rating" />
          <FilterField label="By Location" placeholder="Choose area" />
        </View>

        {/* Search button */}
        <View style={styles.searchButtonContainer}>
          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.85}
            onPress={handleSearch}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <NavItem label="Home" icon="🏠" isActive={false} />
        <NavItem label="Book" icon="👷" isActive={true} />
        <NavItem label="Favorites" icon="❤️" isActive={false} />
        <NavItem label="Provide" icon="🛠️" isActive={false} />
        <NavItem label="Account" icon="👤" isActive={false} />
      </View>
    </View>
  );
};

export default ClientFilterScreen;

/**
 * Single pill-shaped input row with label and chevron.
 * Currently non-editable; later we can hook this to pickers or dropdowns.
 */
const FilterField: React.FC<{
  label: string;
  placeholder: string;
}> = ({ label, placeholder }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldInputWrapper}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          style={styles.fieldInput}
          editable={false}
        />
        {/* Downward chevron; replace with vector icon if needed */}
        <Text style={styles.fieldChevron}>⌄</Text>
      </View>
    </View>
  );
};

/**
 * Bottom navigation item (icon + label).
 */
const NavItem: React.FC<{
  label: string;
  icon: string;
  isActive?: boolean;
}> = ({ label, icon, isActive }) => {
  return (
    <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
      <Text
        style={[
          styles.navIcon,
          isActive && styles.navIconActive,
        ]}
      >
        {icon}
      </Text>
      <Text
        style={[
          styles.navLabel,
          isActive && styles.navLabelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.yellow,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  baseLayer: {
    flex: 1,
  },
  // Darker sweeping curve from bottom-left to top-right
  curveLayerOne: {
    position: 'absolute',
    bottom: -SCREEN_HEIGHT * 0.2,
    left: -SCREEN_WIDTH * 0.2,
    width: SCREEN_WIDTH * 1.4,
    height: SCREEN_HEIGHT * 0.6,
    backgroundColor: COLORS.yellowDark,
    borderTopLeftRadius: SCREEN_WIDTH,
    borderTopRightRadius: SCREEN_WIDTH,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: -4 },
  },
  // Lighter overlay on top for layered paper effect
  curveLayerTwo: {
    position: 'absolute',
    bottom: -SCREEN_HEIGHT * 0.1,
    right: -SCREEN_WIDTH * 0.3,
    width: SCREEN_WIDTH * 1.6,
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: COLORS.yellowLight,
    borderTopLeftRadius: SCREEN_WIDTH * 1.2,
    borderTopRightRadius: SCREEN_WIDTH * 1.2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -3 },
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80, // space for bottom nav
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  logoHS: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.navy,
    letterSpacing: -1,
    lineHeight: 30,
  },
  logoSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.navy,
  },
  menuButton: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  menuLine: {
    width: 20,
    height: 2,
    borderRadius: 1,
    backgroundColor: COLORS.navy,
    marginVertical: 2,
  },
  formContainer: {
    marginTop: 12,
    rowGap: 16,
  },
  fieldContainer: {
    width: '100%',
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 6,
  },
  fieldInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  fieldInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.navy,
  },
  fieldChevron: {
    fontSize: 18,
    color: '#F59E0B', // warm yellow/orange
    marginLeft: 8,
  },
  searchButtonContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  searchButton: {
    width: SCREEN_WIDTH * 0.5,
    borderRadius: 9999,
    backgroundColor: COLORS.navy,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: COLORS.yellowBar,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 4,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 18,
    color: COLORS.navy,
    marginBottom: 2,
  },
  navIconActive: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 10,
    color: COLORS.navy,
  },
  navLabelActive: {
    fontWeight: '700',
  },
});

