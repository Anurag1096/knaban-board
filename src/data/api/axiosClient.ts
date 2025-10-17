// client.ts
import axios from "axios";
import { attachAuthInterceptor } from "./interceptor/authInterceptor";
import { attachErrorInterceptor } from "./interceptor/errorInterceptor";


export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout:1000,
  headers: { "Content-Type": "application/json" },
});


attachAuthInterceptor(axiosClient)
attachErrorInterceptor(axiosClient)
