// app/client/home/index.tsx
// "Book service" home screen for the client role.
// Converted from Builder.io / React web (Tailwind, lucide-react, react-router-dom)
// to React Native + Expo Router, with inline comments.

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// Styles approximating your Tailwind classes and Figma design.
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFD36B', // brand yellow background
  },
  scrollContent: {
    paddingBottom: 100, // space for bottom nav
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: '#FFD36B',
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0B1437',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 24,
    height: 24,
    backgroundColor: '#0B1437',
  },
  logoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0B1437',
  },
  tabsRow: {
    flexDirection: 'row',
    columnGap: 8,
  },
  tabActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0B1437',
    backgroundColor: '#FFFFFF',
  },
  tabActiveText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0B1437',
  },
  tabInactive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FB923C', // orange-400
  },
  tabInactiveText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchBar: {
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  searchIcon: {
    fontSize: 18,
    color: '#0B1437',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0B1437',
  },
  filterButton: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  filterIcon: {
    fontSize: 18,
    color: '#0B1437',
  },
  heroSection: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 24,
    padding: 20,
    backgroundColor: '#FB923C', // approximate gradient start
    flexDirection: 'row',
    overflow: 'hidden',
  },
  heroTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1437',
    lineHeight: 30,
  },
  heroButton: {
    marginTop: 16,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#0B1437',
  },
  heroButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  heroImageContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  heroImage: {
    width: 80,
    height: 120,
    borderRadius: 12,
  },
  sectionContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B1437',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 2,
  },
  workerList: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    columnGap: 12,
  },
  workerCard: {
    width: 156,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  workerImage: {
    width: '100%',
    height: 100,
  },
  workerInfo: {
    padding: 10,
  },
  workerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  workerRole: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  workerLocation: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  workerMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  workerAvailability: {
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  workerAvailabilityAvailable: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
  },
  workerAvailabilityUnavailable: {
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
  },
  workerRating: {
    fontSize: 11,
    color: '#111827',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: '#FFFFFF',
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
    color: '#0B1437',
    marginBottom: 2,
  },
  navIconActive: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 10,
    color: '#0B1437',
  },
  navLabelActive: {
    fontWeight: '700',
  },
});

// Mock data for each service category (same structure as your web code).
type Worker = {
  id: string;
  name: string;
  image: string;
  location: string;
  city: string;
  availability: 'Available' | 'Unavailable';
  role: string;
  rating: number;
};

const plumbers: Worker[] = [
  {
    id: 'plumber-1',
    name: 'EMMANUEL',
    image: 'https://placehold.co/156x140/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    availability: 'Available',
    role: 'Plumber',
    rating: 4.1,
  },
  {
    id: 'plumber-2',
    name: 'Aganthie',
    image: 'https://placehold.co/156x140/2C1810/2C1810',
    location: 'Boiro',
    city: 'DOUALA',
    availability: 'Available',
    role: 'Plumber',
    rating: 4.6,
  },
  {
    id: 'plumber-3',
    name: 'Foriant',
    image: 'https://placehold.co/156x140/1A3A52/1A3A52',
    location: 'Bonajo',
    city: 'DOUALA',
    availability: 'Unavailable',
    role: 'Plumber',
    rating: 4.2,
  },
];

const electricians: Worker[] = [
  {
    id: 'electrician-1',
    name: 'EMMANUEL',
    image: 'https://placehold.co/156x140/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    availability: 'Available',
    role: 'Electrician',
    rating: 4.1,
  },
  {
    id: 'electrician-2',
    name: 'Aganthie',
    image: 'https://placehold.co/156x140/2C1810/2C1810',
    location: "m'van",
    city: 'Yaounde',
    availability: 'Available',
    role: 'Electrician',
    rating: 4.6,
  },
  {
    id: 'electrician-3',
    name: 'Foriant',
    image: 'https://placehold.co/156x140/1A3A52/1A3A52',
    location: 'Avenue Germain',
    city: 'Yaounde',
    availability: 'Available',
    role: 'Plumber',
    rating: 4.2,
  },
];

