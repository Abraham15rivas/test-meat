import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
let instance = axios.create();

instance.interceptors.request.use(request => {
  request.headers['Accept'] = 'application/json';
  request.headers['Content-Type'] = 'application/json';
  request.headers['X-Requested-With'] = 'XMLHttpRequest';
  return request;
});

export default instance;