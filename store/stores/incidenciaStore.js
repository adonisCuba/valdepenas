import { action, makeObservable, observable, runInAction } from "mobx";
import incidenciaService from "../../services/incidencia.service";
export class IncidenciaStore {
  incidencias = [];
  constructor() {
    makeObservable(this, {
      incidencias: observable,
      getIncidencias: action,
      getIncidencia: action,
    });
    this.incidencias = [];
  }
  getIncidencias = async () => {
    try {
      const result = await incidenciaService.getIncidencias();
      runInAction(() => {
        this.incidencias = result.rows;
      });
    } catch (error) {
      console.log(error);
    }
  };
  getIncidencia = (id) => {
    let incidencia = null;
    this.incidencias.map((item) => {
      if (item.id == id) {
        incidencia = item;
      }
    });
    return incidencia;
  };
}
