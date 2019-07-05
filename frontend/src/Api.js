import axios from "axios";

// const API_URL = "http://ctsdemo.com/demos/ctech_backend/public/api/";
const API_URL = "http://localhost:8000/api/";
export function get(url, params) {
  const config = { params: params };
  return axios.get(API_URL + url, config);
}
