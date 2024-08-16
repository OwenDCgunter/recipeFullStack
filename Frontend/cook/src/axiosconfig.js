import axios from 'axios';
import { auth } from './firebase';

// Use environment variable for API base URL
const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:5000/api';
console.log("BASE", baseURL);
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(async config => {
  const token = await auth.currentUser?.getIdToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;