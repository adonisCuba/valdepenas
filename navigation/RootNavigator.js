import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import IncidenciaStack from "./IncidenciaStack";
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function RootNavigator() {
  const { user } = useContext(AuthenticatedUserContext);
  const [fontsLoaded] = useFonts({ Nunito_400Regular });
  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        {user ? <IncidenciaStack /> : <AuthStack />}
      </NavigationContainer>
    );
}
