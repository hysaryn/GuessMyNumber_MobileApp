import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Start() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guess My Number</Text>
      <Card />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },

    header:{
        color: 'purple',
        fontSize:20,
        marginBottom:'5%'
    }
})