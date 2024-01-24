import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input({label, value, onChangeText}) {

  return (
    <View style={styles.container}>
      <Text style={styles.inputHeader}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginBottom:'15%',
    },

    input:{
        width:'100%',
        borderBottomColor:'blue',
        borderBottomWidth:2,
        fontSize: 18,
        color: 'blue',
        textAlign:'center',
        paddingBottom:8,
    },

    inputHeader:{
        color: 'blue',
        fontSize: 18,
        alignSelf:'flex-start',
        marginBottom: '10%',
    },


})