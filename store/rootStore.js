import { IncidenciaStore } from "./stores/incidenciaStore";
import { SeccionesStore } from "./stores/seccionesStore";
import { ProfileStore } from "./stores/profileStore";
class RootStore {
  constructor() {
    this.incidenciaStore = new IncidenciaStore();
    this.seccionesStore = new SeccionesStore();
    this.profileStore = new ProfileStore();
  }
}
export const rootStore = new RootStore();
