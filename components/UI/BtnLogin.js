import React from "react";
import { Center, Pressable, Text, Spinner, HStack } from "native-base";
import { textStyles, spacing, colors } from "../../utils/styleGuide";
import { StyleSheet } from "react-native";

export const BtnLogin = (props) => {
  return (
    <Pressable style={styles.loginButton} onPress={props.onPress}>
      <Center flex={1}>
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

const styles = StyleSheet.create({
  textLoginButton: {
    ...textStyles.TXT_M,
  },
  loginButton: {
    width: "100%",
    margin: spacing.spacingM,
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
  },
});
