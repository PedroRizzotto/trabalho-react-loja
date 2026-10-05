import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

import CardProduto from "../components/CardProduto";

import {
  buscarProdutos,
  buscarProdutosPorCategoria,
} from "../services/produtoService";

const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [categoria, setCategoria] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("InformacoesGrupo")}
          >
            <MaterialIcons name="info-outline" size={24} color="black" />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  useEffect(() => {
    carregarProdutos();
  }, [categoria]);

  async function carregarProdutos() {
    setLoading(true);
    setErro("");

    let response;
    if (categoria) {
      response = await buscarProdutosPorCategoria(categoria);
    } else {
      response = await buscarProdutos();
    }

    if (response.success) {
      setProdutos(response.produtos);
    } else {
      setErro(response.message);
    }

    setLoading(false);
  }

  function selecionarProduto(produto) {
    navigation.navigate("DetalheProduto", {
      id: produto.id,
    });
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.titulo}>
        Categorias
      </Text>
      <View style={styles.filtros}>
        {categorias.map((item) => (
          <Button
            key={item}
            mode={categoria === item ? "contained" : "outlined"}
            onPress={() => setCategoria(item)}
            compact
          >
            {item}
          </Button>
        ))}
      </View>
      {categoria ? (
        <Button mode="text" icon="close" onPress={() => setCategoria("")}>
          Limpar filtro
        </Button>
      ) : null}

      {loading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : erro ? (
        <View style={styles.erroContainer}>
          <Text style={styles.erro}>{erro}</Text>
          <Button mode="contained" onPress={carregarProdutos}>
            Tentar novamente
          </Button>
        </View>
      ) : (
        <FlatList
          data={produtos}
          renderItem={({ item }) => (
            <CardProduto produto={item} action={selecionarProduto} />
          )}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  titulo: { fontWeight: "bold", marginBottom: 10 },
  filtros: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 10 },
  loading: { marginTop: 40 },
  erroContainer: { alignItems: "center", marginTop: 40 },
  erro: { color: "#DC2626", marginBottom: 14 },
  lista: { paddingBottom: 30, paddingTop: 10 },
});
