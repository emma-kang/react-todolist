import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST_API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig ) => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => error
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async(error) => {
    if (!error.response) return Promise.reject(error);
    // can handle according exception status here (eg. 404, 405 ... )
  }
);

export default axiosInstance;
