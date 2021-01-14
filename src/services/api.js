import axios from "axios";

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3333" : "http://161.35.180.102:3333"

const api = axios.create({
  baseURL,
});

export default api;
