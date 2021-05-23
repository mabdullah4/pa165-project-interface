import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "access-control-allow-origin" : "*",
        Accept: "application/json",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'

    },
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

service.interceptors.response.use((response: AxiosResponse) => {
    return response;
});

export default service;
