import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Theme from '../../utils/theme';
import fonts from '../../utils/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.imageCont}>
        <Image
          source={require('../../assets/profileImage.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.profileName}>Kathrine Langford</Text>

      <View style={styles.cardCont}>
        <View style={styles.row}>
          <Text style={styles.heading}>Registration Type</Text>
          <Text style={styles.headingRight}>CenterView Partner</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Name</Text>
          <Text style={styles.rightTxt}>Kathrine Langford</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Cell Phone</Text>
          <Text style={styles.rightTxt}>+1 2256456585</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Email</Text>
          <Text style={styles.rightTxt}>Example@centerview.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Company</Text>
          <Text style={styles.rightTxt}>Nova international</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Title</Text>
          <Text style={styles.rightTxt}>Multinational</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Work Phone</Text>
          <Text style={styles.rightTxt}>+1 25645555565</Text>
        </View>
        <Text style={styles.bioHeading}>Biography</Text>
        <Text style={styles.bioTxt}>
          General Milley has had multiple command and staff positions in six
          divisions and a Special Forces Group throughout the last 44 years to
          include command of the 1st Battalion, 506th Infantry, 2nd Infantry
          Division; the 2nd Brigade Combat Team, 10th Mountain Division; Deputy
          Commanding General, 101st Airborne Division (Air Assault); Commanding
          General, 10th Mountain Division; Commanding General, III Corps; and
          Commanding General, U.S. Army Forces Command.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {alignItems: 'center'},
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
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profileName: {
    color: Theme.ROLLER_COASTER_BLUE,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.SemiBold,
    marginTop: heightPercentageToDP(1.2),
  },
  cardCont: {
    backgroundColor: Theme.WHITE_COLOR,
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 15,
    paddingVertical: heightPercentageToDP(1.6),
    paddingHorizontal: widthPercentageToDP(5),
    width: widthPercentageToDP(90),
    marginTop: heightPercentageToDP(3.2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(1.5),
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: Theme.JET_COLOR,
    lineHeight: 24,
  },
  headingRight: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Theme.ROLLER_COASTER_BLUE,
  },
  leftTxt: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.SPENISH_GREY,
    lineHeight: 16,
  },
  rightTxt: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.LEAD_COLOR,
    lineHeight: 16,
  },
  bioHeading: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: Theme.JET_COLOR,
    lineHeight: 24,
    marginTop: heightPercentageToDP(0.2),
  },
  bioTxt: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Theme.LEAD_COLOR,
    lineHeight: 18,
    marginTop: heightPercentageToDP(1.5),
    marginBottom: heightPercentageToDP(4),
  },
});
