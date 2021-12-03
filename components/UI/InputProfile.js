import { Input } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { textStyles, spacing, colors } from "../../utils/styleGuide";
export const InputProfile = (props) => {
  return (
    <Input
      {...props}
      placeholderTextColor={colors.PRIMARIO}
      style={[styles.textInput, styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  textInput: { ...textStyles.TXT_XS, color: colors.PRIMARIO },
  input: {
    width: "100%",
    margin: spacing.spacingXxs,
    height: 46,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#562039",
    textAlign: "center",
  },
});
