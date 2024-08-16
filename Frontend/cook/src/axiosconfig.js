// src/axiosConfig.js
import axios from 'axios';
import { auth } from './firebase';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ||'http://localhost:5000/api',
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
