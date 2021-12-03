import Constants from "expo-constants";
import { TokenService } from "./token.service";
class IncidenciaService {
  constructor() {
    this.API_URL = Constants.manifest.extra.API_URL;
  }
  async getIncidencias() {
    const headers = new Headers();
    const accessToken = await TokenService.getAccessToken();
    headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    return await fetch(
      `${this.API_URL}/rest/incidencias?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  async uploadImage(imagen) {
    const headers = new Headers();
    const accessToken = await TokenService.getAccessToken();
    const csrfToken = await TokenService.getFreshCsrfToken();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-CSRF-Token", csrfToken);
    const raw = JSON.stringify({ imagenes: [imagen] });
    const requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
      body: raw,
    };
    return await fetch(
      `${this.API_URL}/rest/fileupload?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  async save(
    titulo,
    descripcion,
    imagen,
    direccion,
    geolocalizacion,
    descDir = undefined
  ) {
    const headers = new Headers();
    const accessToken = await TokenService.getAccessToken();
    const csrfToken = await TokenService.getFreshCsrfToken();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-CSRF-Token", csrfToken);

    let data = {
      titulo,
      descripcion,
      imagen,
      direccion,
      geo: { lat: geolocalizacion.latitude, lon: geolocalizacion.longitude },
    };
    if (descDir != undefined) data = { ...data, descDir };
    const raw = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
      body: raw,
    };
    return await fetch(
      `${this.API_URL}/rest/incidencia?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }
}

export default new IncidenciaService();
