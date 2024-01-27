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

  return (
    <View style={styles.container}>
      {screen === 'start'? 
          <Start 
            name={name} 
            guessNumber={number} 
            onStart={(name, number) => {setName(name); setNumber(number); setScreen('game')}}/> 
          : (screen === 'game'? 
              <Game 
                name={name} 
                guessNumber={number}
                setScreen={setScreen} /> 
              : <Final />)}

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