const painters: Worker[] = [
  {
    id: 'painter-1',
    name: 'EMMANUEL',
    image: 'https://placehold.co/156x140/8B7355/8B7355',
    location: 'Madape',
    city: 'DOUALA',
    availability: 'Available',
    role: 'Painter',
    rating: 4.1,
  },
  {
    id: 'painter-2',
    name: 'Aganthie',
    image: 'https://placehold.co/156x140/2C1810/2C1810',
    location: 'Kotto',
    city: 'DOUALA',
    availability: 'Available',
    role: 'Painter',
    rating: 4.6,
  },
  {
    id: 'painter-3',
    name: 'Foriant',
    image: 'https://placehold.co/156x140/1A3A52/1A3A52',
    location: 'Bonajo',
    city: 'DOUALA',
    availability: 'Unavailable',
    role: 'Painter',
    rating: 4.2,
  },
];

// Reusable section component to replace ServiceSection from web version.
const ServiceSection: React.FC<{
  title: string;
  subtitle: string;
  workers: Worker[];
}> = ({ title, subtitle, workers }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* Section header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      </View>

      {/* Horizontal scroll of worker cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.workerList}
      >
        {workers.map(worker => (
          <View key={worker.id} style={styles.workerCard}>
            <Image
              source={{ uri: worker.image }}
              style={styles.workerImage}
              resizeMode="cover"
            />
            <View style={styles.workerInfo}>
              <Text style={styles.workerName}>{worker.name}</Text>
              <Text style={styles.workerRole}>{worker.role}</Text>
              <Text style={styles.workerLocation}>
                {worker.location}, {worker.city}
              </Text>
              <View style={styles.workerMetaRow}>
                <Text
                  style={[
                    styles.workerAvailability,
                    worker.availability === 'Available'
                      ? styles.workerAvailabilityAvailable
                      : styles.workerAvailabilityUnavailable,
                  ]}
                >
                  {worker.availability}
                </Text>
                <Text style={styles.workerRating}>⭐ {worker.rating.toFixed(1)}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// NavItem Component
const NavItem: React.FC<{
  label: string;
  icon: string;
  isActive?: boolean;
}> = ({ label, icon, isActive }) => (
  <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
    <Text style={[styles.navIcon, isActive && styles.navIconActive]}>
      {icon}
    </Text>
    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Bottom Navigation Component
const BottomNavigation = () => {
  const router = useRouter();

  return (
    <View style={styles.bottomNav}>
      <NavItem label="Home" icon="🏠" isActive={true} />
      <NavItem label="Book" icon="👷" isActive={false} />
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
  );
};

const ClientHomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.root}>
      {/* Scrollable content; paddingBottom leaves space for bottom nav */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header block */}
        <View style={styles.header}>
          {/* Top row: logo + tabs */}
          <View style={styles.headerTopRow}>
            {/* Logo + app name (simple icon approximation) */}
            <View style={styles.logoRow}>
              <View style={styles.logoBox}>
                {/* Simple block icon instead of SVG for now */}
                <View style={styles.logoInner} />
              </View>
              <Text style={styles.logoText}>Market place</Text>
            </View>

            {/* Book / Provide tabs */}
            <View style={styles.tabsRow}>
              <TouchableOpacity style={styles.tabActive}>
                <Text style={styles.tabActiveText}>Book</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabInactive}>
                <Text style={styles.tabInactiveText}>Provide</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search bar + filter icon */}
          <View style={styles.searchBar}>
            {/* Search icon placeholder (since lucide-react is web-only) */}
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              placeholder="Search services..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
            {/* Filter icon, navigates to /client/home/filter */}
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => router.push('/client/home/filter')}
            >
              <Text style={styles.filterIcon}>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero section */}
        <View style={styles.heroSection}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>Book your</Text>
            <Text style={styles.heroTitle}>SERVICE right now</Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Know more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroImageContainer}>
            <Image
              source={{
                uri: 'https://placehold.co/200x250/F4A460/F4A460',
              }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Service sections */}
        <ServiceSection
          title="Plumbers"
          subtitle="Discover technicians near by you"
          workers={plumbers}
        />
        <ServiceSection
          title="Electricians"
          subtitle="Discover available technicians"
          workers={electricians}
        />
        <ServiceSection
          title="Painting"
          subtitle="Discover technicians rated 3+"
          workers={painters}
        />
      </ScrollView>

      {/* Bottom navigation, fixed at bottom */}
      <BottomNavigation />
    </View>
  );
};

export default ClientHomeScreen;
