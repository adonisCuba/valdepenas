import { Text, VStack, Image, Pressable, HStack, Box } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { spacing, textStyles } from "../utils/styleGuide";
import CalendarioIcon from "../assets/icons/iconosCalendario.svg";
import UbicacionIcon from "../assets/icons/iconosUbicacion.svg";
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
      <VStack
        style={{
          paddingLeft: spacing.spacingXs,
          paddingRight: spacing.spacingXs,
        }}
      >
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
            style={{ marginTop: spacing.spacingXs }}
          />
          <HStack
            alignItems="center"
            position="absolute"
            mt={spacing.spacingXs}
            bg={"white"}
            p={1}
            pl={2}
            pr={2}
            borderRadius={20}
            style={{
              marginTop: spacing.spacingS,
              marginLeft: spacing.spacingXxs,
            }}
          >
            <CalendarioIcon />
            <Text style={{ marginLeft: spacing.spacingXxs }}>
              {props.created}
            </Text>
          </HStack>
        </Box>
        {props.estado ? (
          <HStack style={styles.borderDivider} alignItems="center">
            <Box mr={2}>
              <UbicacionIcon />
            </Box>
            <Text style={textStyles.TXT_XXS}>{props.estado}</Text>
          </HStack>
        ) : null}

        <Text pt={spacing.spacingXxs} style={textStyles.TXT_M}>
          {props.titulo}
        </Text>
        <HStack
          style={{
            paddingTop: spacing.spacingXs,
            paddingBottom: spacing.spacingXs,
          }}
          alignItems="center"
        >
          <Box mr={2}>
            <UbicacionIcon />
          </Box>
          <Text style={textStyles.TXT_XXS}>{props.direccion}</Text>
        </HStack>
      </VStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderDivider: {
    paddingTop: spacing.spacingXs,
    paddingBottom: spacing.spacingXxs,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
