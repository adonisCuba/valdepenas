import {
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  Pressable,
  Text,
  Toast,
  VStack,
} from "native-base";
import React, { useContext, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { BtnLogin } from "../../components/UI/BtnLogin";
import { BtnWhite } from "../../components/UI/BtnWhite";
import { InputLogin } from "../../components/UI/InputLogin";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { spacing, textStyles } from "../../utils/styleGuide";
import authService from "../../services/auth.service";
import { TokenService } from "../../services/token.service";

export const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthenticatedUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const onLogin = async () => {
    try {
      if (email != "" && password != "") {
        setShowLoading(true);
        const result = await authService.login(email, password);
        if (result.status == 403) {
          Toast.show({
            title: "Error",
            status: "error",
            description: result.message,
          });
          setShowLoading(false);
        } else {
          await TokenService.setAccessToken(result.access_token);
          await TokenService.setCsrfToken(result.csrf_token);
          await TokenService.setLogoutToken(result.logout_token);
          setShowLoading(false);
          setUser(result.current_user);
        }
      } else
        Toast.show({
          title: "Error",
          status: "error",
          description: "Debe llenar todos los campos",
        });
    } catch (error) {
      console.log(error);
      Toast.show({
        title: "Error",
        status: "error",
        description: "Si el error persiste contacte al proveedor de servicios.",
      });
    }
  };
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../assets/imagenFondo.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <VStack flex={1} pl={spacing.spacingL} pr={spacing.spacingL}>
          <HStack justifyContent="center">
            <Image
              source={require("../../assets/logo.png")}
              w="228"
              h="104"
              resizeMode="cover"
              alt="Logo del ayuntamiento"
              mt={spacing.spacingXl}
            />
          </HStack>
          <Center flex={1}>
            <InputLogin
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <InputLogin
              placeholder="Contraseña"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <BtnLogin
              onPress={onLogin}
              text="Acceder"
              showLoading={showLoading}
            />
            <Pressable
              onPress={() => {
                navigation.navigate("RecoveryPassword");
              }}
            >
              <Text style={styles.recovery}>No recuerdo mi contraseña</Text>
            </Pressable>
          </Center>
          <VStack>
            <Text pb={spacing.spacingXxs} style={styles.textSign}>
              ¿Aún no tienes cuenta?
            </Text>
            <HStack justifyContent="center">
              <BtnWhite
                onPress={() => {
                  navigation.navigate("CreateAccount");
                }}
                text="¡Crear cuenta!"
              />
            </HStack>
          </VStack>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  recovery: {
    ...textStyles.TXT_XS,
    textDecorationLine: "underline",
    color: "#FFFFFF",
    textAlign: "center",
  },
  textSign: {
    ...textStyles.TXT_XS,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
