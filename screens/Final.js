import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Card from '../components/Card'

export default function Final({guessNumber, reset}) {

    return (
        <Color>
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Game is Over</Text>
            <Card>
                {parseInt(guessNumber) === 1024?
                <Image 
                    source={{
                        uri: "https://picsum.photos/id/1024/100/100",}}
                    style={styles.image}/> :
                <Image 
                    source={require("../assets/sad-face.jpeg")}
                    style={styles.image}/>}
                <Button title='Start Again' onPress={reset} />
            </Card>
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

    header:{
        color: 'darkblue',
        fontSize:24,
        marginBottom:'10%'
    },

    image: {
        width: 100,
        height: 100
      },
})