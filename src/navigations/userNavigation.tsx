import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Dashboard from '../screens/dashboard/dashboard';
import Profile from '../screens/profile/profile';
import Notifications from '../screens/notifications/notifications';
import RegisteredEvents from '../screens/events/registeredEvents';
import Events from '../screens/events/events';
import Speakers from '../screens/speakers/speakers';
import SpeakerDetails from '../screens/speakers/speakerDetails';
import Notification from '../assets/SVG/notification';
import RegisteredIcon from '../assets/SVG/registeredIcon';
import ArrowBack from '../assets/SVG/arrowBack';
import Logout from '../assets/SVG/logout';
import { saveUser } from '../redux/features/AuthSlice';
import fonts from '../utils/fonts';
import Theme from '../utils/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerleftCont}
          >
            <ArrowBack />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="DASHBOARD"
        component={Dashboard}
        options={{
          headerTitle: 'Welcome Kathrine!',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PROFILE')}
              style={styles.headerleftCont}
            >
              <Image
                source={require('../assets/profileImage.png')}
                style={styles.headerProfileImg}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.headerRightCont}>
              <TouchableOpacity
                onPress={() => navigation.navigate('REGISTEREDEVENTS')}
              >
                <RegisteredIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('NOTIFICATION')}
              >
                <Notification />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(saveUser({ isLoggedIn: false }))}
              style={styles.headerRightCont}
            >
              <Logout />
            </TouchableOpacity>
          ),
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
          headerTitle: 'Registered Events',
        }}
      />
      <Stack.Screen
        name="SPEAKERS"
        component={Speakers}
        options={{
          headerTitle: 'Speakers',
          headerTransparent: true,
          headerRight: () => (
            <View style={styles.headerRightCont}>
              <TouchableOpacity
                onPress={() => navigation.navigate('REGISTEREDEVENTS')}
              >
                <RegisteredIcon />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('NOTIFICATION')}
              >
                <Notification />
              </TouchableOpacity>
            </View>
          ),
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
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Airport') {
          iconName = 'plane';
        } else if (route.name === 'Map') {
          iconName = 'map';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Theme.ROLLER_COASTER_BLUE,
      inactiveTintColor: 'gray',
      showLabel: false, // Hide labels
    }}
  >
    <Tab.Screen name="Dashboard" component={DashboardStack} />
    <Tab.Screen name="Airport" component={Profile} /> {/* Replace with actual component */}
    <Tab.Screen name="Map" component={Notifications} /> {/* Replace with actual component */}
  </Tab.Navigator>
);

export default function UserNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

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
