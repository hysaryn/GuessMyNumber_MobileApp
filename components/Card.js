import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#B8B8B8',
        width:'80%',
        borderRadius:10,
        padding:12,
        alignItems: 'flex-start',
        marginBottom:'30%',
        //IOS shadow:
        shadowColor:'gray',
        shadowOffset: {width:5, height:5},
        shadowRadius:6,
        shadowOpacity:2,
        //Andriod shadow:
        elevation: 5,
    }
})