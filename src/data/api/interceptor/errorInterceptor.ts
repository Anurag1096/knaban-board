import type { AxiosInstance } from "axios";


export function attachErrorInterceptor(axiosClient:AxiosInstance){
axiosClient.interceptors.response.use(
  (response) => {
    console.log("[Response]", response.status, response.config.url);
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response?.status === 401) {
      // Token expired → attempt refresh
      console.warn("Token expired. Trying to refresh...");
      // Optionally handle token refresh logic here
    }

    if (response?.status >= 500) {
      console.error("Server error:", response.data?.message);
    }

    return Promise.reject(error);
  }
);
}