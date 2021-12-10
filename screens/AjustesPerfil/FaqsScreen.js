import {
  VStack,
  NativeBaseProvider,
  HStack,
  Text,
  Toast,
  Center,
  Spinner,
  Box,
} from "native-base";
import React, { useState, useEffect } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { FaqItem } from "../../components/FaqItem";
import menuService from "../../services/menu.service";
import { colors, textStyles, spacing } from "../../utils/styleGuide";
export const FaqsScreen = () => {
  const [list, setList] = useState([]);
  const { width } = useWindowDimensions();
  useEffect(async () => {
    const result = await menuService.getFaqs();
    if (result.message) {
      Toast.show({
        title: "Error",
        status: "error",
        description:
          "Error cargando las Faqs, por favor cierre sesión y entre nuevamente.",
      });
    } else setList(result);
  }, []);
  return (
    <NativeBaseProvider>
      <VStack
        flex={1}
        bg={colors.FONDO}
        style={{
          marginLeft: spacing.spacingXs,
          marginRight: spacing.spacingXs,
        }}
      >
        <HStack justifyContent="center" mb={spacing.spacingXxs}>
          <Text style={[textStyles.TXT_XS, { marginTop: spacing.spacingS }]}>
            Si tienes una duda, esperamos tener respuesta para ella...
          </Text>
        </HStack>
        {list.length > 0 ? (
          <FlatList
            data={list}
            keyExtractor={(item) => item.tid}
            renderItem={({ item }) => (
              <Box style={{ marginTop: spacing.spacingXxs }}>
                <FaqItem title={item.nombre}>
                  <RenderHTML
                    baseStyle={{
                      padding: spacing.spacingXs,
                      fontFamily: "Nunito_400Regular",
                      fontSize: 14,
                      fontWeight: "normal",
                      fontStyle: "normal",
                      letterSpacing: 0.16,
                      color: colors.GRIS_OSCURO,
                    }}
                    source={{ html: item.descripcion }}
                    contentWidth={width}
                  />
                </FaqItem>
              </Box>
            )}
          />
        ) : (
          <Center>
            <Spinner size="lg" color={colors.PRIMARIO} />
          </Center>
        )}
      </VStack>
    </NativeBaseProvider>
  );
};
