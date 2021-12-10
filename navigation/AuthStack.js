import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/AuthScreens/LoginScreen";
import { RecoveryPasswordScreen } from "../screens/AuthScreens/RecoveryPasswordScreen";
import { CreateAccountScreen } from "../screens/AuthScreens/CreateAccountScreen";
import { MenuLeftPrimaryHeader } from "../components/Header/MenuLeftPrimaryHeader";
import { PrimaryBackHeader } from "../components/Header/PrimaryBackHeader";
import { colors } from "../utils/styleGuide";
import { PoliticaScreen } from "../screens/AjustesPerfil/PoliticaScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="RecoveryPassword"
          component={RecoveryPasswordScreen}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Politica"
          component={PoliticaScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => (
              <PrimaryBackHeader text="Política de privacidad" />
            ),
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
