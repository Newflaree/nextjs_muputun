// Next.js
import Image from 'next/image';
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

/**
 * `Footer` Component
 * 
 * Componente de pie de página para la aplicación web. Presenta información
 * sobre la empresa, contactos y alianzas estratégicas, así como enlaces a redes
 * sociales y derechos de autor.
 * 
 * Utiliza componentes de Material UI como Box, Container, Grid, Link y Typography
 * para estructurar y estilizar el contenido. Incluye también íconos de redes sociales
 * de Material Icons.
 * 
 * Se divide en tres secciones principales: 'Sobre nosotros', 'Contáctanos' y 'Nuestra Alianza'.
 * 'Sobre nosotros' describe brevemente la empresa. 'Contáctanos' proporciona enlaces de
 * correo electrónico y WhatsApp, y 'Nuestra Alianza' destaca socios comerciales.
 * 
 * Al final, se incluye una línea de derechos de autor con el año actual.
 * 
 * @example
 * <Footer />
 * 
 * @returns {React.Component} El componente de pie de página con información y enlaces relevantes.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = 'https://res.cloudinary.com/newflare/image/upload/v1696360099/demos/muputun/iticvytqrtp6xn8svvzt.svg';

  return (
    <Box
      zIndex={ 99 }
      component="footer"
      sx={{
        position: 'relative',
        backgroundColor: ( theme ) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[ 200 ]
            : theme.palette.grey[ 800 ],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={ 6 } textAlign='center'>
          <Grid item xs={ 12 } sm={ 4 }>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Sobre nosotros
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"  
            >
              Somos una empresa emergente, con equipo de profesionales de espíritu emprendedor, cuyo objetivo es modernizar la operación de la industria en CHILE, expandiendo el acceso a las nuevas tecnologías, brindando acompañamiento en la implementación de estas a quienes sean parte de este grupo humano
            </Typography>

            <Box pb={ 2 } />
            <Box
              sx={{
                display: {
                  xs: 'block',
                  md: 'none'
                }
              }}
            >
              <Typography textAlign='center'>
                🇨🇱
              </Typography>

            </Box>

            <Image
              alt='logo mettatec'
              src={ logoUrl }
              width={ 130 }
              height={ 30 }
            />
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

            <Typography variant="h6" color="text.primary" gutterBottom mt={4}>
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

            <Link
              target='_blank'
              mx={ 1 }
              href="https://www.linkedin.com/in/m%C3%BCp%C3%BCtun-tecnolog%C3%ADas-0728a629b/"
              color="inherit"
              sx={{ ':hover': { color: '#1FBEE8' } }}
            >
              <LinkedIn fontSize='large' />
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Nuestra Alianza
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"  
            >
              Distribuidores oficiales de nuestros amigos mettatec en CHILE, pioneros en dar soluciones tecnológicas de punta, a la medida de tus necesidades. convirtiéndose en tu aliado estratégico el cual puede ayudarte a afrontar de mejor manera el presente de tu negocio. 
            </Typography>

            <Box pb={ 2 } />
            <Box
              sx={{
                display: {
                  xs: 'block',
                  md: 'none'
                }
              }}
            >
              <Typography>
                🇵🇪🇨🇱
              </Typography>

            </Box>

            <Image
              alt='logo mettatec'
              src='/logo-metta.png'
              width={ 130 }
              height={ 23 }
            />
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
            <Link href="#">
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
