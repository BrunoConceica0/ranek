import axios from "axios";

const axiosInstantes = axios.create({
  baseURL: "http://localhost:3000",
});
export const api = {
  get(endpoint) {
    return axiosInstantes.get(endpoint);
  },
};
