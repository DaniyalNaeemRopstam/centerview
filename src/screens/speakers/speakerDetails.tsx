import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Theme from '../../utils/theme';
import Circle from '../../components/backgroundCircle';
import fonts from '../../utils/fonts';

export default function SpeakerDetails(props?: any) {
  const speakerDetail = props?.route?.params?.speaker;
  return (
    <>
      <Circle />
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.imageCont}>
          <Image source={speakerDetail?.image} style={styles.image} />
        </View>
        <Text style={styles.name}>{speakerDetail?.name}</Text>
        <Text style={styles.detail}>{speakerDetail?.detail}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {marginTop: heightPercentageToDP(12), flex: 1},
  contentContainerStyle: {
    paddingTop: heightPercentageToDP(1.2),
    alignItems: 'center',
    paddingBottom: heightPercentageToDP(5),
  },
  imageCont: {
    borderWidth: 4,
    borderColor: Theme.WHITE_OUT,
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 100,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 126 / 2,
  },
  name: {
    marginTop: heightPercentageToDP(1.4),
    color: Theme.JET_COLOR,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  detail: {
    fontSize: 12,
    color: Theme.JET_COLOR,
    fontFamily: fonts.Regular,
    width: widthPercentageToDP(90),
    marginTop: heightPercentageToDP(1.2),
  },
});
