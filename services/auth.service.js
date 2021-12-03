import { TokenService } from "./token.service";
import Constants from "expo-constants";
class AuthService {
  constructor() {
    this.API_URL = Constants.manifest.extra.API_URL;
  }
  async login(email, password) {
    return await fetch(`${this.API_URL}/user/login?_format=json`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: email, pass: password }),
      redirect: "follow",
      credentials: "omit",
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return { status: 403, message: "Usuario o contraseña incorrecto." };
      }
    });
  }
  async recoveryPassword(email) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    var raw = JSON.stringify({ mail: email });

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      `${this.API_URL}/user/password?_format=json`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }
  async register(nombre, apellidos, dni, telefono, email, password) {
    const token = await TokenService.getFreshCsrfToken();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("X-CSRF-Token", token);

    const raw = JSON.stringify({
      name: { value: email },
      mail: { value: email },
      pass: { value: password },
      field_nombre: { value: nombre },
      field_apellidos: { value: apellidos },
      field_dni: { value: dni },
      field_telefono: { value: telefono },
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
      credentials: "omit",
    };

    return await fetch(
      `${this.API_URL}/user/register?_format=hal_json`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
import incidenciaService from "./incidencia.service";

export default new AuthService();
