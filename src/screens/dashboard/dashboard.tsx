import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  RefreshControl
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TotalEvents from '../../assets/SVG/totalEvents';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import TotalSpeakers from '../../assets/SVG/totalSpeakers';
import RegisterGreen from '../../assets/SVG/registerGreen';
import Theme from '../../utils/theme';
import Circle from '../../components/backgroundCircle';
import fonts from '../../utils/fonts';
import moment from 'moment';
import CustomButton from '../../components/buttons';
import LocationIcon from '../../assets/SVG/locationIcon';
import axiosWrapper from '../../services/AxiosWrapper';
import { API_URLS } from '../../services/apiPathList';
import { useSelector } from 'react-redux';
import AlertService from '../../services/AlertService';
import messaging from '@react-native-firebase/messaging';


export default function Dashboard(props?: any) {
  const user = useSelector((state: any) => state.login.user);
  const token = useSelector((state: any) => state.login.token);
  const [loader, setLoader] = useState(false)
  const [speakerLoader, setSpeakersLoader] = useState(false)
  const [upcommingEventsloader, setUpcommingEventsLoader] = useState(false)
  const [registerdEventsloader, setRegisterdEventsLoader] = useState(false)
  const [speakerData, setSpeakersData] = useState([]);
  const [upcommingEvents, setUpcommingEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [dataCounts, setDataCounts] = useState({
    total_activities: 0,
    total_speakers: 0,
    total_registered_activities: 0
  })

  useEffect(() => {
    getSpeakersDetail();
    getUpcommingEvents();
    getRegisteredEvents();
    getHomeDetail()
  }, [])

  useEffect(() => {
    requestUserPermission()
  }, [])


  const requestUserPermission = async () => {
    try {
      let enabled;

      if (Platform.OS === 'ios') {
        const authStatus = await messaging().requestPermission();
        enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      } else if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );
          enabled = granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          enabled = true;
        }
      }

      if (enabled) {
        await getFCMToken();
      } else {
        Alert.alert("Permission denied", "You won't receive notifications");
      }
    } catch (error) {
      console.error('Failed to request permission or get FCM token:', error);
    }
  };
  const getFCMToken = async () => {
    try {
      // Get the FCM token from Firebase Messaging
      const devicetoken = await messaging().getToken();

      if (devicetoken) {
        // Prepare the payload to send to your API
        const payload = {
          device_token: devicetoken,
        };

        // console.log('FCM Token:', payload);

        // Send a POST request to your API with the token
        const response = await axiosWrapper('POST', API_URLS.DEVICE_TOKEN_API, payload, token, false, 'json', true);

        // Handle the response if needed, e.g., logging the success
        // console.log('Token successfully sent to the server:', response);
      } else {
        console.warn('Failed to get FCM token');
      }
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };

  const getSpeakersDetail = async () => {
    try {
      setSpeakersLoader(true)
      let response = await axiosWrapper('GET', API_URLS.GET_SPEAKERS);
      setSpeakersData(response);

    } catch (e) {
    } finally {
      setSpeakersLoader(false)
    }
  }

  const getHomeDetail = async () => {
    try {
      setSpeakersLoader(true)
      let response = await axiosWrapper('GET', API_URLS.HOME_API, null, token);
      setDataCounts(response?.data);

    } catch (e) {
    } finally {
      setSpeakersLoader(false)
    }
  }

  const getUpcommingEvents = async () => {
    try {
      setUpcommingEventsLoader(true)
      let response = await axiosWrapper('GET', API_URLS.GET_UPCOMMING_EVENTS, null, token, false, 'json', false);
      setUpcommingEvents(response?.data?.activities);

    } catch (e) {
    } finally {
      setUpcommingEventsLoader(false)
    }

  }

  const getRegisteredEvents = async () => {
    try {
      setRegisterdEventsLoader(true)
      let response = await axiosWrapper('GET', `${API_URLS.GET_UPCOMMING_EVENTS}?registered_activities=1`, null, token, false, 'json', false);
      setRegisteredEvents(response?.data?.activities);

    } catch (e) {
    } finally {
      setRegisterdEventsLoader(false)
    }

  }


  const mapNavigation = () =>{
    props.navigation.navigate("Resort Map")
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

  const renderRegisteredEvents = ({ item, index }: any) => {
    const isoString = item?.datetime;
    const formattedDate = moment(isoString).format(
      'DD MMMM, YYYY [at] HH:mm A',
    );

   
    return (
      <View key={index} style={styles.eventCard}>
        <Text style={styles.eventName} numberOfLines={1}>{item?.activity}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        {item?.location &&
          <View style={styles.locationContainer}>
            <LocationIcon />
            <Text style={styles.eventLocation} numberOfLines={1} >{item?.location}</Text>
          </View>}
        <TouchableOpacity onPress={mapNavigation}>
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

  const renderSpeakers = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.speakerCard}
        onPress={() =>
          props?.navigation?.navigate('SPEAKERSDETAIL', { speaker: { ...item, detail: item?.content?.rendered } })
        }>
        <Image source={{ uri: item?.jetpack_featured_media_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} style={styles.speakerImg} />
        <Text style={styles.speakerName} numberOfLines={2} >{item?.title?.rendered}</Text>
      </TouchableOpacity>
    );
  };




  const registerEvents = async (event_id: any) => {
    try {
      let data = { event_id, is_guest: true }
      setLoader(true)
      let response = await axiosWrapper('POST', `${API_URLS.REGISTER_EVENTS}`, data, token, false, 'json', true);
      if (response.data) {
        AlertService.toastPrompt(response?.data?.success, 'success')
        let events = upcommingEvents.filter((item: any) => item.id !== event_id)
        setUpcommingEvents(events)
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
        <Text style={styles.eventName} numberOfLines={1}>{item?.activity}</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
        <View style={styles.locationContainer}>
          <LocationIcon />
          <Text style={styles.eventLocation} numberOfLines={1}>{item?.location}</Text>
        </View>
        <TouchableOpacity onPress={mapNavigation} >
          <Text style={styles.viewMap}>View on map</Text>
        </TouchableOpacity>

        {item.is_registered === 0 ? (
          <CustomButton
            BtnContstyle={[styles.unregisterBtn, styles.registerBtn]}
            text="Register"
            textStyle={styles.unregisterTxt}
            onPress={() => { registerEvents(item.id) }}
          />
        ) :
          <CustomButton
            BtnContstyle={[styles.unregisterBtn, styles.grayregisterBtn]}
            text="Already Registered"
            textStyle={styles.unregisterTxt}

          />
        }
      </View>
    );
  };
  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  // Function to fetch all required data
  const fetchData = () => {
    getSpeakersDetail();
    getUpcommingEvents();
    getRegisteredEvents();
    getHomeDetail();
  };

  const [refreshing, setRefreshing] = useState(false);
  // Function to handle pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  return (
    <>
      <Circle />
      {
        loader &&
        <View style={styles.loaderComp}>
          <ActivityIndicator size={'large'} color={Theme.WHITE_COLOR}
          />
        </View>
      }
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewCont}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.topTilesCont}>
          <TouchableOpacity
            // onPress={() => props?.navigation?.navigate('EVENTS')}
            style={styles.topTile}>
            <TotalEvents fontSize={widthPercentageToDP(10)} />
            <View>
              <Text style={styles.totalNumbers}>{dataCounts?.total_activities}</Text>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>Activities</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('SPEAKERS')}
            style={styles.topTile}>
            <TotalSpeakers />
            <View>
              <Text style={styles.totalNumbers}>{dataCounts?.total_speakers}</Text>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>Speakers</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props?.navigation?.navigate('REGISTEREDEVENTS')}
          style={[styles.topTile, styles.topBottomTiles]}>
          <RegisterGreen />
          <View>
            <Text style={styles.totalNumbers}>{dataCounts?.total_registered_activities}</Text>
            <Text style={styles.total}>Registered Activities</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.headingCont}>
          <Text style={styles.speakersHeading}>Registered Activities</Text>
          <CustomButton
            BtnContstyle={styles.seeAllBtn}
            text="See All"
            textStyle={styles.seeAllTxt}
            onPress={() => props?.navigation?.navigate('REGISTEREDEVENTS')}
          />
        </View>

        <FlatList
          horizontal
          data={registeredEvents?.length >= 3 ? registeredEvents.slice(0, 3) : registeredEvents}
          renderItem={renderRegisteredEvents}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={registerdEventsloader ? <ActivityIndicator size={'large'} color={'black'} style={{ flex: 1 }} /> : <Text>No registered events found</Text>}
          contentContainerStyle={styles.renderSpeakersContentContainerStyle}
        />

        <View style={styles.headingCont}>
          <Text style={styles.speakersHeading}>2024 Speakers</Text>
          <CustomButton
            BtnContstyle={styles.seeAllBtn}
            text="See All"
            textStyle={styles.seeAllTxt}
            onPress={() => props?.navigation?.navigate('SPEAKERS')}
          />
        </View>
        <FlatList
          horizontal
          renderItem={renderSpeakers}
          data={speakerData?.length >= 8 ? speakerData.slice(0, 8) : speakerData}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={speakerLoader ? <ActivityIndicator size={'large'} color={'black'} style={{ flex: 1 }} /> : <Text>No Speaker found</Text>}
          contentContainerStyle={styles.renderSpeakersContentContainerStyle}
        />

        <View style={styles.headingCont}>
          <Text style={styles.speakersHeading}>Upcoming Activities</Text>
          <CustomButton
            BtnContstyle={styles.seeAllBtn}
            text="See All"
            textStyle={styles.seeAllTxt}
            onPress={() => props?.navigation?.navigate('EVENTS')}
          />
        </View>
        <FlatList
          horizontal
          renderItem={renderEvents}
          data={upcommingEvents?.length >= 3 ? upcommingEvents.slice(0, 3) : upcommingEvents}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={upcommingEventsloader ? <ActivityIndicator size={'large'} color={'black'} style={{ flex: 1 }} /> : <Text>No upcomming events found</Text>}
          contentContainerStyle={styles.renderSpeakersContentContainerStyle}

        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: { marginTop: heightPercentageToDP(12) },
  scrollViewCont: {
    paddingHorizontal: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(10),
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
  topTilesCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topTile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    borderRadius: 16,
    paddingLeft: widthPercentageToDP(3),
    width: widthPercentageToDP(45),
    paddingVertical: widthPercentageToDP(2),
    gap: 9.5,
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  topBottomTiles: {
    marginVertical: heightPercentageToDP(2),
    width: widthPercentageToDP(94),
  },
  totalNumbers: {
    fontSize: 20,
    fontFamily: fonts.Bold,
    color: Theme.LEAD_COLOR,
    lineHeight: 24,
  },
  total: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.PANTON_GREY,
    lineHeight: 14,
  },
  registeredHeading: {
    fontSize: 18,
    color: Theme.DARK_SPELL,
    fontFamily: fonts.Medium,
    marginTop: heightPercentageToDP(2.5),
    marginBottom: heightPercentageToDP(1.6),
  },
  eventCard: {
    marginRight: 8,
    maxWidth: widthPercentageToDP(70),
    backgroundColor: Theme.WHITE_COLOR,
    borderRadius: 16,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(1.2),
    marginBottom: heightPercentageToDP(2),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
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
    lineHeight: 18,
  },
  viewMap: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 18,
  },
  unregisterBtn: {
    marginTop: heightPercentageToDP(1.3),
    height: heightPercentageToDP(4),
    borderRadius: 8,
    backgroundColor: Theme.INTOXICATE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(60),
  },
  registerBtn: { backgroundColor: Theme.ROLLER_COASTER_BLUE },
  grayregisterBtn: {
    backgroundColor: Theme.RAINY_GREY,
  },
  unregisterTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
  headingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(2),
  },
  speakersHeading: {
    fontSize: 18,
    color: Theme.DARK_SPELL,
    fontFamily: fonts.Medium,
  },
  seeAllBtn: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(3.8),
    backgroundColor: Theme.ROLLER_COASTER_BLUE,
    width: widthPercentageToDP(20),
  },
  seeAllTxt: {
    color: Theme.WHITE_COLOR,
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 24,
  },
  renderSpeakersContentContainerStyle: {
    minHeight: heightPercentageToDP(12),
    flexGrow: 1,
  },
  speakerCard: {
    marginRight: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1.6),
    marginBottom: heightPercentageToDP(2.5),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  speakerImg: { width: 60, height: 60, borderRadius: 60 / 2 },
  speakerName: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.JET_COLOR,
    marginTop: 6,
    width: widthPercentageToDP(15),
    textAlign: 'center',
  },
});
