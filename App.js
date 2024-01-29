import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import Start from './screens/Start';
import Final from './screens/Final';

export default function App() {
  //initialize name and number
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [screen, setScreen] = useState('start');
  const [guessCountLeft, setGuessCountLeft] = useState(3);
  const [disabled, setDisabled] = useState(false);

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
            setGuessNumber={setNumber}
            countLeft={guessCountLeft}
            guessDisabled={disabled}
            screen={setScreen}/> 
          : <Final
              guessNumber={number}
              reset={reset}/>}
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
