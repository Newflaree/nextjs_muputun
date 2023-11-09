// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { PictureAsPdf, FiberManualRecord } from '@mui/icons-material';
// Database
import { productsDB } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
import {getAllProductSlugs} from '@/database/productsDatabaseMethods';


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
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <Typography
            variant='h1'
            align='center'
            my={ 4 }
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

        <Divider />

        {/*Description*/}
        <Box my={ 10 }>
          <Typography
            variant='body1'
            textAlign='center'
            paragraph
          >
            { desc }
          </Typography>
        </Box>

        <Grid
          container
          spacing={ 4 }
          mb={ 5 }
        >
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            {/*Tech Spec*/}
            <Paper
              elevation={ 4 }
              sx={{
                backgroundColor: '#5C5D5F',
                color: 'white',
                p: '16px',
                mt: '16px',
                pb: '20px'
              }}
            >
              <Typography
                variant='h2'
                component='h2'
                textAlign='center'
                my={ 4 }
              >
                Especificaciones Técnicas
              </Typography>
              <List>
                {
                  techSpecs.map( ({ primary, secondary }) => (
                    <ListItem key={ primary }>
                      <FiberManualRecord sx={{ mr: 2 }}/>
                      <ListItemText
                        primary={ primary }
                        secondary={ (secondary) ?? secondary  }
                      />
                    </ListItem>
                  ))
                }
              </List>
            </Paper>
            {/*Tech Docs*/}
          </Grid>

          <Grid
            item
            xs={ 12 }
            sm={ 6 }
            my={ 20 }
            display='flex'
            textAlign='center'
            justifyContent='center'
            alignItems='center'
          >
            <Box>
              <Typography
                variant='h4'
                px={2}
              >
                Documentación Oficial
              </Typography>
              <Box my={ 4 } />
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
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}


export default ProductPage;
