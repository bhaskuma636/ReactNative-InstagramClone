import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Icon } from "react-native-elements";

interface BottomNavProps {}

export default function BottomNav({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Icon
            key={index}
            name={route.name}
            type="font-awesome-5"
            size={20}
            {...{ onPress, onLongPress }}
            color={isFocused ? "#000" : "#a6a3a2"}
          />
        );
      })}
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
