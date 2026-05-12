import api from "@/api/api";

export async function loginUser(credentials) {
    const response = await api.post('/auth/login', credentials);
    if (response.data.access_token){
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export function logoutUser() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
};