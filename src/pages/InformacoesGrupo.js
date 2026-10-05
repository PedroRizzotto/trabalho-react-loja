import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";

const integrantes = [
  { id: 1, nome: "Carlos Eduardo Zanin", ra: "1138275" },
  { id: 2, nome: "João Vitor da Silva", ra: "1138170" },
  { id: 3, nome: "Leonardo Grimm Maziero", ra: "1137914" },
  { id: 4, nome: "Pedro Henrique Moreschi Rizzotto", ra: "1138024" },
];

export default function InformacoesGrupo() {
  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.container}>
      <Text variant="bodyLarge">
        App desenvolvido para o trabalho de React Native da disciplina de
        Projeto, Design e Engenharia de Processos, consumindo a Fake Store API.
      </Text>

      <Text variant="titleMedium" style={styles.subtitulo}>
        Integrantes
      </Text>
      {integrantes.map((integrante) => (
        <View key={integrante.id} style={styles.item}>
          <Text variant="titleMedium">{integrante.nome}</Text>
          <Text variant="bodyMedium">RA: {integrante.ra}</Text>
          <Divider style={styles.divisor} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: { backgroundColor: "#FFFFFF", flex: 1 },
  container: { padding: 20 },
  subtitulo: { fontWeight: "bold", marginBottom: 6, marginTop: 24 },
  item: { paddingTop: 12 },
  divisor: { marginTop: 12 },
});
