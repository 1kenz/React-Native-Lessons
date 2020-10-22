import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Selamlar!</Text>
      <Text style={styles.text}>Clarusway App'e hoşgeldiniz!</Text>

      <View>
        <Text style={styles.text}>Fullstack Developer olmaya hazır olun!</Text>
      </View>
    </View>

  )
}

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    margin:5,
    padding: 10,
    borderColor:"#e0e0e0",
    borderWidth:2,
    borderRadius:10,
  },
  text: {
    color:"white",
  }
});