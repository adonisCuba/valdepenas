import { inject, observer } from "mobx-react";
import { NativeBaseProvider, HStack, FlatList } from "native-base";
import React, { useEffect } from "react";
import { IncidenciaItem } from "../../components/IncidenciaItem";
import { BtnMarron } from "../../components/UI/BtnMarron";
import { colors, spacing } from "../../utils/styleGuide";
import { LinearGradient } from "expo-linear-gradient";
const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};
const ListIncidenciaScreen = (props) => {
  const { incidencias, getIncidencias } = props.rootStore.incidenciaStore;
  useEffect(() => {
    getIncidencias();
  }, []);

  return (
    <NativeBaseProvider>
      <FlatList
        style={{ backgroundColor: colors.FONDO, marginTop: spacing.spacingS }}
        data={incidencias}
        renderItem={({ item }) => (
          <IncidenciaItem
            imagen={item.imagen}
            created={item.created}
            estado={item.estado}
            titulo={item.titulo}
            direccion={item.direccion}
            onPress={() =>
              props.navigation.navigate("DetailsIncidencia", {
                itemId: item.id,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <LinearGradient
        colors={["rgba(151,145,151,0.5)", "white"]}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        <HStack justifyContent="center">
          <BtnMarron
            text="Crear incidencia"
            onPress={() => props.navigation.navigate("CreateIncidencia")}
          />
        </HStack>
      </LinearGradient>
    </NativeBaseProvider>
  );
};
export default inject("rootStore")(observer(ListIncidenciaScreen));
