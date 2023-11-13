// Material UI
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@mui/material';


export const ContactView = ({
  onSubmitMessage,
  register,
  handleSubmit,
  errors,
}) => {
  return (
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
  );
}
