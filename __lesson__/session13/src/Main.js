import React from "react";
import { View, Text } from "react-native";

import Component_A from "./pages/Component_A";
import Component_B from "./pages/Component_B";

import initialState from "./context/store";
import reducer from "./context/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, initialState);

const Main = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Component_A />
        <Component_B />
      </View>
    </Provider>
  );
};

export default Main;
