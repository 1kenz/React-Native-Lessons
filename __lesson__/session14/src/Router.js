import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Favorites, Restaurants } from "./pages";

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorite" component={Favorites} />
        <Tab.Screen name="Restaurant" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
