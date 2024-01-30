import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input({label, value, onChangeText, error}) {

  return (
    <View style={styles.container}>
      <Text style={styles.inputHeader}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginBottom:'15%',
    },

    input:{
        width:250,
        borderBottomColor:'blue',
        borderBottomWidth:2,
        alignSelf:'flex-start',
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

    errorMessage: {
      color:'dimgrey',
      fontSize: 18,
    }
})