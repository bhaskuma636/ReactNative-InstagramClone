import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import BottomNav from "./BottomNav";

interface MainLayoutProps {}

export default function MainLayout({ children }: any) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>{children}</ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({});
