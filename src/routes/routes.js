import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackApp = createNativeStackNavigator();

import Login from "../pages/Login";
import Home from "../pages/Home";
import DetalheProduto from "../pages/DetalheProduto";
import InformacoesGrupo from "../pages/InformacoesGrupo";

export default function Routes() {
  return (
    <StackApp.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerBackTitle: "Voltar",
        headerTitleAlign: "center",
      }}
    >
      <StackApp.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <StackApp.Screen
        name="Home"
        component={Home}
        options={{
          headerBackVisible: false,
          headerTitle: "Produtos",
        }}
      />
      <StackApp.Screen
        name="DetalheProduto"
        component={DetalheProduto}
        options={{ headerTitle: "Detalhes" }}
      />
      <StackApp.Screen
        name="InformacoesGrupo"
        component={InformacoesGrupo}
        options={{ headerTitle: "Informações do Grupo" }}
      />
    </StackApp.Navigator>
  );
}
