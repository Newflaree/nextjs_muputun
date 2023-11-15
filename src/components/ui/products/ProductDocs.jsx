// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';
// Material Icons
import { PictureAsPdf } from '@mui/icons-material';
import React from 'react';


export const ProductDocs = ({ doc, handleDownload }) => {
  console.log({ doc });
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
        {
          doc.map( ({ name, path }) => (
            <React.Fragment
              key={ name }
            >
              <Typography
                variant='h5'
                px={2}
              >
                { name }
              </Typography>

              <Box my={ 3 } />

              <Button
                onClick={ () => handleDownload( path ) }
                variant='contained'
                size='large'
                target='_blank'
                sx={{
                  color: 'white',
                  mb: 5,
                  ':hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
                rel='noopener noreferrer'
                startIcon={ <PictureAsPdf /> }
              >
                Descargar PDF
              </Button>
            </React.Fragment>
          ))
        }
      </Box>
    </Box>
  );
}
