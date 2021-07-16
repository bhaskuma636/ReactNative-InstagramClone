import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

interface HomeScreenProps {}

export default function HomeScreen() {
  return (
    <ScrollView>
      <Stories />

      <Posts />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
