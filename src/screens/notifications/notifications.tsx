import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../utils/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import NotificationLeftIcon from '../../assets/SVG/notificationLeftIcon';
import moment from 'moment';
import fonts from '../../utils/fonts';
import NoNotifications from '../../assets/SVG/noNotifications';

export default function Notifications() {
  const [notifications] = useState([
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-17T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-04T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-02T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-29T00:00:00.000Z',
      isRead: false,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-13T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-01T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-29T00:00:00.000Z',
      isRead: false,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-11T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-27T00:00:00.000Z',
      isRead: true,
    },
    {
      title: 'New Activity Organized',
      message: 'Your statement is ready for you to...',
      date: '2024-07-21T00:00:00.000Z',
      isRead: true,
    },
  ]);

  const sortedNotifications = notifications.sort((a, b) =>
    moment(b.date).diff(moment(a.date)),
  );

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

  const renderNotifications = ({item, index}: any) => {
    return (
      <View key={index} style={styles.notificationCont}>
        <NotificationLeftIcon />

        <View style={styles.notificationInnerCont}>
          <View style={styles.titleDateCont}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.date}>{formatDate(item.date)}</Text>
          </View>
          <View style={styles.notificationInnerCont2}>
            <Text style={styles.message}>{item?.message}</Text>
            {!item?.isRead && <View style={styles.notificationRead} />}
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {sortedNotifications.length > 0 ? (
        <FlatList
          data={sortedNotifications}
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
