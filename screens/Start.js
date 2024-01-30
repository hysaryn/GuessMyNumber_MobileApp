import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox';
import Color from '../components/Color';
import Game from './Game';

export default function Start({name, guessNumber, setGuessNumber, countLeft, guessDisabled, screen}) {
    //initialize userName
    const[userName, setUserName] = useState(name);
    const[nameError, setNameError] = useState("");

    //initialize number
    const[number, setNumber] = useState(guessNumber);
    const[numberError, setNumberError] = useState("");

    //initialize checkbox state
    const[isChecked, setIsChecked] = useState(false);

    //initialize game state
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [gameState, setGameState] = useState('');
    const [hint, setHint] = useState('');
    const [guessCountLeft, setGuessCountLeft] = useState(countLeft);
    const [disabled, setDisabled] = useState(guessDisabled);

    const validateUserInput = () => {
        let isValid = true;
        setNameError("");
        setNumberError("");

        //set name error if it is numeric or it is only one character
        if (userName.length < 2 || !isNaN(userName)){
            setNameError("Please enter a valid name");
            isValid = false;
        }

        //set number error if the input is not a number or length is not 4
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
            handleGame(userName, number);
        }
    };

    const handleGame= (name, number) => {
        setUserName(name); 
        setNumber(number);
        //send guess number back to app
        setGuessNumber(number);
  
        if (parseInt(number) === 1024){
          setGameState('won');
        } else {
          setGameState('fail');
          if (parseInt(number) > 1024){
            setHint('Guess Lower!');
          } else {
            setHint('Guess Higher!');
          }
        };
  
        setGuessCountLeft(guessCountLeft - 1);
        if (guessCountLeft === 1){
          setDisabled(true);
        }

        setIsModalVisible(true);
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
            <Game
                name={userName} 
                guessNumber={number}
                gameState={gameState}
                hint={hint}
                guessCountLeft={guessCountLeft}
                setCheckBox={setIsChecked}
                tryAgainDisabled={disabled}
                gameScreen={screen}
                modalVisible={isModalVisible}
                setModalVisible={setIsModalVisible} />
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