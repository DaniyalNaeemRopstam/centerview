import {FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Circle from '../../components/backgroundCircle';
import CalendarComponent from '../../components/calendarComponent';
import moment from 'moment';
import Theme from '../../utils/theme';
import fonts from '../../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../../components/buttons';
import LocationIcon from '../../assets/SVG/locationIcon';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];




export default function RegisteredEvents() {
  const [selectedDate, setSelectedDate] = useState(`${moment().date()} ${months[moment().month()-1]}, ${moment().year()}`)
  const handleDateChange = (day: number, month: number, year: number) => {
    setSelectedDate(`${day} ${months[month-1]}, ${year}`);
  };
  const [activities] = useState([
    {
      name: 'Welcome Brunch',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
    {
      name: 'Lunch Activity',
      date: '2024-08-21T08:00:00.000000',
      location: 'Talavera Restaurant',
    },
    
  ]);

  const renderEvents = ({item, index}: any) => {
    const isoString = item?.date;
    const formattedDate = moment(isoString).format(
      'DD MMMM, YYYY [at] HH:mm A',
    );

    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName}>{item?.name}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        <View style={styles.locationContainer}>
          <LocationIcon/>
          <Text style={styles.eventLocation}>{item?.location}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewMap}>View on map</Text>
        </TouchableOpacity>
        <CustomButton
          BtnContstyle={styles.unregisterBtn}
          text="Unregister Me!"
          textStyle={styles.unregisterTxt}
        />
      </View>
    );
  };

    
  return (
    <>
      <Circle />
      <SafeAreaView style={styles.container}>
      <CalendarComponent
        initialMonth={moment().month() + 1}
        initialYear={moment().year()}
        onDateChange={handleDateChange}
      />

      <Text style={styles.date}>{selectedDate}</Text>
      
      <FlatList
          renderItem={renderEvents}
          data={activities.slice(0, 3)}
          contentContainerStyle={styles.contentContainerStyle}
        />

    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS === 'android' ? wp(12): null
  },
  date:{
    color:Theme.BLACK_COLOR,
    fontSize:18,
    fontFamily:fonts.Medium,
    padding:wp(5),
    paddingBottom:wp(0),
  },
  eventCard: {
    marginRight: 8,
    backgroundColor: Theme.WHITE_COLOR,
    borderRadius: 16,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.2),
    marginBottom: hp(2),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  contentContainerStyle:{
    paddingHorizontal:wp(5),
    paddingVertical:wp(1),
  },
  eventName: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 19,
  },
  eventDate: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 19,
  },
  locationContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  eventLocation: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 19,
    marginLeft:wp(2)
  },
  viewMap:{
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 18,
  },
  unregisterBtn: {
    marginTop: hp(1.3),
    height: hp(4),
    borderRadius: 8,
    backgroundColor: Theme.INTOXICATE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(80),
  },
  registerBtn: {backgroundColor: Theme.ROLLER_COASTER_BLUE},
  unregisterTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
});