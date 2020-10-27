import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Component_B = (props) => {

  return (
    <View style={{ backgroundColor: "#bdbdbd", flex: 1 }}>
      <Text>Component_B</Text>
    </View>
  );
};

export default Component_B;
