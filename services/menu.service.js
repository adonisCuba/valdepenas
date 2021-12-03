import Constants from "expo-constants";
import { TokenService } from "./token.service";
class MenuService {
  constructor() {
    this.API_URL = Constants.manifest.extra.API_URL;
  }
  async getProfile() {
    const accessToken = await TokenService.getAccessToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    return await fetch(
      `${this.API_URL}/rest/perfil_usuario?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  async saveProfile(nombre, apellidos, email = undefined) {
    const accessToken = await TokenService.getAccessToken();
    const csrfToken = await TokenService.getCsrfToken();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-CSRF-Token", csrfToken);

    let data = { nombre, apellidos };
    if (email != undefined) data = { ...data, email };
    const raw = JSON.stringify(data);

    const requestOptions = {
      method: "PUT",
      headers: headers,
      redirect: "follow",
      body: raw,
    };

    return await fetch(
      `${this.API_URL}/rest/perfil_usuario?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  async getFaqs() {
    const accessToken = await TokenService.getAccessToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    return await fetch(`${this.API_URL}/rest/faqs?_format=json`, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  async sendFeedBack(subject, message) {
    const accessToken = await TokenService.getAccessToken();
    const csrfToken = await TokenService.getCsrfToken();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-CSRF-Token", csrfToken);

    const raw = JSON.stringify({
      webform_id: "feedback",
      subject,
      message,
      acepta_la_politica_de_privacidad: 1,
    });
    const requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
      body: raw,
    };

    return await fetch(
      `${this.API_URL}/webform_rest/submit?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }
}

export default new MenuService();
