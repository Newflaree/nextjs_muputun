// React Hook Form
import { useForm } from 'react-hook-form';
// Material UI
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';


const resetForm = () => {
  return {
    name: '',
    lastName: '',
    emailAddress: '',
    subject: '',
    message: ''
  }
}

const ContactPage =() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      emailAddress: '',
      subject: '',
      message: ''
    }
  });

  const onSubmitMessage = async ( formData ) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( formData ),
    });
    const data = await response.json();
    console.log({ data });
    reset( resetForm );
  }

  return (
    <MainLayout
      pageTitle='Contáctanos'
      pageDesc='Contacta con müpütun a través de nuestro sistema de contacto'
    >
      <Box
        my={ 18 }
        paddingX='15px'
      >
        <form
          onSubmit={ handleSubmit( onSubmitMessage ) }
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
                { ...register( 'name', {
                  required: 'Este campo es obligatorio'
                })}
                error={ !!errors.name }
                helperText={ errors.name?.message }
              />
            </Grid>

            <Grid
              item
              xs={ 12 }
              sm={ 6 }
            >
              <TextField
                label='Apellido'
                variant='filled'
                fullWidth
                { ...register( 'lastName', {
                  required: 'Este campo es obligatorio'
                })}
                error={ !!errors.lastName }
                helperText={ errors.lastName?.message }
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
                { ...register( 'emailAddress', {
                  required: 'Este campo es obligatorio'
                })}
                error={ !!errors.emailAddress }
                helperText={ errors.emailAddress?.message }
              />
            </Grid>

            <Grid
              item
              xs={ 12 }
              sm={ 6 }
            >
              <TextField
                label='Asunto'
                variant='filled'
                fullWidth
                { ...register( 'subject', {
                  required: 'Este campo es obligatorio'
                })}
                error={ !!errors.subject }
                helperText={ errors.subject?.message }
              />
            </Grid>

            <Grid
              item
              xs={ 12 }
              sm={ 12 }
            >
              <TextField 
                label='Mensaje'
                variant='filled'
                fullWidth
                multiline
                rows={ 4 }
                { ...register( 'message', {
                  required: 'Este campo es obligatorio'
                })}
                error={ !!errors.message }
                helperText={ errors.message?.message }
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
              size='large'
              sx={{
                color: 'white',
                fontSize: 20,
                width: {
                  xs: '100%',
                  sm: '250px'
                },
                ':hover': {
                  bgcolor: 'primary.dark'
                },
              }}
              sm={ 6 }
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </MainLayout>
  );
}

export default ContactPage;
