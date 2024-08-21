import { ActivityIndicator, FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Circle from '../../components/backgroundCircle';
import CalendarComponent from '../../components/calendarComponent';
import moment from 'moment';
import Theme from '../../utils/theme';
import fonts from '../../utils/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../../components/buttons';
import LocationIcon from '../../assets/SVG/locationIcon';
import axiosWrapper from '../../services/AxiosWrapper';
import { API_URLS } from '../../services/apiPathList';
import { useSelector } from 'react-redux';
import AlertService from '../../services/AlertService';

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
  const user = useSelector((state:any) => state.login.user);
  const token = useSelector((state: any) => state.login.token);
  const [selectedDate, setSelectedDate] = useState(`${moment().date()} ${months[moment().month() - 1]}, ${moment().year()}`)
  const [dateForAPI, setDateForAPI] = useState(`${moment().year()}-${moment().month()}-${moment().date()}`)

  const handleDateChange = (day: number, month: number, year: number) => {
    // Prefix day and month with '0' if they are single digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Format the date strings
    setSelectedDate(`${formattedDay} ${months[month - 1]}, ${year}`);
    setDateForAPI(`${year}-${formattedMonth}-${formattedDay}`);
    setRegisteredEvents([])
  };
  const [registeredEventsloader, setRegisteredEventsLoader] = useState(false)
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    getRegisteredEvents()
  }, [dateForAPI])

  const getRegisteredEvents = async () => {
    try {
      setRegisteredEventsLoader(true)
      let response = await axiosWrapper('GET', `${API_URLS.GET_UPCOMMING_EVENTS}?registered_activities=1&date=${dateForAPI}`, null, token, false, 'json', false);  
      setRegisteredEvents(response?.data?.activities);
    } catch (e) {
    } finally {
      setRegisteredEventsLoader(false)
    }
  }

  const unRegisterEvents = async (event_id: any) => {
    try {
      let data = { event_id, }
      setLoader(true)
      let response = await axiosWrapper('POST', `${API_URLS.UNREGISTER_EVENTS}`, data, token, false, 'json', true);
      if (response.data) {
        AlertService.toastPrompt(response?.data?.success, 'success')
        let events = registeredEvents.filter((item: any) => item.id !== event_id)
        setRegisteredEvents(events)
      }

    } catch (e) {
    } finally {
      setLoader(false)
    }

  }
  const renderEvents = ({ item, index }: any) => {
    const isoString = item?.datetime;
    const formattedDate = moment(isoString).format(
      'DD MMMM, YYYY [at] HH:mm A',
    );

    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName}>{item?.activity}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        {
          item?.location &&
          <View style={styles.locationContainer}> 
            <LocationIcon />
            <Text style={styles.eventLocation}>{item?.location}</Text>
          </View>}
        <TouchableOpacity>
          <Text style={styles.viewMap}>View on map</Text>
        </TouchableOpacity>
        <CustomButton
          BtnContstyle={styles.unregisterBtn}
          text="Unregister Me!"
          textStyle={styles.unregisterTxt}
          onPress={() => { unRegisterEvents(item.id) }}
        />
      </View>
    );
  };
  return (
    <>
      <Circle />
      {
        loader &&
        <View style={styles.loaderComp}>
          <ActivityIndicator size={'large'} color={Theme.WHITE_COLOR} />
        </View>
      }
      <SafeAreaView style={styles.container}>
        <CalendarComponent
          initialMonth={moment().month() + 1}
          initialYear={moment().year()}
          onDateChange={handleDateChange}
        />

        <Text style={styles.date}>{selectedDate}</Text>

        <FlatList
          renderItem={renderEvents}
          data={registeredEvents}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={registeredEventsloader ? <ActivityIndicator size={'large'} color={'black'} style={{ flex: 1 }} /> : <Text>No registered events found</Text>}

        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? wp(12) : null
  },
  loaderComp: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  date: {
    color: Theme.BLACK_COLOR,
    fontSize: 18,
    fontFamily: fonts.Medium,
    padding: wp(5),
    paddingBottom: wp(0),
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
  contentContainerStyle: {
    paddingHorizontal: wp(5),
    paddingVertical: wp(1),
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocation: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 19,
    marginLeft: wp(2)
  },
  viewMap: {
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
  registerBtn: { backgroundColor: Theme.ROLLER_COASTER_BLUE },
  unregisterTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
});