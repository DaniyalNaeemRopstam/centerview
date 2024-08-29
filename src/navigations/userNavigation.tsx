import React, { useContext, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import Profile from '../screens/profile/profile';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Notifications from '../screens/notifications/notifications';
import ArrowBack from '../assets/SVG/arrowBack';
import RegisteredEvents from '../screens/events/registeredEvents';
import Events from '../screens/events/events';
import Speakers from '../screens/speakers/speakers';
import SpeakerDetails from '../screens/speakers/speakerDetails';
import Logout from '../assets/SVG/logout';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../redux/features/AuthSlice';
import fonts from '../utils/fonts';
import Theme from '../utils/theme';
import BottomTabNavigator from './BottomTabNavigator';
import NotificationsIcon from '../components/notificationIcon';
import { NOTIFICATION_CONTEXT } from '../../App';
import axiosWrapper from '../services/AxiosWrapper';
import { API_URLS } from '../services/apiPathList';
type RootStackParamList = {
  BOTTOM_TAB: undefined;
  DASHBOARD: undefined;
  PROFILE: undefined;
  NOTIFICATION: undefined;
  EVENTS: undefined;
  REGISTEREDEVENTS: undefined;
  SPEAKERS: undefined;
  SPEAKERSDETAIL: undefined;
};

export default function UserNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const token = useSelector((state: any) => state?.login?.token);
  const {notificaitonData,setNotificaitonData} = useContext(NOTIFICATION_CONTEXT)
  let count = notificaitonData.filter((item:any) => !item?.is_read)?.length;
  

  useEffect(()=>{
    getNotificaitons()
  },[])

  const getNotificaitons = async () =>{
    try {
      let response = await axiosWrapper('GET', API_URLS.NOTIFICATION_LIST,null,token );
      setNotificaitonData(response?.data?.notifications)
    } catch (error) {
                                                                                                          
    }
  }

  


  const handleLogout = () => {
    Alert.alert("Warning","Are you sure you want to logout?",
      [
        {
          text:'No',
        },
        {
          text:'Yes',
          onPress: () =>  dispatch(saveUser({ isLoggedIn: false }))
        },
      ])  
   
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerleftCont}>
              <ArrowBack />
            </TouchableOpacity>
          );
        },
      }}>

      <Stack.Screen
        name="BOTTOM_TAB"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={handleLogout}
                style={styles.headerRightCont}>
                <Logout />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="NOTIFICATION"
        component={Notifications}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <Stack.Screen
        name="EVENTS"
        component={Events}
        options={{
          headerTransparent: true,
          headerTitle: 'Upcoming Activities',
          headerRight: () => {
            return (
              <View style={styles.headerRightCont}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('NOTIFICATION')}>
                  <NotificationsIcon  notifications={count}/>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="REGISTEREDEVENTS"
        component={RegisteredEvents}
        options={{
          headerTitle: 'Registered Activities',
          headerTransparent: true,
          headerRight: () => {
            return (
              <View style={styles.headerRightCont}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('NOTIFICATION')}>
                  <NotificationsIcon  notifications={count}/>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SPEAKERS"
        component={Speakers}
        options={{
          headerTitle: '2024 Speakers',
          headerTransparent: true,
          headerRight: () => {
            return (
              <View style={styles.headerRightCont}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('NOTIFICATION')}>
                  <NotificationsIcon  notifications={count}/>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SPEAKERSDETAIL"
        component={SpeakerDetails}
        options={{
          headerTransparent: true,
          headerTitle: 'Speaker Detail',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerleftCont: {marginLeft: widthPercentageToDP(3)},
  headerProfileImg: {width: 31, height: 31, borderRadius: 31 / 2},
  headerRightCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: widthPercentageToDP(3),
    gap: 23,
  },
  headerTitleStyle: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.SemiBold,
    color: Theme.ROLLER_COASTER_BLUE,
  },
  headerStyle: {
    backgroundColor: Theme.WHITE_SMOKE,
  },
});