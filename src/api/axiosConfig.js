import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080"; // Adjust port if needed

const instance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, // 👈 this is crucial for sending cookies like JSESSIONID
});

export default instance;
