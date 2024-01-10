import api from "./api";

const API_URL = process.env.VUE_APP_API_URL;

export default {
  getArticles(param) {
    let urlBase = param ? `${API_URL}/articles?filter=${param}` : `${API_URL}/articles`;
    return api.get(urlBase);
  },

  createNewsletter(data) {
    return api.post(`${API_URL}/newsletter`, data);
  }
};