import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

export const TokenService = {
  getAccessToken: async () => {
    return await SecureStore.getItemAsync("accessToken");
  },
  setAccessToken: async (token) => {
    await SecureStore.setItemAsync("accessToken", token);
  },
  getFreshCsrfToken: async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return await fetch(
      `${Constants.manifest.extra.API_URL}/session/token`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  },
  getCsrfToken: async () => {
    return await SecureStore.getItemAsync("csrfToken");
  },
  setCsrfToken: async (csrfToken) => {
    await SecureStore.setItemAsync("csrfToken", csrfToken);
  },
  getLogoutToken: async () => {
    return await SecureStore.getItemAsync("logoutToken");
  },
  setLogoutToken: async (logoutToken) => {
    await SecureStore.setItemAsync("logoutToken", logoutToken);
  },
  getUser: async () => {
    return await SecureStore.getItemAsync("user");
  },
  setUser: async (user) => {
    await SecureStore.setItemAsync("user", JSON.stringify(user));
  },
};
