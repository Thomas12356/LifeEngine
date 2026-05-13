import api from "@/api/api";

export async function loginUser(credentials) {
    const response = await api.post('/auth/login', credentials);

    return response.data.user;
};

export async function logoutUser() {
    try{
        await api.post('/auth/logout');
    } finally{
        localStorage.clear();
        window.location.href = '/login';
    }
};