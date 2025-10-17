import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function About() {
  return (
    <Box sx={{ py: 8 }}>
      {/* Seção Sobre Nós */}
      <Container maxWidth={false}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          A <Box component="span" sx={{ color: 'primary.main' }}>Contabil é líder</Box> em tecnologia para governo.
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Somos a evolução da gestão pública, com soluções inovadoras para arrecadar mais, atender melhor e acelerar a transformação digital com um sistema de gestão pública em nuvem.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h4" align="center" color="primary.main" sx={{ fontWeight: 700 }}>
              + 30 milhões
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
              de brasileiros impactados
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h4" align="center" color="primary.main" sx={{ fontWeight: 700 }}>
              + R$8 bilhões
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
              de recursos públicos poupados
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h4" align="center" color="primary.main" sx={{ fontWeight: 700 }}>
              +850 clientes
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary">
              em 5 estados confiam na Contabil
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Seção de Soluções */}
      <Container maxWidth={false} sx={{ mt: 10 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Transforme sua cidade com soluções inteligentes de ponta a ponta.
        </Typography>
        <Grid container spacing={4}>
          {[  // Array de soluções para mapear
            { title: 'Prefeitura e Gestão', description: 'Ecossistema cloud completo para governos inteligentes.' },
            { title: 'Saúde', description: 'Eleve a estratégia e o atendimento em uma única solução.' },
            { title: 'Educação', description: 'Melhores resultados com um sistema de gestão integrado.' },
            { title: 'Assistência Social', description: 'A solução completa para Assistência Social.' },
            { title: 'Dara', description: 'A Inteligência Artificial da nova era da gestão pública.' },
            { title: 'Vigilância', description: 'Tecnologia que fortalece a saúde nas cidades.' },
            { title: 'Comunicação', description: 'Todas as comunicações oficiais num só lugar.' },
            { title: 'Fintech', description: 'Soluções em tecnologia financeira municipal.' },
          ].map((solution) => (
            <Grid item key={solution.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {solution.title}
                  </Typography>
                  <Typography>
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
