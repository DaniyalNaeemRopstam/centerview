import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Theme from '../../utils/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import NotificationLeftIcon from '../../assets/SVG/notificationLeftIcon';
import moment from 'moment';
import fonts from '../../utils/fonts';
import NoNotifications from '../../assets/SVG/noNotifications';
import { NOTIFICATION_CONTEXT } from '../../../App';

export default function Notifications() {

  const {notificaitonData,setNotificaitonData} = useContext(NOTIFICATION_CONTEXT)

  const formatDate = (date: string) => {
    const now = moment();
    const notificationDate = moment(date);
    const diffMinutes = now.diff(notificationDate, 'minutes');
    const diffHours = now.diff(notificationDate, 'hours');
    const diffDays = now.diff(notificationDate, 'days');

    if (diffMinutes < 1) {
      return 'Just now';
    } else if (diffMinutes < 60) {
      return `${diffMinutes} mins ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return moment(date).format('DD MMM, YYYY');
    }
  };

  const handleNotificaiton = (id:any)=>{
    
    setNotificaitonData((prevData:any) => 
      prevData.map((notification:any) => 
          notification.activity_id === id 
              ? { ...notification, is_read: true } 
              : notification
      )
  );
  }

 
  const renderNotifications = ({item, index}: any) => {
    return (
      <TouchableOpacity key={index} style={styles.notificationCont} onPress={()=> handleNotificaiton(item.activity_id)} >
        <NotificationLeftIcon />

        <View style={styles.notificationInnerCont}>
          <View style={styles.titleDateCont}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.date}>{formatDate(item.date)}</Text>
          </View>
          <View style={styles.notificationInnerCont2}>
            <Text style={styles.message}>{item?.notification}</Text>
            {!item?.is_read && <View style={styles.notificationRead} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {notificaitonData.length > 0 ? (
        <FlatList
          data={notificaitonData}
          renderItem={renderNotifications}
          contentContainerStyle={styles.contentContainerStyle}
        />
      ) : (
        <View style={styles.noNotificationCont}>
          <NoNotifications />
          <Text style={styles.noNotificationHeding}>No Notifications</Text>
          <Text style={styles.noNotificationTxt}>
            {`Stay tuned! We'll notify you when there is\nsomething new.`}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: heightPercentageToDP(2),
    paddingBottom: heightPercentageToDP(5),
  },
  notificationCont: {
    backgroundColor: Theme.WHITE_COLOR,
    width: widthPercentageToDP(90),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.2),
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: 'row',
    borderRadius: 15,
    gap: 10,
  },
  notificationInnerCont: {flex: 1},
  titleDateCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: Theme.JET_COLOR,
    lineHeight: 24,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.SPENISH_GREY,
    lineHeight: 16,
  },
  notificationInnerCont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationRead: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: Theme.RED_RIDING_HOOD,
  },
  message: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.SPENISH_GREY,
    lineHeight: 16,
    width:'90%',
  },
  noNotificationCont: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noNotificationHeding: {
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    color: Theme.ROLLER_COASTER_BLUE,
    lineHeight: 28,
    marginTop: heightPercentageToDP(3.3),
  },
  noNotificationTxt: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.JET_COLOR,
    lineHeight: 16,
    marginTop: heightPercentageToDP(0.6),
    textAlign: 'center',
  },
});
