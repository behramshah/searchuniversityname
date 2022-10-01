const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'http://universities.hipolabs.com',
    timeout: 2000,
});