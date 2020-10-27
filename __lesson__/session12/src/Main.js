import React from "react";
import { SafeAreaView } from "react-native";

import Component_A from "./pages/Component_A";
import Component_B from "./pages/Component_B";

const Main = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Component_A />
      <Component_B />
    </SafeAreaView>
  );
};

export default Main;
