import React from "react";
import { StyleSheet, View } from "react-native";

import MainHeader from "./components/MainHeader";
import ProfileScreenHeader from "./components/ProfileScreenHeader";

interface HeaderProps {}

export default function Header(props: any) {
  const index = props.props?.scene?.route?.state?.index;
  return <View>{index === 4 ? <ProfileScreenHeader /> : <MainHeader />}</View>;
}

const styles = StyleSheet.create({});
