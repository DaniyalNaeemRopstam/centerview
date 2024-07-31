import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Maps from '../../assets/Maps.png'

const ResortMaps = () => {
    return (
            <Image
                source={Maps}
                style={{ flex: 1,backgroundColor:'red', width:'100%' }}
                resizeMode='cover'
            />
    )
}

export default ResortMaps

const styles = StyleSheet.create({})