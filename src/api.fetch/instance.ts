import axios from 'axios';

export const getAxiosInstance = () => {
    const instance = axios.create({ baseURL: window['env'].API_URL });

    instance.interceptors.request.use(
        (request) => {
            // We are adding the token to the request
            const token = localStorage.getItem('token');
            request.headers = {
                Authorization: `Bearer ${token}`,
            };

            return request;
        },
        (error) => {
            console.log(error);
            return Promise.reject(error);
        },
    );

    return instance;
};
