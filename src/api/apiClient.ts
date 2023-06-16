import axios from "axios";
import config from "../config";

const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 5_000,
});

apiClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export default apiClient;
