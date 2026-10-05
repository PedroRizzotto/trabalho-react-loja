import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import formatarPreco from "../utils/formatarPreco";

export default function CardProduto({ produto, action }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => action(produto)}>
      <Image
        source={{ uri: produto.image }}
        style={styles.imagem}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text variant="titleSmall" numberOfLines={2}>
          {produto.title}
        </Text>
        <Text variant="titleMedium" style={styles.preco}>
          {formatarPreco(produto.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    padding: 12,
  },
  imagem: { height: 70, width: 70 },
  info: { flex: 1, marginLeft: 14 },
  preco: { color: "#4F46E5", fontWeight: "bold", marginTop: 6 },
});
