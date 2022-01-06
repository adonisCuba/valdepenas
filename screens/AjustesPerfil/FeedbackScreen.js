import {
  VStack,
  Center,
  HStack,
  NativeBaseProvider,
  Text,
  TextArea,
  Toast,
  ScrollView,
} from "native-base";
import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BtnMarron } from "../../components/UI/BtnMarron";
import { InputProfile } from "../../components/UI/InputProfile";
import menuService from "../../services/menu.service";
import { colors, textStyles, spacing } from "../../utils/styleGuide";
export const FeedBackScreen = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const send = async () => {
    if (subject.trim() != "" && message.trim() != "") {
      const result = await menuService.sendFeedBack(subject, message);
      if (result.sid) {
        Toast.show({
          title: "Información",
          status: "success",
          description: "Su opinión ha sido recepcionada satisfactoriamente.",
        });
        setSubject("");
        setMessage("");
      } else
        Toast.show({
          title: "Error",
          status: "error",
          description:
            "No se logró enviar su opinión, si el error persiste contacte a su proveedor.",
        });
    } else {
      Toast.show({
        title: "Error",
        status: "error",
        description: "Debe llenar todos los campos.",
      });
    }
  };
  return (
    <NativeBaseProvider>
      <VStack flex={1} bg={colors.FONDO}>
        <HStack justifyContent="center">
          <Text style={[textStyles.TXT_XS, { marginTop: spacing.spacingS }]}>
            Puedes editar los datos de tu usuario
          </Text>
        </HStack>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Center
            flex={1}
            style={{
              marginLeft: 32,
              marginRight: 32,
            }}
          >
            <InputProfile
              placeholder="Asunto"
              value={subject}
              onChangeText={(text) => {
                setSubject(text);
              }}
            />
            <TextArea
              placeholder="Descripción"
              placeholderTextColor={colors.PRIMARIO}
              style={[
                textStyles.TXT_XS,
                { textAlign: "center" },
                styles.textArea,
              ]}
              value={message}
              onChangeText={(text) => {
                setMessage(text);
              }}
            />
          </Center>
        </ScrollView>
        <HStack justifyContent="center">
          <BtnMarron text="Enviar" onPress={send} />
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textArea: {
    width: "100%",
    height: 134,
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
  },
});
