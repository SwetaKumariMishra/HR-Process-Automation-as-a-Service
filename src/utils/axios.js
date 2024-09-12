import axios from 'axios';

const AxiosInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    // Add a request interceptor
    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance;
};

export default AxiosInstance;
