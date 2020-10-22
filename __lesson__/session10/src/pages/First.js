import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function First(props) {
  const [userName, setUserName] = useState("");
  const number = 22;

  return (
    <View>
      <Text style={{ fontSize: 40 }}>First</Text>
      <Text style={{ fontSize: 40 }}>{number}</Text>
      <TextInput value={userName} onChangeText={(text) => setUserName(text)} />
      <Button
        title="Second Page"
        onPress={() =>
          props.navigation.navigate("SecondPage", {
            myNumber: number,
            name: "ken",
            selectedValue: userName,
          })
        }
      />
    </View>
  );
}
