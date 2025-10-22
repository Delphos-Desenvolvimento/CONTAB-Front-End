import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  useTheme,
  Menu,
  MenuItem,
  alpha,
  styled,
  type ButtonProps
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';

// Componente simplificado sem efeito de scroll

// Estilo personalizado para o AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF !important',
  boxShadow: theme.shadows[2],
  '&.MuiAppBar-root': {
    backgroundColor: '#FFFFFF !important',
  },
  '& .MuiToolbar-root': {
    backgroundColor: '#FFFFFF !important',
    minHeight: '64px',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      minHeight: '70px',
      padding: theme.spacing(0, 3),
    },
  },
}));

// Estilo para os itens do menu
const MenuButton = styled(Button)<ButtonProps & { component?: React.ElementType }>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '0.95rem',
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0, 0.5),
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateY(-2px)',
    '&:after': {
      width: '60%',
      opacity: 1,
    },
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '3px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '3px',
    transition: 'all 0.3s ease',
    opacity: 0,
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    '&:after': {
      width: '60%',
      opacity: 1,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

// Itens do menu principal
const menuItems = [
    { title: 'Sobre', path: '/sobre' },
    {
        title: 'Soluções',
        path: '/solucoes',
        submenu: [
            { title: 'Prefeitura e Gestão', path: '/solucoes/prefeitura' },
            { title: 'Saúde', path: '/solucoes/saude' },
            { title: 'Educação', path: '/solucoes/educacao' },
        ],
    },
    {
        title: 'Tecnologia',
        path: '/tecnologia',
        submenu: [
            { title: 'Submenu Tech 1', path: '/tecnologia/1' },
            { title: 'Submenu Tech 2', path: '/tecnologia/2' },
        ],
    },
    { title: 'Carreira', path: '/carreira' },
    {
        title: 'Conteúdos',
        path: '/conteudos',
        submenu: [
            { title: 'Blog', path: '/blog' },
            { title: 'Cases', path: '/cases' },
        ],
    },
    { title: 'Eventos', path: '/eventos' },
];

// Menu móvel removido - não está sendo utilizado

// Componente principal do Header
function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="fixed" sx={{
      backgroundColor: '#FFFFFF !important',
      '&.MuiAppBar-root': {
        backgroundColor: '#FFFFFF !important',
      },
      '&:hover': {
        transform: 'translateY(0) !important',
      },
      zIndex: theme.zIndex.drawer + 1
    }}
      >
        <Container maxWidth={false} disableGutters>
          <Toolbar disableGutters>
              {/* Logo */}
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <Box 
                  component={RouterLink}
                  to="/"
                  sx={{
                    minWidth: 110,
                    textAlign: 'left',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      '& .logo-text': {
                        background: 'linear-gradient(45deg, #1a237e 0%, #2979ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      },
                    },
                  }}
                >
                  <Box 
                    component="img"
                    src="/images/Logo_sem_fundo_Contab_2[1].png"
                    alt="Logo"
                    sx={{
                      height: { xs: 40, md: 50 },
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Box>

              {/* Menu Desktop */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <div key={item.title}>
                    {item.submenu ? (
                      <>
                        <MenuButton
                          onClick={handleMenuOpen}
                          endIcon={<ChevronDown size={16} style={{ marginLeft: 4 }} />}
                          className={location.pathname.startsWith(item.path) ? 'active' : ''}
                        >
                          {item.title}
                        </MenuButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && item.submenu?.some(sub => sub.title === item.title)}
                          onClose={handleMenuClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          PaperProps={{
                            elevation: 3,
                            sx: {
                              mt: 1.5,
                              minWidth: 240,
                              borderRadius: 2,
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                              overflow: 'hidden',
                            },
                          }}
                        >
                          {item.submenu?.map((subItem) => (
                            <MenuItem
                              key={subItem.title}
                              component={RouterLink}
                              to={subItem.path}
                              onClick={handleMenuClose}
                              sx={{
                                py: 1.5,
                                px: 2.5,
                                color: location.pathname === subItem.path ? 'primary.main' : 'text.primary',
                                '&:hover': {
                                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                                },
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    backgroundColor: 'primary.main',
                                    opacity: location.pathname === subItem.path ? 1 : 0,
                                    mr: 1.5,
                                    transition: 'all 0.2s ease',
                                  }}
                                />
                                <Typography variant="body2" fontWeight={500}>
                                  {subItem.title}
                                </Typography>
                              </Box>
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <Box 
                        component={RouterLink}
                        to={item.path}
                        sx={{ textDecoration: 'none' }}
                      >
                        <MenuButton
                          className={location.pathname === item.path ? 'active' : ''}
                        >
                          {item.title}
                        </MenuButton>
                      </Box>
                    )}
                  </div>
                ))}
              </Box>

              {/* Botões de ação */}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 1, md: 2 } }}>
                <Button
                  component={RouterLink}
                  to="/contato"
                  variant="outlined"
                  startIcon={<Phone size={14} />}
                  sx={{
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    fontWeight: 600,
                    borderRadius: '50px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  Contato
                </Button>
              </Box>
          </Toolbar>
        </Container>

        {/* Menu Mobile */}
        <Box
          sx={{
            position: 'fixed',
            top: 70,
            left: 0,
            right: 0,
            backgroundColor: 'background.paper',
            boxShadow: 3,
            zIndex: 1100,
            maxHeight: mobileOpen ? 'calc(100vh - 70px)' : 0,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <Box sx={{ p: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.title}
                component={RouterLink}
                to={item.path}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5,
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Box>
      </StyledAppBar>
  );
}

export default Header;
