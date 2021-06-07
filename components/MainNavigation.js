import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ResultScreen from "../screens/ResultScreen";
import Animals from "../screens/categories/Animals";
import Books from "../screens/categories/Books";
import Comp from "../screens/categories/Comp";
import Geo from "../screens/categories/Geo";
import GK from "../screens/categories/GK";
import Vehicles from "../screens/categories/Vehicles";
import Movies from "../screens/categories/Movies";
import Sports from "../screens/categories/Sports";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen name="Animals" component={Animals} />
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Comp" component={Comp} />
      <Stack.Screen name="Geo" component={Geo} />
      <Stack.Screen name="GK" component={GK} />
      <Stack.Screen name="Vehicles" component={Vehicles} />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Sports" component={Sports} />
    </Stack.Navigator>
  );
}
