import { action, makeObservable, observable, runInAction } from "mobx";
import seccionService from "../../services/seccion.service";

export class SeccionesStore {
  secciones = [];

  constructor() {
    makeObservable(this, {
      secciones: observable,
      getSecciones: action,
      getSeccion: action,
    });
  }

  async getSecciones() {
    try {
      const result = await seccionService.getSecciones();
      console.log("Secciones", result);
      runInAction(() => {
        this.secciones = result;
      });
    } catch (error) {
      console.log(error);
    }
  }
  getSeccion(id) {
    let seccion = null;
    this.secciones.map((item) => {
      if (item.id == id) seccion = item;
    });
    return seccion;
  }
}
