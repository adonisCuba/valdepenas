import {
  NativeBaseProvider,
  Pressable,
  VStack,
  Text,
  HStack,
  Image,
  Box,
} from "native-base";
import React, { useContext } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
import Logo from "../../assets/logo.svg";
import EditProfileIcon from "../../assets/icons/iconosEditarPerfil.svg";
import FeedbackIcon from "../../assets/icons/iconosFeedback.svg";
import FaqsIcon from "../../assets/icons/iconosFaQs.svg";
import AvisosLegalesIcon from "../../assets/icons/iconosAvisosLegales.svg";
import PoliticaIcon from "../../assets/icons/iconosPolTicaDePrivacidad.svg";
import InfoTecnicaIcon from "../../assets/icons/iconosInfoTecnica.svg";
import InfoProductoIcon from "../../assets/icons/iconosInfoDeProducto.svg";
import { TokenService } from "../../services/token.service";
export const ProfileSettingsScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthenticatedUserContext);

  const logout = async () => {
    await TokenService.setUser(null);
    setUser(null);
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../assets/fondoMenu.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <VStack bg={colors.PRIMARIO} flex={1}>
          <HStack justifyContent="center" mb={spacing.spacingS}>
            <Logo />
          </HStack>
          <Pressable
            onPress={() => navigation.navigate("EditProfile")}
            bg="white"
            style={{ padding: spacing.spacingS }}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <EditProfileIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Editar Perfil</Text>
            </HStack>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("FeedBack")}
            bg="white"
            style={{
              padding: spacing.spacingS,
              marginTop: spacing.spacingXl,
              marginBottom: spacing.spacingXl,
            }}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <FeedbackIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Feedback</Text>
            </HStack>
          </Pressable>
          {/* <Pressable
            onPress={() => navigation.navigate("Faqs")}
            bg="white"
            style={{
              padding: spacing.spacingS,
              marginBottom: spacing.spacingXl,
            }}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <FaqsIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Preguntas frecuentes</Text>
            </HStack>
          </Pressable> */}
          <Pressable
            bg="white"
            style={{
              padding: spacing.spacingS,
              marginBottom: spacing.spacingXxs,
            }}
            onPress={() => navigation.navigate("Avisos")}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <AvisosLegalesIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Avisos legales</Text>
            </HStack>
          </Pressable>
          <Pressable
            bg="white"
            style={{
              padding: spacing.spacingS,
              marginBottom: spacing.spacingXxs,
            }}
            onPress={() => navigation.navigate("Politica")}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <PoliticaIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Política de privacidad</Text>
            </HStack>
          </Pressable>
          <Pressable
            bg="white"
            style={{
              padding: spacing.spacingS,
              marginBottom: spacing.spacingXl,
            }}
            onPress={() => navigation.navigate("InfoTecnica")}
          >
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <InfoTecnicaIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Información técnica</Text>
            </HStack>
          </Pressable>
          {/* <Pressable bg="white" p={spacing.spacingXxs} mb={spacing.spacingXxs}>
            <HStack>
              <Box mr={spacing.spacingXxs}>
                <InfoProductoIcon />
              </Box>
              <Text style={textStyles.TXT_M}>Info de producto</Text>
            </HStack>
          </Pressable> */}
        </VStack>
        <HStack
          bg={colors.PRIMARIO}
          justifyContent="center"
          style={{ paddingBottom: spacing.spacingL }}
        >
          <Pressable style={styles.btn} onPress={logout}>
            <Text style={styles.txt}>Cerrar sesión</Text>
          </Pressable>
        </HStack>
      </ImageBackground>
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
