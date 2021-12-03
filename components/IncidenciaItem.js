import { Text, VStack, Image, Pressable, HStack, Box } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { spacing, textStyles } from "../utils/styleGuide";
export const IncidenciaItem = (props) => {
  return (
    <Pressable
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        marginBottom: spacing.spacingXs,
      }}
      onPress={props.onPress}
    >
      <VStack pl={spacing.spacingXxs} pr={spacing.spacingXxs}>
        <Box>
          <Image
            source={
              props.imagen != ""
                ? { uri: props.imagen }
                : require("../assets/adaptive-icon.png")
            }
            alt="Imagen de la incidencia"
            height={250}
            resizeMode="cover"
            borderRadius={10}
            mt={spacing.spacingXxs}
          />
          <HStack
            alignItems="center"
            position="absolute"
            mt={spacing.spacingXs}
            bg={"white"}
            ml={4}
            p={1}
            pl={2}
            pr={2}
            borderRadius={20}
          >
            <Image
              source={require("../assets/icons/iconosCalendario.png")}
              alt="Calendar icon"
            />
            <Text>{props.created}</Text>
          </HStack>
        </Box>
        {props.estado ? (
          <HStack
            pt={spacing.spacingXxs}
            style={styles.borderDivider}
            alignItems="center"
          >
            <Image
              source={require("../assets/icons/iconosUbicacion.png")}
              alt="Ubicación icon"
              mr={2}
            />
            <Text style={textStyles.TXT_XXS}>{props.estado}</Text>
          </HStack>
        ) : null}

        <Text pt={spacing.spacingXxs} style={textStyles.TXT_M}>
          {props.titulo}
        </Text>
        <HStack
          pt={spacing.spacingXxs}
          pb={spacing.spacingXxs}
          alignItems="center"
        >
          <Image
            source={require("../assets/icons/iconosUbicacion.png")}
            alt="Ubicación icon"
            mr={2}
          />
          <Text style={textStyles.TXT_XXS}>{props.direccion}</Text>
        </HStack>
      </VStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
