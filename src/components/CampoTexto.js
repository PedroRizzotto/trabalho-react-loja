import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function CampoTexto({ label, valor, setValor, ...rest }) {
  return (
    <View style={styles.inputGroup}>
      <TextInput
        mode="outlined"
        label={label}
        value={valor}
        onChangeText={setValor}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: { marginBottom: 14 },
});
