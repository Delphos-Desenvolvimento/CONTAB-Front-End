import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Componente de partículas para o fundo
const ParticlesBackground = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'radial-gradient(circle at 30% 50%, rgba(41, 121, 255, 0.1) 0%, transparent 40%)',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 50%, rgba(0, 176, 255, 0.1) 0%, transparent 40%)',
      },
    }}
  >
    {[...Array(15)].map((_, i) => (
      <Box
        key={i}
        component={motion.div}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          y: [null, -50, 50, 0],
          x: [null, 20, -20, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: Math.random() * 5,
        }}
        sx={{
          position: 'absolute',
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
        }}
      />
    ))}
  </Box>
);


function Hero() {
  return (
    <Box
      id="hero-section"
      sx={{
        position: 'relative',
        color: 'common.white',
        height: '100vh',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(/images/Pagina_Principal_sem_textos[1].png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }
      }}
    >
      {/* Fundo com gradiente animado - Removido o componente AnimatedGradient já que o gradiente foi movido para o container principal */}
      
      {/* Partículas de fundo */}
      <ParticlesBackground />
      
      {/* Conteúdo principal */}
      <Container 
        maxWidth="lg" 
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          paddingTop: '0',
          paddingBottom: '40px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
        >
          <Box
            component="img"
            src="/images/Logo_sem_fundo_Contab[1].png"
            alt="Contab Logo"
            sx={{
              width: { xs: '200px', md: '300px' },
              height: 'auto',
              mb: 4,
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#00a4f6',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            Gestão fiscal responsável
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'white',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 4,
            }}
          >
            começa com contabilidade pública de qualidade.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contato"
            sx={{ 
              borderRadius: '50px', 
              px: 4, 
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
            }}
          >
            Fale com um especialista
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Hero;
