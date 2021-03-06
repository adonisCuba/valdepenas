import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListIncidenciaScreen from "../screens/Incidencia/ListIncidenciaScreen";
import CreateIncidenciaScreen from "../screens/Incidencia/CreateIncidenciaScreen";
import { SuccessCreateScreen } from "../screens/Incidencia/SuccessCreateScreen";
import DetailsIncidenciaScreen from "../screens/Incidencia/DetailsIncidenciaScreen";
import { ProfileSettingsScreen } from "../screens/AjustesPerfil/ProfileSettingsScreen";
import EditProfileScreen from "../screens/AjustesPerfil/EditProfileScreen";
import { FeedBackScreen } from "../screens/AjustesPerfil/FeedbackScreen";
import { FaqsScreen } from "../screens/AjustesPerfil/FaqsScreen";
import { IncidenciasHeader } from "../components/Header/IncidenciasHeader";
import { MenuLeftHeader } from "../components/Header/MenuLeftHeader";
import { MenuLeftWhiteHeader } from "../components/Header/MenuLeftWhiteHeader";
import { WhiteBackHeader } from "../components/Header/WhiteBackHeader";
import { MenuLeftPrimaryHeader } from "../components/Header/MenuLeftPrimaryHeader";
import { PrimaryBackHeader } from "../components/Header/PrimaryBackHeader";
import { colors } from "../utils/styleGuide";
import { LocateScreen } from "../screens/Incidencia/LocateScreen";
import AvisosScreen from "../screens/AjustesPerfil/AvisosScreen";
import InfoTecnicaScreen from "../screens/AjustesPerfil/InfoTecnicaScreen";
import { inject, observer } from "mobx-react";
import PoliticaScreen from "../screens/AjustesPerfil/PoliticaScreen";

const Stack = createStackNavigator();

const IncidenciaStack = (props) => {
  const { getProfile } = props.rootStore.profileStore;
  const { getSecciones } = props.rootStore.seccionesStore;
  useEffect(() => {
    getProfile();
    getSecciones();
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => (
            <MenuLeftHeader
              onPress={() => {
                navigation.navigate("ProfileSettings");
              }}
            />
          ),
          headerTitle: (props) => <IncidenciasHeader text="Valdepe??as" />,
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name="ListIncidencias" component={ListIncidenciaScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="CreateIncidencia"
          component={CreateIncidenciaScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="Valdepe??as" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Locate"
          component={LocateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsIncidencia"
          component={DetailsIncidenciaScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftWhiteHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <WhiteBackHeader text="Valdepe??as" />,
          })}
        />
        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettingsScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="Editar perfil" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="FeedBack"
          component={FeedBackScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="Feedback" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Faqs"
          component={FaqsScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="Faqs" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Politica"
          component={PoliticaScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => (
              <PrimaryBackHeader text="Pol??tica de privacidad" />
            ),
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Avisos"
          component={AvisosScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => <PrimaryBackHeader text="Avisos legales" />,
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="InfoTecnica"
          component={InfoTecnicaScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <MenuLeftPrimaryHeader onPress={() => navigation.goBack()} />
            ),
            headerTitleAlign: "center",
            headerTitle: (props) => (
              <PrimaryBackHeader text="Informaci??n t??cnica" />
            ),
            headerStyle: {
              backgroundColor: colors.PRIMARIO,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SuccessCreateIncidencia"
          component={SuccessCreateScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default inject("rootStore")(observer(IncidenciaStack));
