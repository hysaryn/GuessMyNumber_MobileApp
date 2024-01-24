import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'

export default function Start() {
    //initialize userName
    const[userName, setUserName] = useState("");

    //iniitalize number
    const[number, setNumber] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Guess My Number</Text>

            <Card>
                <Input
                    label="Name"
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <Input
                    label="Guess a Number"
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                />
                
            </Card>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        justifyContent:'center',
    },

    header:{
        color: 'purple',
        fontSize:20,
        marginBottom:'5%'
    }
})