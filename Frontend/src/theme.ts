import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Azul escuro profundo
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2979ff', // Azul vibrante
      light: '#75a7ff',
      dark: '#004ecb',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00c853',
      light: '#5efc82',
      dark: '#009624',
    },
    warning: {
      main: '#ffab00',
      light: '#ffdd4b',
      dark: '#c67c00',
    },
    error: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
    },
    info: {
      main: '#00b0ff',
      light: '#69e2ff',
      dark: '#0081cb',
    },
    background: {
      default: '#f8f9ff', // Azul muito claro para o fundo
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#455a64',
      disabled: '#90a4ae',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      color: '#1a237e',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 700,
      color: '#1a237e',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 600,
      color: '#1a237e',
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#1a237e',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1a237e',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1a237e',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#455a64',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#455a64',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '25px',
          padding: '10px 24px',
          fontWeight: 600,
          boxShadow: '0 4px 14px rgba(26, 35, 126, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(26, 35, 126, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(45deg, #1a237e 0%, #303f9f 100%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #000051 0%, #1a237e 100%)',
            },
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(45deg, #2979ff 0%, #00b0ff 100%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #004ecb 0%, #2979ff 100%)',
            },
          },
        },
        outlined: {
          '&.MuiButton-outlinedPrimary': {
            borderColor: '#1a237e',
            color: '#1a237e',
            '&:hover': {
              backgroundColor: 'rgba(26, 35, 126, 0.04)',
              borderColor: '#000051',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          background: 'linear-gradient(135deg, #1a237e 0%, #303f9f 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1a237e',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1a237e',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
});

// Adiciona a fonte Poppins ao cabeçalho do documento
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default theme;
