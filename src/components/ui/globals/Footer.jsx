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
  LinkedIn,
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
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} textAlign='center'>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Sobre nosotros
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Somos una empresa emergente, con equipo de profesionales de espíritu emprendedor, cuyo objetivo es modernizar la operación de la industria en CHILE <img src='download.png' width='17px' />, expandiendo el acceso a las nuevas tecnologías, brindando acompañamiento en la implementación de estas a quienes sean parte de este grupo humano.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Contáctanos
            </Typography>
            {
              /*
            <Typography variant="body2" color="text.secondary">
              123 Indicar dirección, Ciudad, Pais
            </Typography>
              * */
            }
            <Typography variant="body1" color="text.secondary">
              <Link
                href="mailto:info@muputun.cl"
              >
                info@muputun.cl
              </Link>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <Link
                target='_blank'
                href="https://wa.me/+56987754953"
              >
                +56 9 8775 4953
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Síguenos
            </Typography>
            <Link
              target='_blank'
              mx={ 1 }
              href="https://www.facebook.com/people/M%C3%BCp%C3%BCtun/61552329926982/?mibextid=9R9pXO"
              color="inherit"
              sx={{ ':hover': { color: '#1FBEE8' } }}
            >
              <Facebook fontSize='large' />
            </Link>

            <Link
              target='_blank'
              mx={ 1 }
              href="https://www.instagram.com/muputun/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              color="inherit"
              sx={{ ':hover': { color: '#1FBEE8' } }}
            >
              <Instagram fontSize='large'/>
            </Link>

            {/*
            <Link href="https://www.twitter.com" color="inherit">
              <LinkedIn />
            </Link>
            */}
          </Grid>
        </Grid>

        <hr
          style={{
            marginTop: '30px',
            marginBottom: '30px',
          }}
        />

        <Box>
          <Typography
            pb={ 4 }
            variant="body1"
            color="text.secondary"
            align="center"
          >
            {"Copyright © "}
            <Link href="/">
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
