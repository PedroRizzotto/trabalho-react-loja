import { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import CampoTexto from "../components/CampoTexto";

import { login } from "../services/authService";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function entrar() {
    setErro("");

    if (!username || !senha) {
      setErro("Informe usuário e senha.");
      return;
    }

    setLoading(true);
    const response = await login(username, senha);
    setLoading(false);

    if (!response.success) {
      setErro(response.message);
      return;
    }

    navigation.replace("Home", {
      authInfo: response.authInfo,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text variant="headlineMedium" style={styles.titulo}>
          Login
        </Text>
        <CampoTexto
          label="Usuário"
          valor={username}
          setValor={setUsername}
          autoCapitalize="none"
        />
        <CampoTexto
          label="Senha"
          valor={senha}
          setValor={setSenha}
          autoCapitalize="none"
          secureTextEntry
        />

        {erro ? <Text style={styles.erro}>{erro}</Text> : null}

        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button
            mode="contained"
            onPress={entrar}
            contentStyle={styles.botao}
          >
            Entrar
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#FFFFFF", flex: 1 },
  container: { flexGrow: 1, justifyContent: "center", padding: 28 },
  titulo: { fontWeight: "bold", marginBottom: 24 },
  erro: { color: "#DC2626", marginBottom: 14 },
  botao: { paddingVertical: 6 },
});
