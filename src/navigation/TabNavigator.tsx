import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import BottomNav from "../layout/BottomNav";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="search" component={HomeScreen} />
      <Tab.Screen name="plus-square" component={HomeScreen} />
      <Tab.Screen name="shopping-bag" component={HomeScreen} />
      <Tab.Screen name="user" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
