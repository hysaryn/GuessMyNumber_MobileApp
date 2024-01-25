import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

export default function Color({children}) {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.background}>
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
    }
})