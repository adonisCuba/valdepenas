import { inject, observer } from "mobx-react";
import { NativeBaseProvider, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { spacing } from "../../utils/styleGuide";
const AvisosScreen = ({ rootStore, navigation }) => {
  const [politica, setPolitica] = useState("");
  const { width } = useWindowDimensions();
  const { secciones, getSeccion } = rootStore.seccionesStore;
  useEffect(() => {
    const seccion = getSeccion("AvisosLegales");
    setPolitica(seccion.contenido);
  }, [secciones]);
  return (
    <NativeBaseProvider>
      <ScrollView style={{ padding: spacing.spacingS }}>
        <RenderHTML source={{ html: politica }} contentWidth={width} />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default inject("rootStore")(observer(AvisosScreen));
