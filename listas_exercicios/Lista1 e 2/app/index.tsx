import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Um from "./Um";
import Dois from "./Dois";
import Tres from "./Tres";
import Quatro from "./Quatro";
import Cinco from "./Cinco";
import Seis from "./Seis";
import Sete from "./Sete";
import Oito from "./Oito";
import Nove from "./Nove";
import Dez from "./Dez";
import Consulta from "../screens/HistoricoScreen";
import Historico from "../screens/ConsultaScreen";
import { CepProvider } from "@/contexts/CepContext";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CepProvider>
      <Drawer.Navigator
        initialRouteName="Consulta"
        screenOptions={({ route }) => ({
          headerShown: true,
          drawerActiveTintColor: "#007AFF",
          drawerInactiveTintColor: "#555",
          drawerLabelStyle: { fontSize: 16 },
          drawerStyle: { backgroundColor: "#f9f9f9" },
          drawerIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>["name"] = "ellipse";

            switch (route.name) {
              case "Um":
                iconName = "home";
                break;
              case "Dois":
                iconName = "person";
                break;
              case "Tres":
                iconName = "settings";
                break;
              case "Quatro":
                iconName = "images";
                break;
              case "Cinco":
                iconName = "chatbox";
                break;
              case "Seis":
                iconName = "document-text";
                break;
              case "Sete":
                iconName = "lock-closed";
                break;
              case "Oito":
                iconName = "key";
                break;
              case "Nove":
                iconName = "calendar";
                break;
              case "Dez":
                iconName = "checkmark-circle";
                break;
              case "Consulta":
                iconName = "search";
                break;
              case "Historico":
                iconName = "time";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Um" component={Um} />
        <Drawer.Screen name="Dois" component={Dois} />
        <Drawer.Screen name="Tres" component={Tres} />
        <Drawer.Screen name="Quatro" component={Quatro} />
        <Drawer.Screen name="Cinco" component={Cinco} />
        <Drawer.Screen name="Seis" component={Seis} />
        <Drawer.Screen name="Sete" component={Sete} />
        <Drawer.Screen name="Oito" component={Oito} />
        <Drawer.Screen name="Nove" component={Nove} />
        <Drawer.Screen name="Dez" component={Dez} />
        <Drawer.Screen name="Consulta" component={Consulta} />
        <Drawer.Screen name="Historico" component={Historico} />
      </Drawer.Navigator>
    </CepProvider>
  );
}