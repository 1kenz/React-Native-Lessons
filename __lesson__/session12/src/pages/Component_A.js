import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Component_A = (props) => {

  return (
    <View style={{ backgroundColor: "#eceff1", flex: 1 }}>
      <Text>Component_A</Text>
    </View>
  );
};

export default Component_A;
