import { IconButton, Image, NativeBaseProvider, Pressable } from "native-base";
import React from "react";
import { spacing } from "../../utils/styleGuide";
export const MenuLeftPrimaryHeader = (props) => {
  return (
    <NativeBaseProvider>
      <Pressable
        onPress={props.onPress}
        mt={spacing.spacingXxs}
        ml={spacing.spacingXxs}
      >
        <Image
          source={require("../../assets/icons/iconosVolverBlanco.png")}
          alt="Icon back"
        />
      </Pressable>
    </NativeBaseProvider>
  );
};
