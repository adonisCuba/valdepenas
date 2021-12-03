import axios from "axios";

class LocationService {
  async getAddress(geo) {
    const result = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${geo.latitude}&lon=${geo.longitude}&format=json`
    );
    return result.data.display_name;
  }
}
export default new LocationService();
