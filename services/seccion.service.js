import Constants from "expo-constants";
import { TokenService } from "./token.service";

class SeccionService {
  constructor() {
    this.API_URL = Constants.manifest.extra.API_URL;
  }

  async getSecciones() {
    const headers = new Headers();

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    return await fetch(
      `${this.API_URL}/rest/secciones_textuales?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }
}

export default new SeccionService();
