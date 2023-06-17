import { message } from "antd";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import useUserInfo from "../hooks/useUserInfo";

export interface configRequest {
  baseURL: string;
  timeout: number;
}

// 封装网络请求
class FsRequest {
  instance: AxiosInstance;
  constructor(config: configRequest) {
    // axios 实例
    this.instance = axios.create(config);

    // 配置请求拦截器
    this.instance.interceptors.request.use((config) => {
      // 配置请求头token
      const token = localStorage.getItem("token");
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // 配置响应拦截器
    this.instance.interceptors.response.use((config) => {
      if (config.data.code === 1100) {
        message.warning(config.data.message);
        const { handleLoginOut } = useUserInfo();
        handleLoginOut();
      }
      return config.data;
    });
  }

  // 封装整体请求
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        )
        .finally(() => {
          console.log("请求完成");
        });
    });
  }

  // get 请求
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: "GET", ...config });
  }
  // post 请求
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: "POST", ...config });
  }
}

export default FsRequest;
