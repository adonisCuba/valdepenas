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
  ScrollView,
  Link,
} from "native-base";
import React, { useContext, useState } from "react";
import Constants from "expo-constants";
import { ImageBackground, StyleSheet } from "react-native";
import { BtnLogin } from "../../components/UI/BtnLogin";
import { InputLogin } from "../../components/UI/InputLogin";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { spacing, textStyles } from "../../utils/styleGuide";
import authService from "../../services/auth.service";
import Logo from "../../assets/logo.svg";
import { PhoneNumberUtil } from "google-libphonenumber";

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

  const validarDni = (dni) => {
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
      numero = dni.substr(0, dni.length - 1);
      letr = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      letra = "TRWAGMYFPDXBNJZSQVHLCKET";
      letra = letra.substring(numero, numero + 1);
      if (letra != letr.toUpperCase()) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const validarTelefono = (telefono) => {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.isValidNumberForRegion(
      phoneUtil.parse(telefono, "ES"),
      "ES"
    );
  };

  const validarEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  const register = async () => {
    if (
      politica != false &&
      nombre.trim() != "" &&
      apellidos.trim() != "" &&
      telefono.trim() != "" &&
      validarTelefono(telefono.trim()) &&
      email.trim() != "" &&
      validarEmail(email.trim()) &&
      password != "" &&
      dni.trim() != "" &&
      validarDni(dni.trim())
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
          "Debe llenar todos los campos correctamente y aceptar la política de privacidad.",
      });
  };
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../assets/imagenFondo.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <ScrollView flex={1}>
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
          <VStack flex={1} pl={spacing.spacingL} pr={spacing.spacingL}>
            <HStack
              justifyContent="center"
              mt={spacing.spacingL}
              mb={spacing.spacingL}
            >
              <Logo />
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
                keyboardType="numeric"
              />
              <InputLogin
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              <InputLogin
                placeholder="Contraseña"
                type="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Checkbox
                style={styles.check}
                value={politica}
                onChange={(isSelected) => setPolitica(isSelected)}
              >
                <Text style={styles.textCheck}>Acepto </Text>
                <Link
                  style={styles.textCheck}
                  _text={{
                    color: "#FFFFFF",
                  }}
                  onPress={() => {
                    navigation.navigate("Politica");
                  }}
                >
                  política de privacidad
                </Link>
              </Checkbox>
              <BtnLogin
                onPress={register}
                text="Crear cuenta"
                showLoading={showLoading}
              />
            </Center>
          </VStack>
        </ScrollView>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  textCheck: {
    ...textStyles.TXT_XS,
    marginTop: 2,
    color: "#FFFFFF",
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
