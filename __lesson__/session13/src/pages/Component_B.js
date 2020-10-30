import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Component_B = () => {
  const newNumber = useSelector((huhu) => huhu.number);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <Text style={{ fontSize: 30 }}>Component_B</Text>
      <Text style={{ fontSize: 30 }}>Number: {newNumber}</Text>
      <Button onPress={() => dispatch({ type: "square" })} title="Kare" />
    </View>
  );
};

export default Component_B;
