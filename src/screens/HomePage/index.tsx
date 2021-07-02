import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../../layout";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

interface HomePageProps {}

export default function HomePage() {
  return (
    <MainLayout>
      <Stories />

      <Posts />
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
