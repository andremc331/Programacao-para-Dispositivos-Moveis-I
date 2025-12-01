import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Constants from "expo-constants";
import logo from "../assets/images/adaptive-icon.png";

export default function Cinco() {
  const handlePress = () => {
    Alert.alert("Boa noite!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 64,
    height: 64,
    margin: 10,
  },
});