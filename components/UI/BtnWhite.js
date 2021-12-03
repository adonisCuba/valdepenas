import { Center, Pressable, Text, HStack, Spinner } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { textStyles, spacing, colors } from "../../utils/styleGuide";
export const BtnWhite = (props) => {
  return (
    <Pressable style={style.btn} onPress={props.onPress}>
      <Center flex={1} textAlign="center">
        <HStack>
          {props.showLoading == true ? (
            <Spinner size="sm" marginTop={-5} color={colors.PRIMARIO} />
          ) : null}

          <Text
            style={{
              ...textStyles.TXT_M,
            }}
          >
            {props.text}
          </Text>
        </HStack>
      </Center>
    </Pressable>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginBottom: spacing.spacingL,
    padding: spacing.spacingM,
  },
});
