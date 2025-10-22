import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Tipagem para as props do componente NewsCard
interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
}

// Componente de cartão de notícia
const NewsCard = ({ id, title, description, date, category, imageUrl }: NewsCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CardActionArea component={RouterLink} to={`/noticias/${id}`}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                width: '100%',
                height: 200,
                backgroundImage: `url(${imageUrl || `https://picsum.photos/300/200?random=${id}`})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="caption" color="text.secondary" display="block" mb={1}>
                {date || 'Sem data'}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                mb: 2
              }}>
                {description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" color="primary" fontWeight="bold">
                  {category || 'Geral'}
                </Typography>
                <ArrowRight size={16} color="#1976d2" />
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      </motion.div>
    </Grid>
  );
};

function Notices() {
  // Dados de exemplo para as notícias
  const news = [
    {
      id: 1,
      title: 'Novo sistema de gestão pública',
      description: 'Conheça o novo sistema que está revolucionando a gestão pública em todo o país.',
      date: '20 Out 2023',
      category: 'Tecnologia',
      imageUrl: '/images/img_0915-300x200.jpg',
    },
    {
      id: 2,
      title: 'Soluções inovadoras para sua cidade',
      description: 'Descubra como nossas soluções podem transformar a gestão da sua cidade.',
      date: '18 Out 2023',
      category: 'Soluções',
      imageUrl: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      title: 'Parceria com prefeituras',
      description: 'Fechamos novas parcerias para levar tecnologia a mais municípios.',
      date: '15 Out 2023',
      category: 'Parcerias',
      imageUrl: 'https://picsum.photos/300/200?random=3',
    },
    {
      id: 4,
      title: 'Atualizações do sistema',
      description: 'Confira as novidades da última atualização da nossa plataforma.',
      date: '12 Out 2023',
      category: 'Atualizações',
      imageUrl: 'https://picsum.photos/300/200?random=4',
    },
    {
      id: 5,
      title: 'Evento de tecnologia',
      description: 'Participe do maior evento de tecnologia para gestão pública do país.',
      date: '10 Out 2023',
      category: 'Eventos',
      imageUrl: 'https://picsum.photos/300/200?random=5',
    },
    {
      id: 6,
      title: 'Depoimentos de clientes',
      description: 'Veja o que estão falando sobre nossas soluções em todo o Brasil.',
      date: '08 Out 2023',
      category: 'Depoimentos',
      imageUrl: 'https://picsum.photos/300/200?random=6',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="overline" color="primary" fontWeight="bold" display="block" mb={2}>
            Últimas Notícias
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold" mb={2}>
            Fique por dentro
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={700} mx="auto">
            Acompanhe as últimas notícias e atualizações sobre nossas soluções.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button
            component={RouterLink}
            to="/noticias"
            variant="outlined"
            color="primary"
            endIcon={<ArrowRight size={18} />}
            sx={{ px: 4, py: 1.5, borderRadius: '50px' }}
          >
            Ver todas as notícias
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Notices;
