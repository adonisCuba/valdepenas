import {
  Center,
  Checkbox,
  NativeBaseProvider,
  VStack,
  HStack,
  Image,
  Pressable,
  Text,
  Toast,
} from "native-base";
import React, { useContext, useState } from "react";
import Constants from "expo-constants";
import { ImageBackground, StyleSheet } from "react-native";
import { BtnLogin } from "../../components/UI/BtnLogin";
import { InputLogin } from "../../components/UI/InputLogin";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { spacing, textStyles } from "../../utils/styleGuide";
import authService from "../../services/auth.service";

export const CreateAccountScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthenticatedUserContext);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [politica, setPolitica] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const register = async () => {
    if (
      politica != false &&
      nombre.trim() != "" &&
      apellidos.trim() != "" &&
      telefono.trim() != "" &&
      email.trim() != "" &&
      password != "" &&
      dni.trim() != ""
    ) {
      setShowLoading(true);
      const result = await authService.register(
        nombre.trim(),
        apellidos.trim(),
        dni.trim(),
        telefono.trim(),
        email.trim(),
        password
      );
      setShowLoading(false);
      if (result.message)
        Toast.show({
          title: "Error",
          status: "error",
          description:
            "Error creando el usuario, verifique que su correo no está en uso.",
        });
      else {
        setUser({ name: result.name[0].value, uid: result.uid[0].value });
      }
    } else
      Toast.show({
        title: "Error",
        status: "error",
        description:
          "Debe llenar todos los campos y aceptar la política de privacidad.",
      });
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
              mb={spacing.spacingL}
            />
          </HStack>
          <Center flex={1}>
            <InputLogin
              placeholder="Nombre"
              value={nombre}
              onChangeText={(text) => setNombre(text)}
            />
            <InputLogin
              placeholder="Apellidos"
              value={apellidos}
              onChangeText={(text) => setApellidos(text)}
            />
            <InputLogin
              placeholder="DNI"
              value={dni}
              onChangeText={(text) => setDni(text)}
            />
            <InputLogin
              placeholder="Teléfono"
              value={telefono}
              onChangeText={(text) => setTelefono(text)}
            />
            <InputLogin
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <InputLogin
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Checkbox
              style={styles.check}
              value={politica}
              onChange={(isSelected) => setPolitica(isSelected)}
            >
              <Text style={styles.textCheck}>
                Acepto política de privacidad
              </Text>
            </Checkbox>
            <BtnLogin
              onPress={register}
              text="Crear cuenta"
              showLoading={showLoading}
            />
          </Center>
        </VStack>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  textCheck: {
    ...textStyles.TXT_XS,
    color: "#FFFFFF",
    marginTop: 2,
  },
  check: {
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff",
    margin: spacing.spacingXxs,
    backgroundColor: "transparent",
  },
});
