import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "/",
    headers: {
        Accept: "application/json",
    },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

instance.interceptors.response.use((response: AxiosResponse) => {
    return response;
});

export default instance;
