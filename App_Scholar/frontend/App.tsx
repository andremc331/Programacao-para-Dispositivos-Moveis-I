import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/contexts/AuthContext";
import { useState } from "react";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export default function App() {
  const [isDark, setIsDark] = useState(false);
    const theme = isDark ? MD3DarkTheme : MD3LightTheme;
  
  return (
      <AuthProvider>
        <AppNavigator toggleTheme={() => setIsDark(!isDark)} />
      </AuthProvider>
  );
}