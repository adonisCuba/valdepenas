import { IconButton, Image, NativeBaseProvider, Pressable } from "native-base";
import React from "react";
import { spacing } from "../../utils/styleGuide";
export const MenuLeftWhiteHeader = (props) => {
  return (
    <NativeBaseProvider>
      <Pressable
        onPress={props.onPress}
        mt={spacing.spacingXxs}
        ml={spacing.spacingXxs}
      >
        <Image
          source={require("../../assets/icons/iconosVolverPrimario.png")}
          alt="Icon back"
        />
      </Pressable>
    </NativeBaseProvider>
  );
};
