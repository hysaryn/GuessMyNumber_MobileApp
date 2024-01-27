import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox';
import Color from '../components/Color';

export default function Start({name, guessNumber, onStart}) {
    //initialize userName
    const[userName, setUserName] = useState(name);
    const[nameError, setNameError] = useState("");

    //initialize number
    const[number, setNumber] = useState(guessNumber);
    const[numberError, setNumberError] = useState("");

    //initialize checkbox state
    const[isChecked, setIsChecked] = useState(false);

    const validateUserInput = () => {
        let isValid = true;
        setNameError("");
        setNumberError("");

        if (userName.length < 2 || !isNaN(userName)){
            setNameError("Please enter a valid name");
            isValid = false;
        }

        if (isNaN(number) ||number.length !== 4){
            setNumberError("Please enter a valid number")
            isValid = false;
        }

        if (!(parseInt(number)>=1020 && parseInt(number)<=1029)){
            setNumberError("Please enter a valid number")
            isValid = false;
        }

        return isValid;
    };

    const handleReset = () => {
        setUserName("");
        setNameError("");
        setNumber("");
        setNumberError("");
        setIsChecked(false);
    };

    const handleStart = () => {
        if (validateUserInput()) {
            onStart(userName, number);
        }
    };

    return (
        <Color>
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Guess My Number</Text>

            <Card>
                <Input
                    label="Name"
                    value={userName}
                    onChangeText={(data) => setUserName(data)}
                    error={nameError}
                />
                <Input
                    label="Enter a Number"
                    value={number}
                    onChangeText={(data) => setNumber(data)}
                    error={numberError}
                />

                <CheckBox 
                    label = "I am not a robot"
                    checked={isChecked}
                    onChange={setIsChecked}
                />

                <View style={styles.buttonsContainer}>
                    <Button color={'red'} title='Reset' onPress={handleReset} />
                    <Button 
                        color={'blue'} 
                        title='Confirm'
                        disabled={!isChecked} 
                        onPress={handleStart} />
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

    buttonsContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:'10%',
    },

    botton:{
        width:'80%',
        marginVertical:'5%',
    },
})