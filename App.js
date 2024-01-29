import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import Start from './screens/Start';
import Game from './screens/Game';
import Final from './screens/Final';


export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [screen, setScreen] = useState('start');

  const [gameState, setGameState] = useState('');
  const [hint, setHint] = useState('');
  const [guessCountLeft, setGuessCountLeft] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleGame= (name, number) => {
      setName(name); 
      setNumber(number);

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
      setScreen('game');
      setModalVisible(true);
      };

      const reset = () => {
        setName("");
        setNumber("");
        setGuessCountLeft(3);
        setDisabled(false);
        setScreen('start');
      }

  return (
    <View style={styles.container}>
      {screen === 'start'? 
          <Start 
            name={name} 
            guessNumber={number}
            onStart={(name, number)=> handleGame(name, number)}/> 
          : (screen === 'game'? 
              <Game 
                name={name} 
                guessNumber={number}
                gameState={gameState}
                hint={hint}
                guessCountLeft={guessCountLeft}
                tryAgainDisabled={disabled}
                setScreen={setScreen}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} /> 
              : <Final
                guessNumber={number}
                reset={reset}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    color:"purple",
  },
});
