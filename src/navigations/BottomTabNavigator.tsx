import React from 'react';
import Dashboard from '../screens/dashboard/dashboard';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Notification from '../assets/SVG/notification';
import RegisteredIcon from '../assets/SVG/registeredIcon';
import DashboardIcon from '../assets/SVG/dashboard';
import ArrowBack from '../assets/SVG/arrowBack';
import Events from '../screens/events/events';
import fonts from '../utils/fonts';
import Theme from '../utils/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AirportTransferIcon from '../assets/SVG/airportTransfer';
import ResortMapIcon from '../assets/SVG/resortMapIcon';
import AirportTransfer from '../screens/airportTransfer/AirportTransfer';
import ResortMaps from '../screens/resortMaps/ResortMaps';
import NotificationsIcon from '../components/notificationIcon';
import { useSelector } from 'react-redux';

type RootStackParamList = {
  DASHBOARD: undefined;
  PROFILE: undefined;
  BOTTOM_TAB: undefined;
  NOTIFICATION: undefined;
  EVENTS: undefined;
  REGISTEREDEVENTS: undefined;
  SPEAKERS: undefined;
  SPEAKERSDETAIL: undefined;
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const user = useSelector((state:any) => state.login.user);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Resort Map') {
            return <ResortMapIcon color={color} />
          } else if (route.name === 'Dashboard') {
            return <DashboardIcon color={color} />
          } else if (route.name === 'Airport Transfer') {
            return <AirportTransferIcon color={color} />
          }

        },
        tabBarActiveTintColor: Theme.ROLLER_COASTER_BLUE,
        tabBarInactiveTintColor: 'gray',
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        tabBarStyle: {
          padding: null,
          height: 70,
          paddingBottom: Platform.OS === 'android' ? 14 : 20
        },

        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerleftCont}>
              <ArrowBack />
            </TouchableOpacity>
          );
        },

      })}
    >
      <Tab.Screen
        name="Resort Map"
        component={ResortMaps}
        options={{
          headerTitle: 'Resort Map',
          headerLeft:null,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: `Welcome ${user?.firstName}`,
          headerTransparent: true,
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('PROFILE')}
                style={styles.headerleftCont}>
                <Image
                  source={{uri: user?.profile_img ||  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}
                  style={styles.headerProfileImg}
                />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <View style={styles.headerRightCont}>
                
                <TouchableOpacity
                  onPress={() => navigation.navigate('NOTIFICATION')}>
                  <NotificationsIcon  notifications={1}/>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Airport Transfer"
        component={AirportTransfer}
        options={{
          headerTitle: 'Airport Transfer',
          headerLeft:null,
        }}
      />
    </Tab.Navigator>
  )
}


export default BottomTabNavigator


const styles = StyleSheet.create({
  headerleftCont: { marginLeft: widthPercentageToDP(4), },
  headerProfileImg: {width: widthPercentageToDP(10.5), height: widthPercentageToDP(10.5), borderRadius: widthPercentageToDP(10) / 2 },
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