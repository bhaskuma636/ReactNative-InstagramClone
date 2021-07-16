import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../layout/Header";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...{ props }} />,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
