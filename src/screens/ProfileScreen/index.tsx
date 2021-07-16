import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";

interface ProfileProps {}

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.topContainer }}>
        <Image
          source={{
            uri: "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49906797_380124925925082_1601135169106870272_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=637wdSBqFN8AX_JIamb&tn=hVRdPgI3BYoFMwoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=586f31310773ed590c3ddcf7efdc2b0a&oe=60E59D72&_nc_sid=7bff83",
          }}
          style={{ ...styles.image }}
        />
        <View style={{ ...styles.statusContainer }}>
          <View style={{ ...styles.status }}>
            <Text> 25 </Text>
            <Text> Posts</Text>
          </View>
          <View style={{ ...styles.status }}>
            <Text> 994 </Text>
            <Text> Followers</Text>
          </View>
          <View style={{ ...styles.status }}>
            <Text> 524 </Text>
            <Text> Following</Text>
          </View>
        </View>
      </View>

      <View style={{ ...styles.bioContainer }}>
        <Text style={{ ...styles.bioText }}>Fatih Kayan</Text>
        <Text style={{ ...styles.bioText, ...styles.lightText }}>
          Personal Blog
        </Text>
        <Text style={{ ...styles.bioText }}>❤️Mustafa Kemal Atatürk❤️</Text>
        <Text style={{ ...styles.bioText }}>Denizli / Burdur</Text>
        <Text style={{ ...styles.bioText }}>AAL 🎓</Text>
        <Text style={{ ...styles.bioText }}>MAKU</Text>
        <Text style={{ ...styles.bioText }}>
          Electrical and Electronics Engineering
        </Text>
        <Text style={{ ...styles.bioText }}>Junior software developer 💻</Text>
      </View>

      <View>
        <Button title="Edit Profile" type="outline" />
        <View style={{ ...styles.buttonContainer }}>
          <Button title="Promotions" type="outline" />
          <Button title="Insights" type="outline" />
          <Button title="Contact" type="outline" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginRight: 40,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    alignItems: "center",
  },

  bioContainer: { marginVertical: 15 },
  bioText: {
    fontSize: 13,
  },
  lightText: {
    color: "#8E8E8E",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
