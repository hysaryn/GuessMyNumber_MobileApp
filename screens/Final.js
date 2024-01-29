import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../components/Color'

export default function Final({setScreen, reset}) {

    return (
        <Color>
        <SafeAreaView style={styles.container}>
        <Button title='Start Again' onPress={reset} />
        </SafeAreaView>
        </Color>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
})