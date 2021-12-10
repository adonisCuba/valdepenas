import { Box, HStack, Text, Pressable } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing, textStyles } from "../utils/styleGuide";
import { Shadow } from "react-native-shadow-2";
export const FaqItem = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <Shadow
      viewStyle={{ width: "100%" }}
      containerViewStyle={{
        marginLeft: spacing.spacingXs,
        marginRight: spacing.spacingXs,
        marginBottom: spacing.spacingXs,
      }}
      distance="6"
    >
      <Box style={styles.boxContainer}>
        {expand ? (
          <Pressable
            style={{
              padding: spacing.spacingS,
              backgroundColor: colors.PRIMARIO,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            onPress={() => {
              setExpand(!expand);
            }}
          >
            <Text style={[styles.title, { color: "white" }]}>
              {props.title}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={{ padding: spacing.spacingS }}
            onPress={() => {
              setExpand(!expand);
            }}
          >
            <Text style={styles.title}>{props.title}</Text>
          </Pressable>
        )}

        {expand ? props.children : null}
      </Box>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    borderRadius: 8,
  },
  title: {
    ...textStyles.TXT_S,
    textAlign: "left",
    fontWeight: "bold",
  },
});
