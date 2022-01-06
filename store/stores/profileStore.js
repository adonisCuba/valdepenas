import { action, makeObservable, observable, runInAction } from "mobx";
import menuService from "../../services/menu.service";

export class ProfileStore {
  profile = {};
  constructor() {
    makeObservable(this, {
      profile: observable,
      getProfile: action,
      setProfile: action,
    });
  }
  setProfile = (nombre, apellidos, email) => {
    this.profile = { ...this.profile, nombre, apellidos, email };
  };
  getProfile = async () => {
    try {
      const result = await menuService.getProfile();
      runInAction(() => {
        this.profile = result;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
