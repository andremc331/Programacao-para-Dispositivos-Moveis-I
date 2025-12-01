import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>
      <View style={styles.bottom}></View>
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
  },
  left: {
    flex: 0.5,
    backgroundColor: "teal",
  },
  right: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
});