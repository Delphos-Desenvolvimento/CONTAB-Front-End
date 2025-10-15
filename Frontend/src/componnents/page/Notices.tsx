import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

function Notices() {
  // Dados de exemplo para as notícias
  const news = [
    {
      id: 1,
      title: 'Contabil alcança novos patamares de eficiência com IA',
      description: 'A Contabil implementa soluções de inteligência artificial que otimizam processos e geram economia para a gestão pública.',
      link: '#',
    },
    {
      id: 2,
      title: 'Prefeitura de cidade X adota sistema Contabil e melhora atendimento ao cidadão',
      description: 'Com o novo sistema da Contabil, a prefeitura de cidade X registra aumento na satisfação e agilidade no atendimento público.',
      link: '#',
    },
    {
      id: 3,
      title: 'Contabil lança ferramenta inovadora para fiscalização municipal',
      description: 'Nova ferramenta da Contabil promete revolucionar a fiscalização, tornando-a mais eficaz e transparente.',
      link: '#',
    },
    {
      id: 4,
      title: 'Educação 4.0: Contabil impulsiona transformação digital nas escolas',
      description: 'Soluções da Contabil estão levando a educação para o próximo nível, com plataformas integradas e acessíveis para alunos e professores.',
      link: '#',
    },
    {
      id: 5,
      title: 'Saúde municipal otimizada: Contabil apresenta sistema integrado',
      description: 'O novo sistema de saúde da Contabil garante melhor gestão de dados, agendamentos e atendimento aos pacientes.',
      link: '#',
    },
    {
      id: 6,
      title: 'Contabil e a sustentabilidade: projetos que geram impacto positivo',
      description: 'Conheça as iniciativas da Contabil que promovem a sustentabilidade e o desenvolvimento social nas cidades.',
      link: '#',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth={false}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Últimas Notícias
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {news.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <CardActionArea component="a" href={item.link}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Notices;
