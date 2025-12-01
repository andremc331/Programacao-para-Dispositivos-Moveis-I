import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Switch, View } from "react-native";

export default function Dez() {
  const [logado, setLogado] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Logado:</Text>
        <Switch
          value={logado}
          onValueChange={setLogado}
          trackColor={{ false: "#e77878", true: "#94df83" }}
          thumbColor={logado ? "#47eb22" : "#ed1111"}
        />
      </View>
      <Text style={styles.text}>Status: {logado ? "Online" : "Offline"}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  text: { fontSize: 18, marginRight: 10 },
});