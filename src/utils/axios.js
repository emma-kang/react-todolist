import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.APP_HOST_API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(process.env.APP_HOST_API_KEY);
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => error
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async(error) => {
    if (!error.response) return Promise.reject(error);
    // can handle according exception status here (eg. 404, 405 ... )
  }
);

export default axiosInstance;
