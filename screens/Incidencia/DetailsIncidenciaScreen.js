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
import CalendarioIcon from "../../assets/icons/iconosCalendario.svg";
import UbicacionIcon from "../../assets/icons/iconosUbicacion.svg";
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
            style={{
              paddingLeft: spacing.spacingXs,
              paddingRight: spacing.spacingXs,
            }}
            bg={colors.FONDO}
          >
            <Box>
              <Image
                source={{ uri: incidencia.imagen }}
                alt="Imagen de la incidencia"
                height={250}
                resizeMode="cover"
                borderRadius={10}
                style={{ marginTop: spacing.spacingXs }}
              />
              <HStack
                alignItems="center"
                position="absolute"
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
                  {incidencia.created}
                </Text>
              </HStack>
            </Box>
            {incidencia.estado ? (
              <HStack
                pt={spacing.spacingXxs}
                style={styles.borderDivider}
                alignItems="center"
              >
                <Box mr={2}>
                  <UbicacionIcon />
                </Box>
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
              <Box mr={2}>
                <UbicacionIcon />
              </Box>
              <Text style={textStyles.TXT_XXS}>{incidencia.direccion}</Text>
            </HStack>
            <RenderHTML
              source={{ html: incidencia.description }}
              baseStyle={{
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
    paddingTop: spacing.spacingXs,
    paddingBottom: spacing.spacingXxs,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
export default inject("rootStore")(observer(DetailsIncidenciaScreen));
