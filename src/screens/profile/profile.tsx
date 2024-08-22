import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Theme from '../../utils/theme';
import fonts from '../../utils/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

export default function Profile() {

  const user = useSelector((state:any) => state.login.user);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.imageCont}>
        <Image
          source={{uri: user?.profile_img ||  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <Text style={styles.profileName}>{user?.displayName || '-'}</Text>

      <View style={styles.cardCont}>
        <View style={styles.row}>
          <Text style={styles.heading}>Registration Type</Text>
          <Text style={styles.headingRight}>{user?.registration_type || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Name</Text>
          <Text style={styles.rightTxt}>{user?.displayName || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Cell Phone</Text>
          <Text style={styles.rightTxt}>{user?.cell_phone || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Email</Text>
          <Text style={styles.rightTxt}>{user?.email || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Company</Text>
          <Text style={styles.rightTxt}>{user?.company || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Title</Text>
          <Text style={styles.rightTxt}>{user?.title || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftTxt}>Work Phone</Text>
          <Text style={styles.rightTxt}>{user?.work_phone || '-'}</Text>
        </View>
        <Text style={styles.bioHeading}>Biography</Text>
        <Text style={styles.bioTxt}>
          {user?.biography}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {alignItems: 'center'},
  imageCont: {
    width:widthPercentageToDP(30),
    height:widthPercentageToDP(30),
    borderWidth: widthPercentageToDP(1),
    borderColor: Theme.WHITE_OUT,
    borderRadius: 100,
    shadowColor: Theme.BLACK_COLOR,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop:10 
  },
  image: {
    width: widthPercentageToDP(28),
    height: widthPercentageToDP(28),
    borderRadius: widthPercentageToDP(30) / 2,
  },
  profileName: {
    color: Theme.BLACK_COLOR,
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
    fontSize: widthPercentageToDP(4),
    // fontSize:16,
    fontFamily: fonts.SemiBold,
    color: Theme.JET_COLOR,
    lineHeight: 24,
  },
  headingRight: {
    fontSize:  widthPercentageToDP(3.5),
    // fontSize:14,
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
