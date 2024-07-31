import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const AirportTransfer = () => {
    return (
            <WebView
                source={{ uri: 'https://reactnative.dev/' }}
                style={{ flex: 1 }}
            />
    )
}

export default AirportTransfer

const styles = StyleSheet.create({})