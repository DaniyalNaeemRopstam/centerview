import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Theme from '../../utils/theme';
import Circle from '../../components/backgroundCircle';
import fonts from '../../utils/fonts';
import HTML from 'react-native-render-html';

export default function SpeakerDetails(props?: any) {
  const speakerDetail = props?.route?.params?.speaker;
  const { width } = useWindowDimensions();
  return (
    <>
      <Circle />
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.imageCont}>
          <Image source={{uri:speakerDetail?.jetpack_featured_media_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}} style={styles.image} />
        </View>
        <Text style={styles.name}>{speakerDetail?.name}</Text>
        {/* <Text style={styles.detail}>{speakerDetail?.detail}</Text> */}
        <View style={styles.detail}>
          <HTML source={{ html: speakerDetail?.detail }} contentWidth={width}/>
        </View>

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
    borderRadius: 100,
    shadowColor: Theme.BLACK_COLOR,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
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
