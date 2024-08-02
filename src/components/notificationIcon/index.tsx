import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notification from '../../assets/SVG/notification'
import RedDot from '../../assets/SVG/redDot'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const NotificationsIcon = ({notifications}:any) => {
  return (
    <View style={styles.container}>
    { notifications > 0 &&
        <RedDot style={styles.dot}/>
    }
      <Notification />
    </View>
  )
}

export default NotificationsIcon

const styles = StyleSheet.create({
    container:{
        position:'relative',
    },
    dot:{
        position:'absolute',
        right:widthPercentageToDP(0.5),
        zIndex:1
    }
})