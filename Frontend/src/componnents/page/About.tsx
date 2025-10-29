import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, BarChart2, Users, Shield, Zap, Clock, Award, TrendingUp } from 'lucide-react';
import React from 'react';

// Definição de tipos para os props
interface StatItemProps {
  value: string;
  label: string;
  icon: React.ElementType;
  delay?: number;
}

// Componente de estatística
const StatItem = ({ value, label, icon: Icon, delay = 0 }: StatItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: delay * 0.15 }}
      >
        <Box 
          sx={{
            textAlign: 'center',
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&:hover': {
              '& .stat-icon': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(41, 121, 255, 0.2)',
              },
            },
          }}
        >
          <Box
            className="stat-icon"
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'primary.light',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              transition: 'all 0.3s ease',
              '& svg': {
                color: 'primary.main',
                width: 36,
                height: 36,
              },
            }}
          >
            <Icon />
          </Box>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 1.5,
              background: 'linear-gradient(90deg, #1a237e 0%, #2979ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            {value}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              fontWeight: 500,
              maxWidth: 250,
              mx: 'auto',
            }}
          >
            {label}
          </Typography>
        </Box>
      </motion.div>
    </Grid>
  );
};

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

// Componente de solução
const SolutionCard = ({ title, description, icon: Icon, delay = 0 }: SolutionCardProps) => {
  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: delay * 0.1 }}
      >
        <Card 
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            borderRadius: 3,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 15px 40px rgba(26, 35, 126, 0.15)',
              '& .solution-icon': {
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'scale(1.1)',
              },
              '& .solution-title': {
                color: 'primary.main',
              },
            },
          }}
        >
          <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box
              className="solution-icon"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '16px',
                backgroundColor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                transition: 'all 0.3s ease',
                '& svg': {
                  color: 'primary.main',
                  width: 28,
                  height: 28,
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <Icon />
            </Box>
            <Typography 
              className="solution-title"
              variant="h5" 
              component="h3"
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                transition: 'color 0.3s ease',
              }}
            >
              {title}
            </Typography>
            <Typography 
              color="text.secondary"
              sx={{ 
                mb: 3,
                flexGrow: 1,
              }}
            >
              {description}
            </Typography>
            <Button
              component={RouterLink}
              to={`/solucoes/${title.toLowerCase().replace(/\s+/g, '-')}`}
              endIcon={<ArrowRight size={18} />}
              sx={{
                alignSelf: 'flex-start',
                color: '#64b5f6',
                fontWeight: 600,
                p: 0,
                '&:hover': {
                  color: '#42a5f5',
                  backgroundColor: 'transparent',
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                  },
                },
              }}
            >
              Saiba mais
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

function About() {

  const stats = [
    { 
      value: '+30 milhões', 
      label: 'de brasileiros impactados',
      icon: Users,
    },
    { 
      value: 'R$8 bi+', 
      label: 'em recursos públicos otimizados',
      icon: TrendingUp,
    },
    { 
      value: '+850', 
      label: 'clientes em todo o Brasil',
      icon: Shield,
    },
    { 
      value: '24/7', 
      label: 'suporte especializado',
      icon: Clock,
    },
  ];

  const solutions = [
    { 
      title: 'Prefeitura e Gestão', 
      description: 'Ecossistema cloud completo para governos inteligentes e eficientes.',
      icon: BarChart2,
    },
    { 
      title: 'Saúde', 
      description: 'Eleve a estratégia e o atendimento em uma única solução integrada.',
      icon: Users,
    },
    { 
      title: 'Educação', 
      description: 'Melhores resultados com um sistema de gestão educacional completo.',
      icon: Award,
    },
    { 
      title: 'Inteligência Artificial', 
      description: 'Soluções avançadas de IA para transformar a gestão pública.',
      icon: Zap,
    },
  ];

  return (
    <Box 
      component="section"
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Elemento decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(26, 35, 126, 0.03) 0%, transparent 60%)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl">
        {/* Seção Sobre Nós */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                mb: { xs: 6, md: 8 },
              }}
            >
              <Typography 
                variant="overline" 
                color="primary"
                sx={{ 
                  display: 'block',
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  mb: 2,
                  fontSize: '0.9rem',
                }}
              >
                Sobre Nós
              </Typography>
              <Typography 
                variant="h2" 
                component="h2"
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.2,
                }}
              >
                A <Box component="span" sx={{ 
                  background: 'linear-gradient(90deg, #1a237e 0%, #2979ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Contab</Box> é líder em tecnologia para gestão pública
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary"
                sx={{ 
                  fontWeight: 400,
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                }}
              >
                Somos a evolução da gestão pública, com soluções inovadoras para arrecadar mais, atender melhor e acelerar a transformação digital com um sistema de gestão pública em nuvem.
              </Typography>
            </Box>
          </motion.div>

          {/* Estatísticas */}
          <Grid container spacing={2} justifyContent="center">
            {stats.map((stat, index) => (
              <StatItem 
                key={index} 
                value={stat.value} 
                label={stat.label} 
                icon={stat.icon} 
                delay={index}
              />
            ))}
          </Grid>
        </Box>

        {/* Seção de Soluções */}
        <Box sx={{ mt: { xs: 6, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                mb: { xs: 6, md: 8 },
              }}
            >
              <Typography 
                variant="overline" 
                color="primary"
                sx={{ 
                  display: 'block',
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  mb: 2,
                  fontSize: '0.9rem',
                }}
              >
                Nossas Soluções
              </Typography>
              <Typography 
                variant="h3" 
                component="h2"
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Transforme sua gestão com nossas{' '}
                <Box component="span" sx={{ 
                  background: 'linear-gradient(90deg, #1a237e 0%, #2979ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>soluções inteligentes</Box>
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  fontSize: '1.1rem',
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Oferecemos um ecossistema completo de soluções em nuvem para modernizar e otimizar todos os processos da gestão pública.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                delay={index}
              />
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={RouterLink}
              to="/solucoes"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                background: 'linear-gradient(45deg, #1a237e 0%, #2979ff 100%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #121858 0%, #1a56cb 100%)',
                  boxShadow: '0 10px 25px rgba(26, 35, 126, 0.3)',
                },
              }}
            >
              Conheça todas as soluções
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
