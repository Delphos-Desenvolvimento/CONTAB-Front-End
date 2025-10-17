import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

// Type definitions
type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

type ErrorResponse = {
  message: string;
  status?: number;
};

// Axios instance configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ErrorResponse>) => {
    if (error.response?.status === 401) {
      // Clear user data
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('user_id');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      
      // Redirect to login page if not already there
      if (!window.location.pathname.includes('login')) {
        window.location.href = '/login?session=expired';
      }
    }
    return Promise.reject(error);
  }
);

// API functions
export const authAPI = {
  // Login
  async login(credentials: LoginData): Promise<LoginResponse> {
    try {
      const response = await api.post<LoginResponse>('/auth/login', credentials);
      
      // Save user data to localStorage
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', user.id);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userRole', user.role);
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Login failed');
      }
      throw new Error('Connection error');
    }
  },
  
  // Logout
  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } finally {
      // Clear user data regardless of server response
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('user_id');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    }
  },
  
  // Check if user is authenticated
  async checkAuth(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
      await api.get('/auth/verify');
      return true;
    } catch (error) {
      return false;
    }
  },
  
  // Get current token
  getToken(): string | null {
    return localStorage.getItem('token');
  },
  
  // Get current user info
  getCurrentUser() {
    return {
      id: localStorage.getItem('user_id'),
      name: localStorage.getItem('userName'),
      email: localStorage.getItem('userEmail'),
      role: localStorage.getItem('userRole'),
    };
  }
};

export default authAPI;