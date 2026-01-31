// app/client/home/listing.tsx
// Technician Listing (List View) page for search and filter results.
// Features hero banner with organic curve, and single-column list of technician cards.

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
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
  lightNavy: '#6B7280',
};

// Combined mock data from existing workers for demonstration
const technicians = [
  {
    id: '1',
    name: 'EMMANUEL',
    image: 'https://placehold.co/200x150/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    status: 'Available',
    specialization: 'Plumber',
    rating: 4.1,
  },
  {
    id: '2',
    name: 'Aganthie',
    image: 'https://placehold.co/200x150/2C1810/2C1810',
    location: 'Boiro',
    city: 'DOUALA',
    status: 'Available',
    specialization: 'Plumber',
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Foriant',
    image: 'https://placehold.co/200x150/1A3A52/1A3A52',
    location: 'Bonajo',
    city: 'DOUALA',
    status: 'Unavailable',
    specialization: 'Plumber',
    rating: 4.2,
  },
  {
    id: '4',
    name: 'EMMANUEL',
    image: 'https://placehold.co/200x150/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    status: 'Available',
    specialization: 'Electrician',
    rating: 4.1,
  },
  {
    id: '5',
    name: 'Aganthie',
    image: 'https://placehold.co/200x150/2C1810/2C1810',
    location: "m'van",
    city: 'Yaounde',
    status: 'Available',
    specialization: 'Electrician',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Foriant',
    image: 'https://placehold.co/200x150/1A3A52/1A3A52',
    location: 'Avenue Germain',
    city: 'Yaounde',
    status: 'Available',
    specialization: 'Electrician',
    rating: 4.2,
  },
  {
    id: '7',
    name: 'EMMANUEL',
    image: 'https://placehold.co/200x150/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    status: 'Available',
    specialization: 'Painter',
    rating: 4.1,
  },
  {
    id: '8',
    name: 'Aganthie',
    image: 'https://placehold.co/200x150/2C1810/2C1810',
    location: 'Kotto',
    city: 'DOUALA',
    status: 'Available',
    specialization: 'Painter',
    rating: 4.6,
  },
  {
    id: '9',
    name: 'Foriant',
    image: 'https://placehold.co/200x150/1A3A52/1A3A52',
    location: 'Bonajo',
    city: 'DOUALA',
    status: 'Unavailable',
    specialization: 'Painter',
    rating: 4.2,
  },
];

const TechnicianListingScreen: React.FC = () => {
  const router = useRouter();

  const renderTechnicianCard = ({ item }: { item: typeof technicians[0] }) => (
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.locationOverlay}>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.technicianName}>{item.name}</Text>
        <Text style={styles.technicianMeta}>
          {item.city} • {item.status} • {item.specialization}
        </Text>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingLabel}>Rating</Text>
          <Text style={styles.ratingValue}>{item.rating.toFixed(1)}</Text>
          <Text style={styles.heartIcon}>❤️</Text>
        </View>
        <TouchableOpacity style={styles.viewProfileButton} activeOpacity={0.8}>
          <Text style={styles.viewProfileText}>View Profile</Text>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoHS}>HS</Text>
          <Text style={styles.logoSubtitle}>Market place</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
      </View>

      {/* Hero Banner */}
      <View style={styles.heroBanner}>
        <View style={styles.heroCurve} />
        <View style={styles.heroContent}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroHeadline}>Choose your Favorite Tech/Service</Text>
            <TouchableOpacity style={styles.knowMoreButton} activeOpacity={0.8}>
              <Text style={styles.knowMoreText}>Know more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroImageContainer}>
            <Image
              source={{ uri: 'https://placehold.co/200x250/F4A460/F4A460' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Technician List */}
      <FlatList
        data={technicians}
        renderItem={renderTechnicianCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem label="Home" icon="🏠" isActive={false} />
        <NavItem label="Book" icon="👷" isActive={true} />
        <NavItem label="Favorites" icon="❤️" isActive={false} />
        <NavItem label="Message" icon="💬" isActive={false} />
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => router.push('/authentication/signin')}
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TechnicianListingScreen;

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
      <Text style={[styles.navIcon, isActive && styles.navIconActive]}>
        {icon}
      </Text>
      <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
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
  backgroundGradient: {
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
    backgroundColor: '#F4C242',
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
    backgroundColor: '#FFE599',
    borderTopLeftRadius: SCREEN_WIDTH * 1.2,
    borderTopRightRadius: SCREEN_WIDTH * 1.2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -3 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    zIndex: 10,
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
  heroBanner: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  heroCurve: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 120,
    backgroundColor: COLORS.yellow,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  },
  heroContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 140, // Account for curve width
    paddingRight: 20,
  },
  heroTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heroHeadline: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.navy,
    lineHeight: 24,
  },
  knowMoreButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: COLORS.navy,
  },
  knowMoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.white,
  },
  heroImageContainer: {
    width: 80,
    height: 120,
    marginLeft: 16,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  gridContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Space for bottom nav
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Space for bottom nav
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginVertical: 6,
    overflow: 'hidden',
    width: '100%',
  },
  cardImageContainer: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  locationOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  locationText: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight: '600',
  },
  cardContent: {
    padding: 10,
  },
  technicianName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.navy,
  },
  technicianMeta: {
    fontSize: 10,
    color: COLORS.lightNavy,
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingLabel: {
    fontSize: 10,
    color: COLORS.navy,
    marginRight: 4,
  },
  ratingValue: {
    fontSize: 10,
    color: COLORS.navy,
    fontWeight: '600',
    marginRight: 4,
  },
  heartIcon: {
    fontSize: 12,
  },
  viewProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: COLORS.yellow,
  },
  viewProfileText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.navy,
    marginRight: 4,
  },
  arrowIcon: {
    fontSize: 12,
    color: COLORS.navy,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
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
