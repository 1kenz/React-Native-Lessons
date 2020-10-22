import React from "react";
import { View, Text, Button } from "react-native";

export default function Second(props) {
  const userNumber = props.route.params.myNumber;
  const userName = props.route.params.name;
  const userNameValue = props.route.params.selectedValue;
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Second Page</Text>
      <Text style={{ fontSize: 40 }}>Number: {userNumber}</Text>
      <Text style={{ fontSize: 40 }}>Name Value: {userNameValue}</Text>
      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}
