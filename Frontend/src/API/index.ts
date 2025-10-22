import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Adiciona um interceptador para incluir o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptador de resposta para capturar token expirado
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Limpa token e dados do usuário
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('user_id');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      // Redireciona para login (força reload para desmontar contexto)
      window.location.href = '/session-login?expired=1';
    }
    return Promise.reject(error);
  }
);

export default api;
