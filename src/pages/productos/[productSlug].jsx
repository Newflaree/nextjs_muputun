// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
// Database
import { productsDB } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';


const testProduct = productsDB[0];

const ProductPage = () => {
  const {
    name,
    desc,
    banner,
    techSpecs,
  } = testProduct;

  return (
    <MainLayout
      pageTitle='Nuestros Productos'
    >
      <Container sx={{ py: '20px' }}>
        {/*Banner*/}
        <Box
          sx={{
            borderRadius: '8px',
            backgroundImage: `url(${banner})`,
            backgroundColor: 'gray',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <Typography
            variant='h2'
            align='center'
          >
            { name }
          </Typography>
          <NextLink
            href='/contacto'
            passHref
            legacyBehavior
          >
            <Button
              variant='contained'
              color='primary'
              size='large'
              sx={{
                mt: '16px',
                color: 'white',
                ':hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              Contactar
            </Button>
          </NextLink>
        </Box>
        {/*Description*/}
        <Box my={ 10 }>
          <Typography
            variant='h5'
          >
            Descripción
          </Typography>
          <Typography
            variant='body1'
            paragraph
          >
            { desc }
          </Typography>
        </Box>
        {/*Tech Spec*/}
        <Paper
          elevation={ 2 }
          sx={{
            p: '16px',
            mt: '16px'
          }}
        >
          <Typography
            variant='h5'
          >
            Especificaciones Técnicas
          </Typography>
          <List>
            {
              techSpecs.map( ({ primary, secondary }) => (
                <ListItem key={ primary }>
                  <ListItemText
                    primary={ primary }
                    secondary={ (secondary) ? secondary : ''  }
                  />
                </ListItem>
              ))
            }
          </List>
        </Paper>
        {/*Tech Docs*/}
        <Box
          my={ 20 }
          textAlign='center'
        >
          <Typography
            variant='h5'
          >
            Documentación Oficial
          </Typography>
          <Button
            variant='contained'
            size='large'
            target='_blank'
            sx={{
              mt: '16px',
              color: 'white',
              ':hover': {
                bgcolor: 'primary.dark'
              }
            }}
            rel='noopener noreferrer'
            startIcon={ <PictureAsPdf /> }
          >
            Descargar PDF
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default ProductPage;
