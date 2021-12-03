import { Center, Pressable, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { textStyles, spacing, colors } from "../../utils/styleGuide";
export const BtnMarron = (props) => {
  return (
    <Pressable style={style.btn} onPress={props.onPress}>
      <Center flex={1} textAlign="center">
        <Text style={{ ...textStyles.TXT_M, color: "white" }}>
          {props.text}
        </Text>
      </Center>
    </Pressable>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.PRIMARIO,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginBottom: spacing.spacingL,
    marginTop: spacing.spacingM,
    padding: spacing.spacingM,
  },
});
