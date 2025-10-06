import axios from 'axios';

export const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});
