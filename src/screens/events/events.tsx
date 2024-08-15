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

export default function Events() {
  const token = useSelector((state:any) => state.login.token);
  const [selectedDate, setSelectedDate] = useState(`${moment().date()} ${months[moment().month() - 1]}, ${moment().year()}`)
  const [dateForAPI,setDateForAPI] = useState(`${moment().year()}-${moment().month() - 1}-${moment().date()}`)
  const handleDateChange = (day: number, month: number, year: number) => {
    setSelectedDate(`${day} ${months[month - 1]}, ${year}`);
    setDateForAPI(`${year}-${month-1}-${day}`)
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
    {
      name: 'Global Challenges: Thriving in the 21st Century',
      date: '2024-08-21T07:15:00.000000',
      location: 'Talavera Restaurant',
      suggestedAttire: 'Closed toe-shoes, shorts, t-shirt, hat, sunglasses + sunscreen. Special riding equipment available for experience riders.',
      speakers: [
        {
          name: 'Bari Weiss,',
          bio: 'Publisher of Common Sense and Host of Honestly',
        },
        {
          name: 'Ronan Farrow,',
          bio: 'Pulitzer Prize-Winning Investigative Reporter and New York Times Bestselling Author',
        },
        {
          name: 'Moderated by Reena Ninan,',
          bio: 'Television Journalist',
        },
      ]
    },
  ]);
  const [upcommingEventsloader, setUpcommingEventsLoader] = useState(false)
  const [upcommingEvents, setUpcommingEvents] = useState([]);


  useEffect(()=>{
    getUpcommingEvents()
  },[dateForAPI])


  const getUpcommingEvents = async () => {
    try {
      setUpcommingEventsLoader(true)
      let response = await axiosWrapper('GET', `${API_URLS.GET_UPCOMMING_EVENTS}${dateForAPI}`,null,token,false,'json',false);
      console.log(response?.data?.activities[0])
      setUpcommingEvents(response?.data?.activities);

    } catch (e) {
    } finally {
      setUpcommingEventsLoader(false)
    }

  }


  // const renderEvents = ({item, index}: any) => {
  //   const isoString = item?.date;
  //   const formattedDate = moment(isoString).format(
  //     'DD MMMM, YYYY [at] HH:mm A',
  //   );

  //   return (
  //     <View key={index} style={styles.eventCard}>
  //       <Text style={styles.eventName}>{item?.name}</Text>
  //       <Text style={styles.eventDate}>{formattedDate}</Text>
  //       <View style={styles.locationContainer}>
  //         <LocationIcon/>
  //         <Text style={styles.eventLocation}>{item?.location}</Text>
  //       </View>
  //       <CustomButton
  //         BtnContstyle={[styles.unregisterBtn, styles.registerBtn]}
  //         text="Register"
  //         textStyle={styles.unregisterTxt}
  //       />
  //     </View>
  //   );
  // };


  const renderEvents = ({ item, index }: any) => {
    if (!item) return null;

    const isoString = item?.date;
    const formattedDate = moment(isoString).format('DD MMMM, YYYY [at] HH:mm A');

    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName}>{item?.activity}</Text>
        <Text style={styles.eventTime}>Time: {formattedDate}</Text>
        <View style={styles.locationContainer}>
          <LocationIcon />
          <Text style={styles.eventLocation}>{item?.location}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewMap}>View on map</Text>
        </TouchableOpacity>
        {item?.suggestedAttire && (
          <Text style={[styles.suggestedAttire, { fontFamily: fonts.Medium }]}>Suggested Attire:
            <Text style={styles.suggestedAttire} >
              {item.suggestedAttire}
            </Text>
          </Text>
        )}
        {item?.speakers && (
          <View style={styles.speakerContainer}>
            <Text style={styles.speakerHeader}>Speaker(s):</Text>
            {item.speakers.map((speaker: any, idx: any) => (
              <Text key={idx} style={[styles.speackerName, { fontFamily: fonts.Medium }]}>{speaker.name} <Text style={styles.speackerName} >
                {speaker.bio}
              </Text>
            </Text>
            ))}
          </View>
        )}
        <CustomButton
          BtnContstyle={[styles.unregisterBtn, styles.registerBtn]}
          text="Register"
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
          data={upcommingEvents}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={upcommingEventsloader ? <ActivityIndicator size={'large'} color={'black'} style={{flex:1}} /> : <Text>No upcomming events found</Text>}
        />

      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? wp(12) : null,
  },
  date: {
    color: Theme.BLACK_COLOR,
    fontSize: 18,
    fontFamily: fonts.Medium,
    padding: wp(5),
    paddingBottom: wp(1),
    paddingTop: wp(1),
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
    paddingHorizontal:wp(5),
    paddingVertical:wp(1),
  },
  eventName: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 24,
  },
  eventTime: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  eventLocation: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
    marginLeft: wp(2),
  },
  viewMap:{
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 18,
  },
  suggestedAttire: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
    marginTop: 8,
  },
  speackerName: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
  },
  speakerContainer: {
    marginTop: 8,
  },
  speakerHeader: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
  },
  speakerName: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Theme.BLACK_WASH,
    lineHeight: 21,
  },
  unregisterBtn: {
    marginTop: hp(1.3),
    height: hp(4),
    borderRadius: 8,
    backgroundColor: Theme.INTOXICATE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  registerBtn: {
    backgroundColor: Theme.ROLLER_COASTER_BLUE,
  },
  unregisterTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 24,
  },
});