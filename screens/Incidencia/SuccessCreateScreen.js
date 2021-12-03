import { Center, Image, NativeBaseProvider, Text, HStack } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
import { BtnWhite } from "../../components/UI/BtnWhite";
export const SuccessCreateScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg={colors.PRIMARIO}>
        <Image
          source={require("../../assets/imagenGracias.png")}
          alt="Imagen del Centro"
          height={150}
          mb={spacing.spacingXs}
        />
        <Text style={styles.textBig}>Gracias por su aportación</Text>
        <Text style={styles.textSub}>
          Sigue el estado de las propuestas en cualquier momento.
        </Text>
      </Center>
      <HStack justifyContent="center" bg={colors.PRIMARIO}>
        <BtnWhite
          text="Salir"
          onPress={() => navigation.navigate("ListIncidencias")}
        />
      </HStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textBig: {
    ...textStyles.TXT_XL,
    color: "white",
    marginBottom: spacing.spacingXs,
  },
  textSub: {
    ...textStyles.TXT_S,
    color: "white",
  },
});
