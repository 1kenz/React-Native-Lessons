import React from "react";
import { View, Text } from "react-native";

export default function Second(props) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Second Page</Text>
      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}
