//import Api from "@/services/api";
import API from "@/services/api";

export default {
  GetInfo(payload) {
    return API().get("api", {
      params: {
        id: payload.id
      }
    });
  }
};
