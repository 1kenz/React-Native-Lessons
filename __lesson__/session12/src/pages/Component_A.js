import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Component_A = (props) => {
  const myCounter = useSelector((globalState) => globalState.counter);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: "#eceff1",
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
      }}>
      <Text
        style={{
          textAlign: "left",
        }}>
        Component_A
      </Text>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
        }}>
        Counter: {myCounter}
      </Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
      />
    </View>
  );
};

export default Component_A;
