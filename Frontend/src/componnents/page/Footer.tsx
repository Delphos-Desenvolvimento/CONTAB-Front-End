import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Link, 
  Button, 
  Divider, 
  useTheme, 
  useMediaQuery, 
  TextField,
  IconButton
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Ícones do Lucide React
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Send,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

// Componente de link personalizado
const FooterLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    component={RouterLink}
    to={href}
    sx={{
      color: 'rgba(255, 255, 255, 0.9)',
      display: 'flex',
      alignItems: 'center',
      mb: 1.5,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#64b5f6',
        transform: 'translateX(4px)',
        '& .arrow-icon': {
          opacity: 1,
          transform: 'translateX(4px)',
        },
      },
    }}
  >
    <Box 
      component="span" 
      className="arrow-icon"
      sx={{
        display: 'inline-flex',
        opacity: 0,
        transform: 'translateX(-4px)',
        transition: 'all 0.3s ease',
        mr: 0.5,
      }}
    >
      <ChevronRight size={16} />
    </Box>
    {children}
  </Link>
);

// Componente de ícone de rede social
const SocialIcon = ({ icon: Icon, url }: { icon: React.ElementType; url: string }) => (
  <IconButton
    component="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'white',
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(26, 35, 126, 0.3)',
      },
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}
  >
    <Icon size={18} />
  </IconButton>
);

// Componente de item de contato
const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'flex-start',
      mb: 2.5,
      '& svg': {
        color: '#64b5f6',
        mt: 0.5,
        mr: 2,
        flexShrink: 0,
      },
    }}
  >
    {icon}
    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
      {text}
    </Typography>
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [email, setEmail] = useState('');

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '/sobre' },
        { label: 'Nossa Equipe', href: '/equipe' },
        { label: 'Depoimentos', href: '/depoimentos' },
        { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Contabilidade', href: '/servicos/contabilidade' },
        { label: 'Departamento Pessoal', href: '/servicos/dp' },
        { label: 'Consultoria', href: '/servicos/consultoria' },
        { label: 'Todos os Serviços', href: '/servicos' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Perguntas Frequentes', href: '/faq' },
        { label: 'Materiais Gratuitos', href: '/materiais' },
        { label: 'Planos e Preços', href: '/planos' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Linkedin, url: 'https://linkedin.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Youtube, url: 'https://youtube.com' },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      text: 'Av. Paulista, 1000 - São Paulo/SP',
    },
    {
      icon: <Phone size={18} />,
      text: '(11) 9999-9999',
    },
    {
      icon: <Mail size={18} />,
      text: 'contato@contab.com.br',
    },
    {
      icon: <Clock size={18} />,
      text: 'Seg-Sex: 9h às 18h',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de inscrição na newsletter
    console.log('Email cadastrado:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0a1929', // Azul bem escuro
        color: 'rgba(255, 255, 255, 1)', // Texto branco mais claro
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2979ff 0%, #00b0ff 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo e descrição */}
          <Grid item xs={12} md={4}>
            <Box 
              component="img"
              src="/images/Logo_sem_fundo_Contab[1].png"
              alt="Contab"
              sx={{
                height: { xs: 40, md: 60 },
                width: 'auto',
                maxWidth: '200px',
                objectFit: 'contain',
                mb: 2,
              }}
            />
            <Typography variant="body2" color="rgba(255, 255, 255, 0.9)" sx={{ mb: 3, lineHeight: 1.7 }}>
              Soluções contábeis completas para o sucesso do seu negócio. Oferecemos serviços personalizados com excelência e comprometimento.
            </Typography>
            
            {/* Redes Sociais */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} url={social.url} />
              ))}
            </Box>

            {/* Informações de Contato */}
            <Box sx={{ mt: 4 }}>
              {contactInfo.map((item, index) => (
                <ContactItem key={index} icon={item.icon} text={item.text} />
              ))}
            </Box>
          </Grid>

          {/* Links do rodapé */}
          {footerLinks.map((column, colIndex) => (
            <Grid item xs={12} sm={6} md={2} key={colIndex}>
              <Typography
                variant="h6"
                sx={{
                  color: '#64b5f6',
                  fontWeight: 700,
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: '#64b5f6',
                    borderRadius: '2px',
                  },
                }}
              >
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {column.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: '#64b5f6',
                fontWeight: 700,
                mb: 3,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  background: '#64b5f6',
                  borderRadius: '2px',
                },
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.9)' }}>
              Inscreva-se para receber nossas últimas notícias e atualizações.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} noValidate>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Seu e-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255, 255, 255, 0.6)',
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: '48px',
                    px: 2,
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(26, 35, 126, 0.3)',
                    },
                  }}
                >
                  <Send size={18} />
                </Button>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'rgba(255, 255, 255, 0.7)' }}>
              Nós respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'divider' }} />

        {/* Rodapé inferior */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              © {new Date().getFullYear()}
            </Typography>
            <Box 
              component="img"
              src="/images/Logo_sem_fundo_Contab[1].png"
              alt="Contab"
              sx={{
                height: 20,
                width: 'auto',
                maxWidth: '80px',
                objectFit: 'contain',
                display: 'inline-block',
                verticalAlign: 'middle',
                mx: 0.5
              }}
            />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              . Todos os direitos reservados.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/politica-privacidade"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Política de Privacidade
            </Link>
            <Link
              component={RouterLink}
              to="/termos-uso"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Termos de Uso
            </Link>
            <Link
              component={RouterLink}
              to="/cookies"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Política de Cookies
            </Link>
          </Box>
        </Box>
      </Container>

      {/* Botão de voltar ao topo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={scrollToTop}
          sx={{
            minWidth: 'auto',
            width: 48,
            height: 48,
            borderRadius: '50%',
            p: 0,
            boxShadow: '0 5px 20px rgba(26, 35, 126, 0.3)',
            '&:hover': {
              boxShadow: '0 8px 25px rgba(26, 35, 126, 0.4)',
            },
          }}
        >
          <ArrowUpRight size={20} style={{ transform: 'rotate(-45deg)' }} />
        </Button>
      </motion.div>
    </Box>
  );
};

export default Footer;
