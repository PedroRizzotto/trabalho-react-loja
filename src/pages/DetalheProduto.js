import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { buscarProduto } from "../services/produtoService";
import formatarPreco from "../utils/formatarPreco";

export default function DetalheProduto({ route }) {
  const { id } = route.params;

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    carregarProduto();
  }, []);

  async function carregarProduto() {
    setLoading(true);
    const response = await buscarProduto(id);

    if (response.success) {
      setProduto(response.produto);
    } else {
      setErro(response.message);
    }

    setLoading(false);
  }

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  if (erro || !produto) {
    return <Text style={styles.erro}>{erro || "Produto não encontrado."}</Text>;
  }

  return (
    <ScrollView style={styles.fundo} contentContainerStyle={styles.container}>
      <Image
        source={{ uri: produto.image }}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text variant="headlineSmall" style={styles.titulo}>
        {produto.title}
      </Text>
      <Text variant="bodyMedium" style={styles.categoria}>
        Categoria: {produto.category}
      </Text>
      <Text variant="headlineSmall" style={styles.preco}>
        {formatarPreco(produto.price)}
      </Text>
      <Text variant="titleMedium" style={styles.subtitulo}>
        Descrição
      </Text>
      <Text variant="bodyLarge">{produto.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: { backgroundColor: "#FFFFFF", flex: 1 },
  container: { padding: 24 },
  loading: { marginTop: 40 },
  erro: { color: "#DC2626", marginTop: 40, textAlign: "center" },
  imagem: { height: 250, marginBottom: 20, width: "100%" },
  titulo: { fontWeight: "bold" },
  categoria: { color: "#64748B", marginTop: 6 },
  preco: { color: "#4F46E5", fontWeight: "bold", marginTop: 10 },
  subtitulo: { fontWeight: "bold", marginBottom: 6, marginTop: 20 },
});
