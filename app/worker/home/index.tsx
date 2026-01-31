// app/worker/index.tsx (or app/worker/home/index.tsx)

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

// IMPORTANT: import your local image asset
// Make sure this path matches your actual folder structure
import splashIcon from '../../../assets/splash-icon.png';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const COLORS = {
  yellow: '#FFD560',
  yellowPale: '#FFFDF5',
  navy: '#103046',
  white: '#FFFFFF',
  creamBorder: '#F5E9C8',
  yellowBar: '#F2B93C',
};

const categories = [
  { id: 'ac', label: 'Air cond.', icon: '❄️' },
  { id: 'plumb', label: 'Plumbing', icon: '🔧' },
  { id: 'carp', label: 'Carpentry', icon: '🔨' },
  { id: 'garden', label: 'Gardening', icon: '🌱' },
  { id: 'paint', label: 'Painting', icon: '🎨' },
  { id: 'clean', label: 'Cleaning', icon: '🧹' },
  { id: 'elect', label: 'Electric', icon: '⚡' },
  { id: 'more', label: 'More', icon: '➕' },
];

const WorkerHomeScreen: React.FC = () => {
  const router = useRouter();
  const [isBook, setIsBook] = useState(true); // true for BOOK, false for PROVIDE

  return (
    <View style={styles.root}>
      {/* Yellow background */}
      <LinearGradient
        colors={[COLORS.yellow, COLORS.yellow]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* HERO SECTION – using local PNG instead of SVG mask */}
      <View style={styles.heroContainer}>
        <ImageBackground
          source={splashIcon}
          style={styles.heroImage}
          resizeMode="cover"
        >
          {/* Dark overlay for contrast */}
          <View style={styles.heroOverlay} />

          {/* Content over image */}
          <View style={styles.heroContent}>
            {/* Header row: logo + toggle */}
            <View style={styles.heroHeaderRow}>
              {/* Logo similar to filter page, but white */}
              <View style={styles.logoBlock}>
                <Text style={styles.logoHS}>HS</Text>
                <Text style={styles.logoSubtitle}>Market place</Text>
              </View>

              {/* BOOK / provide toggle */}
              <TouchableOpacity
                style={styles.togglePill}
                onPress={() => {
                  const newIsBook = !isBook;
                  setIsBook(newIsBook);
                  if (newIsBook) {
                    router.push('/client/home');
                  }
                }}
              >
                <View style={isBook ? styles.toggleLeftActive : styles.toggleLeftInactive}>
                  <Text style={isBook ? styles.toggleLeftText : styles.toggleLeftTextInactive}>BOOK</Text>
                </View>
                <View style={!isBook ? styles.toggleRightActive : styles.toggleRightInactive}>
                  <Text style={!isBook ? styles.toggleRightTextActive : styles.toggleRightText}>provide</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Headline */}
            <View style={styles.heroHeadlineWrap}>
              <Text style={styles.heroHeadline}>
                Take the next step in your career
              </Text>
            </View>

            {/* Pagination dots */}
            <View style={styles.paginationDots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* MAIN CONTENT BELOW HERO */}
      <View style={styles.mainContent}>
        {/* Category grid */}
        <View style={styles.categorySection}>
          <Text style={styles.categoryHeader}>Dive in It</Text>

          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            numColumns={4}
            scrollEnabled={false}
            columnWrapperStyle={styles.categoryRow}
            contentContainerStyle={styles.categoryList}
            renderItem={({ item }) => (
              <View style={styles.categoryCard}>
                <View style={styles.categoryIconCircle}>
                  <Text style={styles.categoryIconText}>{item.icon}</Text>
                </View>
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </View>
            )}
          />
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>
            Set up your profile info to get started
          </Text>
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
            <Text style={styles.ctaButtonText}>Let’s go</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
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
    </View>
  );
};

export default WorkerHomeScreen;

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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.yellow,
  },

  /* HERO */

  heroContainer: {
    height: SCREEN_HEIGHT * 0.4,
    overflow: 'hidden',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  heroImage: {
    flex: 1,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  heroContent: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  heroHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoBlock: {
    alignItems: 'flex-start',
  },
  logoHS: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: -0.5,
  },
  logoSubtitle: {
    fontSize: 12,
    color: COLORS.white,
  },
  togglePill: {
    flexDirection: 'row',
    borderRadius: 999,
    backgroundColor: COLORS.white,
    padding: 2,
  },
  toggleLeftActive: {
    backgroundColor: COLORS.yellow,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  toggleLeftText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.navy,
  },
  toggleRightInactive: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  toggleRightText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.navy,
  },
  toggleLeftInactive: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  toggleLeftTextInactive: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.navy,
  },
  toggleRightActive: {
    backgroundColor: COLORS.yellow,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  toggleRightTextActive: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.navy,
  },
  heroHeadlineWrap: {
    width: '80%',
  },
  heroHeadline: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.white,
    lineHeight: 30,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  dotActive: {
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },

  /* MAIN CONTENT */

  mainContent: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  // CTA
  ctaSection: {
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.06,
    marginBottom: 24,
  },
  ctaText: {
    textAlign: 'center',
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  ctaButton: {
    backgroundColor: COLORS.navy,
    borderRadius: 999,
    paddingHorizontal: 32,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  ctaButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },

  // Categories
  categorySection: {
    marginTop: 8,
  },
  categoryHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 12,
  },
  categoryList: {
    alignItems: 'center',
  },
  categoryRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: (SCREEN_WIDTH - 40 - 12 * 3) / 4,
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryIconText: {
    fontSize: 18,
  },
  categoryLabel: {
    fontSize: 10,
    color: COLORS.navy,
    textAlign: 'center',
  },

  /* BOTTOM NAV */

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
