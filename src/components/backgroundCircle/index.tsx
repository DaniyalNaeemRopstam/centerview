import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Theme from '../../utils/theme';

export default function Circle() {
  return <View style={styles.circle} />;
}

const styles = StyleSheet.create({
  circle: {
    top: heightPercentageToDP(-20),
    left: widthPercentageToDP(-63),
    width: 508,
    height: 508,
    borderRadius: 508 / 2,
    position: 'absolute',
    backgroundColor: Theme.ROLLER_COASTER_BLUE_LIGHT,
  },
});
