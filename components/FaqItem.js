import { Box, HStack, Text, Pressable } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing, textStyles } from "../utils/styleGuide";
export const FaqItem = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <View style={styles.boxContainer}>
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
          <Text style={[styles.title, { color: "white" }]}>{props.title}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginBottom: spacing.spacingXs,
  },
  title: {
    ...textStyles.TXT_S,
    textAlign: "left",
    fontWeight: "bold",
  },
});
