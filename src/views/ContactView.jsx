// Material UI
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@mui/material';

/**
 * `ContactView` Component
 * 
 * Componente de vista diseñado para presentar y manejar un formulario de contacto.
 * Permite a los usuarios enviar mensajes o consultas, facilitando la comunicación directa.
 * 
 * Utiliza Box, Grid, TextField, Button y Typography de Material-UI para crear un formulario
 * estéticamente agradable y funcional. El diseño del formulario se organiza en una cuadrícula
 * para una mejor disposición y legibilidad de los campos.
 * 
 * La vista maneja la lógica de validación y envío del formulario mediante `useForm` de React Hook Form.
 * Los errores en la entrada del usuario se muestran de forma clara, mejorando la experiencia del usuario
 * al completar el formulario.
 * 
 * El botón de envío se desactiva mientras el formulario se está enviando (`isSubmitting`),
 * previniendo envíos múltiples.
 * 
 * @param {Function} onSubmitMessage - Función para manejar el envío del formulario.
 * @param {Object} register - Método de React Hook Form para registrar los campos del formulario.
 * @param {Function} handleSubmit - Método de React Hook Form para manejar la presentación del formulario.
 * @param {Object} errors - Objeto de errores de React Hook Form.
 * @param {boolean} isSubmitting - Estado que indica si el formulario se está enviando.
 * 
 * @returns {React.Component} Un componente de vista para un formulario de contacto.
 */
export const ContactView = ({
  onSubmitMessage,
  register,
  handleSubmit,
  errors,
  isSubmitting
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
              sx={{ backgroundColor: '#fff' }}
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
              sx={{ backgroundColor: '#fff' }}
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
              sx={{ backgroundColor: '#fff' }}
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
              sx={{ backgroundColor: '#fff' }}
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
              sx={{ backgroundColor: '#fff' }}
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
            disabled={ isSubmitting }
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
