import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const COLORS = {
  yellow: '#FFD560',
  cream: '#FFFDF5',
  navy: '#103046',
  cyan: '#00ADEF',
  white: '#FFFFFF',
  lightGray: '#D3D3D3',
  mediumGray: '#808080',
};

const RequestHVACBookingScreen: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(currentMonth === 0 ? 11 : currentMonth - 1, currentMonth === 0 ? currentYear - 1 : currentYear);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false, isPrevMonth: true });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, isPrevMonth: false });
    }

    // Next month days
    const remainingCells = 42 - days.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push({ day, isCurrentMonth: false, isPrevMonth: false });
    }

    return days.map((item, index) => {
      const isSelected = selectedDate &&
        selectedDate.getDate() === item.day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear &&
        item.isCurrentMonth;

      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayCell,
            isSelected && styles.selectedDay,
            !item.isCurrentMonth && styles.inactiveDay,
          ]}
          onPress={() => item.isCurrentMonth && handleDateSelect(item.day)}
          disabled={!item.isCurrentMonth}
        >
          <Text style={[
            styles.dayText,
            isSelected && styles.selectedDayText,
            !item.isCurrentMonth && styles.inactiveDayText,
          ]}>
            {item.day}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const handleSendRequest = () => {
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a date for your booking.');
      return;
    }
    Alert.alert('Request Sent', `HVAC booking requested for ${selectedDate.toDateString()}`);
    // Here you could navigate to a confirmation screen or send to backend
  };

  return (
    <LinearGradient
      colors={[COLORS.yellow, COLORS.cream]}
      style={styles.root}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View style={styles.logo}>
              <Text style={styles.logoHS}>HS</Text>
              <Text style={styles.logoSubtitle}>Market place</Text>
            </View>
            <TouchableOpacity style={styles.hamburger}>
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Headline */}
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>Request HVAC booking</Text>
        </View>

        {/* Calendar Card */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarControls}>
            <View style={styles.selectorRow}>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{months[currentMonth]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{currentYear}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.arrowRow}>
              <TouchableOpacity onPress={handlePrevMonth}>
                <Text style={styles.arrow}>‹</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNextMonth}>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.calendarGrid}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <Text key={day} style={styles.dayLabel}>{day}</Text>
            ))}
            {renderCalendar()}
          </View>
        </View>

        {/* Validation Section */}
        <View style={styles.validationSection}>
          <Text style={styles.validationHeadline}>Validate the date</Text>
          <View style={styles.inputField}>
            <Text style={styles.inputText}>
              {selectedDate ? selectedDate.toDateString() : 'Select a date'}
            </Text>
            <Text style={styles.calendarIcon}>📅</Text>
          </View>
        </View>

        {/* Primary Action */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
            <Text style={styles.sendButtonText}>Send request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem label="Home" icon="🏠" isActive={false} onPress={() => router.push('/client/home')} />
        <NavItem label="Book" icon="👷" isActive={true} />
        <NavItem label="Favorites" icon="❤️" isActive={false} />
        <NavItem label="Message" icon="💬" isActive={false} />
        <NavItem label="Account" icon="👤" isActive={false} onPress={() => router.push('/authentication/signin')} />
      </View>
    </LinearGradient>
  );
};

const NavItem: React.FC<{
  label: string;
  icon: string;
  isActive?: boolean;
  onPress?: () => void;
}> = ({ label, icon, isActive, onPress }) => (
  <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={onPress}>
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
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'flex-start',
  },
  logoHS: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.navy,
    letterSpacing: -0.5,
  },
  logoSubtitle: {
    fontSize: 12,
    color: COLORS.navy,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
  },
  headlineContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.navy,
    textAlign: 'left',
  },
  calendarCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  calendarControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  selector: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  selectorText: {
    fontSize: 14,
    color: COLORS.navy,
    fontWeight: '600',
  },
  arrowRow: {
    flexDirection: 'row',
    gap: 16,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.cyan,
    fontWeight: 'bold',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayLabel: {
    width: (SCREEN_WIDTH - 40 - 40) / 7,
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.mediumGray,
    fontWeight: '600',
    marginBottom: 8,
  },
  dayCell: {
    width: (SCREEN_WIDTH - 40 - 40) / 7,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  selectedDay: {
    backgroundColor: COLORS.cyan,
    borderRadius: 8,
  },
  inactiveDay: {
    // No special styling, just text color
  },
  dayText: {
    fontSize: 14,
    color: COLORS.navy,
  },
  selectedDayText: {
    color: COLORS.white,
    fontWeight: '700',
  },
  inactiveDayText: {
    color: COLORS.lightGray,
  },
  validationSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  validationHeadline: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 12,
  },
  inputField: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  inputText: {
    fontSize: 14,
    color: COLORS.navy,
  },
  calendarIcon: {
    fontSize: 18,
    color: COLORS.navy,
  },
  actionSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: COLORS.navy,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
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

export default RequestHVACBookingScreen;
