import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <Box
      sx={{
        background: `
          linear-gradient(to bottom right, #64B5F6, #0A3D62) center center / cover no-repeat,
          url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'><path d='M0,0 C300,80 400,-50 800,50 C1100,120 1200,60 1200,0 L1200,120 L0,120 Z' fill='%2364B5F6' fill-opacity='0.3'></path></svg>") bottom center / 100% 120px no-repeat
        `,
        color: 'white',
        pt: 12,
        pb: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Altura mínima para a seção Hero
        borderBottomLeftRadius: '50px', // Arredonda a ponta inferior esquerda
        borderBottomRightRadius: '50px', // Arredonda a ponta inferior direita
        overflow: 'hidden', // Garante que o conteúdo não vaze das bordas arredondadas
      }}
    >
      <Container maxWidth={false}> {/* Alterado de "md" para false para preencher a largura total */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Contabil: Impulsione Resultados Extraordinários
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph sx={{ mb: 5 }}>
          Soluções inovadoras para uma gestão pública eficiente e inteligente.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="secondary" size="large">
            Solicite uma demonstração
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
