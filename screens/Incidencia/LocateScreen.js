import {
  Box,
  NativeBaseProvider,
  Text,
  VStack,
  HStack,
  Toast,
} from "native-base";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
import { BtnMarron } from "../../components/UI/BtnMarron";
import { useState } from "react";
export const LocateScreen = ({ navigation }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  return (
    <NativeBaseProvider>
      <VStack
        style={{
          marginTop: Constants.statusBarHeight + spacing.spacingM,
          marginLeft: spacing.spacingS,
          marginRight: spacing.spacingS,
          backgroundColor: colors.FONDO,
        }}
      >
        <HStack
          justifyContent="center"
          style={{ marginBottom: spacing.spacingS }}
        >
          <Text style={textStyles.TXT_S}>
            Seleccione en el mapa la ubicación de la incidencia:
          </Text>
        </HStack>
        <Box w="100%" h="86%">
          <MapView
            style={{ width: "100%", height: "100%" }}
            initialRegion={{
              latitude: 38.76551686408344,
              longitude: -3.3867978304624557,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(e) => {
              setMarkerPosition(e.nativeEvent.coordinate);
            }}
          >
            {markerPosition ? <Marker coordinate={markerPosition} /> : null}
          </MapView>
        </Box>
        <HStack justifyContent="center">
          <BtnMarron
            text="Aceptar"
            onPress={() => {
              if (markerPosition)
                navigation.navigate({
                  name: "CreateIncidencia",
                  params: { geo: markerPosition },
                  merge: true,
                });
              else
                Toast.show({
                  title: "Advertencia",
                  status: "warning",
                  description:
                    "Por favor seleccione en el mapa la localización de la incidencia.",
                });
            }}
          />
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};
