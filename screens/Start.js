import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox';

export default function Start() {
    //initialize userName
    const[userName, setUserName] = useState("");
    const[nameError, setNameError] = useState("");

    //initialize number
    const[number, setNumber] = useState("");
    const[numberError, setNumberError] = useState("");

    //initialize checkbox state
    const[isChecked, setIsChecked] = useState(false);

    const validateUserInput = () => {
        let isValid = true;

        if (userName.length < 2 || !isNaN(userName)){
            setNameError("Please enter a valid name");
            isValid = false;
        }

        if (!isNaN(number) ||number.length !== 4){
            setNumberError("Please enter a valid number")
            isValid = false;
        }

        if (parseInt(number) > 1029 || parseInt(number)< 1020){
            setNumberError("Please enter a valid number")
            isValid = false;
        }

        return isValid;
    }

    const handleReset = () => {
        setUserName("");
        setNameError("")
        setNumber("");
        setNumberError("")
        setIsChecked(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Guess My Number</Text>

            <Card>
                <View styles={styles.componentView}>
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

                    <View styles={styles.buttonBox}>
                        <Button color={'red'} title='Reset' onPress={handleReset} />
                        <Button 
                            color={'blue'} 
                            title='Confirm'
                            disabled={!isChecked} 
                            onPress={validateUserInput} />
                    </View>

                </View>   
            </Card>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'pink',
        justifyContent:'center',
    },

    header:{
        color: 'purple',
        fontSize:20,
        marginBottom:'5%'
    },

    componentView:{
        flexDirection:'column',
    },

    bottonBox:{
        flexDirection:'row',
    },
})