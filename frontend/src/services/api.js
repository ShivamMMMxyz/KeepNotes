import axios from 'axios';

const apiClient = axios.create({
<<<<<<< HEAD
    baseURL: import.meta.env.VITE_API_BASE_URL,
=======
    // Change this line for the production build
    baseURL: 'https://keepnotes-4md3.onrender.com/',
>>>>>>> 60ad95057e0b1e1f6e0e7ad08011e3bff50e19e0
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo && userInfo.token) {
            config.headers.Authorization = `Bearer ${userInfo.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// --- AUTH ---
export const register = (userData) => apiClient.post('/users/register', userData);
export const login = (credentials) => apiClient.post('/users/login', credentials);

// --- NOTES ---
export const getNotes = () => apiClient.get('/notes');
export const createNote = (noteData) => apiClient.post('/notes', noteData);
export const updateNote = (id, noteData) => apiClient.put(`/notes/${id}`, noteData);
export const deleteNote = (id) => apiClient.delete(`/notes/${id}`);
