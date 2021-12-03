import { Box, NativeBaseProvider, StatusBar, Text, Stack } from "native-base";
import React from "react";
import { spacing, textStyles } from "../../utils/styleGuide";
import { StyleSheet } from "react-native";
export const IncidenciasHeader = (props) => {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Box safeAreaTop />
      <Stack>
        <Text style={styles.text}>{props.text}</Text>
      </Stack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    ...textStyles.TXT_L,
    marginTop: spacing.spacingM,
  },
});
