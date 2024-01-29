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
                <View style={styles.cardContainer}>
                    <Text style={styles.cardHeader}>Here's your picture:</Text>
                    {parseInt(guessNumber) === 1024?
                    <Image 
                        source={{
                            uri: "https://picsum.photos/id/1024/100/100",}}
                        style={styles.image}/> :
                    <Image 
                        source={require("../assets/sad-face.jpeg")}
                        style={styles.image}/>}
                    <Button 
                        color='blue'
                        title='Start Again' 
                        onPress={reset}
                        style={styles.button} />
                </View>
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

    cardHeader:{
        color: 'darkblue',
        fontSize:20,
        marginBottom:'10%'
    },

    image: {
        width: 200,
        height: 200,
        alignSelf:'center',
      },

    cardContainer:{
        flexDirection:'column',
        alignSelf:'center',
        marginTop:'10%',
    }
})