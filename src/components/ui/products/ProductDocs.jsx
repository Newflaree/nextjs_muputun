// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';
// Material Icons
import { PictureAsPdf } from '@mui/icons-material';


export const ProductDocs = ({ name, doc, handleDownload }) => {
  return (
    <Box>
      <Typography
        variant='h4'
        px={ 2 }
        pb={ 4 }
      >
        Documentación Oficial
      </Typography>

      <Box>
        <Typography
          variant='h5'
          px={2}
        >
          { name }
        </Typography>

        <Box my={ 3 } />

        <Button
          onClick={ () => handleDownload( doc ) }
          variant='contained'
          size='large'
          target='_blank'
          sx={{
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
    </Box>
  );
}
