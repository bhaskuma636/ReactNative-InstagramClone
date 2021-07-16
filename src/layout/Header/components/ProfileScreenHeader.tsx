import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { BottomSheet, Icon, Image, ListItem } from "react-native-elements";

interface ProfileScreenHeaderProps {}
const { width } = Dimensions.get("window");
export default function ProfileScreenHeader() {
  const [state, setState] = useState({
    isVisible: false,
  });
  const handleSwitchAccount = () => {
    setState({
      isVisible: !state.isVisible,
    });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSwitchAccount}>
        <View style={{ ...styles.leftContainer }}>
          <Text style={{ ...styles.name }}>fatihkayan20</Text>
          <Icon name="angle-down" type="font-awesome-5" size={20} />
        </View>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Icon
          name="plus-square"
          type="font-awesome-5"
          size={20}
          style={styles.button}
        />
        <Icon
          name="bars"
          type="font-awesome-5"
          size={20}
          style={styles.button}
        />
      </View>

      <BottomSheet
        isVisible={state.isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
        modalProps={{
          animationType: "slide",
        }}
      >
        <ListItem onPress={handleSwitchAccount}>
          <ListItem.Content style={{ ...styles.listItemContainer }}>
            <View style={{ ...styles.listItemLeftContainer }}>
              <Image
                source={{
                  uri: "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49906797_380124925925082_1601135169106870272_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=637wdSBqFN8AX_JIamb&tn=hVRdPgI3BYoFMwoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=586f31310773ed590c3ddcf7efdc2b0a&oe=60E59D72&_nc_sid=7bff83",
                }}
                style={{ ...styles.image }}
              />
              <ListItem.Title>fatihkayann20</ListItem.Title>
            </View>
            <View style={{ ...styles.activeDot }} />
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={handleSwitchAccount}>
          <ListItem.Content style={{ ...styles.listItemContainer }}>
            <View style={{ ...styles.listItemLeftContainer }}>
              <Icon name="plus-circle" type="font-awesome-5" size={37} />
              <ListItem.Title>Add a new account</ListItem.Title>
            </View>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
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
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  name: {
    lineHeight: 40,
    fontSize: 18,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 5,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemLeftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  activeDot: {
    borderRadius: 100,
    padding: 5,
    borderWidth: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderColor: "blue",
  },
});
