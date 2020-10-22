// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import First from "./src/pages/First";
import Second from "./src/pages/Second";

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // initialRouteName="SecondPage"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Tab.Screen
          name="FirstPage"
          component={First}
          options={{ title: "Gönderilen" }}
        />
        <Stack.Screen name="SecondPage" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
