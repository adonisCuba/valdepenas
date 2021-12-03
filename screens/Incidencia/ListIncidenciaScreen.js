import { inject, observer } from "mobx-react";
import { NativeBaseProvider, HStack, FlatList } from "native-base";
import React, { useEffect } from "react";
import { IncidenciaItem } from "../../components/IncidenciaItem";
import { BtnMarron } from "../../components/UI/BtnMarron";
import { colors } from "../../utils/styleGuide";
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
    <NativeBaseProvider config={config}>
      <FlatList
        style={{ backgroundColor: colors.FONDO }}
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
      <HStack
        justifyContent="center"
        bg={{
          linearGradient: {
            colors: [colors.FONDO, "#FFFFFF"],
            start: [0, 0],
            end: [0, 1],
          },
        }}
      >
        <BtnMarron
          text="Crear incidencia"
          onPress={() => props.navigation.navigate("CreateIncidencia")}
        />
      </HStack>
    </NativeBaseProvider>
  );
};
export default inject("rootStore")(observer(ListIncidenciaScreen));
