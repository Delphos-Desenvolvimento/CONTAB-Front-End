import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Article as ArticleIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Description as DescriptionIcon,
  AttachMoney as AttachMoneyIcon,
  Edit as EditIcon
} from '@mui/icons-material';

// Dados de exemplo
interface RecentActivity {
  id: number;
  text: string;
  time: string;
}

const recentActivities: RecentActivity[] = [
  { id: 1, text: 'Novo usuário cadastrado', time: '5 minutos atrás' },
  { id: 2, text: 'Documento aprovado', time: '2 horas atrás' },
  { id: 3, text: 'Relatório mensal gerado', time: '1 dia atrás' },
];

const quickActions = [
  { icon: <AddIcon />, label: 'Nova Notícia', path: '/admin/noticias/novo' },
  { icon: <PeopleIcon />, label: 'Gerenciar Usuários', path: '/admin/usuarios' },
  { icon: <DescriptionIcon />, label: 'Documentos Pendentes', path: '/admin/documentos' },
  { icon: <AttachMoneyIcon />, label: 'Fluxo de Caixa', path: '/admin/financeiro' },
];

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function AdminHome() {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'warning' | 'info' }>({ 
    open: false, 
    message: '', 
    severity: 'success' 
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    setOpenDialog(false);
    setSnackbar({
      open: true,
      message: 'Configurações salvas com sucesso!',
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Paper
        sx={{
          width: 240,
          minHeight: '100vh',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ p: 2, textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Typography variant="h6" color="primary">
            Painel Administrativo
          </Typography>
        </Box>

        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider', flexGrow: 1 }}
        >
          <Tab icon={<DashboardIcon />} label="Dashboard" />
          <Tab icon={<ArticleIcon />} label="Notícias" />
          <Tab icon={<PeopleIcon />} label="Usuários" />
          <Tab icon={<DescriptionIcon />} label="Documentos" />
          <Tab icon={<AttachMoneyIcon />} label="Financeiro" />
          <Tab icon={<EditIcon />} label="Edição" />
          <Tab icon={<SettingsIcon />} label="Configurações" />
        </Tabs>

        <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Sair
          </Button>
        </Box>
      </Paper>

      {/* Conteúdo Principal */}
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        {/* Cabeçalho */}
        <Paper sx={{ p: 2, mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size="small"
              placeholder="Pesquisar..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
              }}
              sx={{ mr: 2, width: 250 }}
            />
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <NotificationsIcon />
            </IconButton>
            <Avatar
              alt="Admin"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, cursor: 'pointer' }}
            />
          </Box>
        </Paper>

        {/* Conteúdo */}
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {/* Cartões de Resumo */}
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total de Usuários
                  </Typography>
                  <Typography variant="h5" component="div">
                    1,254
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Documentos Pendentes
                  </Typography>
                  <Typography variant="h5" component="div">
                    42
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Faturamento Mensal
                  </Typography>
                  <Typography variant="h5" component="div">
                    R$ 45,230
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Novas Mensagens
                  </Typography>
                  <Typography variant="h5" component="div">
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Ações Rápidas */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Ações Rápidas
                  </Typography>
                  <Grid container spacing={2}>
                    {quickActions.map((action, index) => (
                      <Grid item xs={6} key={index}>
                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={action.icon}
                          onClick={() => navigate(action.path)}
                          sx={{ height: '100%', p: 2 }}
                        >
                          {action.label}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Atividades Recentes */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Atividades Recentes
                  </Typography>
                  <List>
                    {recentActivities.map((activity) => (
                      <ListItem key={activity.id} divider>
                        <ListItemIcon>
                          <NotificationsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={activity.text}
                          secondary={activity.time}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Aba de Notícias */}
        <TabPanel value={value} index={1}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6">Gerenciar Notícias</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenDialog}
              >
                Nova Notícia
              </Button>
            </Box>
            {/* Aqui viria a lista de notícias */}
          </Paper>
        </TabPanel>

        {/* Outras abas podem ser adicionadas aqui */}
      </Box>

      {/* Menu de Navegação Móvel */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { navigate('/'); handleMenuClose(); }}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Ir para o Site</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => { /* Lógica para configurações */ handleMenuClose(); }}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Configurações</ListItemText>
        </MenuItem>
      </Menu>

      {/* Diálogo de Nova Notícia */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Nova Notícia</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Título"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Conteúdo"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained">
            Publicar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para notificações */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}