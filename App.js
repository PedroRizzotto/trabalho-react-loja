import { StatusBar } from "expo-status-bar";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={tema}>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const tema = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4F46E5",
    secondary: "#F59E0B",
    background: "#FFFFFF",
    surface: "#FFFFFF",
  },
};
