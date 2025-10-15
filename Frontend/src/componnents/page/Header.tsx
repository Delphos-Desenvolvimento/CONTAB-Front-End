import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Header() {
  return (
    <AppBar 
      position="static" 
      color="primary"
      sx={{
        transition: 'background-color 0.3s ease-in-out',
        height: '80px', // Aumenta a altura do AppBar
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.85)', // Branco com 85% de transparência
          // Altera a cor do texto e botões quando o AppBar está em hover
          '& .MuiTypography-root': { color: 'primary.main' },
          '& .MuiButton-root': { color: 'primary.main' },
        },
      }}
    >
      <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}> {/* Centraliza os itens na Toolbar */}
        <Typography
          variant="h5" // Aumenta o tamanho da fonte
          component="div"
          sx={{
            mr: 2,
            color: 'white',
          }}
        >
          Contabil
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}> {/* Centraliza os botões de navegação */}
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem', // Aumenta o tamanho da fonte
            }}
          >
            Sobre
          </Button>
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem',
            }}
          >
            Soluções
          </Button>
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem',
            }}
          >
            Tecnologia
          </Button>
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem',
            }}
          >
            Carreira
          </Button>
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem',
            }}
          >
            Conteúdos
          </Button>
          <Button 
            color="inherit" 
            sx={{
              color: 'white',
              fontSize: '1.1rem',
            }}
          >
            Eventos
          </Button>
        </Box>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{
            ml: 2,
            fontSize: '1.1rem', // Aumenta o tamanho da fonte
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          Contato
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
