import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Maps from '../../assets/Maps1.jpg'

const ResortMaps = () => {
    return (
            <Image
                source={Maps}
                style={{ flex: 1, width:'100%' }}
                resizeMode='stretch'
            />
    )
}

export default ResortMaps

const styles = StyleSheet.create({})