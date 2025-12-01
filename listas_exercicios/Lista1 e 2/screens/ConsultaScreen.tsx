import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useCep } from "../hooks/useCep";

export default function ConsultaScreen() {
  const [cep, setCep] = useState("");
  const { resultado, erro, consultarCep } = useCep();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o CEP"
        keyboardType="numeric"
        style={styles.input}
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Obter" onPress={() => consultarCep(cep)} />
      {erro && <Text style={styles.error}>CEP inválido</Text>}
      {resultado ? (
        <View style={styles.result}>
          <Text>CEP: {resultado.cep}</Text>
          <Text>Rua: {resultado.logradouro}</Text>
          <Text>Bairro: {resultado.bairro}</Text>
          <Text>Cidade: {resultado.localidade}</Text>
          <Text>UF: {resultado.uf}</Text>
        </View>
      ) : (
        <Text style={styles.error}>CEP inválido ou não encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: { marginTop: 20 },
  error: { marginTop: 20, color: "red" },
});