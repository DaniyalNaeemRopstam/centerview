import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import Theme from '../../utils/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import fonts from '../../utils/fonts';
import Circle from '../../components/backgroundCircle';
import axiosWrapper from '../../services/AxiosWrapper';
import { API_URLS } from '../../services/apiPathList';

export default function Speakers(props?: any) {

  const [loader, setLoader] = useState(false)
  const [speakerData, setSpeakersData] = useState([]);

  useEffect(()=>{
    getSpeakersDetail();
  },[])

  const getSpeakersDetail = async () =>{
    try{
      setLoader(true)
      let response = await axiosWrapper('GET', API_URLS.GET_SPEAKERS);
      setSpeakersData(response);

    }catch(e){
    }finally{
      setLoader(false)
    }

  }

  const renderSpeakers = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.speakerCard}
        onPress={() =>
          props?.navigation?.navigate('SPEAKERSDETAIL', {speaker: {...item, detail:item?.content?.rendered}})
        }>
        <Image source={{uri:item?.jetpack_featured_media_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'  }} style={styles.speakerImg} />
        <Text style={styles.speakerName} numberOfLines={2}>{item?.title?.rendered}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Circle />
      
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatListStyle}
        renderItem={renderSpeakers}
        data={speakerData}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListEmptyComponent={loader ? <ActivityIndicator size={'large'} color={'black'}  /> : <Text>No Speaker found</Text>}
      />
      
    </>
  );
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginTop: heightPercentageToDP(12),
    paddingTop: heightPercentageToDP(3),

  },
  contentContainerStyle:{
    paddingBottom:heightPercentageToDP(3)

  },
  columnWrapperStyle: {
    flexWrap: 'wrap',
    paddingHorizontal: widthPercentageToDP(4),
    columnGap: widthPercentageToDP(7),
  },
  speakerCard: {
    width: widthPercentageToDP(25.9),
    height:heightPercentageToDP(16),
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1.6),
    marginBottom: heightPercentageToDP(2.5),
    shadowColor: Theme.PANTON_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 3,
  },
  speakerImg: {width: 60, height: 60, borderRadius: 60 / 2},
  speakerName: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Theme.JET_COLOR,
    marginTop: 6,
    width: widthPercentageToDP(15),
    textAlign: 'center',
  },
});
