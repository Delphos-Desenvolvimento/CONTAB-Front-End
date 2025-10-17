import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Alert
} from '@mui/material';
import { authAPI } from '../../API/login';

interface LocationState {
  from?: {
    pathname: string;
  };
}

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || '/admin';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authAPI.login({ email, password });
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro ao fazer login';
      setError(errorMessage);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h5" component="h1">
            Área Administrativa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Faça login para continuar
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            disabled={loading}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            disabled={loading}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>

          <Box textAlign="center">
            <Button 
              component={Link} 
              to="/" 
              color="primary"
              size="small"
              disabled={loading}
            >
              ← Voltar para o site
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}