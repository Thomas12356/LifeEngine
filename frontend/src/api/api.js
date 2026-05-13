import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    //backend URL
    baseURL: '/api',
    withCredentials: true, // ESSENTIAL - sends cookies to the server
});

api.interceptors.request.use((config) => {
    const csrfToken = Cookies.get('csrf_access_token');
    
    if (csrfToken) {
        config.headers['X-CSRF-TOKEN'] = csrfToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default api;