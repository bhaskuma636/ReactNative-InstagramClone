import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

interface HomeScreenProps {}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Stories />

        <Posts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
