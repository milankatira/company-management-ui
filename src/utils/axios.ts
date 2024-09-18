import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.recruitly.io/api',
    headers: {
        Accept: 'application/json',
    },
    params: {
        apiKey: import.meta.env.VITE_API_KEY,
    },
});

export default apiClient;
