import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', p: 6, color: 'white' }} component="footer">
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Soluções
            </Typography>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Prefeitura e Gestão</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Saúde</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Educação</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Social</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Vigilância</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Comunicação</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Fintech</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Tecnologia
            </Typography>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Cloud e Inovação</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>IA Dara</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Conteúdo
            </Typography>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Blog</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Materiais educativos</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Institucional
            </Typography>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Sobre nós</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Carreiras</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Eventos</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Ética e Compliance</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Acesso do Cliente</Link>
            <Link href="#" color="inherit" display="block" variant="subtitle1" sx={{ mb: 0.5 }}>Política de Privacidade</Link>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            {'Copyright © '}
            Contabil
            {' '}
            {new Date().getFullYear()}
            {'. Todos os direitos reservados.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
