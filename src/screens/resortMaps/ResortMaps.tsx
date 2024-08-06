import { Image, ImageComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Maps from '../../assets/Maps2.png'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ResortMaps = () => {
    return (
        <ReactNativeZoomableView
            maxZoom={5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            style={styles.imageContainer}
            contentHeight={heightPercentageToDP(50)}
        >
            <Image
                source={Maps}
                style={styles.img}
                resizeMode='contain'
            />
        </ReactNativeZoomableView>
    )
}

export default ResortMaps

const styles = StyleSheet.create({
    imageContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:widthPercentageToDP(100),
    },
    img: {
        width: '100%',
        height:'100%',
    }
})