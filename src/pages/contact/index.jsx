// Material UI
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';


const ContactPage = () => {
  return (
    <MainLayout
      pageTitle='Contáctanos'
      pageDesc='Contacta con müpütun a través de nuestro sistema de contacto'
    >
      <Box
        my={ 20 }
        paddingX='10px'
      >
        <Typography
          variant='h1'
          component='h1'
          textAlign='center'
        >
          Contáctanos
        </Typography>
        <Grid
          container
          spacing={ 2 }
          sx={{
            mt: 2
          }}
        >
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            <TextField
              label='Nombre'
              variant='filled'
              fullWidth
            />
          </Grid>

          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            <TextField 
              label='Correo Electrónico'
              variant='filled'
              fullWidth
            />
          </Grid>

          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            <TextField 
              label='Escribe tu pregunta'
              variant='filled'
              fullWidth
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            
            type='submit'
            color='primary'
            className='circular-btn'
            size='large'
            sx={{
              color: 'white',
              fontSize: 20,
              width: '100%'
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default ContactPage;
