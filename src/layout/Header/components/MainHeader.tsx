import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon, Image } from "react-native-elements";

interface MainHeaderProps {}

const { width } = Dimensions.get("window");
export default function MainHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png",
        }}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <Icon
          name="heart"
          size={20}
          type="font-awesome-5"
          style={styles.button}
        />
        <Icon name="send" size={20} type="font-awesome" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "#757575",
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 5,
  },
});
