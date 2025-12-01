import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Sete() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        maxLength={8}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setResultado(`E-mail: ${email}\nSenha: ${senha}`)}
      >
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      {resultado !== "" && <Text style={styles.result}>{resultado}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    width: 200,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: { backgroundColor: "#007AFF", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff" },
  result: { marginTop: 15, textAlign: "center" },
});