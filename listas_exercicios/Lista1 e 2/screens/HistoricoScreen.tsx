import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useCep } from "../hooks/useCep";

export default function HistoricoScreen() {
  const { historico } = useCep();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {historico.length === 0 ? (
        <Text style={styles.empty}>Nenhuma consulta válida ainda.</Text>
      ) : (
        historico.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text>CEP: {item.cep}</Text>
            <Text>Rua: {item.logradouro}</Text>
            <Text>Bairro: {item.bairro}</Text>
            <Text>Cidade: {item.localidade}</Text>
            <Text>UF: {item.uf}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#555",
  },
});