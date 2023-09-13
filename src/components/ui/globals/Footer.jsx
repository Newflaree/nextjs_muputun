// Material UI
import {
  Box,
  Container,
  Grid,
  Link,
  Typography
} from '@mui/material';
// Material Icons
import {
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} textAlign='center'>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos líderes en diseño y construcción de estructuras metálicas y de madera. Fusionamos innovación y calidad para materializar proyectos únicos y funcionales, superando expectativas en cada estructura que creamos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Indicar dirección, Ciudad, Pais
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Correo: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Teléfono: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Síguenos
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="" href="/">
              NWFL Soluciones de Software.
            </Link>{" "}
            { currentYear }
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
