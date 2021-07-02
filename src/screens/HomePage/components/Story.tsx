import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

interface StoryProps {
  story: {
    name: string;
    imageUrl: string;
  };
}

export default function Story({ story }: StoryProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: story.imageUrl }} style={styles.avatar} />
      <Text style={styles.title}>
        {" "}
        {story.name.length > 10
          ? story.name.substring(0, 10) + "..."
          : story.name}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  title: {},
});
