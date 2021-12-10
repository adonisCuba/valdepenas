import {
  AlertDialog,
  Box,
  Button,
  HStack,
  Input,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  TextArea,
  Toast,
  VStack,
} from "native-base";
import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Image } from "react-native";
import { colors, textStyles, spacing } from "../../utils/styleGuide";
import { BtnWhite } from "../../components/UI/BtnWhite";
import * as ImagePicker from "expo-image-picker";
import locationService from "../../services/location.service";
import * as FileSystem from "expo-file-system";
import incidenciaService from "../../services/incidencia.service";
import { inject, observer } from "mobx-react";
import CamaraIcon from "../../assets/icons/iconosCamara.svg";
import UbicacionIcon from "../../assets/icons/iconoUbicaciN.svg";
const CreateIncidenciaScreen = ({ navigation, route, rootStore }) => {
  const { getIncidencias } = rootStore.incidenciaStore;
  const [imagenUri, setImagenUri] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descDireccion, setDescDireccion] = useState("");
  const [geolocalizacion, setGeolocalizacion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted")
          alert(
            "Disculpe, pero debe dar permiso a la cámara para que funcione"
          );
      }
    })();
  }, []);
  useEffect(async () => {
    if (route.params?.geo) {
      setLoading(true);
      setGeolocalizacion(route.params.geo);
      const result = await locationService.getAddress(route.params.geo);
      setDireccion(result);
      setLoading(false);
    }
  }, [route.params?.geo]);

  const pickImage = async () => {
    setIsOpen(!isOpen);
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [16, 9],
    //   quality: 0.5,
    // });
    // if (!result.cancelled) {
    //   setImagenUri(result.uri);
    // }
  };
  const onGaleria = async () => {
    setIsOpen(false);
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        alert("Disculpe, pero debe dar permiso a la cámara para que funcione");
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImagenUri(result.uri);
    }
  };

  const onCamara = async () => {
    setIsOpen(false);
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted")
        alert("Disculpe, pero debe dar permiso a la cámara para que funcione");
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImagenUri(result.uri);
    }
  };

  const save = async () => {
    if (
      titulo.trim() != "" &&
      description.trim() != "" &&
      imagenUri != null &&
      direccion.trim() != "" &&
      geolocalizacion != null
    ) {
      setBtnLoading(true);
      const base64 = await FileSystem.readAsStringAsync(imagenUri, {
        encoding: "base64",
      });
      let arr = imagenUri.split("/");
      const filename = arr[arr.length - 1];
      arr = filename.split(".");
      const extension = arr[arr.length - 1];
      const imagen = { filename, tipemime: `image/${extension}`, base64 };
      const uploadRes = await incidenciaService.uploadImage(imagen);
      const result = await incidenciaService.save(
        titulo,
        description,
        uploadRes[0],
        direccion,
        geolocalizacion
      );
      setBtnLoading(false);
      if (result.message)
        Toast.show({
          title: "Error",
          status: "error",
          description:
            "No se logró registrar su incidencia, revise los datos introducidos, si el problema persiste consulte a su proveedor.",
        });
      else {
        getIncidencias();
        navigation.navigate("SuccessCreateIncidencia");
      }
    } else
      Toast.show({
        title: "Información",
        status: "info",
        description: "Debe llenar los campos y seleccionar la geolocalización.",
      });
  };
  return (
    <NativeBaseProvider>
      <VStack flex={1}>
        <ScrollView
          flex={1}
          bg={colors.PRIMARIO}
          pl={spacing.spacingXs}
          pr={spacing.spacingXs}
        >
          <VStack w="100%" style={{ marginTop: spacing.spacingS }}>
            <Text style={styles.label}>Título</Text>
            <Input
              placeholder="Pon un título corto y conciso"
              placeholderTextColor={colors.GRIS_MEDIO}
              style={[styles.input, textStyles.TXT_XS]}
              value={titulo}
              onChangeText={(text) => {
                setTitulo(text);
              }}
            />
            <Text mt={spacing.spacingXxs} style={styles.label}>
              Descripción
            </Text>
            <TextArea
              placeholder="Describe la incidencia de forma clara"
              placeholderTextColor={colors.GRIS_MEDIO}
              mb={spacing.spacingXxs}
              style={[textStyles.TXT_XS, styles.textArea]}
              value={description}
              onChangeText={(text) => {
                setDescription(text);
              }}
            />
            <Text style={styles.label}>Sube una foto</Text>
            {imagenUri && (
              <Pressable
                onPress={() => setIsOpen(!isOpen)}
                style={{ marginBottom: spacing.spacingS }}
              >
                <Image
                  source={{ uri: imagenUri }}
                  style={{ width: "100%", height: 200, borderRadius: 8 }}
                  alt="Ico foto"
                  resizeMode="cover"
                />
              </Pressable>
            )}
            {imagenUri == null && (
              <Pressable onPress={() => setIsOpen(!isOpen)}>
                <Box h={200} bg="white" style={styles.boxFoto}>
                  <CamaraIcon />
                </Box>
              </Pressable>
            )}
            <Text style={styles.label}>Dondé ha sido la incidencia?</Text>
            <Input
              placeholder="Geolocaliza la ubicación"
              placeholderTextColor={colors.GRIS_MEDIO}
              bg="white"
              style={textStyles.TXT_XS}
              borderRadius={8}
              mb={spacing.spacingXxs}
              value={direccion}
              onChangeText={(text) => {
                setDireccion(text);
              }}
              InputRightElement={
                <Pressable onPress={() => navigation.navigate("Locate")}>
                  {loading ? (
                    <Spinner size="sm" color={colors.PRIMARIO} />
                  ) : (
                    <Box style={{ marginRight: spacing.spacingXxs }}>
                      <UbicacionIcon />
                    </Box>
                  )}
                </Pressable>
              }
            />
            <Input
              placeholder="Describe si no es una dirección concreta"
              placeholderTextColor={colors.GRIS_MEDIO}
              style={[styles.input, textStyles.TXT_XS]}
              value={descDireccion}
              onChangeText={(text) => {
                setDescDireccion(text);
              }}
            />
          </VStack>
        </ScrollView>
        <HStack
          justifyContent="center"
          bg={colors.PRIMARIO}
          style={{ paddingTop: spacing.spacingS }}
        >
          <BtnWhite
            text="Crear incidencia"
            showLoading={btnLoading}
            onPress={save}
          />
        </HStack>

        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Seleccionar imagen</AlertDialog.Header>
            <AlertDialog.Body>
              Seleccione la fuente de donde desea obtener la imagen.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  colorScheme="coolGray"
                  onPress={onGaleria}
                  ref={cancelRef}
                >
                  Galería
                </Button>
                <Button colorScheme="coolGray" onPress={onCamara}>
                  Cámara
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </VStack>
    </NativeBaseProvider>
  );
};

export default inject("rootStore")(observer(CreateIncidenciaScreen));

const styles = StyleSheet.create({
  label: {
    ...textStyles.TXT_S,
    color: "white",
    textAlign: "left",
  },
  input: {
    width: "100%",
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
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dfdfdf",
  },
  textArea: {
    width: "100%",
    height: 150,
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
    borderColor: "#dfdfdf",
  },
  boxFoto: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
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
    borderColor: "#dfdfdf",
    marginBottom: spacing.spacingS,
  },
});
