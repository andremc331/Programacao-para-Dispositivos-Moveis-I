import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import logo from "../assets/images/adaptive-icon.png";

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>
      <View style={styles.bottom}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "column",
  },
  top: {
    flex: 0.5,
    backgroundColor: "crimson",
    flexDirection: "row",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flex: 0.5,
    backgroundColor: "teal",
  },
  right: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
  logo: {
    flex: 1,
    alignSelf: "center",
    width: "80%",
  },
});