import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

const Component_A = () => {
  const dispatch = useDispatch();
  const newNumber = useSelector((huhu) => huhu.number);
  const aaa = useSelector((huhu) => huhu.userName);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <TouchableOpacity
        style={[{ backgroundColor: "gray" }]}
        onPress={() => dispatch({ type: "orange" })}>
        <Text style={{ fontSize: 30 }}>Buton</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>number:{newNumber}</Text>
      <Text style={{ fontSize: 30 }}>User Name: {aaa}</Text>
    </View>
  );
};

export default Component_A;
