import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Importações das páginas
import Home from './componnents/home';
import AdminLogin from './componnents/adminpage/login';
import AdminHome from './componnents/adminpage/adminhome';

// Componente de rota protegida
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    // Aqui você pode verificar um token no localStorage ou em outro estado global
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, [location]);

  if (isLoading) {
    return <div>Carregando...</div>; // Ou um componente de loading
  }

  if (!isAuthenticated) {
    // Redirecionar para a página de login, mas salvar a localização atual
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rotas de administração */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
