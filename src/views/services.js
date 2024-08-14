import axios from "axios";

const axiosInstante = axios.create({
  baseURL: "http://localhost:3000",
});
export const api = {
  get(endpoint) {
    return axiosInstante.get(endpoint);
  },
};
