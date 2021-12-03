import { IncidenciaStore } from "./stores/incidenciaStore";
class RootStore {
  constructor() {
    this.incidenciaStore = new IncidenciaStore();
  }
}
export const rootStore = new RootStore();
