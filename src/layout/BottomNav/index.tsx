import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Icon } from "react-native-elements";

interface BottomNavProps {}

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <Icon name="home" type="font-awesome-5" size={20} />
      <Icon name="search" type="font-awesome-5" size={20} />
      <Icon name="plus" type="font-awesome-5" size={20} />
      <Icon name="shopping-bag" type="font-awesome-5" size={20} />
      <Avatar
        rounded
        source={{
          uri: "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49906797_380124925925082_1601135169106870272_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=637wdSBqFN8AX_JIamb&tn=hVRdPgI3BYoFMwoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=586f31310773ed590c3ddcf7efdc2b0a&oe=60E59D72&_nc_sid=7bff83",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.2,
    borderTopColor: "#757575",
    padding: 15,
  },
});
