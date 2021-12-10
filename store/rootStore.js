import { IncidenciaStore } from "./stores/incidenciaStore";
import { SeccionesStore } from "./stores/seccionesStore";
class RootStore {
  constructor() {
    this.incidenciaStore = new IncidenciaStore();
    this.seccionesStore = new SeccionesStore();
  }
}
export const rootStore = new RootStore();
