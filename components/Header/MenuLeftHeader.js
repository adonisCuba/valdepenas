import { Icon, IconButton, NativeBaseProvider } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { spacing } from "../../utils/styleGuide";
export const MenuLeftHeader = (props) => {
  return (
    <NativeBaseProvider>
      <IconButton
        onPress={props.onPress}
        icon={<Icon as={<Ionicons name="menu-outline" />} />}
      />
    </NativeBaseProvider>
  );
};
