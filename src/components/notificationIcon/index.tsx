import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notification from '../../assets/SVG/notification'
import RedDot from '../../assets/SVG/redDot'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Theme from '../../utils/theme'

const NotificationsIcon = ({ notifications }: any) => {
  return (
    <View style={styles.container}>
      {notifications > 0 &&
        <RedDot style={styles.dot} />
      }
      <View style={styles.notificationShadow}>
        <Notification />
      </View>
    </View>
  )
}

export default NotificationsIcon

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    right: widthPercentageToDP(0.5),
    zIndex: 1
  },
  notificationShadow: {
    shadowColor: Theme.BLACK_COLOR,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 50,
    elevation: 5,
  },
})