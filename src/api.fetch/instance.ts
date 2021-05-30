import axios, { AxiosInstance } from 'axios';
/**
 * @function
 * @name getAxiosInstance
 * @returns { AxiosInstance}
 */
export const getAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({ baseURL: window['env'].API_URL });

    instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

    return instance;
};
