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
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/images/Pagina_Principal_sem_textos[1].png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Paper elevation={1} sx={{ 
        p: 2, 
        width: '100%', 
        maxWidth: 360,
        minHeight: 280,
        position: 'relative', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Box textAlign="center" mb={3} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box 
            component="img"
            src="/images/Logo_sem_fundo_Contab_2[1].png"
            alt="Logo"
            sx={{ 
              width: '280px',
              maxWidth: '100%',
              height: 'auto',
              mb: 1.5,
              objectFit: 'contain'
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mt: 1 }}>
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
            size="small"
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
            size="small"
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
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' }, mt: 3, mb: 2, fontSize: '1.1rem', padding: '8px 16px', borderRadius: '8px' }}
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