import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Nove() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [role, setRole] = useState("manager");
  const [resultado, setResultado] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formBox}>
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
        <TextInput
          placeholder="Confirmar Senha"
          style={styles.input}
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
          maxLength={8}
        />
        <Picker
          selectedValue={role}
          onValueChange={(itemValue: string) => setRole(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Administrador" value="admin" />
          <Picker.Item label="Gestor" value="manager" />
          <Picker.Item label="Usuário" value="user" />
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setResultado(`E-mail: ${email}\nSenha: ${senha}\nConfirmação: ${confSenha}\nPerfil: ${role}`)
          }
        >
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
      {resultado !== "" && <Text style={styles.result}>{resultado}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  formBox: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 20,
    borderRadius: 8,
    width: 270,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    width: "100%",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: { backgroundColor: "#007AFF", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff" },
  result: { marginTop: 15, textAlign: "center" },
});