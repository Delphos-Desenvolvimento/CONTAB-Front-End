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
    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ px: { xs: 1, sm: 2 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CardActionArea component={RouterLink} to={`/noticias/${id}`}>
          <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 6
            }
          }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 180, sm: 200, md: 220 },
                backgroundImage: `url(${imageUrl || `https://picsum.photos/300/200?random=${id}`})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
              }}
            />
            <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
              <Typography 
                variant="caption" 
                color="text.secondary" 
                display="block" 
                mb={1}
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.75rem' }
                }}
              >
                {date || 'Sem data'}
              </Typography>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.3,
                  mb: { xs: 1, sm: 1.5 }
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  mb: 2,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  minHeight: { xs: '4.5em', sm: '5em' }
                }}
              >
                {description}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mt: 'auto'
              }}>
                <Typography 
                  variant="caption" 
                  color="primary" 
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.75rem' }
                  }}
                >
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
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Soluções inovadoras para sua cidade',
      description: 'Descubra como nossas soluções podem transformar a gestão da sua cidade.',
      date: '18 Out 2023',
      category: 'Soluções',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Parceria com prefeituras',
      description: 'Fechamos novas parcerias para levar tecnologia a mais municípios.',
      date: '15 Out 2023',
      category: 'Parcerias',
      imageUrl: '/images/pexels-artempodrez-6786946.jpg',
    },
    {
      id: 4,
      title: 'Atualizações do sistema',
      description: 'Confira as novidades da última atualização da nossa plataforma.',
      date: '12 Out 2023',
      category: 'Atualizações',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Evento de tecnologia',
      description: 'Participe do maior evento de tecnologia para gestão pública do país.',
      date: '10 Out 2023',
      category: 'Eventos',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      title: 'Depoimentos de clientes',
      description: 'Veja o que estão falando sobre nossas soluções em todo o Brasil.',
      date: '08 Out 2023',
      category: 'Depoimentos',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 }, 
      bgcolor: '#f8f9fa',
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography variant="overline" color="primary" fontWeight="bold" display="block" mb={2}>
            Últimas Notícias
          </Typography>
          <Typography 
            variant="h4" 
            component="h2" 
            fontWeight="bold" 
            mb={2}
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Fique por dentro
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            maxWidth={700} 
            mx="auto"
            sx={{
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Acompanhe as últimas notícias e atualizações sobre nossas soluções.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </Grid>

        <Box textAlign="center" mt={{ xs: 4, md: 6 }}>
          <Button
            component={RouterLink}
            to="/noticias"
            variant="outlined"
            color="primary"
            endIcon={<ArrowRight size={18} />}
            sx={{ 
              px: 4, 
              py: 1.5, 
              borderRadius: '50px',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Ver todas as notícias
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Notices;
