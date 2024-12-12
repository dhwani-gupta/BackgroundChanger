import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [randomColor, setrandomColor] = useState('#ffffff'); // background color change state
  const [butrandomColor, setbutrandomColor] = useState('#ffffff'); // press me button color chnage state
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    let buttonClr = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.round(Math.random() * 16)]
      console.log(color);

    }
    for (let i = 0; i < 6; i++) {
      buttonClr += hexRange[Math.round(Math.random() * 16)]
      console.log(buttonClr);
    }
    if (color != buttonClr) {
      setrandomColor(color)
      setbutrandomColor(buttonClr)
    }
    // setrandomColor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity
          style={[styles.colorButton, {backgroundColor: butrandomColor}]}
          onPress={generateColor}
        >
          <Text style={styles.colorButtonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorButton: {
    backgroundColor: 'white',
    // padding:10,
    // paddingRight:20,
    // paddingLeft:20,
    // paddingTop:10,
    // paddingBottom:10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,

  },
  colorButtonText: {
    fontSize: 20
  },
});
