import { Input } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { textStyles, spacing, colors } from "../../utils/styleGuide";
export const InputLogin = (props) => {
  return (
    <Input
      {...props}
      placeholderTextColor="#FFFFFF"
      style={[styles.textInput, styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  textInput: { ...textStyles.TXT_XS, color: "#ffffff", fontWeight: "bold" },
  input: {
    width: "100%",
    margin: spacing.spacingXxs,
    height: 46,
    backgroundColor: colors.PRIMARIO,
    opacity: 0.75,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dfdfdf",
    textAlign: "center",
  },
});
