import {
  NativeBaseProvider,
  Pressable,
  VStack,
  Text,
  HStack,
  Image,
} from "native-base";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
export const ProfileSettingsScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthenticatedUserContext);
  return (
    <NativeBaseProvider>
      {/* <ImageBackground source={require('../../assets/')}> */}
      <VStack bg={colors.PRIMARIO} flex={1}>
        <HStack justifyContent="center">
          <Image
            source={require("../../assets/logo.png")}
            w="228"
            h="104"
            resizeMode="cover"
            alt="Logo del ayuntamiento"
            mb={spacing.spacingS}
          />
        </HStack>
        <Pressable
          onPress={() => navigation.navigate("EditProfile")}
          bg="white"
          style={{ padding: spacing.spacingS }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosEditarPerfil.png")}
              mr={spacing.spacingXxs}
              alt="Icon edit profile"
            />
            <Text style={textStyles.TXT_M}>Editar Perfil</Text>
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("FeedBack")}
          bg="white"
          style={{
            padding: spacing.spacingS,
            marginTop: spacing.spacingXl,
            marginBottom: spacing.spacingXxs,
          }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosFeedback.png")}
              mr={spacing.spacingXxs}
              alt="Icon feedback"
            />
            <Text style={textStyles.TXT_M}>Feedback</Text>
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Faqs")}
          bg="white"
          style={{
            padding: spacing.spacingS,
            marginBottom: spacing.spacingXl,
          }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosFaQs.png")}
              mr={spacing.spacingXxs}
              alt="Icon faqs"
            />
            <Text style={textStyles.TXT_M}>Preguntas frecuentes</Text>
          </HStack>
        </Pressable>
        <Pressable
          bg="white"
          style={{
            padding: spacing.spacingS,
            marginBottom: spacing.spacingXxs,
          }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosAvisosLegales.png")}
              mr={spacing.spacingXxs}
              alt="Icon avisos legales"
            />
            <Text style={textStyles.TXT_M}>Avisos legales</Text>
          </HStack>
        </Pressable>
        <Pressable
          bg="white"
          style={{
            padding: spacing.spacingS,
            marginBottom: spacing.spacingXxs,
          }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosPolTicaDePrivacidad.png")}
              mr={spacing.spacingXxs}
              alt="Icon privacidad"
            />
            <Text style={textStyles.TXT_M}>Política de privacidad</Text>
          </HStack>
        </Pressable>
        <Pressable
          bg="white"
          style={{
            padding: spacing.spacingS,
            marginBottom: spacing.spacingXl,
          }}
        >
          <HStack>
            <Image
              source={require("../../assets/icons/iconosInfoTecnica.png")}
              mr={spacing.spacingXxs}
              alt="Icon tecnica"
            />
            <Text style={textStyles.TXT_M}>Información técnica</Text>
          </HStack>
        </Pressable>
        <Pressable bg="white" p={spacing.spacingXxs} mb={spacing.spacingXxs}>
          <HStack>
            <Image
              source={require("../../assets/icons/iconosInfoDeProducto.png")}
              mr={spacing.spacingXxs}
              alt="Icon info producto"
            />
            <Text style={textStyles.TXT_M}>Info de producto</Text>
          </HStack>
        </Pressable>
      </VStack>
      <HStack
        bg={colors.PRIMARIO}
        justifyContent="center"
        style={{ paddingBottom: spacing.spacingL }}
      >
        <Pressable
          style={styles.btn}
          onPress={() => {
            setUser(null);
          }}
        >
          <Text style={styles.txt}>Cerrar sesión</Text>
        </Pressable>
      </HStack>
      {/* </ImageBackground> */}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 44,
    borderRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: spacing.spacingS,
  },
  txt: {
    ...textStyles.TXT_M,
    color: "#FFFFFF",
  },
});
