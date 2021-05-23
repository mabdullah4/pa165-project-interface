import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        Accept: "application/json",
    },
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

service.interceptors.response.use((response: AxiosResponse) => {
    return response;
});

export default service;
