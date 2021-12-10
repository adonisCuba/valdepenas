import {
  Center,
  HStack,
  NativeBaseProvider,
  Text,
  Toast,
  VStack,
} from "native-base";
import React, { useState, useEffect } from "react";
import { BtnMarron } from "../../components/UI/BtnMarron";
import { InputProfile } from "../../components/UI/InputProfile";
import menuService from "../../services/menu.service";

import { spacing, textStyles, colors } from "../../utils/styleGuide";
export const EditProfileScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(async () => {
    const result = await menuService.getProfile();
    setProfile(result);
    setNombre(result.nombre);
    setApellidos(result.apellidos);
    setEmail(result.email);
  }, []);

  const save = async () => {
    try {
      if (nombre.trim() != "" && apellidos.trim() != "" && email.trim() != "") {
        const result = await menuService.saveProfile(
          nombre,
          apellidos,
          email != profile.email ? email : undefined
        );
        if (result.message) {
          Toast.show({
            title: "Error",
            status: "error",
            description:
              "El correo empleado ya se encuentra en uso, si el problema persiste consulte a su proveedor.",
          });
        } else
          Toast.show({
            title: "Información",
            status: "success",
            description: "Su perfil se ha modificado satisfactoriamente.",
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NativeBaseProvider>
      <VStack flex={1} bg={colors.FONDO}>
        <HStack justifyContent="center">
          <Text style={[textStyles.TXT_XS, { marginTop: spacing.spacingS }]}>
            Puedes editar los datos de tu usuario
          </Text>
        </HStack>
        <Center
          flex={1}
          style={{
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <InputProfile
            placeholder="Nombre"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
          <InputProfile
            placeholder="Apellidos"
            value={apellidos}
            onChangeText={(text) => setApellidos(text)}
          />
          <InputProfile
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </Center>
        <HStack justifyContent="center">
          <BtnMarron text="Guardar" onPress={save} />
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};
