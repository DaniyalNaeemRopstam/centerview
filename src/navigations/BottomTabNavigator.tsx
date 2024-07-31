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
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
      <Tab.Navigator
        initialRouteName='DASHBOARD'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'ResortMap') {
              return <ResortMapIcon color={color}/>
            } else if (route.name === 'DASHBOARD') {
              return <DashboardIcon color={color}/>
            } else if (route.name === 'AirportTransfer') {
              return <AirportTransferIcon color={color}/>
            }
  
          },
          tabBarActiveTintColor: Theme.ROLLER_COASTER_BLUE,
          tabBarInactiveTintColor: 'gray',
          headerShadowVisible: false,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          tabBarStyle:{
            padding:null,
            height:70,
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
          name="ResortMap"
          component={ResortMaps}
          options={{
            headerTitle: 'Resort Map',
          }}
        />
        <Tab.Screen
          name="DASHBOARD"
          component={Dashboard}
          options={{
            headerTitle: 'Welcome Kathrine!',
            headerTransparent: true,
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('PROFILE')}
                  style={styles.headerleftCont}>
                  <Image
                    source={require('../assets/profileImage.png')}
                    style={styles.headerProfileImg}
                  />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <View style={styles.headerRightCont}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('REGISTEREDEVENTS')}>
                    <RegisteredIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('NOTIFICATION')}>
                    <Notification />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="AirportTransfer"
          component={AirportTransfer}
          options={{
            headerTitle: 'Airport Transfer',
          }}
        />
      </Tab.Navigator>
    )
  }
  

export default BottomTabNavigator


const styles = StyleSheet.create({
    headerleftCont: { marginLeft: widthPercentageToDP(3) },
    headerProfileImg: { width: 31, height: 31, borderRadius: 31 / 2 },
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