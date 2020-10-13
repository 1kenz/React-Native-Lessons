/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';


//! Functional component
// export default const App = (props) =>{ // bu şekilde de export yapılabilir
const App = (props) => {
  //?      var      function
  const [counter, setCounter] = useState(0);
  // alert("Render component...");
  const updateCounter = () => setCounter(counter + 1);


  return (
    <SafeAreaView>
      <View>
        {/* <Text>Merhaba Fullstack</Text>
        <Text>Functional Component a Hoş geldiniz!</Text> */}
        <Text style={{ fontSize: 100, textAlign: "center", justifyContent: "center" }}>{counter}</Text>

        <Button
          style={{ margin: 10, padding: 5, width: 200, }}
          title="Up!"
          onPress={updateCounter}
        />

      </View>
    </SafeAreaView>
  )
}

export default App;
