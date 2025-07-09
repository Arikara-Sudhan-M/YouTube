import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "BACKEND_URL",
  withCredentials: true,
});

export default axiosInstance;
