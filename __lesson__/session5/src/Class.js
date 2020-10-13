/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

//! Class component
// class App extends React.Component {
// bu şekilde de yazılabiliyor {Component} yazmadan
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    // alert("Render component...");

    return (
      <SafeAreaView>
        <View>
          {/* <Text>Merhaba Fullstack</Text>
          <Text>Class Component a Hoş geldiniz!</Text> */}
          <Text style={{ fontSize: 100, textAlign: "center" }}>{this.state.counter}</Text>
          <TouchableOpacity
            onPress={() => this.setState({
              counter: this.state.counter + 1
            })}>
            <Text style={{ fontSize: 30, textAlign: "center", backgroundColor: "#283593", color: "white", margin: 20, padding: 10, borderRadius: 10, width: 250, height: 60, alignSelf: "center" }}>Gönder</Text>
          </TouchableOpacity>
          {/* <Button
            title="Up!"
            onPress={() => this.setState({
              counter: this.state.counter + 1
            })}
          /> */}
        </View>
      </SafeAreaView>
    )
  }
}

export default App;
