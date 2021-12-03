import {
  VStack,
  Center,
  HStack,
  Pressable,
  NativeBaseProvider,
  Image,
  Toast,
} from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import Constants from "expo-constants";
import { spacing } from "../../utils/styleGuide";
import { InputLogin } from "../../components/UI/InputLogin";
import { BtnLogin } from "../../components/UI/BtnLogin";
import { useState } from "react";
import authService from "../../services/auth.service";
export const RecoveryPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const recover = async () => {
    try {
      if (email != "") {
        setShowLoading(true);
        const result = await authService.recoveryPassword(email);
        if (result != "")
          Toast.show({
            title: "Error",
            status: "error",
            description: "Correo no reconocido.",
          });
        else
          Toast.show({
            title: "Información",
            status: "success",
            description:
              "Revise el buzón de su correo para cambiar su contraseña.",
          });
        setShowLoading(false);
      } else {
        Toast.show({
          title: "Error",
          status: "error",
          description: "Debe llenar el campo de Email",
        });
      }
    } catch (error) {}
  };
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../assets/imagenFondo.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <HStack style={{ marginTop: Constants.statusBarHeight }}>
          <Pressable
            style={{ margin: spacing.spacingXs }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../assets/icons/iconosVolverBlanco.png")}
              alt="Icon back"
            />
          </Pressable>
        </HStack>
        <VStack flex={0.8} pl={spacing.spacingL} pr={spacing.spacingL}>
          <HStack justifyContent="center">
            <Image
              source={require("../../assets/logo.png")}
              w="228"
              h="104"
              resizeMode="cover"
              alt="Logo del ayuntamiento"
              mt={spacing.spacingL}
            />
          </HStack>
          <Center flex={1}>
            <InputLogin
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <BtnLogin
              text="Recibir clave"
              showLoading={showLoading}
              onPress={recover}
            />
          </Center>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
