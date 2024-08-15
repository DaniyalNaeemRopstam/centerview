import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import fonts from '../../utils/fonts';
import Theme from '../../utils/theme';
import LeftIcon from '../../assets/SVG/leftIcon';
import RightIcon from '../../assets/SVG/rightIcon';

interface CalendarComponentProps {
  initialMonth: number;
  initialYear: number;
  onDateChange: (day: number, month: number, year: number) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ initialMonth, initialYear, onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState<number>(initialMonth);
  const [currentYear, setCurrentYear] = useState<number>(initialYear);
  const [selectedDate, setSelectedDate] = useState<number>(moment().date());
  const [isInitialMount, setIsInitialMount] = useState<boolean>(true);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (currentMonth === moment().month() + 1 && currentYear === moment().year()) {
      setSelectedDate(moment().date());
      onDateChange(moment().date(), currentMonth, currentYear);
    } else {
      setSelectedDate(1);
      onDateChange(1, currentMonth, currentYear);
    }
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (!isInitialMount) {
      const dayIndex = selectedDate - 1;
      const elementWidth = wp(10.8);
      const spacing = wp(2); // marginHorizontal
      const offset = dayIndex * (elementWidth + spacing) - (wp(42) - elementWidth / 2);
      scrollViewRef.current?.scrollTo({ x: Math.max(offset, 0), animated: true });
    } else {
      setIsInitialMount(false);
    }
  }, [selectedDate, currentMonth, currentYear, isInitialMount]);

  const daysInMonth = moment(`${currentYear}-${currentMonth}`, 'YYYY-MM').daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dayLabels = days.map(day => moment(`${currentYear}-${currentMonth}-${day}`, 'YYYY-MM-DD').format('ddd'));

  const changeMonth = (direction: number) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    onDateChange(day, currentMonth, currentYear);
    const dayIndex = days.indexOf(day);
    const elementWidth = wp(10.8);
    const spacing = wp(2); // marginHorizontal
    const offset = dayIndex * (elementWidth + spacing) - (wp(42) - elementWidth / 2);
    scrollViewRef.current?.scrollTo({ x: Math.max(offset, 0), animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <LeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>{moment(`${currentYear}-${currentMonth}`, 'YYYY-MM').format('MMMM YYYY')}</Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <RightIcon />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {days.map((day, index) => (
          <TouchableOpacity key={day} onPress={() => handleDateSelect(day)} style={styles.dayPress}>
            <View style={[styles.day, selectedDate === day && styles.selectedDay]}>
              <Text style={selectedDate === day ? styles.selectedDayText : styles.dayText}>{day}</Text>
              <Text style={selectedDate === day ? styles.selectedDayText2 : styles.dayText2}>{dayLabels[index]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    padding: wp(5),
    marginTop: hp(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: Theme.BLACK_COLOR,
  },
  arrow: {
    fontSize: 26,
    fontFamily: fonts.Medium,
    color: Theme.BLACK_COLOR,
  },
  daysContainer: {
    marginTop: hp(1.2),
  },
  dayPress: {
    borderRadius: wp(2),
    marginHorizontal: wp(1),
  },
  day: {
    width: wp(10.8),
    height: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    paddingVertical: wp(2),
  },
  selectedDay: {
    width: wp(10.8),
    height: wp(18),
    backgroundColor: '#0078C1',
    borderRadius: wp(3),
  },
  dayText: {
    fontSize: hp(2),
    color: Theme.BLACK_COLOR,
  },
  selectedDayText: {
    color: Theme.WHITE_COLOR,
    fontSize: hp(2.5),
    fontFamily: fonts.Bold,
    lineHeight: hp(2.7),
  },
  dayText2: {
    fontSize: hp(1.5),
    color: Theme.RAINY_GREY,
  },
  selectedDayText2: {
    color: '#fff',
    fontSize: hp(1.5),
    fontFamily: fonts.Regular,
    lineHeight: hp(1.7),
  },
});

export default CalendarComponent;
