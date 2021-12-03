import { NativeBaseProvider, HStack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { colors, spacing, textStyles } from "../../utils/styleGuide";
export const PrimaryBackHeader = (props) => {
  const { onPress, text } = props;
  return (
    <NativeBaseProvider>
      <HStack style={style.fondo} mt={spacing.spacingXxs}>
        <Text style={style.textStyles}>{text}</Text>
      </HStack>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  textStyles: {
    ...textStyles.TXT_XL,
    color: "white",
  },
  fondo: {
    backgroundColor: colors.PRIMARIO,
    width: "100%",
  },
});
