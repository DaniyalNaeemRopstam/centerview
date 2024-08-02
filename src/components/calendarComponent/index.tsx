import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import fonts from '../../utils/fonts';
import Theme from '../../utils/theme';

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
      onDateChange(moment().date(),currentMonth,currentYear );
    } else {
      setSelectedDate(1);
      onDateChange(1,currentMonth,currentYear );
    }
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (!isInitialMount) {
      const dayIndex = selectedDate - 1;
      const offset = dayIndex * wp(15) - wp(30);
      scrollViewRef.current?.scrollTo({ x: Math.max(offset, 0), animated: true });
    } else {
      setIsInitialMount(false);
    }
  }, [selectedDate, currentMonth, currentYear,isInitialMount]);

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
    scrollViewRef.current?.scrollTo({ x: dayIndex * wp(15) - wp(30), animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{moment(`${currentYear}-${currentMonth}`, 'YYYY-MM').format('MMMM YYYY')}</Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {days.map((day, index) => (
          <TouchableOpacity key={day} onPress={() => handleDateSelect(day)}>
            <View style={[styles.day, selectedDate === day && styles.selectedDay]}>
              <Text style={selectedDate === day ? styles.selectedDayText : styles.dayText}>{day}</Text>
              <Text style={selectedDate === day ? styles.selectedDayText : styles.dayText2}>{dayLabels[index]}</Text>
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
    color:Theme.BLACK_COLOR,
  },
  arrow: {
    fontSize: 26,
    fontFamily: fonts.Medium,
    color:Theme.BLACK_COLOR,
  },
  daysContainer: {
    marginTop: hp(1.2),
    paddingHorizontal: wp(0.5),
  },
  day: {
    width: wp(13),
    height: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(1),
    paddingHorizontal: wp(2),
    paddingVertical: wp(4),
    borderRadius: wp(2),
  },
  selectedDay: {
    backgroundColor: '#0078C1',
    borderRadius: wp(2),
  },
  dayText: {
    fontSize: hp(2),
    color: Theme.BLACK_COLOR,
    marginBottom: wp(1),
  },
  selectedDayText: {
    color: Theme.WHITE_COLOR,
    fontSize: hp(2),
  },
  dayText2: {
    fontSize: hp(1.5),
    color: Theme.RAINY_GREY,
  },
  selectedDayText2: {
    color: '#fff',
    fontSize: hp(2),
  },
});

export default CalendarComponent;
