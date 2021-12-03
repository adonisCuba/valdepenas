import { NativeBaseProvider, HStack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { spacing, textStyles } from "../../utils/styleGuide";
export const WhiteBackHeader = (props) => {
  const { text } = props;
  return (
    <NativeBaseProvider>
      <HStack style={style.fondo} mt={spacing.spacingXxs}>
        <Text style={textStyles.TXT_XL}>{text}</Text>
      </HStack>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    width: "100%",
  },
});
