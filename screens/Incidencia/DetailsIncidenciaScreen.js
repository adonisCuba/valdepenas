import { inject, observer } from "mobx-react";
import {
  NativeBaseProvider,
  ScrollView,
  VStack,
  Image,
  Text,
  Box,
  HStack,
  Center,
  Spinner,
} from "native-base";
import React, { useState, useEffect } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
const DetailsIncidenciaScreen = (props) => {
  const { itemId } = props.route.params;
  const { getIncidencia } = props.rootStore.incidenciaStore;
  const [incidencia, setIncidencia] = useState(null);
  const { width } = useWindowDimensions();
  useEffect(() => {
    setIncidencia(getIncidencia(itemId));
  }, []);
  return (
    <NativeBaseProvider>
      {incidencia ? (
        <ScrollView>
          <VStack
            pl={spacing.spacingXxs}
            pr={spacing.spacingXxs}
            bg={colors.FONDO}
          >
            <Box>
              <Image
                source={{ uri: incidencia.imagen }}
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
                  source={require("../../assets/icons/iconosCalendario.png")}
                  alt="Calendar icon"
                />
                <Text>{incidencia.created}</Text>
              </HStack>
            </Box>
            {incidencia.estado ? (
              <HStack
                pt={spacing.spacingXxs}
                style={styles.borderDivider}
                alignItems="center"
              >
                <Image
                  source={require("../../assets/icons/iconosUbicacion.png")}
                  alt="Ubicación icon"
                  mr={2}
                />
                <Text style={textStyles.TXT_XXS}>{incidencia.estado}</Text>
              </HStack>
            ) : null}

            <Text pt={spacing.spacingXxs} style={textStyles.TXT_M}>
              {incidencia.titulo}
            </Text>
            <HStack
              pt={spacing.spacingXxs}
              style={styles.borderDivider}
              alignItems="center"
            >
              <Image
                source={require("../../assets/icons/iconosUbicacion.png")}
                alt="Ubicación icon"
                mr={2}
              />
              <Text style={textStyles.TXT_XXS}>{incidencia.direccion}</Text>
            </HStack>
            <RenderHTML
              source={{ html: incidencia.description }}
              baseStyle={{
                padding: spacing.spacingXs,
                fontFamily: "Nunito_400Regular",
                fontSize: 14,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.16,
                color: colors.GRIS_OSCURO,
              }}
              contentWidth={width}
            />
          </VStack>
        </ScrollView>
      ) : (
        <Center>
          <Spinner size="lg" />
        </Center>
      )}
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  borderDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
export default inject("rootStore")(observer(DetailsIncidenciaScreen));
