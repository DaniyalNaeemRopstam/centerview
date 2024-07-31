import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/dashboard';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Profile from '../screens/profile/profile';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Notification from '../assets/SVG/notification';
import RegisteredIcon from '../assets/SVG/registeredIcon';
import DashboardIcon from '../assets/SVG/dashboard';
import Notifications from '../screens/notifications/notifications';
import ArrowBack from '../assets/SVG/arrowBack';
import RegisteredEvents from '../screens/events/registeredEvents';
import Events from '../screens/events/events';
import Speakers from '../screens/speakers/speakers';
import SpeakerDetails from '../screens/speakers/speakerDetails';
import Logout from '../assets/SVG/logout';
import { useDispatch } from 'react-redux';
import { saveUser } from '../redux/features/AuthSlice';
import fonts from '../utils/fonts';
import Theme from '../utils/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigator';
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
export default function UserNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
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
      {/* <Stack.Screen
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
      /> */}

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
                onPress={() => dispatch(saveUser({ isLoggedIn: false }))}
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
          headerTitle: 'Events',
        }}
      />
      <Stack.Screen
        name="REGISTEREDEVENTS"
        component={RegisteredEvents}
        options={{
          headerTitle: 'RegisteredEvents',
        }}
      />
      <Stack.Screen
        name="SPEAKERS"
        component={Speakers}
        options={{
          headerTitle: 'Speakers',
          headerTransparent: true,
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

const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const dispatch = useDispatch();
//   return (
//     <Tab.Navigator
//       initialRouteName='DASHBOARD'
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           if (route.name === 'ResortMap') {
//             return <DashboardIcon />
//           } else if (route.name === 'Dashboard') {
//             return <DashboardIcon />
//           } else if (route.name === 'AirportTransfer') {
//             return <RegisteredIcon />
//           }

//         },
//         tabBarActiveTintColor: Theme.ROLLER_COASTER_BLUE,
//         tabBarInactiveTintColor: 'gray',
//         headerShadowVisible: false,
//         headerTitleAlign: 'left',
//         headerTitleStyle: styles.headerTitleStyle,
//         headerStyle: styles.headerStyle,
//         headerLeft: () => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={styles.headerleftCont}>
//               <ArrowBack />
//             </TouchableOpacity>
//           );
//         },

//       })}
//     >
//       <Tab.Screen
//         name="ResortMap"
//         component={Events}
//         options={{
//           headerTitle: 'Resort Map',
//         }}
//       />
//       <Tab.Screen
//         name="DASHBOARD"
//         component={Dashboard}
//         options={{
//           headerTitle: 'Welcome Kathrine!',
//           headerTransparent: true,
//           headerLeft: () => {
//             return (
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('PROFILE')}
//                 style={styles.headerleftCont}>
//                 <Image
//                   source={require('../assets/profileImage.png')}
//                   style={styles.headerProfileImg}
//                 />
//               </TouchableOpacity>
//             );
//           },
//           headerRight: () => {
//             return (
//               <View style={styles.headerRightCont}>
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate('REGISTEREDEVENTS')}>
//                   <RegisteredIcon />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate('NOTIFICATION')}>
//                   <Notification />
//                 </TouchableOpacity>
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="AirportTransfer"
//         component={Events}
//         options={{
//           headerTitle: 'Airport Transfer',
//         }}
//       />
//     </Tab.Navigator>
//   )
// }


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