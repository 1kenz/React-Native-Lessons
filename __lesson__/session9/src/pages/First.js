import React from "react";
import { View, Text, Button } from "react-native";

export default function First(props) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>First Page</Text>
      <Button
        title="Second Page"
        onPress={() => props.navigation.navigate("SecondPage")}
      />
    </View>
  );
}
