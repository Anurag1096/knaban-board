// data/api/interceptors/authInterceptor.ts
import type { AxiosInstance } from "axios";

export function attachAuthInterceptor(axiosClient: AxiosInstance) {
  axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
}
