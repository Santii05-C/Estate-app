import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://backend-estate-1.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
